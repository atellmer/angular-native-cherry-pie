"use strict";
var core_1 = require('@angular/core');
var frame_1 = require('ui/frame');
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
            templateUrl: 'app.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map