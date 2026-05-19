import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { navLinks, siteCtas } from './marketing-data';

@Component({
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly navLinks = navLinks;
  protected readonly ctas = siteCtas;
  protected readonly menuOpen = signal(false);
}
