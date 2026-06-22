import { Route } from '@angular/router';
import {
  AboutPage,
  BlogDetailPage,
  BlogIndexPage,
  ContactPage,
  FeaturesPage,
  HomePage,
  IndustriesPage,
  PricingPage,
} from './pages';

export const appRoutes: Route[] = [
  { path: '', component: HomePage },
  { path: 'features', component: FeaturesPage },
  { path: 'pricing', component: PricingPage },
  { path: 'industries', component: IndustriesPage },
  { path: 'about', component: AboutPage },
  { path: 'contact', component: ContactPage },
  { path: 'blog', component: BlogIndexPage },
  { path: 'blog/:slug', component: BlogDetailPage },
  { path: '**', redirectTo: '' },
];
