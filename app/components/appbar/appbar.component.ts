import { Component, OnInit } from '@angular/core';

import { renderDeviceTemplate } from '../../shared/device';
import { FakeUserService } from '../../shared/fake-user.service';


const phoneTemplUrl = 'appbar.component.phone.html';
const tabletTemplUrl = 'appbar.component.tablet.html';

@Component({
  moduleId: module.id,
  selector: 'tm-appbar',
  templateUrl: renderDeviceTemplate(phoneTemplUrl, tabletTemplUrl),
  styleUrls: ['appbar.component.css']
})
export class AppbarComponent implements OnInit {
  public userAvatar: string;

  constructor(private fakeUserService: FakeUserService) { }

  ngOnInit() {
    this.fakeUserService
      .getFakeUser({results: 1})
      .subscribe((res: any) => {
        this.userAvatar = res.results[0].picture.thumbnail;
      });
  }
}
