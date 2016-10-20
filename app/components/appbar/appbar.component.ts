import { Component, OnInit } from '@angular/core';
import { Resolution } from '../../utils/resolution';


const resolution = new Resolution();
let templateUrl = 'appbar.component.phone.html';

if (resolution.isTablet()) {
	templateUrl = 'appbar.component.tablet.html';
}

@Component({
	moduleId: module.id,
	selector: 'tm-appbar',
	templateUrl: templateUrl,
	styleUrls: ['appbar.component.css']
})
export class AppbarComponent implements OnInit {

	ngOnInit() {}
}
