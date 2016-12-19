import { Component, OnInit } from '@angular/core';
import { renderDeviceTemplate } from '../../shared/device';


const phoneTemplUrl = 'appbar.component.phone.html';
const tabletTemplUrl = 'appbar.component.tablet.html';

@Component({
  moduleId: module.id,
  selector: 'tm-appbar',
  templateUrl: renderDeviceTemplate(phoneTemplUrl, tabletTemplUrl),
  styleUrls: ['appbar.component.css']
})
export class TmAppbarComponent implements OnInit {

  consctructor() {}

  ngOnInit() {}
}
