import {
  Component,
  OnInit
} from '@angular/core';
import { renderDeviceTemplate } from '../../../../shared/services/device';

const phoneTemplUrl = 'message-panel.component.phone.html';
const tabletTemplUrl = 'message-panel.component.tablet.html';

@Component({
  moduleId: module.id,
  selector: 'tm-message-panel',
  templateUrl: renderDeviceTemplate(phoneTemplUrl, tabletTemplUrl),
  styleUrls: ['message-panel.component.css']
})
export class MessagePanelComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
