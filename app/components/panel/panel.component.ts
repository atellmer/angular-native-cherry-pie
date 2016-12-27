import { Component, OnInit } from '@angular/core';

import { renderDeviceTemplate } from '../../shared/device';
import { FakeUserService } from '../../shared/fake-user.service';
import { IDialog } from '../../shared/models/dialog-item';


const phoneTemplUrl = 'panel.component.phone.html';
const tabletTemplUrl = 'panel.component.tablet.html';

@Component({
  moduleId: module.id,
  selector: 'tm-panel',
  templateUrl: renderDeviceTemplate(phoneTemplUrl, tabletTemplUrl),
  styleUrls: ['panel.component.css']
})
export class TmPanelComponent implements OnInit {
  public dialogs: Array<IDialog>;

  constructor(private fakeUserService: FakeUserService) { }

  ngOnInit() {
    this.fakeUserService
      .getFakeUser({results: 10})
      .map(res => {
        return res.results.map(item => {
          const dialog: IDialog = {
            id: item.login.salt,
            name: {
              first: item.name.first,
              last: item.name.last
            },
            avatar: item.picture.thumbnail,
            message: 'random text message',
            timestamp: new Date(),
            online: true,
            newMessageCount: 5
          };

          return dialog;
        });
      })
      .subscribe((res: Array<IDialog>) => {
        this.dialogs = res;
      });
  }
}
