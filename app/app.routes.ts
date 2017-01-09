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
      redirectTo: 'panel',
      pathMatch: 'full'
    },
    {
      path: 'panel',
      component: PhoneLayoutComponent,
      children: [
        {
          path: '',
          component: PanelComponent
        }
      ]
    },
    {
      path: 'canvas',
      component: PhoneLayoutComponent,
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
      path: '**',
      redirectTo: 'panel'
    }
  ];
}

if (isTablet()) {
  routes = [
    {
      path: '',
      redirectTo: 'panel',
      pathMatch: 'full'
    },
    {
      path: 'panel',
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
      redirectTo: 'panel'
    }
  ];
}

export const appRoutes: Routes = routes;
