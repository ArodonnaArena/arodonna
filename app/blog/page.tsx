import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

// Make this page dynamic to avoid static generation issues
export const dynamic = 'force-dynamic'
import { listBlogPosts } from '@/lib/blog-db'
import { BookOpen, Calendar, User, ArrowRight, PenTool, Lightbulb, TrendingUp } from 'lucide-react'

export default async function BlogIndexPage() {
  const posts = await listBlogPosts()
  
  // Sample blog posts for demonstration
  const samplePosts = [
    {
      slug: 'future-web-development-2024',
      title: 'The Future of Web Development in 2024',
      excerpt: 'Exploring emerging trends and technologies that are shaping the web development landscape this year.',
      author: 'Arodonna Team',
      date: 'Dec 15, 2024',
      category: 'Technology',
      readTime: '5 min read',
      featured: true
    },
    {
      slug: 'cloud-migration-guide',
      title: 'Cloud Migration: A Complete Business Guide',
      excerpt: 'Step-by-step guide to successfully migrating your business operations to the cloud with minimal downtime.',
      author: 'Engr. Arome',
      date: 'Dec 10, 2024',
      category: 'Cloud Solutions',
      readTime: '8 min read',
      featured: true
    },
    {
      slug: 'mobile-app-best-practices',
      title: 'Mobile App Development Best Practices',
      excerpt: 'Essential practices and strategies for creating successful mobile applications in today\'s competitive market.',
      author: 'Development Team',
      date: 'Dec 5, 2024',
      category: 'Mobile Development',
      readTime: '6 min read',
      featured: false
    },
    {
      slug: 'digital-transformation-sme',
      title: 'Digital Transformation for Small Businesses',
      excerpt: 'How small and medium enterprises can leverage technology to compete in the digital age.',
      author: 'Business Team',
      date: 'Nov 28, 2024',
      category: 'Business Strategy',
      readTime: '7 min read',
      featured: false
    },
    {
      slug: 'cybersecurity-essentials-2024',
      title: 'Cybersecurity Essentials Every Business Needs',
      excerpt: 'Protect your business with these essential cybersecurity practices and tools in 2024.',
      author: 'Security Team',
      date: 'Nov 20, 2024',
      category: 'Security',
      readTime: '10 min read',
      featured: false
    },
    {
      slug: 'ai-automation-workflow',
      title: 'AI and Automation in Modern Workflows',
      excerpt: 'Discover how artificial intelligence and automation are revolutionizing business processes.',
      author: 'Innovation Team',
      date: 'Nov 15, 2024',
      category: 'AI & Innovation',
      readTime: '9 min read',
      featured: false
    }
  ]
  
  // Use sample posts if no actual posts are available
  const displayPosts = posts.length > 0 ? posts : samplePosts
  const featuredPosts = displayPosts.filter(post => (post as any).featured)
  const regularPosts = displayPosts.filter(post => !(post as any).featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-secondary via-white to-brand-secondary/50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-hero text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-50">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23F1C40F' fillOpacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'%3E%3C/circle%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-brand-accent/10 text-brand-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              <span>Our Blog</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Latest Insights &
              <br />
              <span className="text-brand-accent">Industry Updates</span>
            </h1>
            
            <p className="text-xl text-brand-secondary/90 mb-8 max-w-3xl mx-auto">
              Stay informed with our latest news, product launches, training insights, and industry trends 
              from the world of ICT and digital transformation.
            </p>
            
            {/* Blog Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              {[
                { label: 'Articles Published', value: '50+', icon: PenTool },
                { label: 'Topics Covered', value: '15+', icon: Lightbulb },
                { label: 'Monthly Readers', value: '1K+', icon: TrendingUp }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-brand-accent mr-2" />
                    <span className="text-2xl font-bold">{stat.value}</span>
                  </div>
                  <p className="text-sm text-brand-secondary/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-brand-text mb-6">
                Featured <span className="text-brand-accent">Articles</span>
              </h2>
              <p className="text-lg text-brand-textLight max-w-2xl mx-auto">
                Don't miss our most popular and trending articles
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {featuredPosts.map((post, index) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <article className="group bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src="/arodonnalogo.jpg"
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/60 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-brand-accent text-brand-text px-3 py-1 rounded-full text-xs font-semibold">
                          {(post as any).category || 'General'}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                          <BookOpen className="w-4 h-4 text-brand-primary" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-brand-textLight mb-3">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{(post as any).author || 'Admin'}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{(post as any).date || new Date((post as any).createdAt || Date.now()).toLocaleDateString()}</span>
                        </div>
                        <span>{(post as any).readTime || '5 min read'}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-brand-text mb-3 group-hover:text-brand-primary transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-brand-textLight mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-brand-primary font-semibold group-hover:text-brand-accent transition-colors">
                          Read More
                        </span>
                        <ArrowRight className="w-5 h-5 text-brand-primary group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* All Posts */}
      <section className="py-20 bg-brand-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-brand-text mb-4">
                Latest <span className="text-brand-accent">Articles</span>
              </h2>
              <p className="text-lg text-brand-textLight">
                Explore all our insights and updates
              </p>
            </div>
          </div>
          
          {displayPosts.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-32 h-32 mx-auto mb-6 bg-brand-secondary/50 rounded-full flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-brand-textLight" />
              </div>
              <h3 className="text-2xl font-semibold text-brand-text mb-4">No Posts Yet</h3>
              <p className="text-brand-textLight mb-6 max-w-md mx-auto">
                Blog posts will appear here as they are published.
              </p>
              <Button className="bg-gradient-button hover:bg-gradient-button-hover text-brand-text px-8 py-3">
                Create First Post
              </Button>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {regularPosts.map((post, index) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <article className="group bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden h-full">
                    <div className="relative h-40">
                      <Image
                        src="/arodonnalogo.jpg"
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-white/90 text-brand-primary px-2 py-1 rounded-md text-xs font-medium">
                          {(post as any).category || 'General'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-5">
                      <div className="flex items-center gap-3 text-xs text-brand-textLight mb-3">
                        <span>{(post as any).author || 'Admin'}</span>
                        <span>•</span>
                        <span>{(post as any).date || new Date((post as any).createdAt || Date.now()).toLocaleDateString()}</span>
                        <span>•</span>
                        <span>{(post as any).readTime || '5 min read'}</span>
                      </div>
                      
                      <h3 className="font-semibold text-brand-text mb-2 group-hover:text-brand-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-sm text-brand-textLight line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-brand-secondary/90 mb-8">
            Subscribe to our newsletter for the latest ICT insights, tutorials, and industry updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-accent"
            />
            <Button className="bg-brand-accent hover:bg-brand-accentDark text-brand-text px-8 py-3">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
