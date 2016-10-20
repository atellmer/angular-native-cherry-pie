import { NgModule } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/platform';
import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

import { AppComponent } from './app.component';
import { AppbarComponent } from './components/appbar';

@NgModule({
	imports: [
		NativeScriptModule,
		NativeScriptHttpModule,
		NativeScriptFormsModule
	],
	providers: [],
	declarations: [
		AppComponent,
		AppbarComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
