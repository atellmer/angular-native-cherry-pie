"use strict";
var core_1 = require('@angular/core');
var TmAvatarComponent = (function () {
    function TmAvatarComponent() {
    }
    TmAvatarComponent.prototype.ngOnInit = function () {
        console.log('this.width: ', this.width);
        console.log('this.height: ', this.height);
        console.log('this.path: ', this.path);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], TmAvatarComponent.prototype, "width", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], TmAvatarComponent.prototype, "height", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TmAvatarComponent.prototype, "path", void 0);
    TmAvatarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'TmAvatar',
            templateUrl: 'avatar.component.html',
            styleUrls: ['avatar.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], TmAvatarComponent);
    return TmAvatarComponent;
}());
exports.TmAvatarComponent = TmAvatarComponent;
//# sourceMappingURL=avatar.component.js.map