import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { listProjects } from '@/lib/projects-db'
import { readPresentations } from '@/lib/portfolio'
import { BookOpen, Layers, Users, Palette, ArrowRight, ExternalLink } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default async function PortfolioPage() {
  const projects = await listProjects()
  const presentations = await readPresentations()

  const caseStudies = [
    {
      title: 'Retail Inventory Digitization',
      desc: 'Reduced stock-outs by 35% through real-time inventory tracking.',
    },
    {
      title: 'Training Program Modernization',
      desc: 'Delivered blended ICT training with improved completion rates.',
    },
  ]

  const trainings = [
    { title: 'Full-Stack Web Development', desc: 'Practical React + Next.js training with projects.' },
    { title: 'Data Analytics Bootcamp', desc: 'Data wrangling, visualization, and business insights.' },
  ]

  const designs = [
    { title: 'Brand UI Kit', desc: 'Buttons, typography, grids, and color tokens.' },
    { title: 'Landing Page Concepts', desc: 'Hero, feature grids, pricing sections.' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-secondary via-white to-brand-secondary/50">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-brand-accent/10 text-brand-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Layers className="w-4 h-4" />
              <span>Our Portfolio</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Work That Delivers Results</h1>
            <p className="text-lg text-brand-secondary/90 max-w-2xl mx-auto">
              Explore our presentations, applications, case studies, trainings, and design assets.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="#presentations" className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-md">Presentations</a>
              <a href="#applications" className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-md">Applications</a>
              <a href="#case-studies" className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-md">Case Studies</a>
              <a href="#training" className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-md">Training</a>
              <a href="#designs" className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-md">Designs</a>
            </div>
          </div>
        </div>
      </section>

      {/* Presentations */}
      <section id="presentations" className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-brand-accent" />
            <h2 className="text-3xl font-bold text-brand-text">Presentations</h2>
          </div>
          <p className="text-brand-textLight mb-8">Downloadable decks and talks for clients and events.</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {(presentations.length ? presentations : [
              { title: 'Sample Deck 1', desc: 'Replace with your presentation', href: '#' },
              { title: 'Sample Deck 2', desc: 'Replace with your presentation', href: '#' },
              { title: 'Sample Deck 3', desc: 'Replace with your presentation', href: '#' },
            ]).map((p, i) => {
              const deriveThumb = () => {
                const anyP: any = p as any
                if (anyP.thumb) return anyP.thumb as string
                try {
                  const url = new URL(p.href, 'http://dummy')
                  const name = url.pathname.split('/').pop() || ''
                  const base = name.replace(/\.[^.]+$/, '')
                  return `/presentations/${base}.jpg`
                } catch {
                  return '/pdf-placeholder.svg'
                }
              }
              const thumbSrc = deriveThumb()
              return (
                <article key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-card hover:shadow-card-hover transition-all">
                  <Link href={p.href} target="_blank" rel="noopener noreferrer">
                    <div className="relative h-40 w-full bg-brand-secondary/30">
                      <Image src={thumbSrc} alt={p.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                    </div>
                  </Link>
                  <div className="p-6">
                    <h3 className="font-semibold text-brand-text mb-1">{p.title}</h3>
                    {p.desc && <p className="text-brand-textLight mb-4 text-sm">{p.desc}</p>}
                    <Button asChild variant="outline">
                      <Link href={p.href} target="_blank" rel="noopener noreferrer">
                        View Deck
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Applications (Projects) */}
      <section id="applications" className="py-16 bg-brand-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Layers className="w-6 h-6 text-brand-accent" />
            <h2 className="text-3xl font-bold text-brand-text">Applications</h2>
          </div>
          <p className="text-brand-textLight mb-8">A selection of applications we’ve built and shipped.</p>
          {projects.length === 0 ? (
            <div className="text-brand-textLight">No projects yet. Use the Admin panel or API to add some.</div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project: any) => (
                <article key={project.id} className="group bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all border border-gray-100 overflow-hidden">
                  <div className="relative h-44">
                    <Image src={project.image || '/arodonnalogo.jpg'} alt={project.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-brand-text mb-2 group-hover:text-brand-primary transition-colors">{project.name}</h3>
                    <p className="text-sm text-brand-textLight mb-4">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <Button asChild variant="ghost" className="text-brand-primary">
                        <Link href={project.href}>
                          View Project
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-brand-accent" />
            <h2 className="text-3xl font-bold text-brand-text">Case Studies</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {caseStudies.map((c, i) => (
              <article key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card hover:shadow-card-hover transition-all">
                <h3 className="font-semibold text-brand-text mb-2">{c.title}</h3>
                <p className="text-brand-textLight">{c.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Training & Workshops */}
      <section id="training" className="py-16 bg-brand-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-brand-accent" />
            <h2 className="text-3xl font-bold text-brand-text">Training & Workshops</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trainings.map((t, i) => (
              <article key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card hover:shadow-card-hover transition-all">
                <h3 className="font-semibold text-brand-text mb-2">{t.title}</h3>
                <p className="text-brand-textLight">{t.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Design Assets */}
      <section id="designs" className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Palette className="w-6 h-6 text-brand-accent" />
            <h2 className="text-3xl font-bold text-brand-text">Designs</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {designs.map((d, i) => (
              <article key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card hover:shadow-card-hover transition-all">
                <h3 className="font-semibold text-brand-text mb-2">{d.title}</h3>
                <p className="text-brand-textLight">{d.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
