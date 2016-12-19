import { Component, OnInit } from '@angular/core';
import { Resolution } from '../../utils/resolution';


const resolution: Resolution = new Resolution();
let templateUrl = 'appbar.component.phone.html';

if (resolution.isTablet()) {
  templateUrl = 'appbar.component.tablet.html';
}

@Component({
  moduleId: module.id,
  selector: 'TmAppbar',
  templateUrl: templateUrl,
  styleUrls: ['appbar.component.css']
})
export class TmAppbarComponent implements OnInit {

  consctructor() {}

  ngOnInit() {}
}
