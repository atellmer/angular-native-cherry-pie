import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';


export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'messenger',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(appRoutes)
  ],
  exports: [NativeScriptRouterModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class RoutingModule { }
