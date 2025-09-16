import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🚀 Setting up database...')
  
  // Create sample blog posts
  const blogPosts = [
    {
      title: 'Welcome to Arodonna ICT Arena',
      slug: 'welcome-to-arodonna',
      excerpt: 'Discover our journey in providing cutting-edge ICT solutions and training programs.',
      content: `# Welcome to Arodonna ICT Arena

We are excited to launch our new blog where we'll share insights about:
- Latest technology trends
- Training program updates
- Success stories from our clients
- Industry best practices

Stay tuned for regular updates!`,
      published: true
    },
    {
      title: 'Cloud Migration: A Complete Business Guide',
      slug: 'cloud-migration-guide',
      excerpt: 'Essential strategies for migrating your business to the cloud safely and efficiently.',
      content: `# Cloud Migration: A Complete Business Guide

Moving to the cloud can transform your business operations...

## Benefits of Cloud Migration
- Improved scalability
- Cost efficiency
- Better security
- Enhanced collaboration

## Migration Strategy
1. Assessment phase
2. Planning and design
3. Migration execution
4. Optimization

Contact us for a free consultation on your cloud migration journey.`,
      published: true
    },
    {
      title: 'Mobile App Development Best Practices',
      slug: 'mobile-app-development-practices',
      excerpt: 'Learn the essential practices for building successful mobile applications.',
      content: `# Mobile App Development Best Practices

## User Experience First
- Intuitive navigation
- Fast loading times
- Responsive design
- Accessibility features

## Development Approach
- Cross-platform considerations
- Performance optimization
- Security implementation
- Testing strategies

## Deployment and Maintenance
- App store optimization
- User feedback integration
- Regular updates
- Analytics monitoring`,
      published: true
    }
  ]

  // Create sample projects
  const projects = [
    {
      name: 'Professional Resume Builder',
      description: 'Create stunning, ATS-friendly resumes with our intuitive drag-and-drop builder. Choose from professional templates.',
      href: 'https://resume-builder-demo.vercel.app',
      image: '/arodonnalogo.jpg'
    },
    {
      name: 'Education Management System',
      description: 'Comprehensive school management solution with student records, grading, attendance, and parent communication.',
      href: 'https://education-system-demo.vercel.app',
      image: '/arodonnalogo.jpg'
    },
    {
      name: 'Smart Inventory Manager',
      description: 'Real-time inventory tracking with automated alerts, reporting, and supplier management for businesses.',
      href: 'https://inventory-demo.vercel.app',
      image: '/arodonnalogo.jpg'
    }
  ]

  // Insert blog posts
  console.log('📝 Creating blog posts...')
  for (const post of blogPosts) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: post,
      create: post
    })
    console.log(`✅ Created blog post: ${post.title}`)
  }

  // Insert projects
  console.log('🚀 Creating projects...')
  for (const project of projects) {
    // Check if project already exists
    const existing = await prisma.project.findFirst({
      where: { name: project.name }
    })
    
    if (!existing) {
      await prisma.project.create({
        data: project
      })
      console.log(`✅ Created project: ${project.name}`)
    } else {
      console.log(`ℹ️ Project already exists: ${project.name}`)
    }
  }

  console.log('🎉 Database setup complete!')
}

main()
  .catch((e) => {
    console.error('❌ Error setting up database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
