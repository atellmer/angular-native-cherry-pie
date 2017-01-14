import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

import { renderDeviceTemplate } from '../../shared/device';
import { IDialog } from '../../shared/models/dialog-item.model';


const phoneTemplUrl = 'panel.component.phone.html';
const tabletTemplUrl = 'panel.component.tablet.html';

@Component({
  moduleId: module.id,
  selector: 'tm-panel',
  templateUrl: renderDeviceTemplate(phoneTemplUrl, tabletTemplUrl),
  styleUrls: ['panel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanelComponent implements OnInit {
  @Input() dialogs: Array<IDialog>;

  constructor() { }

  ngOnInit() { }
}
