"use strict";
var core_1 = require('@angular/core');
var resolution_1 = require('../../utils/resolution');
var resolution = new resolution_1.Resolution();
var templateUrl = 'appbar.component.phone.html';
if (resolution.isTablet()) {
    templateUrl = 'appbar.component.tablet.html';
}
var AppbarComponent = (function () {
    function AppbarComponent() {
    }
    AppbarComponent.prototype.ngOnInit = function () { };
    AppbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tm-appbar',
            templateUrl: templateUrl,
            styleUrls: ['appbar.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppbarComponent);
    return AppbarComponent;
}());
exports.AppbarComponent = AppbarComponent;
//# sourceMappingURL=appbar.component.js.map