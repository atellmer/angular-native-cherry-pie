import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { AppbarContainerComponent } from './containers/appbar';
import { AppbarComponent } from './components/appbar';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    AppbarContainerComponent,
    AppbarComponent
  ],
  declarations: [
    AppbarContainerComponent,
    AppbarComponent
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HeaderModule {}
