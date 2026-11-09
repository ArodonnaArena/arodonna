import Link from 'next/link'
import {
  Activity,
  ArrowRight,
  BarChart3,
  Cloud,
  Code2,
  FileText,
  GitBranch,
  Globe,
  GraduationCap,
  HardDrive,
  KeyRound,
  Network,
  Palette,
  Server,
  ShieldCheck,
  Smartphone,
  Wallet,
  Wrench,
} from 'lucide-react'

const services = [
  {
    title: 'Cloud Computing and Microsoft Azure Solutions',
    description:
      'We provide cloud computing solutions using Microsoft Azure, helping organisations deploy, manage and maintain secure and scalable cloud infrastructure.',
    icon: Cloud,
    offerings: [
      'Microsoft Azure cloud setup, configuration and administration.',
      'Azure infrastructure provisioning and deployment.',
      'Azure Virtual Machine creation, configuration and management.',
      'Azure Storage Account deployment and administration.',
      'Azure resource management and optimisation.',
      'Azure cloud environment configuration and maintenance.',
      'Cloud infrastructure migration and deployment support.',
      'Management of cloud-based resources for business and organisational operations.',
    ],
  },
  {
    title: 'Cloud Infrastructure Design and Management',
    description:
      'We design, deploy, configure and manage cloud infrastructure to support business applications, enterprise systems and organisational workloads.',
    icon: Network,
    offerings: [
      'Cloud infrastructure planning and architecture.',
      'Virtual network (VNet) design and deployment.',
      'Subnet configuration and management.',
      'Network Security Group (NSG) configuration.',
      'Virtual Network Peering.',
      'Public and private IP address configuration.',
      'Azure Virtual Machine networking.',
      'Cloud infrastructure troubleshooting.',
      'Infrastructure maintenance and operational support.',
      'Multi-tier cloud infrastructure deployment.',
    ],
  },
  {
    title: 'Infrastructure as Code (IaC) and Cloud Automation',
    description:
      'We leverage Infrastructure as Code technologies to automate infrastructure deployment, configuration and management, helping organisations achieve consistency, efficiency and operational reliability.',
    icon: Code2,
    offerings: [
      'Infrastructure as Code implementation.',
      'Azure Resource Manager (ARM) template development.',
      'Reusable infrastructure template creation.',
      'Automated deployment of Azure resources.',
      'Azure CLI automation.',
      'PowerShell scripting and automation.',
      'Bash scripting for infrastructure operations.',
      'Automated Virtual Machine provisioning.',
      'Automated network and storage resource deployment.',
      'Resource tagging and configuration automation.',
      'Infrastructure deployment standardisation.',
    ],
  },
  {
    title: 'Cloud Identity and Access Management',
    description:
      'We help organisations secure their cloud environments by implementing appropriate identity management, authentication and access control systems.',
    icon: KeyRound,
    offerings: [
      'Microsoft Entra ID configuration and administration.',
      'Azure Active Directory administration.',
      'Role-Based Access Control (RBAC).',
      'Identity and Access Management (IAM).',
      'Multi-Factor Authentication (MFA) configuration.',
      'Conditional Access policy implementation.',
      'User and group management.',
      'Permission assignment and access control.',
      'Identity security configuration.',
      'Cloud access management and monitoring.',
    ],
  },
  {
    title: 'Cloud Security and Governance',
    description:
      'We provide cloud security configuration and governance solutions to help organisations protect their infrastructure, control access and maintain secure operational environments.',
    icon: ShieldCheck,
    offerings: [
      'Azure security configuration.',
      'Microsoft Defender for Cloud configuration and support.',
      'Azure Key Vault deployment and management.',
      'Network security configuration.',
      'Access control and security policy management.',
      'Azure Policy implementation.',
      'Cloud resource governance.',
      'Security configuration assessment.',
      'Infrastructure compliance support.',
      'Cloud security monitoring and operational guidance.',
    ],
  },
  {
    title: 'Cloud Backup and Disaster Recovery',
    description:
      'We help organisations protect critical digital assets and improve business continuity through cloud backup and recovery solutions.',
    icon: HardDrive,
    offerings: [
      'Azure Backup configuration and management.',
      'Cloud backup planning and implementation.',
      'Virtual Machine backup configuration.',
      'Data protection and recovery support.',
      'Backup monitoring and administration.',
      'Recovery planning and operational support.',
      'Cloud infrastructure restoration assistance.',
      'Business continuity support.',
    ],
  },
  {
    title: 'Cloud Monitoring and Performance Management',
    description:
      'We provide monitoring and operational management services that help organisations maintain visibility into their cloud infrastructure and identify potential performance or operational issues.',
    icon: Activity,
    offerings: [
      'Azure Monitor configuration and management.',
      'Log Analytics workspace configuration.',
      'Cloud resource monitoring.',
      'Infrastructure performance monitoring.',
      'Log collection and analysis.',
      'Operational troubleshooting.',
      'Resource health monitoring.',
      'Cloud operational reporting.',
      'Infrastructure performance assessment.',
    ],
  },
  {
    title: 'Cloud Cost Management and Optimisation',
    description:
      'We assist organisations in monitoring and managing their cloud expenditure through resource management, cost analysis and cloud governance practices.',
    icon: Wallet,
    offerings: [
      'Azure Cost Management configuration and support.',
      'Cloud resource usage monitoring.',
      'Cloud expenditure analysis.',
      'Resource tagging and cost tracking.',
      'Infrastructure resource assessment.',
      'Cloud cost reporting.',
      'Resource utilisation reviews.',
      'Cloud governance and cost-control recommendations.',
    ],
  },
  {
    title: 'DevOps and CI/CD Automation',
    description:
      'We support organisations in adopting modern DevOps practices that improve collaboration between development and IT operations teams while promoting efficient application deployment.',
    icon: GitBranch,
    offerings: [
      'Microsoft Azure DevOps configuration and support.',
      'Git and GitHub version control.',
      'Azure Pipelines implementation.',
      'YAML pipeline development.',
      'Continuous Integration (CI) support.',
      'Continuous Deployment (CD) support.',
      'Application deployment automation.',
      'Azure App Service deployment support.',
      'DevOps workflow development.',
      'Agile and Scrum workflow support.',
    ],
  },
  {
    title: 'Systems Administration and IT Infrastructure Support',
    description:
      'We provide systems administration and technical support services to help organisations maintain reliable computing environments.',
    icon: Server,
    offerings: [
      'Windows Server administration.',
      'Linux server administration.',
      'Ubuntu system configuration and support.',
      'Server maintenance and troubleshooting.',
      'Operating system configuration.',
      'IT infrastructure troubleshooting.',
      'System performance monitoring.',
      'Technical support and operational maintenance.',
    ],
  },
  {
    title: 'IT Documentation and Technical Consultancy',
    description:
      'We provide technical documentation and IT consultancy services to support efficient infrastructure management, knowledge sharing and operational standardisation.',
    icon: FileText,
    offerings: [
      'IT infrastructure documentation.',
      'Cloud architecture documentation.',
      'Standard Operating Procedure (SOP) development.',
      'Technical configuration guides.',
      'Infrastructure deployment documentation.',
      'Troubleshooting guides.',
      'Technical reporting.',
      'Cloud infrastructure consultancy.',
      'IT operational planning and advisory services.',
    ],
  },
  {
    title: 'Website Design and Development',
    description:
      'We design and develop responsive websites and web applications to help organisations establish and grow their digital presence.',
    icon: Globe,
    offerings: [
      'Website design and development.',
      'Responsive layouts for desktop, tablet and mobile.',
      'Web application development.',
      'Website updates and maintenance.',
      'User-focused website experiences.',
      'Website deployment support.',
    ],
  },
  {
    title: 'Mobile Application Development',
    description:
      'We build mobile application solutions for organisations looking to serve their customers and teams on mobile devices.',
    icon: Smartphone,
    offerings: [
      'Mobile application development for iOS and Android.',
      'Native and cross-platform application solutions.',
      'Application interface and experience design.',
      'Mobile application testing and deployment support.',
      'Application maintenance and technical support.',
    ],
  },
  {
    title: 'Database Administration and Solutions',
    description:
      'We support organisations with database systems and dependable database operations for their applications and business information.',
    icon: Server,
    offerings: [
      'Database system setup and administration.',
      'Database backup and recovery support.',
      'Database maintenance and troubleshooting.',
      'Database integration for software solutions.',
      'Operational support for data systems.',
    ],
  },
  {
    title: 'Cybersecurity Services',
    description:
      'We help organisations strengthen the security of their systems, networks and digital assets through practical security services.',
    icon: ShieldCheck,
    offerings: [
      'Security configuration for IT environments.',
      'Network and access security support.',
      'Security controls and policy guidance.',
      'Security monitoring and troubleshooting.',
      'Technical guidance for protecting digital assets.',
    ],
  },
  {
    title: 'Data Analytics',
    description:
      'We help organisations turn data into useful information that can support reporting, planning and informed business decisions.',
    icon: BarChart3,
    offerings: [
      'Data preparation and analysis.',
      'Data visualisation and reporting.',
      'Business and operational insights.',
      'Support for data-driven decision-making.',
    ],
  },
  {
    title: 'SEO and UI/UX Design',
    description:
      'We support organisations in improving their online visibility and creating clear, intuitive digital experiences for their users.',
    icon: Palette,
    offerings: [
      'Search engine optimisation (SEO) support.',
      'Website usability and experience improvements.',
      'User interface (UI) design.',
      'User experience (UX) design.',
      'Web page and landing page design.',
    ],
  },
  {
    title: 'ICT Training and Consultancy',
    description:
      'We provide practical ICT training and consulting to help individuals and organisations build skills and make informed technology decisions.',
    icon: GraduationCap,
    offerings: [
      'Software development training.',
      'Practical ICT skills development.',
      'IT consultancy and technical advisory.',
      'Digital transformation guidance.',
      'Technology planning and support.',
    ],
  },
  {
    title: 'Hardware, Repairs and Technical Support',
    description:
      'We provide computer and electronics support to help customers maintain, repair and equip their technology environments.',
    icon: Wrench,
    offerings: [
      'Computer and electronics repairs.',
      'Computer and accessories sales.',
      'System maintenance and troubleshooting.',
      'Hardware setup and technical support.',
      'Technology equipment guidance.',
    ],
  },
]

const technologies = [
  'Microsoft Azure',
  'Microsoft Entra ID',
  'Azure Virtual Machines',
  'Azure Virtual Networks',
  'Azure Storage',
  'Azure Resource Manager (ARM)',
  'Azure CLI',
  'PowerShell',
  'Bash',
  'Azure DevOps',
  'Azure Pipelines',
  'Git and GitHub',
  'YAML',
  'Microsoft Defender for Cloud',
  'Azure Monitor',
  'Log Analytics',
  'Windows Server',
  'Linux and Ubuntu',
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a1f2f] via-[#22283a] to-[#3e475c] py-20 text-white lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(241,196,15,0.16),transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-[0.18em] text-brand-accent">Arodonna ICT Arena</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">IT Solutions | Cloud Infrastructure | Digital Transformation</h1>
            <h2 className="mt-8 text-2xl font-semibold">Our Services</h2>
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              Arodonna ICT Arena provides technology solutions, IT infrastructure services, cloud
              computing, systems administration, automation and digital transformation support to
              businesses, institutions and organisations.
            </p>
            <p className="mt-4 leading-relaxed text-white/70">
              Our services help organisations establish secure, scalable, efficient and reliable IT
              environments through modern cloud technologies, infrastructure management, automation
              and enterprise IT solutions.
            </p>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-accent px-6 py-3 font-semibold text-brand-primary transition hover:bg-yellow-300">
              Discuss your requirements <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service, index) => (
              <article key={service.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-card md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-accent">{String(index + 1).padStart(2, '0')}</p>
                    <h2 className="mt-1 text-xl font-bold text-brand-text">{service.title}</h2>
                    <p className="mt-3 leading-relaxed text-brand-textLight">{service.description}</p>
                  </div>
                </div>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {service.offerings.map((offering) => (
                    <li key={offering} className="flex gap-2 text-sm leading-relaxed text-brand-textLight">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                      {offering}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-secondary/40 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-text">Our Technology Expertise</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-brand-textLight">
            Our technical service portfolio spans cloud, identity, automation, DevOps, systems,
            web and digital solutions.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <li key={technology} className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-brand-text">
                {technology}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-brand-primary py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold">Our Commitment</h2>
          <p className="mt-5 text-lg leading-relaxed text-white/80">
            At Arodonna ICT Arena, we are committed to delivering reliable, secure and scalable
            technology solutions that help organisations improve IT operations, embrace cloud
            technologies, automate infrastructure management and achieve greater operational
            efficiency.
          </p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-accent px-6 py-3 font-semibold text-brand-primary transition hover:bg-yellow-300">
            Contact Arodonna <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
