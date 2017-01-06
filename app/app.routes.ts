// Core
import { Routes } from '@angular/router';

// Utils
import { isPhone, isTablet } from './shared/device';

// Components
import { PhoneLayoutComponent } from './components/phone-layout';
import { TabletLayoutComponent } from './components/tablet-layout';
import { PanelComponent } from './components/panel';
import { CanvasComponent } from './components/canvas';
import { DumpComponent } from './components/dump/dump.component';


let routes: Routes = [];

if (isPhone()) {
  routes = [
    {
      path: '',
      redirectTo: 'phone',
      pathMatch: 'full'
    },
    {
      path: 'phone',
      component: PhoneLayoutComponent,
      children: [
        {
          path: '',
          component: PanelComponent
        },
        {
          path: 'canvas',
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
    },
    {
      path: '**',
      redirectTo: 'phone'
    }
  ];
}

if (isTablet()) {
  routes = [
    {
      path: '',
      redirectTo: 'tablet',
      pathMatch: 'full'
    },
    {
      path: 'tablet',
      component: TabletLayoutComponent,
      children: [
        {
          path: '',
          component: DumpComponent
        },
        {
          path: 'canvas',
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
        }
      ]
    },
    {
      path: '**',
      redirectTo: 'tablet'
    }
  ];
}

export const appRoutes: Routes = routes;
