import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

import { Artist } from '../artist';

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
    providers: [SpotifyService]
})
export class SearchComponent {
    searchStr: string;
    searchRes: Artist[];
    constructor(private _spotifyService: SpotifyService) { }

    searchMusic() {
        this._spotifyService.searchMusic(this.searchStr)
            .subscribe(res => {
                this.searchRes = (res.artists.items);
            })
    }
}
