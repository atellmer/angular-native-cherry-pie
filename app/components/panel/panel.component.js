"use strict";
var core_1 = require('@angular/core');
var resolution_1 = require('../../utils/resolution');
var resolution = new resolution_1.Resolution();
var templateUrl = 'panel.component.phone.html';
if (resolution.isTablet()) {
    templateUrl = 'panel.component.tablet.html';
}
var TmPanelComponent = (function () {
    function TmPanelComponent() {
    }
    TmPanelComponent.prototype.ngOnInit = function () { };
    TmPanelComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'TmPanel',
            templateUrl: templateUrl,
            styleUrls: ['panel.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], TmPanelComponent);
    return TmPanelComponent;
}());
exports.TmPanelComponent = TmPanelComponent;
//# sourceMappingURL=panel.component.js.map