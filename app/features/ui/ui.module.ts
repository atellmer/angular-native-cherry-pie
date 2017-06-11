import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { TNSFontIconModule } from 'nativescript-ng2-fonticon';

import { AvatarComponent } from './avatar';
import { BadgeComponent } from './badge';
import { SearchBarComponent } from './search-bar';
import { IconButtonComponent } from './icon-button';


const COMPONENTS = [
  AvatarComponent,
  BadgeComponent,
  SearchBarComponent,
  IconButtonComponent
];

@NgModule({
  imports: [
    TNSFontIconModule.forRoot({
      'mdi': 'material-design-icons.css'
    }),
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
export class UIModule { }
