import {
  BriefcaseBusiness, Code2, Cpu, Database, FileText, Globe2, HeartHandshake,
  Headphones, Layers3, LayoutDashboard, MonitorSmartphone, ShieldCheck, Smartphone,
  Target, Trophy, UsersRound, CloudUpload, Building2, Hospital, Utensils, GraduationCap,
  Factory, ShoppingCart, ArrowRight, CheckCircle2, MapPin, Mail, Phone, Clock3
} from 'lucide-react';

export const company = {
  name: 'DropXcorp',
  tagline: 'INNOVATE • BUILD • DELIVER',
  email: 'hello@dropxcorp.com',
  phone: '+91 7997005050',
  address: 'India • Remote-first technology studio',
  heroBadge: 'TECHNOLOGY THAT DELIVERS',
  heroTitleLine1: 'We Build',
  heroTitleHighlight: 'Digital Solutions',
  heroTitleLine2: 'That Drive Your Business Forward',
  heroText: 'DropXcorp transforms ideas into powerful, scalable and secure digital products that create value and accelerate growth.',
};

export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services', children: [
    { label: 'Web Design', path: '/services/web-design' },
    { label: 'Web Development', path: '/services/web-development' },
    { label: 'Custom Software', path: '/services/custom-software' },
    { label: 'App Development', path: '/services/app-development' },
    { label: 'Cloud Management', path: '/services/cloud-management' },
    { label: 'Database Development', path: '/services/database-development' },
    { label: 'SaaS Development', path: '/services/saas-development' },
    { label: 'Content Management', path: '/services/content-management' },
  ]},
  { label: 'Industries', path: '/industries', children: [
    { label: 'Healthcare', path: '/industries/healthcare' },
    { label: 'Manufacturing', path: '/industries/manufacturing' },
    { label: 'Restaurants', path: '/industries/restaurants' },
    { label: 'Education', path: '/industries/education' },
    { label: 'Retail', path: '/industries/retail' },
  ]},
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact Us', path: '/contact' },
];

export const stats = [
  { value: '50+', label: 'Projects Delivered', icon: BriefcaseBusiness },
  { value: '30+', label: 'Happy Clients', icon: UsersRound },
  { value: '10+', label: 'Technologies', icon: Code2 },
  { value: '100%', label: 'Client Satisfaction', icon: Trophy },
];

export const services = [
  { slug: 'web-design', title: 'Web Design', icon: LayoutDashboard, short: 'Modern, responsive designs that create a strong digital presence.', details: 'Brand-focused landing pages, responsive layouts, UI systems and conversion-focused website design for modern businesses.' },
  { slug: 'web-development', title: 'Web Development', icon: Code2, short: 'High-performance websites built with clean code and latest technologies.', details: 'Fast, SEO-ready, scalable websites and portals with clean frontend/backend architecture.' },
  { slug: 'custom-software', title: 'Custom Software Development', icon: Cpu, short: 'Tailored software solutions designed to solve unique business challenges.', details: 'ERP, CRM, workflow tools, automation systems and custom dashboards built around your actual operations.' },
  { slug: 'app-development', title: 'Application Development', icon: Smartphone, short: 'Robust, scalable and secure applications for web and mobile.', details: 'Web apps, admin panels, customer portals, mobile-first apps and internal business tools.' },
  { slug: 'cloud-management', title: 'Cloud Management', icon: CloudUpload, short: 'Secure, scalable and cost-effective cloud solutions to power your business.', details: 'Server setup, monitoring, deployment, backups, uptime, CI/CD and cloud optimization.' },
  { slug: 'database-development', title: 'Database Development', icon: Database, short: 'Optimized, secure and reliable database design and development.', details: 'Schema design, indexing, reporting data models, migrations, backups and performance tuning.' },
  { slug: 'saas-development', title: 'SaaS Development', icon: Globe2, short: 'Build and launch scalable SaaS platforms that users love.', details: 'Multi-tenant SaaS platforms, subscription flows, roles, dashboards and deployment pipelines.' },
  { slug: 'content-management', title: 'Enterprise Content Management', icon: FileText, short: 'Organize, manage and secure enterprise content efficiently.', details: 'Document workflows, approval systems, file management, access control and searchable repositories.' },
];

export const valueProps = [
  { title: 'Secure & Reliable', text: 'Security, performance and quality are in our DNA.', icon: ShieldCheck },
  { title: 'Focused on Results', text: 'We deliver solutions that drive growth and efficiency.', icon: Target },
  { title: 'Client-Centric Approach', text: 'We listen, understand and deliver exactly what you need.', icon: UsersRound },
  { title: 'Support & Maintenance', text: 'We provide ongoing support to ensure your success.', icon: Headphones },
];

export const industries = [
  { slug: 'healthcare', title: 'Healthcare & Hospitals', icon: Hospital, text: 'Hospital ERP, OPD, pharmacy, lab, billing, accounting and patient workflow solutions.' },
  { slug: 'manufacturing', title: 'Manufacturing', icon: Factory, text: 'Production tracking, payroll, inventory, lots, attendance and workflow automation.' },
  { slug: 'restaurants', title: 'Restaurants', icon: Utensils, text: 'Smart table management, waiter pad, QR ordering, billing and GST-ready reports.' },
  { slug: 'education', title: 'Education', icon: GraduationCap, text: 'Digital classrooms, school management, immersive learning and student operations.' },
  { slug: 'retail', title: 'Retail & Commerce', icon: ShoppingCart, text: 'POS, inventory, customer accounts, invoices, digital catalogs and sales analytics.' },
];

export const portfolio = [
  { name: 'DropX ERP', category: 'Manufacturing ERP', text: 'Factory-focused ERP with lots, production, payroll, attendance, inventory and reports.' },
  { name: 'DropX MediCore', category: 'Hospital ERP', text: 'Hospital management suite for OPD, pharmacy, lab, billing, reports and settings.' },
  { name: 'DropX Restro', category: 'Restaurant Hub', text: 'Modern restaurant operating system with table states, QR ordering and billing.' },
  { name: 'DropX Control', category: 'Deployment Platform', text: 'Centralized release, installation, monitoring and client server management platform.' },
  { name: 'Biometric Attendance', category: 'IoT + ERP', text: 'ESP32-based attendance ecosystem with LAN sync, employee punches and ERP integration.' },
  { name: 'Enterprise Websites', category: 'Web Solutions', text: 'Premium business websites with responsive UI and lead-generation structure.' },
];



export const jobs = [
  { role: 'Full Stack Developer', type: 'Remote / Hybrid', text: 'React, Node.js, APIs, databases and clean product thinking.' },
  { role: 'UI/UX Designer', type: 'Remote / Hybrid', text: 'Modern web layouts, design systems, responsive product screens and branding.' },
  { role: 'Implementation Executive', type: 'On-site / Remote', text: 'Client onboarding, software setup, training and support documentation.' },
];

export const processSteps = [
  { title: 'Discover', text: 'We understand your business, workflow, users and goals.' },
  { title: 'Design', text: 'We create clean UI/UX, architecture and a practical delivery roadmap.' },
  { title: 'Build', text: 'We develop secure, scalable and maintainable digital products.' },
  { title: 'Deliver', text: 'We deploy, train, support and continuously improve the solution.' },
];

export const contactCards = [
  { title: 'Visit Us', value: company.address, icon: MapPin },
  { title: 'Email Us', value: company.email, icon: Mail },
  { title: 'Call Us', value: company.phone, icon: Phone },
  { title: 'Working Hours', value: 'Mon - Sat • 10:00 AM - 7:00 PM', icon: Clock3 },
];

export const checks = [
  'Separate editable pages for every main website section',
  'Responsive desktop, tablet and mobile layout',
  'Service and industry detail pages generated from one data file',
  'DropXcorp blue-white enterprise visual style',
  'Clean cards, CTA sections, dropdown menus and contact form UI',
];
