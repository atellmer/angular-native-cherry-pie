"use strict";
var core_1 = require('@angular/core');
var platform_1 = require('nativescript-angular/platform');
var http_1 = require('nativescript-angular/http');
var forms_1 = require('nativescript-angular/forms');
var app_component_1 = require('./app.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_1.NativeScriptModule,
                http_1.NativeScriptHttpModule,
                forms_1.NativeScriptFormsModule,
            ],
            providers: [],
            declarations: [
                app_component_1.AppComponent,
            ],
            bootstrap: [app_component_1.AppComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map