import { Component, OnInit } from '@angular/core';
import { Resolution } from './utils/resolution';


const resolution = new Resolution();
let templateUrl = 'app.component.phone.html';

if (resolution.isTablet()) {
	templateUrl = 'app.component.tablet.html';
}

@Component({
	moduleId: module.id,
	selector: 'tm-ng-root',
	templateUrl: templateUrl
})
export class AppComponent implements OnInit {

	ngOnInit() {}
}
