import { Component, OnInit } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'tm-app',
  template: `
    <page-router-outlet></page-router-outlet>
  `
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
}
