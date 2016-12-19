import { Component, OnInit } from '@angular/core';
import { renderDeviceTemplate } from '../../shared/device';


const phoneTemplUrl = 'canvas.component.phone.html';
const tabletTemplUrl = 'canvas.component.tablet.html';

@Component({
  moduleId: module.id,
  selector: 'tm-canvas',
  templateUrl: renderDeviceTemplate(phoneTemplUrl, tabletTemplUrl),
  styleUrls: ['canvas.component.css']
})
export class TmCanvasComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
