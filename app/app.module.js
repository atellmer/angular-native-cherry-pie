"use strict";
var core_1 = require('@angular/core');
var platform_1 = require('nativescript-angular/platform');
var http_1 = require('nativescript-angular/http');
var forms_1 = require('nativescript-angular/forms');
var router_1 = require('nativescript-angular/router');
var app_routes_1 = require('./app.routes');
var phone_layout_1 = require('./components/phone-layout');
var tablet_layout_1 = require('./components/tablet-layout');
var app_component_1 = require('./app.component');
var appbar_1 = require('./components/appbar');
var panel_1 = require('./components/panel');
var canvas_1 = require('./components/canvas');
var avatar_1 = require('./components/avatar');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_1.NativeScriptModule,
                http_1.NativeScriptHttpModule,
                forms_1.NativeScriptFormsModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forRoot(app_routes_1.ROUTES)
            ],
            providers: [],
            declarations: [
                app_component_1.TmAppComponent,
                phone_layout_1.TmPhoneLayoutComponent,
                tablet_layout_1.TmTabletLayoutComponent,
                appbar_1.TmAppbarComponent,
                panel_1.TmPanelComponent,
                canvas_1.TmCanvasComponent,
                avatar_1.TmAvatarComponent
            ],
            bootstrap: [app_component_1.TmAppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map