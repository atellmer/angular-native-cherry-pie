import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

import { renderDeviceTemplate } from '../../shared/device';

import { Observable } from 'rxjs';
import { IUser } from '../../shared/models/user.model';


const phoneTemplUrl = 'appbar.component.phone.html';
const tabletTemplUrl = 'appbar.component.tablet.html';

@Component({
  moduleId: module.id,
  selector: 'tm-appbar',
  templateUrl: renderDeviceTemplate(phoneTemplUrl, tabletTemplUrl),
  styleUrls: ['appbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppbarComponent implements OnInit {
  @Input() me: IUser;

  constructor() { }

  ngOnInit() { }
}
