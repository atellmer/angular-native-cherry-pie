// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Components
import { AvatarComponent } from './avatar/avatar.component';
import { BadgeComponent } from './badge/badge.component';
import { SearchBarComponent } from './search-bar/search-bar.component';


@NgModule({
  imports: [CommonModule],
  exports: [
    AvatarComponent,
    BadgeComponent,
    SearchBarComponent
  ],
  declarations: [
    AvatarComponent,
    BadgeComponent,
    SearchBarComponent
  ],
  providers: [],
})
export class UIModule { }
