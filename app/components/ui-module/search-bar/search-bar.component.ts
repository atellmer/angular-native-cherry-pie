import { Component, OnInit } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'tm-search-bar',
  templateUrl: 'search-bar.component.html',
  styleUrls: ['search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  handleSearchLayoutLoaded(ev) {
    if (ev.object.android) {
      ev.object.android.setFocusableInTouchMode(true);
    }
  }

  handleSearchBarLoaded(ev) {
    if (ev.object.android) {
      ev.object.android.clearFocus();
    }
  }
}
