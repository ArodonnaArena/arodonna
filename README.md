# Arodonna ICT Arena Website

A modern, professional website for Arodonna ICT Arena - showcasing our ICT services, training programs, and innovative applications.

![Arodonna ICT Arena](public/arodonnalogo.jpg)

## 🚀 Features

- **Modern Design**: Premium & Professional styling with Royal Blue and Gold accents
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Project Showcase**: Dynamic portfolio for displaying applications and services
- **Blog System**: Full-featured blog with markdown support
- **Contact System**: Professional contact forms with email integration
- **Admin Panel**: Content management system for easy updates
- **Fast Performance**: Built with Next.js 14 for optimal speed and SEO

## 🛠️ Technologies Used

- **Frontend**: Next.js 14 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Database**: MySQL with Prisma ORM
- **UI Components**: Radix UI, Lucide React icons
- **Content**: Markdown support with ReactMarkdown
- **Email**: Nodemailer for contact forms
- **Development**: Hot reload, TypeScript support

## 🎨 Design System

### Brand Colors
- **Primary**: #2C3E50 (Royal Blue) - Professional and trustworthy
- **Secondary**: #ECF0F1 (Light Gray-White) - Clean and modern  
- **Accent**: #F1C40F (Warm Gold/Yellow) - Highlighting and CTAs
- **Text**: #222222 (Almost Black Gray) - Optimal readability

## 🏗️ Project Structure

```
arodonna/
├── app/                    # Next.js 14 app directory
│   ├── about/             # About page
│   ├── blog/              # Blog pages and posts
│   ├── contact/           # Contact page
│   ├── projects/          # Projects showcase
│   ├── admin/             # Admin panel
│   ├── api/               # API routes
│   └── globals.css        # Global styles and theme
├── components/            # Reusable React components
│   ├── ui/               # Base UI components (buttons, etc.)
│   └── layout/           # Layout components
├── lib/                  # Utilities and database functions
├── prisma/              # Database schema and migrations
├── public/              # Static assets (images, icons)
└── README.md           # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- MySQL database (local or remote)
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd arodonna
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Set up the database**
   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

5. **Run development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:3000`

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file with:

```env
# Database Configuration
DATABASE_URL="mysql://username:password@localhost:3306/database_name"

# SMTP Configuration (for contact forms)
SMTP_HOST="your-smtp-server.com"
SMTP_PORT=587
SMTP_USER="your-email@domain.com"
SMTP_PASS="your-email-password"
CONTACT_TO="contact@arodonnaictarena.com"

# Admin Panel Access
ADMIN_KEY="your-secure-admin-password"
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run prisma:generate` - Generate Prisma client
- `npm run prisma:migrate` - Run database migrations
- `npm run prisma:studio` - Open Prisma Studio GUI

## 📝 Content Management

### Adding Projects
1. Navigate to `/admin` (requires admin key)
2. Use the admin panel to add/edit projects
3. Projects will appear automatically on the projects page

### Writing Blog Posts
1. Access the admin panel at `/admin`
2. Create new blog posts with markdown support
3. Posts support categories, tags, and featured images

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on each push

### Other Platforms
- **Netlify**: Supports Next.js with build settings
- **Railway**: Easy database + app deployment
- **DigitalOcean App Platform**: Full-stack deployment

## 🔒 Security

- Environment variables protect sensitive data
- Admin panel secured with authentication
- Database credentials never exposed to client
- Input validation on all forms
- HTTPS recommended for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support & Contact

- **Website**: [arodonnaictarena.com](https://arodonnaictarena.com)
- **Email**: info@arodonnaictarena.com
- **Phone**: +234 (0) 123 456 7890
- **Address**: Port Harcourt, Rivers State, Nigeria

## 📄 License

This project is proprietary software of Arodonna ICT Arena. All rights reserved.

## 🙏 Acknowledgments

- Built with ❤️ by the Arodonna ICT Arena development team
- Designed with modern web standards and accessibility in mind
- Optimized for performance, SEO, and user experience

---

**Arodonna ICT Arena** - *Professional. Helpful. Innovative. Trustworthy.*

> Empowering businesses through technology since 2020
