import { Component, OnInit } from '@angular/core';
import { renderDeviceTemplate } from '../../shared/device';


const phoneTemplUrl = 'panel.component.phone.html';
const tabletTemplUrl = 'panel.component.tablet.html';

@Component({
  moduleId: module.id,
  selector: 'tm-panel',
  templateUrl: renderDeviceTemplate(phoneTemplUrl, tabletTemplUrl),
  styleUrls: ['panel.component.css']
})
export class TmPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
}
