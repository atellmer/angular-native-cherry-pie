import { Component, OnInit } from '@angular/core';
import { Resolution } from '../../utils/resolution';

const resolution: Resolution = new Resolution();
let templateUrl: string = 'panel.component.phone.html';

if (resolution.isTablet()) {
	templateUrl = 'panel.component.tablet.html';
}

@Component({
	moduleId: module.id,
	selector: 'TmPanel',
	templateUrl: templateUrl,
	styleUrls: ['panel.component.css']
})
export class TmPanelComponent implements OnInit {
	constructor() { }

	ngOnInit() {}
}
