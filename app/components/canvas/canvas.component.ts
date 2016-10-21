import { Component, OnInit } from '@angular/core';
import { Resolution } from '../../utils/resolution';


const resolution: Resolution = new Resolution();
let templateUrl: string = 'canvas.component.phone.html';

if (resolution.isTablet()) {
	templateUrl = 'canvas.component.tablet.html';
}

@Component({
	moduleId: module.id,
	selector: 'TmCanvas',
	templateUrl: templateUrl,
	styleUrls: ['canvas.component.css']
})
export class TmCanvasComponent implements OnInit {
	constructor() { }

	ngOnInit() {}
}
