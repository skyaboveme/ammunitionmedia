export interface IndustryData {
  slug: string;
  title: string;
  heroSubtitle: string;
  heroDescription: string;
  painPoints: { title: string; description: string }[];
  channels: { name: string; description: string; icon: string }[];
  stats: { value: string; label: string }[];
}

export const industries: Record<string, IndustryData> = {
  'retail-ecommerce': {
    slug: 'retail-ecommerce',
    title: 'Retail & E-Commerce',
    heroSubtitle: 'Omnichannel Advertising for Modern Retail',
    heroDescription: 'Reach shoppers across every touchpoint — from streaming TV to in-store digital displays — and close the loop on attribution.',
    painPoints: [
      { title: 'Fragmented Customer Journey', description: 'Shoppers move between devices, apps, and stores. Without identity resolution, you lose track and waste budget.' },
      { title: 'Attribution Gaps', description: 'Connecting digital ad exposure to in-store purchases remains one of retail\'s biggest challenges.' },
      { title: 'Rising Acquisition Costs', description: 'Social media CPMs keep climbing. Diversifying to CTV, audio, and DOOH opens new, more efficient channels.' },
    ],
    channels: [
      { name: 'Retail Media Networks', description: 'Leverage first-party retail data for purchase-based targeting and closed-loop attribution.', icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>` },
      { name: 'Connected TV', description: 'Premium video ads on streaming platforms with household-level targeting.', icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>` },
      { name: 'Identity Resolution', description: 'Unify online and offline customer profiles for cross-device retargeting.', icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>` },
    ],
    stats: [
      { value: '89%', label: 'Identity Match Rate' },
      { value: '2.4x', label: 'Conversion Lift' },
      { value: '34%', label: 'Lower Wasted Spend' },
    ],
  },
  'healthcare-pharma': {
    slug: 'healthcare-pharma',
    title: 'Healthcare & Pharma',
    heroSubtitle: 'Compliant, Targeted Reach for Health Brands',
    heroDescription: 'Connect with patients and providers using privacy-compliant advertising across audio, digital, and out-of-home channels.',
    painPoints: [
      { title: 'Strict Regulatory Compliance', description: 'HIPAA, FDA, and state regulations create complexity around targeting and messaging.' },
      { title: 'Reaching the Right Patients', description: 'Generic demographic targeting wastes budget. Precision at the condition and behavior level is critical.' },
      { title: 'Multi-Location Attribution', description: 'Tying ad exposure to appointment bookings across dozens of clinic locations is a core challenge.' },
    ],
    channels: [
      { name: 'Digital Audio', description: 'Reach patients during wellness-focused podcast and music sessions.', icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>` },
      { name: 'Digital Out of Home', description: 'Programmatic billboards near clinic corridors and high-traffic health zones.', icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>` },
      { name: 'Programmatic Display', description: 'Contextually targeted ads on health information sites and apps.', icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>` },
    ],
    stats: [
      { value: '156%', label: 'Booking Increase' },
      { value: '3.8x', label: 'Foot Traffic Lift' },
      { value: '$12', label: 'Cost Per Appointment' },
    ],
  },
  'automotive': {
    slug: 'automotive',
    title: 'Automotive',
    heroSubtitle: 'Accelerate Showroom Traffic & Brand Loyalty',
    heroDescription: 'From brand awareness to test-drive bookings, reach auto intenders with precision across streaming, audio, and out-of-home.',
    painPoints: [
      { title: 'Long Purchase Cycles', description: 'Auto buyers research for months across dozens of touchpoints before visiting a dealership.' },
      { title: 'Competitive Conquesting', description: 'Every brand is fighting for the same in-market buyer. Precision targeting is the differentiator.' },
      { title: 'Dealership-Level Attribution', description: 'Connecting national brand campaigns to individual dealership traffic is complex but essential.' },
    ],
    channels: [
      { name: 'Connected TV', description: 'Premium video ads targeting in-market auto shoppers on streaming platforms.', icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>` },
      { name: 'Digital Out of Home', description: 'Dynamic billboards near dealership corridors and commuter routes.', icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/></svg>` },
      { name: 'Identity Resolution', description: 'Cross-device targeting of household-level auto intenders.', icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>` },
    ],
    stats: [
      { value: '4.2x', label: 'Showroom Visit Lift' },
      { value: '67%', label: 'Lower Cost Per Lead' },
      { value: '91%', label: 'Brand Recall Rate' },
    ],
  },
  'real-estate': {
    slug: 'real-estate',
    title: 'Real Estate',
    heroSubtitle: 'Put Your Properties in Front of High-Intent Buyers',
    heroDescription: 'Reach homebuyers, renters, and investors with data-driven campaigns across streaming video, audio, and digital signage.',
    painPoints: [
      { title: 'Hyper-Local Targeting', description: 'Real estate is inherently local. Campaigns must reach the right audiences in very specific geographies.' },
      { title: 'Seasonal Demand Shifts', description: 'Market conditions change rapidly. Agile media buying is essential to capitalize on peak windows.' },
      { title: 'Listing-Level ROI', description: 'Connecting ad spend to individual property inquiries and showings requires sophisticated attribution.' },
    ],
    channels: [
      { name: 'Connected TV', description: 'Showcase property video tours to in-market movers on streaming platforms.', icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>` },
      { name: 'Programmatic Display', description: 'Targeted ads on real estate portals, financial planning sites, and local news.', icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/></svg>` },
      { name: 'Digital Out of Home', description: 'Billboards and transit screens in target neighborhoods and commuter corridors.', icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/></svg>` },
    ],
    stats: [
      { value: '3.1x', label: 'Inquiry Volume Lift' },
      { value: '52%', label: 'Lower Cost Per Lead' },
      { value: '78%', label: 'Geo-Targeting Accuracy' },
    ],
  },
  'financial-services': {
    slug: 'financial-services',
    title: 'Financial Services',
    heroSubtitle: 'Build Trust & Acquire High-Value Clients',
    heroDescription: 'Reach affluent consumers and business decision-makers with brand-safe, compliance-friendly advertising.',
    painPoints: [
      { title: 'Brand Trust & Compliance', description: 'Financial brands must appear in premium, brand-safe environments to maintain credibility.' },
      { title: 'High-Value Audience Targeting', description: 'Reaching affluent households and business owners requires precise data activation.' },
      { title: 'Long Decision Cycles', description: 'Financial products require sustained awareness campaigns across multiple touchpoints.' },
    ],
    channels: [
      { name: 'Connected TV', description: 'Premium video placements on trusted streaming platforms for brand credibility.', icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>` },
      { name: 'Digital Audio', description: 'Podcast sponsorships in finance, business, and lifestyle programming.', icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>` },
      { name: 'Programmatic Display', description: 'Contextual targeting on financial news, investment research, and business publications.', icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/></svg>` },
    ],
    stats: [
      { value: '287%', label: 'ROAS' },
      { value: '$1.2M', label: 'AUM Generated' },
      { value: '94%', label: 'Brand Safety Score' },
    ],
  },
  'entertainment-media': {
    slug: 'entertainment-media',
    title: 'Entertainment & Media',
    heroSubtitle: 'Amplify Launches & Grow Audiences at Scale',
    heroDescription: 'Drive tune-in, ticket sales, and streaming subscriptions with multi-channel campaigns that create cultural moments.',
    painPoints: [
      { title: 'Launch Window Pressure', description: 'Releases have narrow windows. Campaigns must generate maximum impact in compressed timelines.' },
      { title: 'Audience Fragmentation', description: 'Entertainment consumers are spread across dozens of platforms. Reaching them requires a multi-channel approach.' },
      { title: 'Measuring Cultural Impact', description: 'Beyond clicks — understanding brand lift, social buzz, and long-term audience growth.' },
    ],
    channels: [
      { name: 'Connected TV', description: 'Trailer placements and sponsored content on major streaming platforms.', icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>` },
      { name: 'Digital Audio', description: 'Sponsorships and dynamic audio ads across podcasts and music streaming.', icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>` },
      { name: 'Digital Out of Home', description: 'Programmatic billboards and venue screens for event-driven campaigns.', icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/></svg>` },
    ],
    stats: [
      { value: '12M', label: 'Impressions Delivered' },
      { value: '340%', label: 'Tune-In Lift' },
      { value: '5.6x', label: 'Social Amplification' },
    ],
  },
};
