"use client"

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

type Project = {
  id: string
  name: string
  description: string
  href: string
  image?: string
  createdAt: string
}

type BlogPost = {
  id: string
  title: string
  slug: string
  excerpt?: string
  coverImage?: string
  published: boolean
  createdAt: string
}

export default function AdminPage() {
  // Projects state
  const [projects, setProjects] = useState<Project[]>([])
  const [form, setForm] = useState({ name: '', description: '', href: '', image: '' })

  // Blog state
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [blogForm, setBlogForm] = useState({ title: '', slug: '', excerpt: '', coverImage: '', content: '', published: false })

  // Common
  const [adminKey, setAdminKey] = useState('')
  const [loading, setLoading] = useState(false)

  async function loadProjects() {
    const res = await fetch('/api/projects')
    setProjects(await res.json())
  }

  async function loadPosts() {
    const res = await fetch('/api/blog?all=1')
    setPosts(await res.json())
  }

  useEffect(() => {
    loadProjects()
    loadPosts()
  }, [])

  // Project actions
  async function addProject() {
    setLoading(true)
    const res = await fetch('/api/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-admin-key': adminKey.trim() },
      body: JSON.stringify(form)
    })
    setLoading(false)
    if (!res.ok) return alert('Failed: ' + (await res.text()))
    setForm({ name: '', description: '', href: '', image: '' })
    loadProjects()
  }

  async function removeProject(id: string) {
    if (!confirm('Delete project?')) return
    const res = await fetch(`/api/projects/${id}?`, {
      method: 'DELETE',
      headers: { 'x-admin-key': adminKey }
    })
    if (!res.ok) return alert('Failed: ' + (await res.text()))
    loadProjects()
  }

  // Blog actions
  async function addPost() {
    if (!blogForm.title || !blogForm.slug || !blogForm.content) {
      return alert('Title, slug and content are required')
    }
    setLoading(true)
    const res = await fetch('/api/blog', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-admin-key': adminKey.trim() },
      body: JSON.stringify(blogForm)
    })
    setLoading(false)
    if (!res.ok) return alert('Failed: ' + (await res.text()))
    setBlogForm({ title: '', slug: '', excerpt: '', coverImage: '', content: '', published: false })
    loadPosts()
  }

  async function removePost(slug: string) {
    if (!confirm('Delete post?')) return
    const res = await fetch(`/api/blog/${slug}`, {
      method: 'DELETE',
      headers: { 'x-admin-key': adminKey }
    })
    if (!res.ok) return alert('Failed: ' + (await res.text()))
    loadPosts()
  }

  return (
    <section className="space-y-12">
      {/* Projects */}
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Admin — Projects</h1>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <input value={adminKey} onChange={e=>setAdminKey(e.target.value)} placeholder="Admin Key" className="w-full border border-brand-neutral bg-brand-baseAlt text-white rounded p-2" />
            <input value={form.name} onChange={e=>setForm({...form, name: e.target.value})} placeholder="Project Name" className="w-full border border-brand-neutral bg-brand-baseAlt text-white rounded p-2" />
            <input value={form.href} onChange={e=>setForm({...form, href: e.target.value})} placeholder="Demo URL" className="w-full border border-brand-neutral bg-brand-baseAlt text-white rounded p-2" />
            <input value={form.image} onChange={e=>setForm({...form, image: e.target.value})} placeholder="Image URL (/public or remote)" className="w-full border border-brand-neutral bg-brand-baseAlt text-white rounded p-2" />
            <textarea value={form.description} onChange={e=>setForm({...form, description: e.target.value})} placeholder="Short description" className="w-full border border-brand-neutral bg-brand-baseAlt text-white rounded p-2 h-24" />
            <Button onClick={addProject} disabled={loading}>{loading ? 'Saving...' : 'Add Project'}</Button>
          </div>

          <div className="space-y-3">
            {projects.length === 0 && <p className="text-brand-neutral">No projects yet.</p>}
            {projects.map(p => (
              <div key={p.id} className="border border-brand-neutral rounded p-3 flex items-center justify-between">
                <div>
                  <div className="font-semibold">{p.name}</div>
                  <div className="text-sm text-brand-neutral">{p.href}</div>
                </div>
                <Button variant="outline" onClick={() => removeProject(p.id)}>Delete</Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blog */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Admin — Blog</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <input value={blogForm.title} onChange={e=>setBlogForm({...blogForm, title: e.target.value})} placeholder="Title" className="w-full border border-brand-neutral bg-brand-baseAlt text-white rounded p-2" />
            <input value={blogForm.slug} onChange={e=>setBlogForm({...blogForm, slug: e.target.value.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')})} placeholder="Slug (unique URL id)" className="w-full border border-brand-neutral bg-brand-baseAlt text-white rounded p-2" />
            <input value={blogForm.coverImage} onChange={e=>setBlogForm({...blogForm, coverImage: e.target.value})} placeholder="Cover image URL (optional)" className="w-full border border-brand-neutral bg-brand-baseAlt text-white rounded p-2" />
            <textarea value={blogForm.excerpt} onChange={e=>setBlogForm({...blogForm, excerpt: e.target.value})} placeholder="Short excerpt (optional)" className="w-full border border-brand-neutral bg-brand-baseAlt text-white rounded p-2 h-20" />
            <textarea value={blogForm.content} onChange={e=>setBlogForm({...blogForm, content: e.target.value})} placeholder="Content (Markdown supported)" className="w-full border border-brand-neutral bg-brand-baseAlt text-white rounded p-2 h-40" />
            <label className="flex items-center gap-2 text-sm text-brand-neutral">
              <input type="checkbox" checked={blogForm.published} onChange={e=>setBlogForm({...blogForm, published: e.target.checked})} />
              Published
            </label>
            <Button onClick={addPost} disabled={loading}>{loading ? 'Saving...' : 'Add Post'}</Button>
          </div>

          <div className="space-y-3">
            {posts.length === 0 && <p className="text-brand-neutral">No posts yet.</p>}
            {posts.map(p => (
              <div key={p.id} className="border border-brand-neutral rounded p-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{p.title}</div>
                    <div className="text-sm text-brand-neutral">/blog/{p.slug} • {p.published ? 'Published' : 'Draft'}</div>
                  </div>
                  <Button variant="outline" onClick={() => removePost(p.slug)}>Delete</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}