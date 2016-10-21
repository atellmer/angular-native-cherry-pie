"use strict";
var core_1 = require('@angular/core');
var resolution_1 = require('../../utils/resolution');
var resolution = new resolution_1.Resolution();
var templateUrl = 'canvas.component.phone.html';
if (resolution.isTablet()) {
    templateUrl = 'canvas.component.tablet.html';
}
var TmCanvasComponent = (function () {
    function TmCanvasComponent() {
    }
    TmCanvasComponent.prototype.ngOnInit = function () { };
    TmCanvasComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'TmCanvas',
            templateUrl: templateUrl,
            styleUrls: ['canvas.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], TmCanvasComponent);
    return TmCanvasComponent;
}());
exports.TmCanvasComponent = TmCanvasComponent;
//# sourceMappingURL=canvas.component.js.map