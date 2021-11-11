"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Phone = void 0;
var class_validator_1 = require("class-validator");
var Phone = (function () {
    function Phone() {
        this.prefix = '';
        this.number = "";
    }
    __decorate([
        (0, class_validator_1.Length)(3)
    ], Phone.prototype, "prefix", void 0);
    __decorate([
        (0, class_validator_1.Length)(9, 11)
    ], Phone.prototype, "number", void 0);
    return Phone;
}());
exports.Phone = Phone;
//# sourceMappingURL=phone.js.map