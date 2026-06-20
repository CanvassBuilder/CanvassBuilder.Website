# Canvass Builder Marketing Website Plan

## 📌 Purpose

This document defines the implementation plan, UX direction, SaaS positioning, pricing strategy, and technical architecture for the Canvass Builder marketing website.

The marketing website serves as:
- SaaS acquisition platform
- Product showcase
- SEO landing platform
- Subscription conversion funnel
- Stripe billing entry point
- Demo and onboarding system

The website should present Canvass Builder as a modern SaaS platform for:
- Political campaigns
- Advocacy organizations
- Grassroots movements
- Nonprofits
- Community engagement teams
- Field outreach operations

---
# Site logo

- https://canvassbuilder.com/logo_400x75.svg

---
# UI/UX Direction
Design Style

The website should use:

- Dark theme
- Purple-blue accent gradients
- Modern SaaS styling
- Large dashboard screenshots
- Glassmorphism cards
- Smooth animations
- Mobile-first layouts

# Branding Direction

Recommended visual direction:

- Deep navy backgrounds
- Purple (#030011) accent colors
- Gradient highlights
- Modern typography
- Clean whitespace
- Interactive UI sections

---
# 📱 Mobile-First Requirements

The website must:

Be fully responsive
Optimize for mobile conversions
Support touch-friendly navigation
Load quickly on mobile devices
Maintain SEO performance
---
# 🎯 Core Website Goals

The website should accomplish the following:

1. Explain the product clearly within 10 seconds
2. Convert visitors into free trials
3. Allow direct subscription purchases using Stripe
4. Support SEO and long-term content marketing
5. Build trust with campaigns and organizations
6. Highlight modern canvassing workflows and smart targeting

---

# 🧭 Site Architecture

## Core Pages

### Home
Primary landing page introducing the platform.

### Pricing
Subscription tiers based on contact record counts.

### Features
Detailed product capability breakdown.

### Industries
Targeted pages for specific industries and organizations.

### About
Company story, mission, and vision.

### Contact
Sales inquiries and demo scheduling.

### Blog
SEO content, guides, tutorials, and industry articles.

---

# 🏠 Homepage Structure

## Hero Section

### Headline Ideas

Option 1:
> Modern Canvassing Software for Political Campaigns and Field Teams

Option 2:
> Build Smarter Turf. Reach More Voters.

Option 3:
> Mobile Canvassing, Turf Cutting, and Smart Targeting in One Platform

Option 4:
> Grow Grassroots Movements with Smarter Field Operations

---

## Hero CTA Buttons

Primary CTA:
- Start Free Trial

Secondary CTAs:
- View Pricing
- Book Demo

---

## Hero Visuals

Use modern SaaS-inspired visuals:
- Turf cutting maps
- Mobile canvassing screens
- Dashboard analytics
- Survey workflows
- Team tracking
- Smart list targeting
- Route optimization

---

# 🧩 Homepage Feature Sections

## Smart Turf Cutting

Features:
- Visual territory management
- Precinct overlays
- Walking routes
- Geo-targeted canvassing
- Turf assignment workflows

---

## Mobile Canvassing App

Features:
- Offline support
- Door tracking
- Survey responses
- Real-time synchronization
- Mobile-first experience

---

## Smart Lists

Features:
- Rule-based targeting
- Dynamic filters
- Saved audience segments
- CRM integrations
- Voter and supporter targeting

---

## Team Management

Features:
- Turf assignments
- Organizer dashboards
- Live progress tracking
- Team scoreboards
- Volunteer management

---

## Analytics & Reporting

Features:
- Response rates
- Supporter tracking
- Survey analytics
- Team performance
- Heat maps and reporting

---

## Enterprise-Ready Security

Features:
- Multi-tenant SaaS architecture
- Role-based permissions
- Secure tenant isolation
- Audit logging
- Modern authentication workflows

---

# 💳 Pricing Strategy

## Pricing Model

Pricing should scale based on:
- Contact record count
- Feature access
- Reporting capabilities
- API access
- Support levels

---

# 💰 Recommended Pricing Tiers

## Starter

For local campaigns and nonprofits.

### Features
- Up to 5,000 contacts
- Unlimited users
- Turf cutting
- Surveys
- Mobile canvassing
- Smart lists

### Suggested Price
$49–$79/month

### CTA
Start Free Trial

---

## Growth

For active campaigns and advocacy organizations.

### Features
- Up to 50,000 contacts
- Unlimited users
- Team tracking
- Advanced reporting
- Smart list automation
- Analytics dashboards

### Suggested Price
$199–$299/month

### CTA
Buy Now

---

## Professional

For large organizations and statewide operations.

### Features
- Up to 250,000 contacts
- API access
- Custom branding
- Priority support
- Advanced reporting
- Multi-region support

### Suggested Price
$599+/month

### CTA
Book Demo

---

# 🎚️ Interactive Pricing Slider

The pricing page should include a dynamic pricing estimator.

Example:

```text
How many contacts do you manage?

[==== slider ====]

5,000 contacts → $79/mo
50,000 contacts → $249/mo
250,000 contacts → $699/mo
```

# Purchase flow

Visitor
  ↓
Pricing Page
  ↓
Select Plan
  ↓
Stripe Checkout
  ↓
Successful Payment
  ↓
Platform Creates Tenant
  ↓
Tenant Database Provisioned
  ↓
Admin User Created
  ↓
Redirect to Application

---