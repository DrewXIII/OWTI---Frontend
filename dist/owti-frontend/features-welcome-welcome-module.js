(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-welcome-welcome-module"],{

/***/ "./src/app/features/welcome/welcome-hero/welcome-hero.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/features/welcome/welcome-hero/welcome-hero.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <img\n    class=\"display-4\"\n    src=\"https://res.cloudinary.com/dqpd1zyf4/image/upload/v1561028113/owtiportadapeqe_t3fydq.png\"\n  />\n  <!-- {{ title }} -->\n</div>\n"

/***/ }),

/***/ "./src/app/features/welcome/welcome-hero/welcome-hero.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/features/welcome/welcome-hero/welcome-hero.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "i {\n  width: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JvczM1L0RvY3VtZW50cy9maW5hbFByb2plY3QvZ2l0aHViL09XVElfRmluYWxfUHJvamVjdF9Gcm9udGVuZC9vd3RpLWZyb250ZW5kL3NyYy9hcHAvZmVhdHVyZXMvd2VsY29tZS93ZWxjb21lLWhlcm8vd2VsY29tZS1oZXJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvd2VsY29tZS93ZWxjb21lLWhlcm8vd2VsY29tZS1oZXJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaSB7XG4gIHdpZHRoOiA0MHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/features/welcome/welcome-hero/welcome-hero.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/features/welcome/welcome-hero/welcome-hero.component.ts ***!
  \*************************************************************************/
/*! exports provided: WelcomeHeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeHeroComponent", function() { return WelcomeHeroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WelcomeHeroComponent = /** @class */ (function () {
    function WelcomeHeroComponent() {
    }
    WelcomeHeroComponent.prototype.ngOnInit = function () {
        this.title = "OWTI";
    };
    WelcomeHeroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "ow-welcome-hero",
            template: __webpack_require__(/*! ./welcome-hero.component.html */ "./src/app/features/welcome/welcome-hero/welcome-hero.component.html"),
            styles: [__webpack_require__(/*! ./welcome-hero.component.scss */ "./src/app/features/welcome/welcome-hero/welcome-hero.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WelcomeHeroComponent);
    return WelcomeHeroComponent;
}());



/***/ }),

/***/ "./src/app/features/welcome/welcome-hero2/welcome-hero2.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/features/welcome/welcome-hero2/welcome-hero2.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <div class=\"mb-3\">\n    <h2>{{ title }}</h2>\n    <h2>{{ title2 }}</h2>\n  </div>\n  <div id=\"content\" class=\"my-3\">\n    <p class=\"lead\">{{ content }}</p>\n    <p class=\"lead\">{{ content2 }}</p>\n    <p class=\"lead\">{{ content3 }}</p>\n  </div>\n  <a class=\"d-flex\" class=\"btn btn-lg mt-3\" routerLink=\"/bar-capacity\">\n    <span class=\"justify-content-center align-items-center\">GET STARTED</span>\n  </a>\n</div>\n"

/***/ }),

/***/ "./src/app/features/welcome/welcome-hero2/welcome-hero2.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/features/welcome/welcome-hero2/welcome-hero2.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div a {\n  width: 219px;\n  height: 60px;\n  border-radius: 32px;\n  border: solid 2px #000000; }\n\ndiv a span {\n  width: 143px;\n  height: 22px;\n  font-family: \"Rubik\";\n  font-size: 18px;\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: 1px;\n  text-align: center;\n  color: #000000; }\n\nh2 {\n  font-family: PlayfairDisplay;\n  font-size: 60px;\n  font-weight: 900;\n  font-style: italic;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #000000; }\n\n#content {\n  font-family: Rubik;\n  font-size: 18px;\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #000000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JvczM1L0RvY3VtZW50cy9maW5hbFByb2plY3QvZ2l0aHViL09XVElfRmluYWxfUHJvamVjdF9Gcm9udGVuZC9vd3RpLWZyb250ZW5kL3NyYy9hcHAvZmVhdHVyZXMvd2VsY29tZS93ZWxjb21lLWhlcm8yL3dlbGNvbWUtaGVybzIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsY0FBYyxFQUFBOztBQUdoQjtFQUdFLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixjQUFjLEVBQUE7O0FBR2hCO0VBR0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3dlbGNvbWUvd2VsY29tZS1oZXJvMi93ZWxjb21lLWhlcm8yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IGEge1xuICB3aWR0aDogMjE5cHg7XG4gIGhlaWdodDogNjBweDtcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcbiAgYm9yZGVyOiBzb2xpZCAycHggIzAwMDAwMDtcbn1cblxuZGl2IGEgc3BhbiB7XG4gIHdpZHRoOiAxNDNweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICBmb250LWZhbWlseTogXCJSdWJpa1wiO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbmgyIHtcbiAgLy8gd2lkdGg6IDQ2MHB4O1xuICAvLyBoZWlnaHQ6IDE2MHB4O1xuICBmb250LWZhbWlseTogUGxheWZhaXJEaXNwbGF5O1xuICBmb250LXNpemU6IDYwcHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4jY29udGVudCB7XG4gIC8vIHdpZHRoOiA0NjBweDtcbiAgLy8gaGVpZ2h0OiAxMTBweDtcbiAgZm9udC1mYW1pbHk6IFJ1YmlrO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/features/welcome/welcome-hero2/welcome-hero2.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/features/welcome/welcome-hero2/welcome-hero2.component.ts ***!
  \***************************************************************************/
/*! exports provided: WelcomeHero2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeHero2Component", function() { return WelcomeHero2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WelcomeHero2Component = /** @class */ (function () {
    function WelcomeHero2Component() {
    }
    WelcomeHero2Component.prototype.ngOnInit = function () {
        this.title = "Time is now.";
        this.title2 = "Don´t lose it.";
        this.content = "OWTI is a time management tool.";
        this.content2 = "No more unnecessary queues or rides.";
        this.content3 =
            "Get real-time status information on your favorite locations.";
    };
    WelcomeHero2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "ow-welcome-hero2",
            template: __webpack_require__(/*! ./welcome-hero2.component.html */ "./src/app/features/welcome/welcome-hero2/welcome-hero2.component.html"),
            styles: [__webpack_require__(/*! ./welcome-hero2.component.scss */ "./src/app/features/welcome/welcome-hero2/welcome-hero2.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WelcomeHero2Component);
    return WelcomeHero2Component;
}());



/***/ }),

/***/ "./src/app/features/welcome/welcome.module.ts":
/*!****************************************************!*\
  !*** ./src/app/features/welcome/welcome.module.ts ***!
  \****************************************************/
/*! exports provided: WelcomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeModule", function() { return WelcomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/features/welcome/welcome/welcome.component.ts");
/* harmony import */ var _welcome_hero_welcome_hero_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./welcome-hero/welcome-hero.component */ "./src/app/features/welcome/welcome-hero/welcome-hero.component.ts");
/* harmony import */ var _welcome_hero2_welcome_hero2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome-hero2/welcome-hero2.component */ "./src/app/features/welcome/welcome-hero2/welcome-hero2.component.ts");







var routes = [
    {
        path: "",
        component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"]
    }
];
var WelcomeModule = /** @class */ (function () {
    function WelcomeModule() {
    }
    WelcomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"], _welcome_hero_welcome_hero_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeHeroComponent"], _welcome_hero2_welcome_hero2_component__WEBPACK_IMPORTED_MODULE_6__["WelcomeHero2Component"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]
        })
    ], WelcomeModule);
    return WelcomeModule;
}());



/***/ }),

/***/ "./src/app/features/welcome/welcome/welcome.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/features/welcome/welcome/welcome.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"principal\" class=\"container-fluid bg pt-5\">\n  <div class=\"row h-100\">\n    <div class=\"row justify-content-end align-items-center pr-5 col-lg-6\">\n      <ow-welcome-hero></ow-welcome-hero>\n    </div>\n    <div class=\"row justify-content-start align-items-center col-lg-6\">\n      <ow-welcome-hero2></ow-welcome-hero2>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/features/welcome/welcome/welcome.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/features/welcome/welcome/welcome.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  display: block;\n  height: 100%;\n  color: black; }\n\n#principal {\n  background-image: url(https://res.cloudinary.com/dqpd1zyf4/image/upload/v1560931607/london_cjoeq2.jpg);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JvczM1L0RvY3VtZW50cy9maW5hbFByb2plY3QvZ2l0aHViL09XVElfRmluYWxfUHJvamVjdF9Gcm9udGVuZC9vd3RpLWZyb250ZW5kL3NyYy9hcHAvZmVhdHVyZXMvd2VsY29tZS93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLFlBQVksRUFBQTs7QUFHZDtFQUNFLHNHQUFzRztFQUN0RywyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvd2VsY29tZS93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4jcHJpbmNpcGFsIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RxcGQxenlmNC9pbWFnZS91cGxvYWQvdjE1NjA5MzE2MDcvbG9uZG9uX2Nqb2VxMi5qcGcpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/features/welcome/welcome/welcome.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/features/welcome/welcome/welcome.component.ts ***!
  \***************************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ow-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/features/welcome/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.scss */ "./src/app/features/welcome/welcome/welcome.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ })

}]);
//# sourceMappingURL=features-welcome-welcome-module.js.map