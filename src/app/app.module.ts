import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { appRouterProviders } from './app.routes';
import { SearchComponent } from './search/search.component';
import { ArtistComponent } from './artist/artist.component';
import { SpotifyService } from './services/spotify.service';
import { AlbumComponent } from './album/album.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    SearchComponent,
    ArtistComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouterProviders
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
