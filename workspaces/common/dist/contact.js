"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
var class_validator_1 = require("class-validator");
var Contact = (function () {
    function Contact() {
    }
    __decorate([
        (0, class_validator_1.Length)(10, 20)
    ], Contact.prototype, "subject", void 0);
    __decorate([
        (0, class_validator_1.IsEmail)({}, {
            message: 'Not a valid email'
        })
    ], Contact.prototype, "email", void 0);
    __decorate([
        (0, class_validator_1.ValidateNested)()
    ], Contact.prototype, "phones", void 0);
    return Contact;
}());
exports.Contact = Contact;
//# sourceMappingURL=contact.js.map