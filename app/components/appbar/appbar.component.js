"use strict";
var core_1 = require('@angular/core');
var resolution_1 = require('../../utils/resolution');
var resolution = new resolution_1.Resolution();
var templateUrl = 'appbar.component.phone.html';
if (resolution.isTablet()) {
    templateUrl = 'appbar.component.tablet.html';
}
var TmAppbarComponent = (function () {
    function TmAppbarComponent() {
    }
    TmAppbarComponent.prototype.consctructor = function () { };
    TmAppbarComponent.prototype.ngOnInit = function () { };
    TmAppbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'TmAppbar',
            templateUrl: templateUrl,
            styleUrls: ['appbar.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], TmAppbarComponent);
    return TmAppbarComponent;
}());
exports.TmAppbarComponent = TmAppbarComponent;
//# sourceMappingURL=appbar.component.js.map