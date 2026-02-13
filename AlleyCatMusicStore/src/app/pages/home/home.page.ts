import { Component } from '@angular/core';
import { ArtistListComponent } from '../../widgets/artist-list';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ArtistListComponent],
  template: `
    <div class="content">
      <div class="left-side">
        <h1>Интернет магазин виниловых пластинок</h1>
        <p>с заботой о вашем музыкальном предпочтении</p>
      </div>
      <div class="divider" role="separator" aria-label="Divider"></div>
      <app-artist-list />
    </div>
  `,
  styles: [],
})
export class HomePage {}
