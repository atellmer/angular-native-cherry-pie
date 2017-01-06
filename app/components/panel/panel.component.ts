import { Component, OnInit } from '@angular/core';

import { renderDeviceTemplate } from '../../shared/device';
import { FakeUserService } from '../../shared/fake-user.service';
import { IDialog } from '../../shared/models/dialog-item.model';


const phoneTemplUrl = 'panel.component.phone.html';
const tabletTemplUrl = 'panel.component.tablet.html';

@Component({
  moduleId: module.id,
  selector: 'tm-panel',
  templateUrl: renderDeviceTemplate(phoneTemplUrl, tabletTemplUrl),
  styleUrls: ['panel.component.css']
})
export class PanelComponent implements OnInit {
  public dialogs: Array<IDialog>;

  constructor(private fakeUserService: FakeUserService) { }

  ngOnInit() {
    this.fakeUserService
      .getFakeUser({ results: 20 })
      .map(res => {
        return res.results.map((item, index) => {
          return {
            id: index,
            user: {
              id: item.login.salt,
                name: {
                  first: item.name.first,
                  last: item.name.last
                },
              avatar: {
                thumbnail: item.picture.thumbnail
              },
              online: false
            },
            message: {
              from: {
                id: item.login.salt,
                name: {
                  first: item.name.first,
                  last: item.name.last
                },
                avatar: {
                  thumbnail: item.picture.thumbnail
                },
                online: false
              },
              to: {
                id: item.login.salt,
                name: {
                  first: item.name.first,
                  last: item.name.last
                },
                avatar: {
                  thumbnail: item.picture.thumbnail
                },
                online: false
              },
              value: {
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
              },
              status: {
                delivered: false,
                read: true,
                new: false
              },
              timestamp: new Date()
            }
          };
        });
      })
      .subscribe((res: Array<IDialog>) => {
        this.dialogs = res;
      });
  }
}
