import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Award, Users, Target, Heart, Calendar, MapPin, Phone, Mail, CheckCircle, Star, Zap, Shield } from 'lucide-react'

export default function AboutPage() {
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-accent/10 text-brand-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Heart className="w-4 h-4" />
                <span>About Arodonna ICT Arena</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Professional. Helpful.
                <br />
                <span className="text-brand-accent">Innovative. Trustworthy.</span>
              </h1>
              
              <p className="text-xl text-brand-secondary/90 mb-8 leading-relaxed">
                Since 2020, we've been empowering businesses and individuals with cutting-edge ICT solutions, 
                training, and support across Nigeria and beyond.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button className="bg-brand-accent hover:bg-brand-accentDark text-brand-text px-8 py-4 text-lg">
                  Get Started Today
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-primary px-8 py-4 text-lg">
                  Our Services
                </Button>
              </div>
              
              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  { label: 'Years Experience', value: '4+', icon: Calendar },
                  { label: 'Happy Clients', value: '100+', icon: Users },
                  { label: 'Projects Done', value: '50+', icon: Award }
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
            
            {/* Right Content - Company Image */}
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/arodonnalogo.jpg"
                  alt="Arodonna ICT Arena Team"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-primary-strong"
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-accent/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-primary/20 rounded-full blur-xl"></div>
              
              {/* Established Badge */}
              <div className="absolute top-8 -left-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-primary mb-1">2020</div>
                  <div className="text-sm text-brand-textLight">Established</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-text mb-6">
              Our <span className="text-brand-accent">Story</span>
            </h2>
            <p className="text-lg text-brand-textLight leading-relaxed">
              Founded and registered on <strong>19 October 2020</strong> in Benue, Nigeria, Arodonna ICT Arena 
              was born from a vision to bridge the technology gap in our community. We provide comprehensive 
              software training & consultancy, electronics repairs, and sales of computers & accessories.
            </p>
          </div>
          
          {/* Mission, Vision, Values */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Our Mission',
                desc: 'To empower individuals and businesses with cutting-edge ICT solutions, training, and support that drive growth and innovation.',
                icon: Target,
                color: 'bg-blue-100 text-blue-600'
              },
              {
                title: 'Our Vision',
                desc: 'To be the leading ICT training and consultancy firm in Nigeria, recognized for excellence and innovation.',
                icon: Star,
                color: 'bg-green-100 text-green-600'
              },
              {
                title: 'Our Values',
                desc: 'Professional excellence, helpful support, innovative solutions, and trustworthy partnerships in everything we do.',
                icon: Heart,
                color: 'bg-purple-100 text-purple-600'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-brand-text mb-4">{item.title}</h3>
                <p className="text-brand-textLight leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-20 bg-brand-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-text mb-6">
              What We <span className="text-brand-accent">Do</span>
            </h2>
            <p className="text-lg text-brand-textLight max-w-2xl mx-auto">
              We support businesses, institutions and organisations across cloud and infrastructure,
              digital products, data, training and hands-on IT support.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Cloud & Infrastructure',
                desc: 'Microsoft Azure cloud services, infrastructure design and administration for business and organisational workloads.',
                icon: Users,
                features: ['Azure setup and administration', 'Virtual networks and infrastructure', 'Cloud deployment support', 'Systems administration']
              },
              {
                title: 'Automation & DevOps',
                desc: 'Infrastructure as Code and DevOps practices to improve deployment consistency and operational efficiency.',
                icon: Zap,
                features: ['ARM templates and Azure CLI', 'PowerShell and Bash automation', 'Azure DevOps and Pipelines', 'YAML CI/CD workflows']
              },
              {
                title: 'Security & Cloud Operations',
                desc: 'Cloud and infrastructure security, identity, monitoring and operational support.',
                icon: Shield,
                features: ['Cybersecurity and network security', 'Entra ID, RBAC and MFA', 'Azure Policy and Key Vault', 'Monitoring, backup and cost management']
              },
              {
                title: 'Digital Products & Data',
                desc: 'Digital experiences, software and data services to support organisational goals.',
                icon: Zap,
                features: ['Website design and development', 'Mobile applications', 'Database administration', 'Data analytics and reporting']
              },
              {
                title: 'Design, Training & IT Support',
                desc: 'Practical technology, design and support services for organisations and their teams.',
                icon: Users,
                features: ['SEO and UI/UX design', 'ICT training and consultancy', 'Computer and electronics repairs', 'Hardware and accessories sales']
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-brand-accent/10 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-brand-accent" />
                </div>
                <h3 className="text-xl font-bold text-brand-text mb-4">{service.title}</h3>
                <p className="text-brand-textLight mb-6 leading-relaxed">{service.desc}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-brand-accent flex-shrink-0" />
                      <span className="text-sm text-brand-textLight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/services" className="inline-flex items-center gap-2 rounded-lg bg-brand-primary px-6 py-3 font-semibold text-white transition hover:bg-brand-primary/90">
              Explore all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-brand-secondary/90 mb-8">
            Let's discuss how we can help you achieve your technology goals and drive your business forward.
          </p>
          
          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { icon: Phone, title: 'Call Us', info: '+234 (0) 123 456 7890' },
              { icon: Mail, title: 'Email Us', info: 'info@arodonnaictarena.com' },
              { icon: MapPin, title: 'Visit Us', info: 'Port Harcourt, Rivers State' }
            ].map((contact, index) => (
              <div key={index} className="flex items-center justify-center gap-3">
                <contact.icon className="w-5 h-5 text-brand-accent" />
                <div>
                  <div className="text-sm font-medium">{contact.title}</div>
                  <div className="text-sm text-brand-secondary/80">{contact.info}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-brand-accent hover:bg-brand-accentDark text-brand-text px-8 py-4 text-lg">
              Get In Touch
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-primary px-8 py-4 text-lg">
              View Our Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
