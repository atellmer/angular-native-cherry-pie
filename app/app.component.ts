import { Component, OnInit } from '@angular/core';


@Component({
	moduleId: module.id,
	selector: 'tm-app',
	template: '<router-outlet></router-outlet>'
})
export class TmAppComponent implements OnInit {

	ngOnInit() {}
}
