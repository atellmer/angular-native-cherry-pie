// Core
import { NgModule } from '@angular/core';
import	{	CommonModule	}	from	'@angular/common';


// Components
import { AvatarComponent } from './avatar/avatar.component';


@NgModule({
  imports: [CommonModule],
  exports: [
    AvatarComponent
  ],
  declarations: [
    AvatarComponent
  ],
  providers: [],
})
export class UIModule { }
