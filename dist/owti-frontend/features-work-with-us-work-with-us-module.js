(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-work-with-us-work-with-us-module"],{

/***/ "./src/app/features/work-with-us/work-with-us.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/features/work-with-us/work-with-us.module.ts ***!
  \**************************************************************/
/*! exports provided: WorkWithUsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkWithUsModule", function() { return WorkWithUsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _work_with_us_work_with_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./work-with-us/work-with-us.component */ "./src/app/features/work-with-us/work-with-us/work-with-us.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");






var routes = [
    {
        path: "",
        component: _work_with_us_work_with_us_component__WEBPACK_IMPORTED_MODULE_3__["WorkWithUsComponent"]
    }
];
var WorkWithUsModule = /** @class */ (function () {
    function WorkWithUsModule() {
    }
    WorkWithUsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_work_with_us_work_with_us_component__WEBPACK_IMPORTED_MODULE_3__["WorkWithUsComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]
        })
    ], WorkWithUsModule);
    return WorkWithUsModule;
}());



/***/ }),

/***/ "./src/app/features/work-with-us/work-with-us/work-with-us.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/features/work-with-us/work-with-us/work-with-us.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"principal\" class=\"d-flex justify-content-center pt-5 h-100\">\n  <div class=\"d-flex flex-column justify-content-center\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h3 class=\"card-title text-center mt-3\">Sign in</h3>\n        <div class=\"card-body\">\n          <ow-login></ow-login>\n          <div class=\"row justify-content-center\">\n            <p class=\"mt-3\">Not a member?</p>\n            <button type=\"button\" class=\"btn btn-link\" (click)=\"open()\">\n              Join now here\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/features/work-with-us/work-with-us/work-with-us.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/features/work-with-us/work-with-us/work-with-us.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#principal {\n  background-image: url(https://res.cloudinary.com/dqpd1zyf4/image/upload/v1560931607/london_cjoeq2.jpg);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.card {\n  width: 460px;\n  height: 444px;\n  background-color: rgba(255, 255, 255, 0.7); }\n\nh3 {\n  font-family: PlayfairDisplay;\n  font-weight: 900;\n  font-style: italic;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: center;\n  color: #000000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JvczM1L0RvY3VtZW50cy9maW5hbFByb2plY3QvZ2l0aHViL09XVElfRmluYWxfUHJvamVjdF9Gcm9udGVuZC9vd3RpLWZyb250ZW5kL3NyYy9hcHAvZmVhdHVyZXMvd29yay13aXRoLXVzL3dvcmstd2l0aC11cy93b3JrLXdpdGgtdXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzR0FBc0c7RUFDdEcsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLDBDQUEwQyxFQUFBOztBQUc1QztFQUNFLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy93b3JrLXdpdGgtdXMvd29yay13aXRoLXVzL3dvcmstd2l0aC11cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwcmluY2lwYWwge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZHFwZDF6eWY0L2ltYWdlL3VwbG9hZC92MTU2MDkzMTYwNy9sb25kb25fY2pvZXEyLmpwZyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmNhcmQge1xuICB3aWR0aDogNDYwcHg7XG4gIGhlaWdodDogNDQ0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbn1cblxuaDMge1xuICBmb250LWZhbWlseTogUGxheWZhaXJEaXNwbGF5O1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/features/work-with-us/work-with-us/work-with-us.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/features/work-with-us/work-with-us/work-with-us.component.ts ***!
  \******************************************************************************/
/*! exports provided: WorkWithUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkWithUsComponent", function() { return WorkWithUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/modal.service */ "./src/app/core/services/modal.service.ts");



var WorkWithUsComponent = /** @class */ (function () {
    function WorkWithUsComponent(modalService) {
        this.modalService = modalService;
    }
    WorkWithUsComponent.prototype.ngOnInit = function () { };
    WorkWithUsComponent.prototype.open = function () {
        this.modalService.open("Register", "Que tal");
    };
    WorkWithUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "ow-work-with-us",
            template: __webpack_require__(/*! ./work-with-us.component.html */ "./src/app/features/work-with-us/work-with-us/work-with-us.component.html"),
            styles: [__webpack_require__(/*! ./work-with-us.component.scss */ "./src/app/features/work-with-us/work-with-us/work-with-us.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"]])
    ], WorkWithUsComponent);
    return WorkWithUsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=features-work-with-us-work-with-us-module.js.map