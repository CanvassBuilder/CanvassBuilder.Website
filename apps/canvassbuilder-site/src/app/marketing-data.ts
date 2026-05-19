export interface PageMeta {
  title: string;
  description: string;
  path: string;
}

export const siteCtas = {
  trialUrl: '#trial-placeholder',
  pricingUrl: '/pricing',
  demoUrl: 'mailto:patrick@canvassbuilder.com?subject=Canvass%20Builder%20demo',
  checkoutUrl: '#stripe-checkout-placeholder',
};

export const navLinks = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Industries', href: '/industries' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const featureGroups = [
  {
    title: 'Smart Turf Cutting',
    kicker: 'Territory planning',
    description:
      'Build walkable turf, organize precinct overlays, and assign canvassing packets without losing sight of the campaign map.',
    points: ['Visual territory management', 'Precinct and district overlays', 'Walking routes and assignments'],
  },
  {
    title: 'Mobile Canvassing App',
    kicker: 'Field execution',
    description:
      'Give canvassers a fast mobile workflow for door outcomes, surveys, notes, and synchronized follow-up data.',
    points: ['Offline-friendly door tracking', 'Survey response capture', 'Real-time sync patterns'],
  },
  {
    title: 'Smart Lists',
    kicker: 'Targeting',
    description:
      'Turn messy contact universes into clear audiences with saved filters and reusable segmentation logic.',
    points: ['Rule-based targeting', 'Dynamic supporter segments', 'Voter and member list workflows'],
  },
  {
    title: 'Team Management',
    kicker: 'Organizer control',
    description:
      'Keep field directors, organizers, captains, and volunteers aligned from planning through end-of-day reporting.',
    points: ['Turf assignments', 'Progress dashboards', 'Volunteer management'],
  },
  {
    title: 'Analytics & Reporting',
    kicker: 'Measured progress',
    description:
      'Track outcomes, response rates, contact attempts, and team performance while decisions can still change the result.',
    points: ['Survey analytics', 'Supporter tracking', 'Heat maps and reports'],
  },
  {
    title: 'Enterprise-Ready Security',
    kicker: 'SaaS foundation',
    description:
      'Designed around multi-tenant operations, clear permissions, and modern authentication expectations.',
    points: ['Tenant isolation', 'Role-based permissions', 'Audit-ready workflows'],
  },
];

export const pricingTiers = [
  {
    name: 'Starter',
    audience: 'Local campaigns and nonprofits',
    contacts: 'Up to 5,000 contacts',
    price: '$79',
    cta: 'Start Free Trial',
    href: siteCtas.trialUrl,
    features: ['Unlimited users', 'Turf cutting', 'Surveys', 'Mobile canvassing', 'Smart lists'],
  },
  {
    name: 'Growth',
    audience: 'Active campaigns and advocacy teams',
    contacts: 'Up to 50,000 contacts',
    price: '$249',
    cta: 'Buy Now',
    href: siteCtas.checkoutUrl,
    features: ['Team tracking', 'Advanced reporting', 'Smart list automation', 'Analytics dashboards', 'Priority onboarding'],
  },
  {
    name: 'Professional',
    audience: 'Large and statewide operations',
    contacts: 'Up to 250,000 contacts',
    price: '$699+',
    cta: 'Book Demo',
    href: siteCtas.demoUrl,
    features: ['API access', 'Custom branding', 'Priority support', 'Multi-region support', 'Advanced reporting'],
  },
];

export const estimatorSteps = [
  { contacts: '5,000', price: '$79/mo', plan: 'Starter' },
  { contacts: '50,000', price: '$249/mo', plan: 'Growth' },
  { contacts: '250,000', price: '$699+/mo', plan: 'Professional' },
];

export const industries = [
  {
    name: 'Political Campaigns',
    copy: 'Cut turf, prioritize persuasion universes, and keep volunteers moving through election day.',
  },
  {
    name: 'Advocacy Organizations',
    copy: 'Mobilize supporters for legislative, ballot, and public pressure campaigns with measurable field activity.',
  },
  {
    name: 'Grassroots Movements',
    copy: 'Coordinate local teams, neighborhood captains, and community events with a shared operating picture.',
  },
  {
    name: 'Nonprofits',
    copy: 'Reach donors, members, and program communities with respectful outreach and clear follow-up data.',
  },
  {
    name: 'Community Engagement Teams',
    copy: 'Manage listening campaigns, resident outreach, and public participation work in one place.',
  },
];

export const faqs = [
  {
    question: 'Is this only for political campaigns?',
    answer:
      'No. The product is positioned for campaigns, advocacy groups, nonprofits, and any team that needs structured field outreach.',
  },
  {
    question: 'Are the checkout links live?',
    answer:
      'Not yet. The site uses centralized placeholders so Stripe, demo, and trial URLs can be swapped in as soon as they are ready.',
  },
  {
    question: 'Does the website render for SEO?',
    answer:
      'Yes. The Angular app is configured for SSR and prerendered marketing routes so crawlers receive meaningful page content.',
  },
];

export const blogPosts = [
  {
    slug: 'smarter-turf-cutting',
    title: 'How smarter turf cutting changes field capacity',
    excerpt:
      'A practical look at turning maps, precincts, and volunteer availability into field plans teams can actually complete.',
    date: 'May 18, 2026',
    sections: [
      'Good turf is more than a shape on a map. It balances density, walkability, target quality, and the time a volunteer actually has.',
      'Canvass Builder is positioned around that operating reality: organizers need to see the territory, assign work quickly, and learn from results as the field program moves.',
    ],
  },
  {
    slug: 'mobile-canvassing-checklist',
    title: 'A launch checklist for mobile canvassing teams',
    excerpt:
      'The essentials every organizer should confirm before putting volunteers in the field with a mobile canvassing workflow.',
    date: 'May 18, 2026',
    sections: [
      'Mobile canvassing works best when users know the path from assignment to sync. That means clear lists, plain survey language, and a recovery path when service gets spotty.',
      'The goal is not more screens. The goal is fewer moments where a volunteer has to guess what to do next.',
    ],
  },
  {
    slug: 'field-data-reporting',
    title: 'What field reporting should answer before the next shift',
    excerpt:
      'Response rates, completion, supporter movement, and team throughput are only useful when they guide the next decision.',
    date: 'May 18, 2026',
    sections: [
      'A field report should tell leaders where the plan is working, where capacity is stuck, and which audiences deserve the next touch.',
      'That is why reporting belongs close to turf assignments, surveys, and team management rather than buried after the campaign is over.',
    ],
  },
];
