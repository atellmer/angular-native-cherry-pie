import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { SharedModule } from '../../shared';
import { RoutingModule } from './messenger.routing';
import { HeaderModule } from '../header';
import { PhoneLayoutComponent } from './layouts/phone';
import { TabletLayoutComponent } from './layouts/tablet';
import { PanelContainerComponent } from './containers/panel';
import { PanelComponent } from './components/panel';
import { CanvasComponent } from './components/canvas';
import { DialogItemComponent } from './components/dialog-item';
import { DumpComponent } from './components/dump/dump.component';
import { MessagePanelComponent } from './components/message-panel';


const COMPONENTS = [
  PhoneLayoutComponent,
  TabletLayoutComponent,
  PanelContainerComponent,
  PanelComponent,
  CanvasComponent,
  DialogItemComponent,
  DumpComponent,
  MessagePanelComponent
];

@NgModule({
  imports: [
    SharedModule,
    RoutingModule,
    HeaderModule
  ],
  exports: [
    ...COMPONENTS
  ],
  declarations: [
    ...COMPONENTS
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class MessengerModule { }
