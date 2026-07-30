import { Component, OnInit } from '@angular/core';
import Event from '../event';

// Relative, so it resolves against <base href> and works under the GitHub Pages
// project sub-path. Was a hotlink to egghead.io's CDN in 2019 — see docs/ASSETS.md.
const SVELTE_LOGO = 'assets/svelte-logo.svg';

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
