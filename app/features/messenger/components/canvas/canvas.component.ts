import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  Params
} from '@angular/router';
import { renderDeviceTemplate } from '../../../../shared/services/device';


const phoneTemplUrl = 'canvas.component.phone.html';
const tabletTemplUrl = 'canvas.component.tablet.html';

@Component({
  moduleId: module.id,
  selector: 'tm-canvas',
  templateUrl: renderDeviceTemplate(phoneTemplUrl, tabletTemplUrl),
  styleUrls: ['canvas.component.css']
})
export class CanvasComponent implements OnInit {
  public currentDialog: number;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
    .subscribe((params: Params) => {
      this.currentDialog = +params['id'];
    });
  }
}
