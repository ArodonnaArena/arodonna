import { Button } from '@/components/ui/button'
import { listProjects } from '@/lib/projects-db'

// Make this page dynamic to avoid static generation issues
export const dynamic = 'force-dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Users, Award, Clock, Star, Mail, Phone, MapPin, Play, ArrowRight, Shield, Zap, Briefcase, Cloud, Database, Sparkles, Target } from 'lucide-react'

export default async function HomePage() {
  // Fetch a few projects server-side for the teaser (no client JS)
  const all = await listProjects()
  const projects = all.slice(0, 6)

  return (
    <>
      {/* Hero Section - Refined Layout */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a1f2f] via-[#22283a] to-[#3e475c] py-24 lg:py-28 text-white">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.08), transparent 45%), radial-gradient(circle at 75% 20%, rgba(255,255,255,0.04), transparent 40%)`
        }} />
        <div className="absolute -right-24 top-12 w-64 h-64 bg-brand-accent/10 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-14 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur border border-white/10">
                <Sparkles className="w-4 h-4" />
                <span>Cloud • Data • Security • Training</span>
              </div>

              <div className="space-y-5">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
                  Modern ICT Solutions for <span className="text-brand-accent">Ambitious Teams</span>
                </h1>
                <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
                  We architect cloud-first, secure, and data-driven experiences that keep your business always-on. From Azure landing zones to resilient database operations, our experts deliver measurable outcomes.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-brand-accent hover:bg-brand-accent/90 text-brand-primary px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_14px_36px_rgba(0,0,0,0.35)] transform hover:-translate-y-1 flex items-center justify-center gap-2">
                    <span>Book a strategy call</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="border border-white/30 text-white hover:bg-white hover:text-brand-primary px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur">
                    <Play className="w-5 h-5" />
                    <span>See how we work</span>
                  </button>
                </div>
                <div className="text-sm text-white/80 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-accent" />
                  <span>Trusted by 40+ cloud-first companies and fast-moving teams</span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[{ label: 'Cloud migrations', value: '40+' }, { label: 'Secured workloads', value: '120+' }, { label: 'Data platforms', value: '25+' }, { label: 'Training cohorts', value: '60+' }].map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur">
                    <div className="text-xs text-white/70">{stat.label}</div>
                    <div className="text-xl font-semibold">{stat.value}</div>
                  </div>
                ))}
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {[{ icon: Cloud, title: 'Cloud Reliability', desc: '99.9% uptime architectures' }, { icon: Shield, title: 'Security-first', desc: 'Governance & compliance built-in' }, { icon: Zap, title: 'Faster Delivery', desc: 'Launch in weeks, not months' }].map((item, index) => (
                  <div key={index} className="bg-white/12 border border-white/15 rounded-xl p-5 backdrop-blur shadow-lg">
                    <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-3">
                      <item.icon className="w-7 h-7" />
                    </div>
                    <div className="text-lg font-semibold">{item.title}</div>
                    <p className="text-sm text-white/75 mt-2 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 lg:pl-6">
              <div className="relative max-w-md ml-auto">
                <div className="absolute -inset-6 bg-black/10 blur-3xl rounded-3xl" />
                <div className="relative bg-white/12 border border-white/20 rounded-2xl p-6 backdrop-blur-md shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-sm text-white/70">Delivery score</p>
                      <p className="text-3xl font-bold">99.5%</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center">
                      <Target className="w-6 h-6 text-brand-accent" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[{ label: 'On-time launches', value: '96%' }, { label: 'SLA adherence', value: '99.9%' }, { label: 'Rollback incidents', value: '<1%' }, { label: 'C-SAT', value: '4.9/5' }].map((stat) => (
                      <div key={stat.label} className="rounded-xl border border-white/15 bg-white/8 px-4 py-3">
                        <div className="text-xs text-white/70">{stat.label}</div>
                        <div className="text-xl font-semibold">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mt-6">
                {['Azure landing zones', 'Database reliability', 'Automation & DevOps', 'Security posture reviews', 'Staff upskilling'].map((pill) => (
                  <span key={pill} className="px-4 py-2 rounded-full border border-white/15 bg-white/10 text-sm text-white/80 backdrop-blur">
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Matching Reference Design */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <CheckCircle className="w-4 h-4" />
                <span>About Company</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-brand-text mb-6 leading-tight">
                The Best IT Solution With
                <br />
                <span className="text-brand-accent">10 Years of Experience</span>
              </h2>
              
              <p className="text-lg text-brand-textLight mb-8 leading-relaxed">
                We provide comprehensive ICT solutions including software development, training, 
                consultancy, and digital transformation services. Our experienced team delivers 
                innovative solutions that drive business growth and efficiency.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Shield, title: 'Secure Solutions', desc: '100% Secure & Reliable' },
                  { icon: Zap, title: 'Fast Delivery', desc: 'Quick Project Turnaround' },
                  { icon: Users, title: 'Expert Team', desc: '10+ Years Experience' },
                  { icon: Award, title: '24/7 Support', desc: 'Round the Clock Support' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-12 h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-brand-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-text mb-1">{item.title}</h4>
                      <p className="text-sm text-brand-textLight">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="bg-gradient-button hover:bg-gradient-button-hover text-brand-text px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-accent hover:shadow-accent-strong transform hover:-translate-y-1">
                Learn More About Us
              </button>
            </div>

            {/* Right Content - Professional Image */}
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/mainexperience.png"
                  alt="Professional team member"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-xl"
                />
              </div>
              
              {/* Experience Badge - Floating */}
              <div className="absolute top-8 -left-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-1">10+</div>
                  <div className="text-sm text-brand-textLight">Years Experience</div>
                </div>
              </div>
              
              {/* Success Badge - Floating */}
              <div className="absolute bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-brand-text">100+ Projects</div>
                    <div className="text-sm text-brand-textLight">Successfully Completed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Section - Matching Reference Design */}
      <section className="py-20 bg-brand-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Business Growth Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10">
                <Image
                  src="/businessgrowth.png"
                  alt="Business growth and team collaboration"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-xl"
                />
              </div>
              
              {/* Growth Stats - Floating Card */}
              <div className="absolute top-8 -right-8 bg-white rounded-xl p-4 shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-accent mb-1">300%</div>
                  <div className="text-sm text-brand-textLight">Growth Rate</div>
                </div>
              </div>
              
              {/* Client Satisfaction - Floating Card */}
              <div className="absolute bottom-8 -left-8 bg-white rounded-xl p-4 shadow-xl border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="flex text-brand-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <div className="text-sm font-medium text-brand-text">5.0 Rating</div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-brand-accent/10 text-brand-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Users className="w-4 h-4" />
                <span>Why Choose Us</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-brand-text mb-6 leading-tight">
                We Are Here to Grow Your
                <br />
                <span className="text-brand-accent">Business Exponentially</span>
              </h2>
              
              <p className="text-lg text-brand-textLight mb-8 leading-relaxed">
                Our strategic approach combines innovative technology solutions with proven 
                business methodologies to accelerate your company's growth and digital transformation.
              </p>
              
              {/* Feature Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { icon: Users, title: 'Team Building', desc: 'Expert teams for every project', color: 'bg-blue-100 text-blue-600' },
                  { icon: Award, title: 'Quality Service', desc: 'Award-winning solutions', color: 'bg-green-100 text-green-600' },
                  { icon: Clock, title: '24/7 Support', desc: 'Round-the-clock assistance', color: 'bg-purple-100 text-purple-600' },
                  { icon: Star, title: 'Best Results', desc: 'Proven success stories', color: 'bg-orange-100 text-orange-600' }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${item.color}`}>
                      <item.icon className="w-8 h-8" />
                    </div>
                    <h4 className="font-semibold text-brand-text mb-2">{item.title}</h4>
                    <p className="text-sm text-brand-textLight">{item.desc}</p>
                  </div>
                ))}
              </div>

              <button className="bg-gradient-primary text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-primary hover:shadow-primary-strong transform hover:-translate-y-1">
                Discover More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Matching Reference Design */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4" />
              <span>Our Services</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-text mb-6 leading-tight">
              Custom IT Solutions for Your
              <br />
              <span className="text-brand-accent">Successful Business</span>
            </h2>
            <p className="text-lg text-brand-textLight max-w-2xl mx-auto">
              We provide comprehensive technology solutions tailored to meet your business needs 
              and drive digital transformation.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              {
                title: 'Azure Cloud',
                desc: 'Landing zones, governance, security, and cost optimization tailored to Azure.',
                icon: Cloud,
                color: 'bg-sky-100 text-sky-600',
                gradient: 'from-sky-500 to-sky-600'
              },
              {
                title: 'Database Administration',
                desc: 'Reliable relational and cloud database operations, backups, and performance tuning.',
                icon: Database,
                color: 'bg-indigo-100 text-indigo-600',
                gradient: 'from-indigo-500 to-indigo-600'
              },
              {
                title: 'Cyber Security',
                desc: 'Comprehensive security solutions to protect your digital assets and sensitive data.',
                icon: Shield,
                color: 'bg-red-100 text-red-600',
                gradient: 'from-red-500 to-red-600'
              },
              {
                title: 'Data Analytics',
                desc: 'Transform raw data into actionable insights to drive informed business decisions.',
                icon: Star,
                color: 'bg-blue-100 text-blue-600',
                gradient: 'from-blue-500 to-blue-600'
              },
              {
                title: 'Web Development',
                desc: 'Modern, responsive websites and web applications built with cutting-edge tech.',
                icon: Zap,
                color: 'bg-green-100 text-green-600',
                gradient: 'from-green-500 to-green-600'
              },
              {
                title: 'App Development',
                desc: 'Native and cross-platform mobile applications for iOS and Android platforms.',
                icon: Briefcase,
                color: 'bg-purple-100 text-purple-600',
                gradient: 'from-purple-500 to-purple-600'
              },
              {
                title: 'SEO Optimization',
                desc: 'Improve your search engine rankings and increase organic traffic to your site.',
                icon: Award,
                color: 'bg-orange-100 text-orange-600',
                gradient: 'from-orange-500 to-orange-600'
              },
              {
                title: 'UI/UX Design',
                desc: 'Create intuitive and engaging user experiences that delight your customers.',
                icon: Users,
                color: 'bg-pink-100 text-pink-600',
                gradient: 'from-pink-500 to-pink-600'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Icon */}
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-brand-text mb-4 group-hover:text-brand-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-brand-textLight mb-6 leading-relaxed">
                  {service.desc}
                </p>
                
                {/* CTA Button */}
                <button className="text-brand-primary font-semibold flex items-center gap-2 group-hover:text-brand-accent transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                
                {/* Hover Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-16">
            <button className="bg-gradient-button hover:bg-gradient-button-hover text-brand-text px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-accent hover:shadow-accent-strong transform hover:-translate-y-1">
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-brand-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              <span>Our Team</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-text mb-4 leading-tight">
              People behind the outcomes
            </h2>
            <p className="text-lg text-brand-textLight max-w-2xl mx-auto">
              A multidisciplinary crew delivering cloud reliability, data excellence, and operational rigor.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[ 
              { name: 'Engr. A.A muhammad', role: 'Chief Executive Officer' },
              { name: 'Donna Ocheje', role: 'Operations Manager' },
              { name: 'Emmanuel Ali Ochowechi', role: 'Junior Cloud Administrator' },
              { name: 'Emmanuel Idoga', role: 'Cloud Operations Assistant' },
              { name: 'Engr.Ebenezer Makanjuola', role: 'Data Engineer' },
              { name: 'Georgelyn Ogabidu', role: 'Risk Access Manager' }
            ].map((person) => (
              <div key={person.name} className="bg-white rounded-2xl p-6 shadow-card border border-gray-100 hover:shadow-card-hover transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 text-brand-accent flex items-center justify-center mb-4 font-semibold">
                  {person.name.split(' ').filter(Boolean).map((p) => p[0]).join('').slice(0, 2)}
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-brand-text">{person.name}</h3>
                  <p className="text-brand-accent font-semibold">{person.role}</p>
                  <p className="text-sm text-brand-textLight">Driving excellence across delivery, governance, and customer outcomes.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Matching Reference Design */}
      <section className="py-20 bg-brand-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Clock className="w-4 h-4" />
              <span>Our Process</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-text mb-6 leading-tight">
              Step By Step Simple & Clean
              <br />
              <span className="text-brand-accent">Working Process</span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              { step: '1', title: 'Research', desc: 'We analyze your requirements and create a detailed project roadmap.', color: 'bg-blue-500' },
              { step: '2', title: 'Concept', desc: 'Our designers create intuitive and user-friendly interface designs.', color: 'bg-green-500' },
              { step: '3', title: 'Development', desc: 'Expert developers bring your vision to life with clean, efficient code.', color: 'bg-purple-500' },
              { step: '4', title: 'Finalization', desc: 'Rigorous testing ensures quality before successful project delivery.', color: 'bg-orange-500' }
            ].map((process, index) => (
              <div key={index} className="text-center relative group">
                <div className={`mb-6 mx-auto w-20 h-20 ${process.color} rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {process.step}
                </div>
                <h3 className="font-bold text-brand-text mb-3 text-lg">{process.title}</h3>
                <p className="text-brand-textLight leading-relaxed">{process.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-brand-accent/30 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - Clean & Simple */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-brand-accent/10 text-brand-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              <span>Pricing Plans</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-text mb-6 leading-tight">
              We are Offering Competitive
              <br />
              <span className="text-brand-accent">Prices for Our Clients</span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { name: 'Basic', price: '₦45,000', desc: 'Perfect for small projects', popular: false },
              { name: 'Professional', price: '₦99,000', desc: 'Best for growing businesses', popular: true },
              { name: 'Enterprise', price: '₦149,000', desc: 'For large scale projects', popular: false }
            ].map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 border ${
                plan.popular ? 'border-brand-accent scale-105' : 'border-gray-200'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-brand-accent text-brand-text px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-brand-text mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-brand-accent mb-2">{plan.price}</div>
                  <p className="text-brand-textLight mb-6">{plan.desc}</p>
                  <Button className={plan.popular ? 'w-full' : 'w-full'} variant={plan.popular ? 'default' : 'outline'}>
                    Get Started
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-brand-secondary/90 mb-8">
            Get in touch with our experts today for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-brand-accent hover:bg-brand-accentDark text-brand-text px-8 py-4 text-lg">
              Get Free Consultation
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-brand-primary px-8 py-4 text-lg">
              <Link href="/portfolio">View Our Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

    </>
  )
}
