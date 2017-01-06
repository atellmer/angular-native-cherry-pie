import { Routes } from '@angular/router';

import { isPhone, isTablet } from './shared/device';
import { PhoneLayoutComponent } from './components/phone-layout';
import { TabletLayoutComponent } from './components/tablet-layout';
import { PanelComponent } from './components/panel';
import { CanvasComponent } from './components/canvas';


let routes: Routes = [];

if (isPhone()) {
  routes = [
    {
      path: '',
      component: PhoneLayoutComponent,
      children: [
        {
          path: 'phone/panel',
          component: PanelComponent
        },
        {
          path: 'phone/canvas',
          children: [
            {
              path: ':id',
              children: [
                {
                  path: '',
                  component: CanvasComponent
                }
              ]
            }
          ]
        },
        {
          path: '',
          redirectTo: 'phone/panel',
          pathMatch: 'full'
        },
        {
          path: '**',
          redirectTo: 'phone/panel'
        }
      ]
    }
  ];
}

if (isTablet()) {
  routes = [
    {
      path: '',
      component: TabletLayoutComponent
    }
  ];
}

export const ROUTES: Routes = routes;
