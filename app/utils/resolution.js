"use strict";
var platform = require('platform');
var Resolution = (function () {
    function Resolution() {
        this.width = platform.screen.mainScreen.widthDIPs;
    }
    Resolution.prototype.isPhone = function () {
        if (this.width > 360) {
            return false;
        }
        return true;
    };
    Resolution.prototype.isTablet = function () {
        return !this.isPhone();
    };
    return Resolution;
}());
exports.Resolution = Resolution;
//# sourceMappingURL=resolution.js.map