// Core
import { NgModule } from '@angular/core';
import	{	CommonModule	}	from	'@angular/common';


// Components
import { AvatarComponent } from './avatar/avatar.component';
import { BadgeComponent } from './badge/badge.component';


@NgModule({
  imports: [CommonModule],
  exports: [
    AvatarComponent,
    BadgeComponent
  ],
  declarations: [
    AvatarComponent,
    BadgeComponent
  ],
  providers: [],
})
export class UIModule { }
