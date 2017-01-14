// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Components
import { AvatarComponent } from './avatar/avatar.component';
import { BadgeComponent } from './badge/badge.component';
import { SearchBarComponent } from './search-bar/search-bar.component';


const COMPONENTS = [
  AvatarComponent,
  BadgeComponent,
  SearchBarComponent
];

@NgModule({
  imports: [CommonModule],
  exports: [COMPONENTS],
  declarations: [COMPONENTS],
  providers: [],
})
export class UIModule { }
