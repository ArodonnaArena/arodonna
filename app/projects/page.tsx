import Image from 'next/image'
import { listProjects } from '@/lib/projects-db'
import { Button } from '@/components/ui/button'
import { ExternalLink, Star, Code, Smartphone, Globe, Database, Shield, Zap, ArrowRight } from 'lucide-react'

// Make this page dynamic to avoid static generation issues
export const dynamic = 'force-dynamic'

type Project = {
  id: string
  name: string
  description: string
  href: string // external demo link (Vercel)
  image?: string | null
  createdAt?: Date
  category?: string
  status?: string
  tech?: string[]
  featured?: boolean
}

async function getProjects(): Promise<Project[]> {
  // Call DB directly on the server to avoid building absolute URLs
  return await listProjects()
}

export default async function ProjectsPage() {
  const projects = await getProjects()
  
  // Sample applications for demonstration (will be replaced with actual data from admin)
  const sampleApps = [
    {
      id: 'resume-builder',
      name: 'Professional Resume Builder',
      description: 'Create stunning, ATS-friendly resumes with our intuitive drag-and-drop builder. Choose from professional templates.',
      category: 'Productivity',
      status: 'Live',
      tech: ['React', 'TypeScript', 'Tailwind'],
      image: '/arodonnalogo.jpg',
      href: '#',
      featured: true
    },
    {
      id: 'education-management',
      name: 'Education Management System',
      description: 'Comprehensive school management solution with student records, grading, attendance, and parent communication.',
      category: 'Education',
      status: 'In Development',
      tech: ['Next.js', 'Prisma', 'PostgreSQL'],
      image: '/arodonnalogo.jpg',
      href: '#',
      featured: true
    },
    {
      id: 'inventory-system',
      name: 'Smart Inventory Manager',
      description: 'Real-time inventory tracking with automated alerts, reporting, and supplier management for businesses.',
      category: 'Business',
      status: 'Coming Soon',
      tech: ['Vue.js', 'Node.js', 'MongoDB'],
      image: '/arodonnalogo.jpg',
      href: '#',
      featured: false
    }
  ]
  
  // Use sample apps if no projects are available
  const displayProjects = projects.length > 0 ? projects : sampleApps
  
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
              <Code className="w-4 h-4" />
              <span>Our Applications</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Innovative Applications
              <br />
              <span className="text-brand-accent">Built for Success</span>
            </h1>
            
            <p className="text-xl text-brand-secondary/90 mb-8 max-w-3xl mx-auto">
              Explore our portfolio of cutting-edge applications designed to solve real-world problems 
              and empower businesses with technology.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              {[
                { label: 'Applications Built', value: '15+', icon: Code },
                { label: 'Active Users', value: '1000+', icon: Globe },
                { label: 'Industries Served', value: '8+', icon: Star }
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
      
      {/* Applications Showcase */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-text mb-6">
              Featured <span className="text-brand-accent">Applications</span>
            </h2>
            <p className="text-lg text-brand-textLight max-w-2xl mx-auto">
              Discover our flagship applications that are transforming how businesses operate
            </p>
          </div>
          
          {/* Projects Grid */}
          {displayProjects.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-32 h-32 mx-auto mb-6 bg-brand-secondary/50 rounded-full flex items-center justify-center">
                <Code className="w-16 h-16 text-brand-textLight" />
              </div>
              <h3 className="text-2xl font-semibold text-brand-text mb-4">No Projects Yet</h3>
              <p className="text-brand-textLight mb-6 max-w-md mx-auto">
                Applications will appear here as they are added through the admin panel.
              </p>
              <Button className="bg-gradient-button hover:bg-gradient-button-hover text-brand-text px-8 py-3">
                Add Your First Project
              </Button>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {displayProjects.map((project, index) => (
                <div
                  key={project.id || index}
                  className="group bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image || '/arodonnalogo.jpg'}
                      alt={project.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/60 via-transparent to-transparent" />
                    
                    {/* Status Badge */}
                    {project.status && (
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          project.status === 'Live' ? 'bg-green-100 text-green-800' :
                          project.status === 'In Development' ? 'bg-blue-100 text-blue-800' :
                          'bg-orange-100 text-orange-800'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    )}
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <div className="w-8 h-8 bg-brand-accent rounded-full flex items-center justify-center">
                          <Star className="w-4 h-4 text-brand-text fill-current" />
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6">
                    {/* Category */}
                    {project.category && (
                      <div className="text-xs font-semibold text-brand-accent uppercase tracking-wider mb-2">
                        {project.category}
                      </div>
                    )}
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-brand-text mb-3 group-hover:text-brand-primary transition-colors">
                      {project.name}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-brand-textLight mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    {project.tech && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-brand-secondary/50 text-brand-textLight text-xs rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    {/* Action Button */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <button className="flex items-center gap-2 text-brand-primary font-semibold group-hover:text-brand-accent transition-colors">
                        <span>View Project</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                      
                      <div className="flex gap-2">
                        <div className="w-8 h-8 bg-brand-primary/10 rounded-full flex items-center justify-center hover:bg-brand-primary/20 transition-colors cursor-pointer">
                          <ExternalLink className="w-4 h-4 text-brand-primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-brand-primary/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 pointer-events-none" />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-brand-secondary/90 mb-8">
            Let's discuss your next project and create innovative solutions together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-brand-accent hover:bg-brand-accentDark text-brand-text px-8 py-4 text-lg">
              Start a Project
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-primary px-8 py-4 text-lg">
              View All Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
