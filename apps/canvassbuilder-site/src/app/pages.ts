import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import {
  blogPosts,
  estimatorSteps,
  faqs,
  featureGroups,
  industries,
  pricingTiers,
  siteCtas,
} from './marketing-data';
import { SeoService } from './seo.service';

@Component({
  imports: [RouterLink],
  template: `
    <main class="page">
      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">Modern canvassing software</p>
          <h1>Build smarter turf. Reach more voters.</h1>
          <p class="lede">
            Canvass Builder brings turf cutting, mobile canvassing, smart lists,
            volunteer coordination, and reporting into one field operations platform.
          </p>
          <div class="actions">
            <a class="button primary" [href]="ctas.trialUrl">Start Free Trial</a>
            <a class="button secondary" routerLink="/pricing">View Pricing</a>
            <a class="button ghost" [href]="ctas.demoUrl">Book Demo</a>
          </div>
        </div>
        <div class="hero-visual" aria-label="Canvassing map and dashboard preview">
          <img src="/assets/mapbackground.png" alt="Map background for turf planning" />
          <div class="dashboard-card top">
            <strong>1,842</strong>
            <span>doors assigned today</span>
          </div>
          <div class="dashboard-card bottom">
            <strong>68%</strong>
            <span>shift completion</span>
          </div>
        </div>
      </section>

      <section class="metrics" aria-label="Platform highlights">
        <div><strong>10 sec</strong><span>Clear field status</span></div>
        <div><strong>5k-250k</strong><span>Contact tiers</span></div>
        <div><strong>SSR</strong><span>SEO-ready content</span></div>
      </section>

      <section class="section">
        <div class="section-heading">
          <p class="eyebrow">Field stack</p>
          <h2>Everything a modern outreach team needs to move from map to doors.</h2>
        </div>
        <div class="feature-grid">
          @for (feature of features.slice(0, 4); track feature.title) {
            <article class="card">
              <p class="kicker">{{ feature.kicker }}</p>
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.description }}</p>
            </article>
          }
        </div>
      </section>

      <section class="split-section">
        <div>
          <p class="eyebrow">Built for organizers</p>
          <h2>Plan turf, launch canvasses, and report while the day is still in motion.</h2>
        </div>
        <div class="timeline">
          <div><span>01</span><p>Define target audiences with saved smart lists.</p></div>
          <div><span>02</span><p>Cut territory and assign turf to teams.</p></div>
          <div><span>03</span><p>Capture surveys, notes, and outcomes from the field.</p></div>
          <div><span>04</span><p>Track completion, response rates, and follow-up priorities.</p></div>
        </div>
      </section>

      <section class="section">
        <div class="section-heading">
          <p class="eyebrow">Questions</p>
          <h2>Practical details for launch.</h2>
        </div>
        <div class="faq-list">
          @for (faq of faqs; track faq.question) {
            <article>
              <h3>{{ faq.question }}</h3>
              <p>{{ faq.answer }}</p>
            </article>
          }
        </div>
      </section>
    </main>
  `,
  styleUrl: './pages.css',
})
export class HomePage {
  protected readonly ctas = siteCtas;
  protected readonly features = featureGroups;
  protected readonly faqs = faqs;

  constructor() {
    inject(SeoService).setPage({
      title: 'Canvass Builder | Modern Canvassing Software',
      description:
        'Canvass Builder helps field teams cut turf, manage mobile canvassing, target smart lists, and report on outreach progress.',
      path: '/',
    });
  }
}

@Component({
  template: `
    <main class="page compact">
      <section class="section-heading intro">
        <p class="eyebrow">Features</p>
        <h1>Field operations software from first list to final report.</h1>
        <p>
          Each workflow is designed for the real pace of campaigns, advocacy programs,
          nonprofits, and community engagement teams.
        </p>
      </section>
      <section class="feature-detail-grid">
        @for (feature of features; track feature.title) {
          <article class="card feature-detail">
            <p class="kicker">{{ feature.kicker }}</p>
            <h2>{{ feature.title }}</h2>
            <p>{{ feature.description }}</p>
            <ul>
              @for (point of feature.points; track point) {
                <li>{{ point }}</li>
              }
            </ul>
          </article>
        }
      </section>
    </main>
  `,
  styleUrl: './pages.css',
})
export class FeaturesPage {
  protected readonly features = featureGroups;

  constructor() {
    inject(SeoService).setPage({
      title: 'Features | Canvass Builder',
      description:
        'Explore Canvass Builder features for turf cutting, mobile canvassing, smart lists, team management, analytics, and security.',
      path: '/features',
    });
  }
}

@Component({
  imports: [MatSliderModule],
  template: `
    <main class="page compact">
      <section class="section-heading intro">
        <p class="eyebrow">Pricing</p>
        <h1>Plans that scale with your contact universe.</h1>
        <p>
          Start lean, expand as your outreach program grows, and check out securely
          through Stripe when you are ready.
        </p>
      </section>
      <section class="pricing-grid">
        @for (tier of tiers; track tier.name) {
          <article class="price-card">
            <p class="kicker">{{ tier.audience }}</p>
            <h2>{{ tier.name }}</h2>
            <p class="contacts">{{ tier.contacts }}</p>
            <p class="price"><span>{{ tier.price }}</span>/mo</p>
            <ul>
              @for (feature of tier.features; track feature) {
                <li>{{ feature }}</li>
              }
            </ul>
            <a class="button primary full" [href]="tier.href">{{ tier.cta }}</a>
          </article>
        }
      </section>
      <section class="estimator">
        <div>
          <p class="eyebrow">Estimator</p>
          <h2>How many contacts do you manage?</h2>
          <p>
            {{ selected().contacts }} contacts points to the
            <strong>{{ selected().plan }}</strong> plan at
            <strong>{{ selected().price }}</strong>.
          </p>
        </div>
        @defer (on immediate) {
          <mat-slider min="0" max="2" step="1">
            <input matSliderThumb [value]="step()" (valueChange)="step.set($event)" />
          </mat-slider>
        } @placeholder {
          <input
            class="range-placeholder"
            type="range"
            min="0"
            max="2"
            step="1"
            value="1"
            aria-label="Pricing estimator loading"
            disabled
          />
        }
      </section>
    </main>
  `,
  styleUrl: './pages.css',
})
export class PricingPage {
  protected readonly tiers = pricingTiers;
  protected readonly step = signal(1);
  protected readonly selected = computed(() => estimatorSteps[this.step()]);

  constructor() {
    inject(SeoService).setPage({
      title: 'Pricing | Canvass Builder',
      description:
        'Compare Canvass Builder pricing tiers for local campaigns, advocacy organizations, and large field operations.',
      path: '/pricing',
    });
  }
}

@Component({
  template: `
    <main class="page compact checkout-page">
      <section class="section-heading intro checkout-intro">
        <p class="eyebrow">Secure checkout</p>
        <h1>Choose the plan that fits your field program.</h1>
        <p>
          Select a plan below to continue to Stripe's secure checkout. You can review
          the price and billing details before completing your purchase.
        </p>
      </section>
      <section class="checkout-table" aria-label="Canvass Builder plans and checkout">
        <stripe-pricing-table
          pricing-table-id="prctbl_1TiSZELjNduw5DivPddLcsbJ"
          publishable-key="pk_test_51N3V2ALjNduw5Div2LE2UEHAg4LX5A2vZDVizG05tdhMsykW1UphYp0MQNNk2kMM5zqQ3o8HIQ2EioNL3PNEK89J00WoAuAtx2"
        ></stripe-pricing-table>
      </section>
      <p class="checkout-help">
        Questions before purchasing?
        <a class="text-link" href="mailto:patrick@canvassbuilder.com?subject=Canvass%20Builder%20pricing%20question">Contact us</a>.
      </p>
    </main>
  `,
  styleUrl: './pages.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CheckoutPage {
  constructor() {
    inject(SeoService).setPage({
      title: 'Checkout | Canvass Builder',
      description:
        'Choose a Canvass Builder plan and complete your purchase securely with Stripe.',
      path: '/checkout',
    });
  }
}

@Component({
  template: `
    <main class="page compact">
      <section class="section-heading intro">
        <p class="eyebrow">Industries</p>
        <h1>Purpose-built for teams that organize people where they live.</h1>
      </section>
      <section class="industry-grid">
        @for (industry of industries; track industry.name) {
          <article class="card">
            <h2>{{ industry.name }}</h2>
            <p>{{ industry.copy }}</p>
          </article>
        }
      </section>
    </main>
  `,
  styleUrl: './pages.css',
})
export class IndustriesPage {
  protected readonly industries = industries;

  constructor() {
    inject(SeoService).setPage({
      title: 'Industries | Canvass Builder',
      description:
        'Canvass Builder supports political campaigns, advocacy organizations, grassroots movements, nonprofits, and community engagement teams.',
      path: '/industries',
    });
  }
}

@Component({
  template: `
    <main class="page compact story">
      <section class="section-heading intro">
        <p class="eyebrow">About</p>
        <h1>Software for the practical work of building movements.</h1>
        <p>
          Canvass Builder exists to make field operations easier to understand,
          easier to launch, and easier to improve while outreach is happening.
        </p>
      </section>
      <section class="split-section">
        <div>
          <h2>Mission</h2>
          <p>
            Help organizations turn people, places, and priorities into clear field
            plans that volunteers can execute and leaders can trust.
          </p>
        </div>
        <div>
          <h2>Vision</h2>
          <p>
            A modern organizing stack where turf, lists, canvassing, and reporting
            work together instead of living in disconnected tools.
          </p>
        </div>
      </section>
    </main>
  `,
  styleUrl: './pages.css',
})
export class AboutPage {
  constructor() {
    inject(SeoService).setPage({
      title: 'About | Canvass Builder',
      description:
        'Learn about the Canvass Builder mission to improve turf cutting, mobile canvassing, and field reporting for modern outreach teams.',
      path: '/about',
    });
  }
}

@Component({
  imports: [FormsModule],
  template: `
    <main class="page compact contact-page">
      <section class="section-heading intro">
        <p class="eyebrow">Contact</p>
        <h1>Book a demo or talk through your field program.</h1>
        <p>
          This form is ready for a future backend endpoint. Today it opens an email
          fallback with the details filled in.
        </p>
      </section>
      <form class="contact-form" (ngSubmit)="submit()">
        <label>
          Name
          <input name="name" [(ngModel)]="form.name" required />
        </label>
        <label>
          Email
          <input name="email" type="email" [(ngModel)]="form.email" required />
        </label>
        <label>
          Organization
          <input name="organization" [(ngModel)]="form.organization" />
        </label>
        <label>
          Message
          <textarea name="message" rows="6" [(ngModel)]="form.message"></textarea>
        </label>
        <button class="button primary" type="submit">Send Demo Request</button>
      </form>
    </main>
  `,
  styleUrl: './pages.css',
})
export class ContactPage {
  protected readonly form = {
    name: '',
    email: '',
    organization: '',
    message: '',
  };

  constructor() {
    inject(SeoService).setPage({
      title: 'Contact | Canvass Builder',
      description:
        'Contact Canvass Builder to book a demo or discuss canvassing software for your campaign, nonprofit, or advocacy team.',
      path: '/contact',
    });
  }

  submit(): void {
    const body = encodeURIComponent(
      `Name: ${this.form.name}\nEmail: ${this.form.email}\nOrganization: ${this.form.organization}\n\n${this.form.message}`,
    );
    globalThis.location.href = `mailto:patrick@canvassbuilder.com?subject=Canvass%20Builder%20demo%20request&body=${body}`;
  }
}

@Component({
  imports: [RouterLink],
  template: `
    <main class="page compact">
      <section class="section-heading intro">
        <p class="eyebrow">Blog</p>
        <h1>Field guides for better canvassing programs.</h1>
      </section>
      <section class="blog-grid">
        @for (post of posts; track post.slug) {
          <article class="card">
            <p class="kicker">{{ post.date }}</p>
            <h2>{{ post.title }}</h2>
            <p>{{ post.excerpt }}</p>
            <a class="text-link" [routerLink]="['/blog', post.slug]">Read article</a>
          </article>
        }
      </section>
    </main>
  `,
  styleUrl: './pages.css',
})
export class BlogIndexPage {
  protected readonly posts = blogPosts;

  constructor() {
    inject(SeoService).setPage({
      title: 'Blog | Canvass Builder',
      description:
        'Read Canvass Builder guides on turf cutting, mobile canvassing, field reporting, and outreach operations.',
      path: '/blog',
    });
  }
}

@Component({
  imports: [RouterLink],
  template: `
    <main class="page compact article-page">
      @if (post; as article) {
        <article>
          <a class="text-link" routerLink="/blog">Back to blog</a>
          <p class="eyebrow">{{ article.date }}</p>
          <h1>{{ article.title }}</h1>
          <p class="lede">{{ article.excerpt }}</p>
          @for (section of article.sections; track section) {
            <p>{{ section }}</p>
          }
        </article>
      } @else {
        <section class="section-heading intro">
          <h1>Article not found</h1>
          <p>The guide you are looking for is not available.</p>
          <a class="button secondary" routerLink="/blog">View all articles</a>
        </section>
      }
    </main>
  `,
  styleUrl: './pages.css',
})
export class BlogDetailPage {
  protected readonly post = blogPosts.find(
    (item) => item.slug === inject(ActivatedRoute).snapshot.paramMap.get('slug'),
  );

  constructor() {
    const seo = inject(SeoService);
    if (this.post) {
      seo.setPage({
        title: `${this.post.title} | Canvass Builder`,
        description: this.post.excerpt,
        path: `/blog/${this.post.slug}`,
      });
    }
  }
}
