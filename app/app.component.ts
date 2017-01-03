import { Component, OnInit } from '@angular/core';
import { TNSFontIconService } from 'nativescript-ng2-fonticon';


@Component({
	moduleId: module.id,
	selector: 'tm-app',
	template: '<page-router-outlet></page-router-outlet>'
})
export class TmAppComponent implements OnInit {

  constructor(private fonticon: TNSFontIconService) { }

	ngOnInit() {}
}
