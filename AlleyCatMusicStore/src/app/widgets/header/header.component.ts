import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public readonly navLinks = [
    { label: 'Discover', route: '/discover' },
    { label: 'Collection', route: '/collection' },
    { label: 'Artists', route: '/artists' },
    { label: 'About', route: '/about' },
  ] as const;
}
