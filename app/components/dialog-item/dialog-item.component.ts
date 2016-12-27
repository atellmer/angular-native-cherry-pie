import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import { renderDeviceTemplate } from '../../shared/device';
import { IDialog } from '../../shared/models/dialog-item';


const phoneTemplUrl = 'dialog-item.component.phone.html';
const tabletTemplUrl = 'dialog-item.component.tablet.html';

@Component({
  moduleId: module.id,
  selector: 'tm-dialog-item',
  templateUrl: renderDeviceTemplate(phoneTemplUrl, tabletTemplUrl),
  styleUrls: ['dialog-item.component.css']
})
export class DialogItemComponent implements OnInit {
  @Input() dialog: IDialog;

  constructor() { }

  ngOnInit() { }
}
