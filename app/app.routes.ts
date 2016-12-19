import { Routes } from '@angular/router';

import { Resolution } from './utils/resolution';
import { TmPhoneLayoutComponent } from './components/phone-layout';
import { TmTabletLayoutComponent } from './components/tablet-layout';
import { TmPanelComponent } from './components/panel';
import { TmCanvasComponent } from './components/canvas';


const resolution: Resolution = new Resolution();
let routes: Routes = [];

if (resolution.isPhone()) {
  routes = [
    {
      path: '',
      component: TmPhoneLayoutComponent,
      children: [
        { path: '', redirectTo: '/phone/panel', pathMatch: 'full' },
        { path: 'phone/panel', component: TmPanelComponent },
        { path: 'phone/canvas', component: TmCanvasComponent }
      ]
    }
  ];
}

if (resolution.isTablet()) {
  routes = [
    { path: '', component: TmTabletLayoutComponent }
  ];
}

export const ROUTES: Routes = routes;
