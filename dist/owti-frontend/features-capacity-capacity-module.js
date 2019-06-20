(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-capacity-capacity-module"],{

/***/ "./src/app/features/capacity/capacity.module.ts":
/*!******************************************************!*\
  !*** ./src/app/features/capacity/capacity.module.ts ***!
  \******************************************************/
/*! exports provided: CapacityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapacityModule", function() { return CapacityModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _capacity_capacity_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./capacity/capacity.component */ "./src/app/features/capacity/capacity/capacity.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");







var routes = [
    {
        path: "",
        component: _capacity_capacity_component__WEBPACK_IMPORTED_MODULE_5__["CapacityComponent"]
    }
];
var CapacityModule = /** @class */ (function () {
    function CapacityModule() {
    }
    CapacityModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_capacity_capacity_component__WEBPACK_IMPORTED_MODULE_5__["CapacityComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ]
        })
    ], CapacityModule);
    return CapacityModule;
}());



/***/ }),

/***/ "./src/app/features/capacity/capacity/capacity.component.html":
/*!********************************************************************!*\
  !*** ./src/app/features/capacity/capacity/capacity.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form\n  class=\"container-fluid p-5\"\n  [formGroup]=\"updateUserCapacityForm\"\n  [owMarkAsTouched]=\"updateUserCapacityForm\"\n  (ngSubmit)=\"updateUserCapacity()\"\n>\n  <div class=\"row justify-content-start pt-3\">\n    <div class=\"form-group col-3\">\n      <h1>Current Capacity</h1>\n      <input\n        class=\"form-control\"\n        type=\"text\"\n        formControlName=\"capacity\"\n        placeholder=\"Current Capacity\"\n      />\n      <ow-validation-messages\n        [control]=\"updateUserCapacityForm.get('capacity')\"\n      ></ow-validation-messages>\n    </div>\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n</form>\n"

/***/ }),

/***/ "./src/app/features/capacity/capacity/capacity.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/features/capacity/capacity/capacity.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2NhcGFjaXR5L2NhcGFjaXR5L2NhcGFjaXR5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/features/capacity/capacity/capacity.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/features/capacity/capacity/capacity.component.ts ***!
  \******************************************************************/
/*! exports provided: CapacityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapacityComponent", function() { return CapacityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_core_services_capacity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/capacity.service */ "./src/app/core/services/capacity.service.ts");




var CapacityComponent = /** @class */ (function () {
    function CapacityComponent(fb, capacityService) {
        this.fb = fb;
        this.capacityService = capacityService;
        this.updateUserCapacityForm = this.fb.group({
            capacity: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    CapacityComponent.prototype.ngOnInit = function () {
        this.updateUserCapacityForm.setValue({
            capacity: this.capacityService.currentCapacity.capacity
        });
    };
    CapacityComponent.prototype.updateUserCapacity = function () {
        if (this.updateUserCapacityForm.valid) {
            this.capacityService
                .updateUserCapacity(this.updateUserCapacityForm.value)
                .subscribe();
        }
    };
    CapacityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "ow-capacity",
            template: __webpack_require__(/*! ./capacity.component.html */ "./src/app/features/capacity/capacity/capacity.component.html"),
            styles: [__webpack_require__(/*! ./capacity.component.scss */ "./src/app/features/capacity/capacity/capacity.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_core_services_capacity_service__WEBPACK_IMPORTED_MODULE_3__["CapacityService"]])
    ], CapacityComponent);
    return CapacityComponent;
}());



/***/ })

}]);
//# sourceMappingURL=features-capacity-capacity-module.js.map