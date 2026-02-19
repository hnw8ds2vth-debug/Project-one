import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ArtistPage } from './artist-page';
import { ArtistApiService } from '../application/artists/artist-api.service';
import { AlbumApiService } from '../application/albums/album-api.service';

describe('ArtistPage', () => {
  let component: ArtistPage;
  let fixture: ComponentFixture<ArtistPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistPage],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { paramMap: of(new Map([['artistId', 'artist_1']])) },
        },
        {
          provide: ArtistApiService,
          useValue: { getArtistById$: () => of(null) },
        },
        {
          provide: AlbumApiService,
          useValue: { getAlbumsByArtist$: () => of([]) },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
