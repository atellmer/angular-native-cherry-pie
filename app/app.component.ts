import { Component, OnInit } from '@angular/core';
import { Page } from 'ui/page';
import { topmost } from 'ui/frame';


@Component({
	moduleId: module.id,
	selector: 'tm-ng-root',
	templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
	private page: Page;

	ngOnInit() {
		this.page = topmost().currentPage;
		this.page.actionBarHidden = true;
	}
}
