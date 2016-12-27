import { Routes } from '@angular/router';

import { isPhone, isTablet } from './shared/device';
import { TmPhoneLayoutComponent } from './components/phone-layout';
import { TmTabletLayoutComponent } from './components/tablet-layout';
import { TmPanelComponent } from './components/panel';
import { TmCanvasComponent } from './components/canvas';


let routes: Routes = [];

if (isPhone()) {
  routes = [
    {
      path: '',
      component: TmPhoneLayoutComponent,
      children: [
        {
          path: 'phone/panel',
          component: TmPanelComponent
        },
        {
          path: 'phone/canvas',
          children: [
            {
              path: ':id',
              children: [
                {
                  path: '',
                  component: TmCanvasComponent
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
      component: TmTabletLayoutComponent
    }
  ];
}

export const ROUTES: Routes = routes;
