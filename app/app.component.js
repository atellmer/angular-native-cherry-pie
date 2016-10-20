"use strict";
var core_1 = require('@angular/core');
var frame_1 = require('ui/frame');
var resolution_1 = require('./utils/resolution');
var resolution = new resolution_1.Resolution();
var templateUrl = 'app.component.phone.html';
if (resolution.isTablet()) {
    templateUrl = 'app.component.tablet.html';
}
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        this.page = frame_1.topmost().currentPage;
        this.page.actionBarHidden = true;
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tm-ng-root',
            templateUrl: templateUrl
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map