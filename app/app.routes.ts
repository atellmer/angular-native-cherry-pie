// Core
import { Routes } from '@angular/router';


// Utils
import { isPhone, isTablet } from './shared/device';

// Containers
import { PanelContainerComponent } from './containers/panel';

// Components
import { PhoneLayoutComponent } from './layouts/phone';
import { TabletLayoutComponent } from './layouts/tablet';
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
          component: PanelContainerComponent
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
