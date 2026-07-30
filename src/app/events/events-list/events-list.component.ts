import { Component, OnInit } from '@angular/core';
import Event from '../event';

// Hotlinked from egghead.io's CDN in 2019. Still resolves, but nothing in this
// repo owns it — see "Known limitations" in the README.
const SVELTE_LOGO = 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/236/full/svelte-logo-vertical.png';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  events: Event[] = [
    new Event('Svelte', 'Svelte description', SVELTE_LOGO),
  ];

  constructor() { }

  ngOnInit() {
  }

}
