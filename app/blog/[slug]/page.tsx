import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Button } from '@/components/ui/button'
import { getBlogPostBySlug } from '@/lib/blog-db'
import { Calendar, User, Clock, ArrowLeft, Share2, BookOpen, Tag, ChevronRight } from 'lucide-react'

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug)
  
  // If no post found, create a sample post for demonstration based on the slug
  const samplePosts: { [key: string]: any } = {
    'future-web-development-2024': {
      title: 'The Future of Web Development in 2024',
      excerpt: 'Exploring emerging trends and technologies that are shaping the web development landscape this year.',
      author: 'Arodonna Team',
      createdAt: new Date('2024-12-15'),
      published: true,
      category: 'Technology',
      readTime: '8 min read',
      tags: ['Web Development', 'Technology', 'AI', 'Performance'],
      coverImage: '/arodonnalogo.jpg',
      content: `
# The Future of Web Development in 2024

Web development is evolving at an unprecedented pace, and 2024 promises to be a transformative year for developers and businesses alike. In this comprehensive guide, we'll explore the key trends, technologies, and methodologies that are shaping the future of web development.

## Key Trends to Watch

### 1. AI-Powered Development Tools

Artificial Intelligence is revolutionizing how we build web applications. From code generation to automated testing, AI tools are becoming indispensable for modern developers.

- **Code Completion**: Advanced AI assistants provide intelligent code suggestions
- **Automated Testing**: AI-driven testing tools that can predict and prevent bugs
- **Design Generation**: Tools that can create UI components from simple descriptions

### 2. Progressive Web Apps (PWAs)

PWAs continue to bridge the gap between web and native applications, offering:

- Offline functionality
- Push notifications
- Native app-like experience
- Improved performance

### 3. Serverless Architecture

Serverless computing is transforming backend development:

\`\`\`javascript
// Example of a serverless function
export default async function handler(req, res) {
  const { name } = req.query;
  res.status(200).json({ message: \`Hello, \${name}!\` });
}
\`\`\`

## The Rise of Modern Frameworks

### Next.js 14 and Beyond

Next.js continues to lead the React ecosystem with:

- App Router for better performance
- Server Components for reduced client-side JavaScript
- Improved developer experience

### Vue.js 3 and Nuxt 3

Vue.js maintains its position with:

- Composition API
- Better TypeScript support
- Enhanced performance

## Best Practices for 2024

1. **Performance First**: Prioritize Core Web Vitals
2. **Accessibility**: Ensure your applications are inclusive
3. **Security**: Implement robust security measures
4. **Sustainability**: Consider the environmental impact of your code

## Conclusion

As we move forward in 2024, web development continues to evolve rapidly. By staying informed about these trends and continuously learning, developers can build better, more efficient, and more user-friendly applications.

The future is bright for web development, and those who embrace these changes will be well-positioned for success in the digital landscape.
      `
    },
    'cloud-migration-guide': {
      title: 'Cloud Migration: A Complete Business Guide',
      excerpt: 'Step-by-step guide to successfully migrating your business operations to the cloud with minimal downtime.',
      author: 'Engr. Arome',
      createdAt: new Date('2024-12-10'),
      published: true,
      category: 'Cloud Solutions',
      readTime: '12 min read',
      tags: ['Cloud Computing', 'Migration', 'Business Strategy', 'AWS', 'Azure'],
      coverImage: '/arodonnalogo.jpg',
      content: `
# Cloud Migration: A Complete Business Guide

Cloud migration is one of the most significant technology transformations a business can undertake. This comprehensive guide will walk you through everything you need to know about successfully migrating your business to the cloud.

## Why Migrate to the Cloud?

Cloud migration offers numerous benefits for modern businesses:

- **Cost Efficiency**: Reduce infrastructure and maintenance costs
- **Scalability**: Easily scale resources up or down based on demand
- **Flexibility**: Access your applications from anywhere, anytime
- **Security**: Enterprise-grade security features and compliance
- **Innovation**: Access to cutting-edge technologies and services

## Types of Cloud Migration

### 1. Lift and Shift (Rehosting)

Move applications to the cloud without major changes:
- Fastest migration approach
- Minimal application modifications
- Good for legacy applications

### 2. Replatforming

Make minor optimizations during migration:
- Some cloud-native features adoption
- Improved performance and cost benefits
- Balanced approach between speed and optimization

### 3. Refactoring (Re-architecting)

Redesign applications for cloud-native architecture:
- Maximum cloud benefits
- Requires significant investment
- Long-term strategic approach

## Migration Planning Process

### Phase 1: Assessment and Strategy

\`\`\`bash
# Example assessment command
aws application-discovery describe-configurations
\`\`\`

1. **Inventory Current Assets**: Catalog all applications, databases, and infrastructure
2. **Assess Dependencies**: Map application interdependencies
3. **Evaluate Cloud Readiness**: Determine which applications are ready for cloud
4. **Cost Analysis**: Calculate current vs. projected cloud costs

### Phase 2: Planning and Design

- Choose the right cloud provider (AWS, Azure, Google Cloud)
- Design target cloud architecture
- Create migration timeline and milestones
- Plan for data migration strategies

### Phase 3: Migration Execution

- Set up cloud infrastructure
- Migrate data and applications
- Test functionality and performance
- Train teams on new cloud environments

### Phase 4: Optimization and Management

- Monitor performance and costs
- Optimize resource utilization
- Implement cloud governance policies
- Continuous improvement processes

## Best Practices for Successful Migration

### 1. Start with a Pilot Project

Begin with a non-critical application to:
- Learn cloud migration processes
- Identify potential challenges
- Build team expertise
- Validate migration approach

### 2. Ensure Data Security

- Encrypt data in transit and at rest
- Implement proper access controls
- Regular security audits and monitoring
- Compliance with regulations (GDPR, HIPAA, etc.)

### 3. Plan for Downtime

- Schedule migrations during low-usage periods
- Implement rollback procedures
- Communicate with stakeholders
- Have contingency plans ready

## Common Challenges and Solutions

### Challenge 1: Legacy System Compatibility

**Solution**: Use containerization or hybrid cloud approaches

### Challenge 2: Data Transfer Limitations

**Solution**: Use dedicated network connections or physical data transfer services

### Challenge 3: Staff Training and Adoption

**Solution**: Invest in comprehensive training programs and change management

## Tools and Technologies

### Migration Tools

- **AWS Migration Hub**: Centralized migration tracking
- **Azure Migrate**: Comprehensive migration solution
- **Google Cloud Migrate**: Streamlined migration services

### Monitoring and Management

- **CloudWatch**: AWS monitoring and logging
- **Azure Monitor**: Azure resource monitoring
- **Google Cloud Operations**: GCP monitoring suite

## Cost Optimization Strategies

1. **Right-sizing**: Match resources to actual needs
2. **Reserved Instances**: Commit to long-term usage for discounts
3. **Auto-scaling**: Automatically adjust resources based on demand
4. **Resource Scheduling**: Turn off non-production resources when not needed

## Conclusion

Cloud migration is a journey, not a destination. Success requires careful planning, proper execution, and continuous optimization. By following this guide and best practices, your business can successfully transition to the cloud and unlock its full potential.

Remember, every organization's migration journey is unique. Consider partnering with experienced cloud migration specialists to ensure your success.

## Next Steps

Ready to start your cloud migration journey? Contact Arodonna ICT Arena for a free consultation and assessment of your current infrastructure.
      `
    },
    'mobile-app-best-practices': {
      title: 'Mobile App Development Best Practices',
      excerpt: 'Essential practices and strategies for creating successful mobile applications in today\'s competitive market.',
      author: 'Development Team',
      createdAt: new Date('2024-12-05'),
      published: true,
      category: 'Mobile Development',
      readTime: '10 min read',
      tags: ['Mobile Development', 'iOS', 'Android', 'React Native', 'Flutter'],
      coverImage: '/arodonnalogo.jpg',
      content: `
# Mobile App Development Best Practices

In today's mobile-first world, creating successful mobile applications requires more than just good ideas. This comprehensive guide covers the essential best practices for mobile app development that will help you build apps users love.

## Planning and Strategy

### Define Your Target Audience

Before writing a single line of code:
- Research your target demographics
- Understand user pain points and needs
- Analyze competitor apps
- Create detailed user personas

### Choose the Right Development Approach

#### Native Development
- **iOS**: Swift or Objective-C
- **Android**: Kotlin or Java
- Best performance and platform integration
- Higher development cost and time

#### Cross-Platform Development
- **React Native**: JavaScript-based
- **Flutter**: Dart-based
- **Xamarin**: C#-based
- Faster development and code reuse
- Some performance trade-offs

## User Experience (UX) Design

### Follow Platform Guidelines

#### iOS Human Interface Guidelines
- Use system fonts and standard UI elements
- Implement proper navigation patterns
- Follow iOS design principles

#### Material Design for Android
- Use Material Design components
- Implement proper touch targets
- Follow Android design patterns

### Design for Different Screen Sizes

\`\`\`css
/* Responsive design example */
@media (max-width: 480px) {
  .mobile-container {
    padding: 10px;
    font-size: 14px;
  }
}
\`\`\`

## Performance Optimization

### App Launch Time

- Keep launch time under 2 seconds
- Optimize app bundle size
- Lazy load non-critical resources
- Use splash screens effectively

### Memory Management

- Profile memory usage regularly
- Implement proper caching strategies
- Release unused objects
- Optimize image loading and storage

### Network Optimization

- Implement offline functionality
- Cache frequently accessed data
- Use compression for data transfer
- Implement retry mechanisms for failed requests

## Security Best Practices

### Data Protection

- Encrypt sensitive data at rest
- Use HTTPS for all network communications
- Implement certificate pinning
- Avoid storing sensitive data in plain text

### Authentication and Authorization

- Implement secure authentication flows
- Use biometric authentication when available
- Implement proper session management
- Use OAuth 2.0 for third-party authentication

### Code Security

- Obfuscate your code
- Implement root/jailbreak detection
- Use secure coding practices
- Regular security audits and penetration testing

## Testing Strategies

### Unit Testing

\`\`\`javascript
// Example unit test for React Native
import { calculateTotal } from '../utils/math';

describe('calculateTotal', () => {
  it('should calculate total correctly', () => {
    expect(calculateTotal([1, 2, 3])).toBe(6);
  });
});
\`\`\`

### Integration Testing

- Test API integrations
- Test database operations
- Test third-party service integrations

### User Interface Testing

- Automated UI testing
- Manual testing on real devices
- Accessibility testing
- Performance testing

### Beta Testing

- Use TestFlight (iOS) or Google Play Console (Android)
- Gather feedback from real users
- Test on various devices and OS versions
- Monitor crash reports and analytics

## App Store Optimization (ASO)

### App Store Listing

- Write compelling app descriptions
- Use relevant keywords
- Create attractive screenshots and videos
- Encourage positive reviews and ratings

### Localization

- Translate app content for target markets
- Adapt cultural elements
- Test with native speakers
- Consider local payment methods

## Analytics and Monitoring

### User Analytics

- Track user engagement metrics
- Monitor user flow and behavior
- Implement A/B testing
- Measure conversion rates

### Performance Monitoring

- Monitor app crashes and errors
- Track app performance metrics
- Monitor API response times
- Set up alerts for critical issues

## Development Workflow

### Version Control

\`\`\`bash
# Example Git workflow
git checkout -b feature/new-login
git add .
git commit -m "Add new login functionality"
git push origin feature/new-login
\`\`\`

### Continuous Integration/Continuous Deployment (CI/CD)

- Automated testing on code commits
- Automated builds and deployments
- Code quality checks
- Security scans

## Maintenance and Updates

### Regular Updates

- Fix bugs promptly
- Add new features based on user feedback
- Update for new OS versions
- Maintain compatibility with latest devices

### User Support

- Provide in-app help and tutorials
- Implement crash reporting
- Respond to user reviews and feedback
- Maintain comprehensive documentation

## Conclusion

Building successful mobile applications requires attention to detail, user focus, and adherence to best practices. By following these guidelines, you'll be well on your way to creating apps that users love and businesses value.

Remember, mobile development is an iterative process. Continuously gather user feedback, monitor analytics, and improve your app based on real-world usage data.

## Get Started Today

Ready to build your next mobile app? Contact Arodonna ICT Arena for professional mobile app development services tailored to your business needs.
      `
    }
  };
  
  const samplePost = samplePosts[params.slug] || {
    title: 'Article Coming Soon',
    excerpt: 'This article is currently being written and will be published soon. Check back later!',
    author: 'Arodonna Team',
    createdAt: new Date(),
    published: true,
    category: 'General',
    readTime: '2 min read',
    tags: ['Coming Soon'],
    coverImage: '/arodonnalogo.jpg',
    content: `
# Article Coming Soon

Thank you for your interest in this article! We're currently working on creating high-quality content for you.

## What to Expect

This article will cover:

- In-depth analysis of the topic
- Practical examples and code snippets
- Best practices from industry experts
- Real-world case studies

## Stay Updated

While you wait, consider:

- Subscribing to our newsletter for updates
- Following us on social media
- Exploring our other published articles
- Reaching out with specific questions or topics you'd like us to cover

## Contact Us

Have a specific question or topic you'd like us to address? Contact Arodonna ICT Arena and let us know what you'd like to learn about!

---

*This page will be updated with the full article content soon.*
    `
  }
  
  const displayPost = post || samplePost
  if (!displayPost.published) return notFound()

  const date = new Date(displayPost.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  // Related articles (sample data)
  const relatedArticles = [
    { title: 'Cloud Migration: A Complete Business Guide', slug: 'cloud-migration-guide', category: 'Cloud Solutions' },
    { title: 'Mobile App Development Best Practices', slug: 'mobile-app-best-practices', category: 'Mobile Development' },
    { title: 'Cybersecurity Essentials Every Business Needs', slug: 'cybersecurity-essentials-2024', category: 'Security' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-secondary via-white to-brand-secondary/50">
      {/* Navigation Breadcrumb */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-brand-textLight">
            <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-brand-primary transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-brand-text font-medium">Article</span>
          </nav>
        </div>
      </section>
      
      {/* Article Header */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Back Button */}
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-accent transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Blog</span>
          </Link>
          
          {/* Article Meta */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 bg-brand-accent/10 text-brand-accent px-3 py-1 rounded-full text-sm font-medium mb-4">
              <Tag className="w-3 h-3" />
              <span>{displayPost.category}</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-brand-text mb-6 leading-tight">
              {displayPost.title}
            </h1>
            
            {displayPost.excerpt && (
              <p className="text-xl text-brand-textLight leading-relaxed mb-6">
                {displayPost.excerpt}
              </p>
            )}
            
            {/* Article Info */}
            <div className="flex flex-wrap items-center gap-6 text-brand-textLight">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{displayPost.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{displayPost.readTime}</span>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center gap-4 mb-8">
            <Button className="bg-gradient-button hover:bg-gradient-button-hover text-brand-text">
              <Share2 className="w-4 h-4 mr-2" />
              Share Article
            </Button>
            <Button variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white">
              <BookOpen className="w-4 h-4 mr-2" />
              Save to Read Later
            </Button>
          </div>
        </div>
      </section>
      
      {/* Featured Image */}
      {displayPost.coverImage && (
        <section className="py-8">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-xl">
              <Image 
                src={displayPost.coverImage} 
                alt={displayPost.title} 
                fill 
                className="object-cover" 
                priority
              />
            </div>
          </div>
        </section>
      )}
      
      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-8 lg:p-12">
            <div className="prose prose-lg max-w-none 
              prose-headings:text-brand-text prose-headings:font-bold
              prose-p:text-brand-textLight prose-p:leading-relaxed
              prose-a:text-brand-primary prose-a:no-underline hover:prose-a:text-brand-accent
              prose-strong:text-brand-text
              prose-code:bg-brand-secondary/30 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-brand-text
              prose-pre:bg-gray-900 prose-pre:text-white
              prose-blockquote:border-l-brand-accent prose-blockquote:bg-brand-accent/5 prose-blockquote:pl-6
              prose-ul:text-brand-textLight prose-ol:text-brand-textLight
              prose-li:text-brand-textLight">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {displayPost.content}
              </ReactMarkdown>
            </div>
            
            {/* Tags */}
            {displayPost.tags && displayPost.tags.length > 0 && (
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-brand-text mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {displayPost.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-brand-secondary/30 text-brand-text text-sm rounded-full hover:bg-brand-accent/20 transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Related Articles */}
      <section className="py-16 bg-brand-secondary/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-text mb-12 text-center">
            Related <span className="text-brand-accent">Articles</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {relatedArticles.map((article, index) => (
              <Link key={index} href={`/blog/${article.slug}`}>
                <article className="group bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden">
                  <div className="relative h-40">
                    <Image
                      src="/arodonnalogo.jpg"
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-brand-accent text-brand-text px-2 py-1 rounded-md text-xs font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="font-semibold text-brand-text group-hover:text-brand-primary transition-colors">
                      {article.title}
                    </h3>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Enjoyed this article?
          </h2>
          <p className="text-lg text-brand-secondary/90 mb-8">
            Subscribe to our newsletter for more insights and updates from Arodonna ICT Arena.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-brand-accent hover:bg-brand-accentDark text-brand-text px-8 py-3">
              Subscribe to Newsletter
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-primary px-8 py-3">
              Browse More Articles
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
