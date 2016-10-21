"use strict";
var resolution_1 = require('./utils/resolution');
var phone_layout_1 = require('./components/phone-layout');
var tablet_layout_1 = require('./components/tablet-layout');
var panel_1 = require('./components/panel');
var canvas_1 = require('./components/canvas');
var resolution = new resolution_1.Resolution();
var routes = [];
if (resolution.isPhone()) {
    routes = [
        {
            path: '',
            component: phone_layout_1.TmPhoneLayoutComponent,
            children: [
                { path: '', redirectTo: '/phone/panel', pathMatch: 'full' },
                { path: 'phone/panel', component: panel_1.TmPanelComponent },
                { path: 'phone/canvas', component: canvas_1.TmCanvasComponent }
            ]
        }
    ];
}
if (resolution.isTablet()) {
    routes = [
        { path: '', component: tablet_layout_1.TmTabletLayoutComponent }
    ];
}
exports.ROUTES = routes;
//# sourceMappingURL=app.routes.js.map