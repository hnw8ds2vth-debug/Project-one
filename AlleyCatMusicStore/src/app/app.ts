import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Album } from './entities';
import { ApiResponse } from './shared/types';
import { HeaderComponent } from './widgets/header/header.component';
import { FooterComponent } from './widgets/footer/footer.component';

@Component({
  selector: 'alley-cat-music-store-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('AlleyCatMusicStore');
  constructor() {
    let a: Album ={ id: '', createdAt: new Date(), updatedAt: new Date(), title: '', slug: '', artistId: '', releaseDate: new Date(), genres: [], trackCount: 0, duration: 0, isCompilation: false }

  let b: ApiResponse<string> ={data: 'test', success: true}
  let c: ApiResponse<Album> ={ data: a, success: true }
  
  
  
  
  
  
  }
}
