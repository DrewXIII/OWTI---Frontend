(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-my-account-my-account-module"],{

/***/ "./src/app/features/my-account/my-account.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/features/my-account/my-account.module.ts ***!
  \**********************************************************/
/*! exports provided: MyAccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountModule", function() { return MyAccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _my_account_my_account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-account/my-account.component */ "./src/app/features/my-account/my-account/my-account.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");







var routes = [
    {
        path: "",
        component: _my_account_my_account_component__WEBPACK_IMPORTED_MODULE_5__["MyAccountComponent"]
    }
];
var MyAccountModule = /** @class */ (function () {
    function MyAccountModule() {
    }
    MyAccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_5__["MyAccountComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ]
        })
    ], MyAccountModule);
    return MyAccountModule;
}());



/***/ }),

/***/ "./src/app/features/my-account/my-account/my-account.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/features/my-account/my-account/my-account.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form\n  class=\"container-fluid p-5\"\n  [formGroup]=\"updateProfileForm\"\n  [owMarkAsTouched]=\"updateProfileForm\"\n  (ngSubmit)=\"updateProfile()\"\n>\n  <div class=\"row justify-content-around pt-3\">\n    <div id=\"name\" class=\"form-group\">\n      <h1 class=\"row justify-content-center\">NAME</h1>\n      <input\n        class=\"form-control\"\n        type=\"text\"\n        formControlName=\"fullName\"\n        placeholder=\"Enter your name\"\n      />\n      <ow-validation-messages\n        [control]=\"updateProfileForm.get('fullName')\"\n      ></ow-validation-messages>\n    </div>\n  </div>\n\n  <!-- DETAILS -->\n\n  <div formGroupName=\"details\">\n    <h2>DETAILS</h2>\n    <div class=\"row justify-content-around\">\n      <div id=\"maxCapacity\" class=\"form-group col-6\">\n        <label>Max Capacity</label>\n        <input\n          class=\"form-control\"\n          type=\"number\"\n          formControlName=\"maxCapacity\"\n          placeholder=\"Enter your max capacity\"\n        />\n        <ow-validation-messages\n          [control]=\"updateProfileForm.get('details.maxCapacity')\"\n        ></ow-validation-messages>\n      </div>\n\n      <div id=\"openingHours\" class=\"form-group col-6\">\n        <label>Opening Hours</label>\n        <input\n          class=\"form-control\"\n          type=\"text\"\n          formControlName=\"openingHours\"\n          placeholder=\"Enter your opening hours\"\n        />\n        <ow-validation-messages\n          [control]=\"updateProfileForm.get('details.openingHours')\"\n        ></ow-validation-messages>\n      </div>\n    </div>\n  </div>\n\n  <!-- ADDRESS -->\n\n  <div formGroupName=\"address\">\n    <h2>ADDRESS</h2>\n    <div class=\"row justify-content-start\">\n      <div id=\"streetAddress\" class=\"form-group col-6\">\n        <label>Street</label>\n        <input\n          class=\"form-control\"\n          type=\"text\"\n          formControlName=\"streetAddress\"\n          placeholder=\"Street\"\n        />\n        <ow-validation-messages\n          [control]=\"updateProfileForm.get('address.streetAddress')\"\n        ></ow-validation-messages>\n      </div>\n\n      <div class=\"form-row pl-3\">\n        <div id=\"addressLocality\" class=\"form-group col-6\">\n          <label>Locality</label>\n          <input\n            class=\"form-control\"\n            type=\"text\"\n            formControlName=\"addressLocality\"\n            placeholder=\"Locality\"\n          />\n          <ow-validation-messages\n            [control]=\"updateProfileForm.get('address.addressLocality')\"\n          ></ow-validation-messages>\n        </div>\n\n        <div id=\"addressRegion\" class=\"form-group col-4\">\n          <label>Region</label>\n          <input\n            class=\"form-control\"\n            type=\"text\"\n            formControlName=\"addressRegion\"\n            placeholder=\"Region\"\n          />\n          <ow-validation-messages\n            [control]=\"updateProfileForm.get('address.addressRegion')\"\n          ></ow-validation-messages>\n        </div>\n\n        <div id=\"postalCode\" class=\"form-group col-2\">\n          <label>ZIP</label>\n          <input\n            class=\"form-control\"\n            type=\"text\"\n            formControlName=\"postalCode\"\n            placeholder=\"ZIP\"\n          />\n          <ow-validation-messages\n            [control]=\"updateProfileForm.get('address.postalCode')\"\n          ></ow-validation-messages>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- PREFERENCES -->\n\n  <div formGroupName=\"preferences\">\n    <h2>PREFERENCES</h2>\n    <div class=\"row justify-content-start\">\n      <div id=\"web\" class=\"form-group col-6\">\n        <label>Web</label>\n        <input\n          class=\"form-control\"\n          type=\"text\"\n          formControlName=\"web\"\n          placeholder=\"Enter your Web url\"\n        />\n        <ow-validation-messages\n          [control]=\"updateProfileForm.get('preferences.web')\"\n        ></ow-validation-messages>\n      </div>\n    </div>\n  </div>\n\n  <!-- CONTACT -->\n\n  <div formGroupName=\"contact\">\n    <h2>CONTACT</h2>\n    <div class=\"row justify-content-around\">\n      <div id=\"email\" class=\"form-group col-6\">\n        <label>Email</label>\n        <input\n          class=\"form-control\"\n          type=\"text\"\n          formControlName=\"email\"\n          placeholder=\"Email\"\n        />\n        <ow-validation-messages\n          [control]=\"updateProfileForm.get('contact.email')\"\n        ></ow-validation-messages>\n      </div>\n\n      <div id=\"phoneNumber\" class=\"form-group col-6\">\n        <label>Phone Number</label>\n        <input\n          class=\"form-control\"\n          type=\"text\"\n          formControlName=\"phoneNumber\"\n          placeholder=\"Phone Number\"\n        />\n        <ow-validation-messages\n          [control]=\"updateProfileForm.get('contact.phoneNumber')\"\n        ></ow-validation-messages>\n      </div>\n    </div>\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n</form>\n"

/***/ }),

/***/ "./src/app/features/my-account/my-account/my-account.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/features/my-account/my-account/my-account.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL215LWFjY291bnQvbXktYWNjb3VudC9teS1hY2NvdW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/features/my-account/my-account/my-account.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/features/my-account/my-account/my-account.component.ts ***!
  \************************************************************************/
/*! exports provided: MyAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountComponent", function() { return MyAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/user.service */ "./src/app/core/services/user.service.ts");




var MyAccountComponent = /** @class */ (function () {
    function MyAccountComponent(fb, userService) {
        this.fb = fb;
        this.userService = userService;
        this.updateProfileForm = this.fb.group({
            fullName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            details: this.fb.group({
                maxCapacity: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].nullValidator]],
                openingHours: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].nullValidator]]
            }),
            address: this.fb.group({
                addressLocality: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].nullValidator]],
                addressRegion: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].nullValidator]],
                postalCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].nullValidator]],
                streetAddress: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].nullValidator]]
            }),
            preferences: this.fb.group({
                twitter: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].nullValidator]],
                instagram: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].nullValidator]],
                facebook: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].nullValidator]],
                web: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].nullValidator]],
                description: []
            }),
            contact: this.fb.group({
                email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].nullValidator]],
                phoneNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].nullValidator]]
            })
        });
    }
    MyAccountComponent.prototype.ngOnInit = function () {
        this.updateProfileForm.setValue({
            fullName: this.userService.currentUser.fullName,
            details: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.userService.currentUser.details),
            address: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.userService.currentUser.address),
            preferences: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.userService.currentUser.preferences),
            contact: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.userService.currentUser.contact)
        });
    };
    MyAccountComponent.prototype.updateProfile = function () {
        if (this.updateProfileForm.valid) {
            for (var _i = 0, _a = this.updateProfileForm.value; _i < _a.length; _i++) {
                var prop = _a[_i];
                if (!this.updateProfileForm.value.details[prop]) {
                    this.updateProfileForm.value.details[prop] = "";
                }
                if (!this.updateProfileForm.value.address[prop]) {
                    this.updateProfileForm.value.address[prop] = "";
                }
                if (!this.updateProfileForm.value.preferences[prop]) {
                    this.updateProfileForm.value.preferences[prop] = "";
                }
                if (!this.updateProfileForm.value.contact[prop]) {
                    this.updateProfileForm.value.contact[prop] = "";
                }
            }
            this.userService.updateProfile(this.updateProfileForm.value).subscribe();
        }
    };
    MyAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "ow-my-account",
            template: __webpack_require__(/*! ./my-account.component.html */ "./src/app/features/my-account/my-account/my-account.component.html"),
            styles: [__webpack_require__(/*! ./my-account.component.scss */ "./src/app/features/my-account/my-account/my-account.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], MyAccountComponent);
    return MyAccountComponent;
}());



/***/ })

}]);
//# sourceMappingURL=features-my-account-my-account-module.js.map