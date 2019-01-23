import { Component, OnInit } from '@angular/core';
import { YoutubeSearchService } from '@app/services/youtube-search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private youtube: YoutubeSearchService) { }

  ngOnInit() {
  }

  handleChange(event: KeyboardEvent) {
    const target = <HTMLInputElement>event.target;
    this.youtube.search({ value: target.value, option: 'q' });
  }

}
