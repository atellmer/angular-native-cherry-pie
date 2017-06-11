import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { isPhone, isTablet } from '../../shared/services/device';
import { PanelContainerComponent } from './containers/panel';
import { PhoneLayoutComponent } from './layouts/phone';
import { TabletLayoutComponent } from './layouts/tablet';
import { CanvasComponent } from './components/canvas';
import { DumpComponent } from './components/dump/dump.component';


let messengerRoutes: Routes = [];

if (isPhone()) {
  messengerRoutes = [
    {
      path: 'messenger',
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
      redirectTo: 'messenger'
    }
  ];
}

if (isTablet()) {
  messengerRoutes = [
    {
      path: 'messenger',
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
      redirectTo: 'messenger'
    }
  ];
}

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(messengerRoutes)
  ],
  exports: [NativeScriptRouterModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class RoutingModule { }
