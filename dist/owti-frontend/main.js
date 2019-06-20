(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./features/about-us/about-us.module": [
		"./src/app/features/about-us/about-us.module.ts",
		"features-about-us-about-us-module"
	],
	"./features/bar-capacity/bar-capacity.module": [
		"./src/app/features/bar-capacity/bar-capacity.module.ts",
		"features-bar-capacity-bar-capacity-module"
	],
	"./features/capacity/capacity.module": [
		"./src/app/features/capacity/capacity.module.ts",
		"features-capacity-capacity-module"
	],
	"./features/my-account/my-account.module": [
		"./src/app/features/my-account/my-account.module.ts",
		"features-my-account-my-account-module"
	],
	"./features/welcome/welcome.module": [
		"./src/app/features/welcome/welcome.module.ts",
		"features-welcome-welcome-module"
	],
	"./features/work-with-us/work-with-us.module": [
		"./src/app/features/work-with-us/work-with-us.module.ts",
		"features-work-with-us-work-with-us-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-initializer.module.ts":
/*!*******************************************!*\
  !*** ./src/app/app-initializer.module.ts ***!
  \*******************************************/
/*! exports provided: getInitialData, getCurrentCapacityInitialData, AppInitializerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialData", function() { return getInitialData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentCapacityInitialData", function() { return getCurrentCapacityInitialData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInitializerModule", function() { return AppInitializerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_capacity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/services/capacity.service */ "./src/app/core/services/capacity.service.ts");




function getInitialData(userService) {
    var _this = this;
    return function () {
        if (localStorage.getItem("auth")) {
            return new Promise(function (resolve) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var error_1;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, userService.getUserProfile().toPromise()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, resolve()];
                        case 2:
                            error_1 = _a.sent();
                            return [2 /*return*/, resolve(error_1)];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
        }
        return Promise.resolve();
    };
}
function getCurrentCapacityInitialData(capacityService) {
    var _this = this;
    return function () {
        if (localStorage.getItem("auth")) {
            return new Promise(function (resolve) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var error_2;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, capacityService.getUserCapacity().toPromise()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, resolve()];
                        case 2:
                            error_2 = _a.sent();
                            return [2 /*return*/, resolve(error_2)];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
        }
        return Promise.resolve();
    };
}
var AppInitializerModule = /** @class */ (function () {
    function AppInitializerModule() {
    }
    AppInitializerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            providers: [
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
                    useFactory: getInitialData,
                    deps: [_core_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]],
                    multi: true
                },
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
                    useFactory: getCurrentCapacityInitialData,
                    deps: [_core_services_capacity_service__WEBPACK_IMPORTED_MODULE_3__["CapacityService"]],
                    multi: true
                }
            ]
        })
    ], AppInitializerModule);
    return AppInitializerModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/guards/auth.guard */ "./src/app/core/guards/auth.guard.ts");
/* harmony import */ var _layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/main-layout/main-layout.component */ "./src/app/layout/main-layout/main-layout.component.ts");
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components/not-found/not-found.component */ "./src/app/shared/components/not-found/not-found.component.ts");






var routes = [
    {
        path: "",
        redirectTo: "welcome",
        pathMatch: "full"
    },
    {
        path: "welcome",
        loadChildren: "./features/welcome/welcome.module#WelcomeModule"
    },
    {
        path: "about-us",
        loadChildren: "./features/about-us/about-us.module#AboutUsModule"
    },
    {
        path: "bar-capacity",
        loadChildren: "./features/bar-capacity/bar-capacity.module#BarCapacityModule"
    },
    {
        path: "work-with-us",
        loadChildren: "./features/work-with-us/work-with-us.module#WorkWithUsModule"
    },
    {
        path: "",
        component: _layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_4__["MainLayoutComponent"],
        canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        children: [
            {
                path: "capacity",
                loadChildren: "./features/capacity/capacity.module#CapacityModule"
            },
            {
                path: "my-account",
                loadChildren: "./features/my-account/my-account.module#MyAccountModule"
            }
        ]
    },
    {
        path: "**",
        component: _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"principal\" class=\"grid-container\">\n  <ow-header></ow-header>\n  <main>\n    <router-outlet></router-outlet>\n  </main>\n  <ow-footer></ow-footer>\n</div>\n\n<ow-modal></ow-modal>\n<!-- <ow-toast></ow-toast> -->\n<!-- <ow-loader *ngIf=\"loaderService.isLoading\"></ow-loader> -->\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .grid-container {\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  grid-template-columns: auto;\n  height: 100vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JvczM1L0RvY3VtZW50cy9maW5hbFByb2plY3QvZ2l0aHViL09XVElfRmluYWxfUHJvamVjdF9Gcm9udGVuZC9vd3RpLWZyb250ZW5kL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksYUFBYTtFQUNiLGlDQUFpQztFQUNqQywyQkFBMkI7RUFDM0IsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAuZ3JpZC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/services/loader.service */ "./src/app/core/services/loader.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(loaderService) {
        this.loaderService = loaderService;
        this.title = "OWTI-Frontend";
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "ow-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_initializer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-initializer.module */ "./src/app/app-initializer.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/layout.module */ "./src/app/layout/layout.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            imports: [
                _app_initializer_module__WEBPACK_IMPORTED_MODULE_5__["AppInitializerModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interceptors/error.interceptor */ "./src/app/core/interceptors/error.interceptor.ts");
/* harmony import */ var _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interceptors/jwt.interceptor */ "./src/app/core/interceptors/jwt.interceptor.ts");
/* harmony import */ var _interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interceptors/loader.interceptor */ "./src/app/core/interceptors/loader.interceptor.ts");







var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_5__["JWTInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_4__["ErrorInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_6__["LoaderInterceptor"], multi: true }
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/guards/auth.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/core/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, snapshot) {
        if (this.authService && this.authService.authInfo) {
            var accessToken = this.authService.authInfo.accessToken;
            if (accessToken) {
                return true;
            }
        }
        this.router.navigate(["/welcome"]);
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/core/interceptors/error.interceptor.ts":
/*!********************************************************!*\
  !*** ./src/app/core/interceptors/error.interceptor.ts ***!
  \********************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/toast.service */ "./src/app/core/services/toast.service.ts");







var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authService, router, toastService) {
        this.authService = authService;
        this.router = router;
        this.toastService = toastService;
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            if (error.url.indexOf("/account/login") === -1 &&
                _this.router.routerState.snapshot.url !== "/welcome" &&
                error.status === 401) {
                _this.authService.logout();
            }
            else {
                _this.toastService.addToast(error.error[0]);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
        }));
    };
    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/core/interceptors/jwt.interceptor.ts":
/*!******************************************************!*\
  !*** ./src/app/core/interceptors/jwt.interceptor.ts ***!
  \******************************************************/
/*! exports provided: JWTInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JWTInterceptor", function() { return JWTInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/core/services/auth.service.ts");



var JWTInterceptor = /** @class */ (function () {
    function JWTInterceptor(authService) {
        this.authService = authService;
    }
    JWTInterceptor.prototype.intercept = function (request, next) {
        if (this.authService && this.authService.authInfo) {
            var accessToken = this.authService.authInfo.accessToken;
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + accessToken
                }
            });
        }
        return next.handle(request);
    };
    JWTInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], JWTInterceptor);
    return JWTInterceptor;
}());



/***/ }),

/***/ "./src/app/core/interceptors/loader.interceptor.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/interceptors/loader.interceptor.ts ***!
  \*********************************************************/
/*! exports provided: LoaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderInterceptor", function() { return LoaderInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/loader.service */ "./src/app/core/services/loader.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







var LoaderInterceptor = /** @class */ (function () {
    function LoaderInterceptor(loaderService) {
        this.loaderService = loaderService;
        this.totalRequests = 0;
    }
    LoaderInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        this.totalRequests++;
        this.loaderService.setLoading(true);
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            if (res instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                _this.decreaseRequests();
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            _this.decreaseRequests();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error);
        }));
    };
    LoaderInterceptor.prototype.decreaseRequests = function () {
        this.totalRequests--;
        if (this.totalRequests === 0) {
            this.loaderService.setLoading(false);
        }
    };
    LoaderInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]])
    ], LoaderInterceptor);
    return LoaderInterceptor;
}());



/***/ }),

/***/ "./src/app/core/services/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.authInfo = JSON.parse(localStorage.getItem("auth"));
    }
    AuthService.prototype.login = function (_a) {
        var _this = this;
        var email = _a.email, password = _a.password;
        return this.http
            .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl + "/account/login", {
            email: email,
            password: password
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (info) {
            _this.authInfo = info;
            localStorage.setItem("auth", JSON.stringify(info));
        }));
    };
    AuthService.prototype.register = function (_a) {
        var email = _a.email, password = _a.password;
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl + "/account", {
            email: email,
            password: password
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem("auth");
        this.authInfo = null;
        this.router.navigate(["/welcome"]);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/services/capacity.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/capacity.service.ts ***!
  \***************************************************/
/*! exports provided: CapacityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapacityService", function() { return CapacityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





var CapacityService = /** @class */ (function () {
    function CapacityService(http) {
        this.http = http;
    }
    CapacityService.prototype.getUserCapacity = function () {
        var _this = this;
        return this.http
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl + "/user/capacity")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (capacity) { return (_this.currentCapacity = capacity); }));
    };
    CapacityService.prototype.updateUserCapacity = function (capacity) {
        var _this = this;
        return this.http
            .put(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl + "/user/capacity", {
            capacity: capacity.capacity
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            _this.currentCapacity = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.currentCapacity, capacity);
        }));
    };
    CapacityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CapacityService);
    return CapacityService;
}());



/***/ }),

/***/ "./src/app/core/services/loader.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/loader.service.ts ***!
  \*************************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this.isLoading = false;
    }
    LoaderService.prototype.setLoading = function (isLoading) {
        var _this = this;
        setTimeout(function () {
            _this.isLoading = isLoading;
        });
    };
    LoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        })
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "./src/app/core/services/modal.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/modal.service.ts ***!
  \************************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModalService = /** @class */ (function () {
    function ModalService() {
        this.opened = false;
        this.title = "";
        this.content = "";
    }
    ModalService.prototype.open = function (title, content) {
        this.opened = true;
        this.title = title;
        this.content = content;
    };
    ModalService.prototype.close = function () {
        this.opened = false;
    };
    ModalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        })
    ], ModalService);
    return ModalService;
}());



/***/ }),

/***/ "./src/app/core/services/toast.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/toast.service.ts ***!
  \************************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ToastService = /** @class */ (function () {
    function ToastService() {
        this.toasts = [];
    }
    ToastService.prototype.addToast = function (toastData, delay) {
        if (delay === void 0) { delay = 5000; }
        if ("message" in toastData) {
            this.toasts.unshift(toastData);
        }
        else {
            this.toasts.unshift({
                title: "Error",
                message: this.getErrorMessage(toastData),
                variant: "danger"
            });
        }
        this.delayAndRemove(delay);
    };
    ToastService.prototype.getErrorMessage = function (_a) {
        var detail = _a.detail, data = _a.data;
        if (detail) {
            return detail;
        }
        if (data) {
            return "You " + data.label + " is wrong";
        }
    };
    ToastService.prototype.isErrorToast = function (toast) {
        if (toast.variant === "error") {
            return true;
        }
        return false;
    };
    ToastService.prototype.delayAndRemove = function (miliseconds) {
        var _this = this;
        setTimeout(function () {
            _this.toasts.pop();
        }, miliseconds);
    };
    ToastService.prototype.remove = function (index) {
        if (index) {
            this.toasts.splice(index, 1);
        }
        else {
            this.toasts.pop();
        }
    };
    ToastService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        })
    ], ToastService);
    return ToastService;
}());



/***/ }),

/***/ "./src/app/core/services/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUserProfile = function () {
        var _this = this;
        return this.http
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "/user")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (user) { return (_this.currentUser = user); }));
    };
    UserService.prototype.updateProfile = function (profile) {
        var _this = this;
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "/user", profile).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
            _this.currentUser = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.currentUser, profile);
        }));
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/layout/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <nav class=\"navbar\">\n    <div class=\"ml-4\">\n      <span id=\"owti\">OWTI, 2019 All rights reserved</span>\n    </div>\n    <div id=\"end\" class=\"mr-4\">\n      <div class=\"\">\n        <span id=\"terms\" class=\"mr-2\">Terms and conditions</span>\n        <span id=\"privacy\" class=\"mr-2\">Privacy Policy</span>\n        <i class=\"fab fa-facebook-f\"></i>\n        <i class=\"fab fa-twitter\" class=\"mx-2\"></i>\n        <i class=\"fab fa-instagram\"></i>\n      </div>\n    </div>\n    <!-- <span>Terms and conditions</span>\n        <span>Privacy Policy</span>\n        <div id=\"icons\">\n          <ul class=\"list-group list-group-horizontal-lg\">\n            <li class=\"fab fa-facebook-f\"></li>\n            <li class=\"fab fa-twitter\"></li>\n            <li class=\"fab fa-instagram\"></li>\n            cualquier cosa\n          </ul>\n        </div> -->\n  </nav>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  background-color: black; }\n\n#owti {\n  background-color: #000000;\n  font-family: Rubik;\n  color: #ffffff; }\n\n#end {\n  font-family: Rubik;\n  color: #ffffff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JvczM1L0RvY3VtZW50cy9maW5hbFByb2plY3QvZ2l0aHViL09XVElfRmluYWxfUHJvamVjdF9Gcm9udGVuZC9vd3RpLWZyb250ZW5kL3NyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUIsRUFBQTs7QUFHekI7RUFHRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBT2xCLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuI293dGkge1xuICAvLyB3aWR0aDogMjA1cHg7XG4gIC8vIGhlaWdodDogMTRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgZm9udC1mYW1pbHk6IFJ1YmlrO1xuICAvLyBmb250LXNpemU6IDEycHg7XG4gIC8vIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIC8vIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgLy8gZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIC8vIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIC8vIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4jZW5kIHtcbiAgZm9udC1mYW1pbHk6IFJ1YmlrO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLy8gI3Rlcm1zIHtcbi8vICAgd2lkdGg6IDE0MHB4O1xuLy8gICBoZWlnaHQ6IDE0cHg7XG4vLyAgIGZvbnQtZmFtaWx5OiBSdWJpaztcbi8vICAgZm9udC1zaXplOiAxMnB4O1xuLy8gICBmb250LXdlaWdodDogbm9ybWFsO1xuLy8gICBmb250LXN0eWxlOiBub3JtYWw7XG4vLyAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuLy8gICBsaW5lLWhlaWdodDogbm9ybWFsO1xuLy8gICBsZXR0ZXItc3BhY2luZzogMXB4O1xuLy8gICBjb2xvcjogI2ZmZmZmZjtcbi8vIH1cblxuLy8gI3ByaXZhY3kge1xuLy8gICB3aWR0aDogOTFweDtcbi8vICAgaGVpZ2h0OiAxNHB4O1xuLy8gICBmb250LWZhbWlseTogUnViaWs7XG4vLyAgIGZvbnQtc2l6ZTogMTJweDtcbi8vICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbi8vICAgZm9udC1zdHlsZTogbm9ybWFsO1xuLy8gICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbi8vICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbi8vICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbi8vICAgY29sb3I6ICNmZmZmZmY7XG4vLyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ow-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/layout/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layout/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav\n  class=\"navbar navbar-expand-lg mt-2\"\n  [ngStyle]=\"{ 'background-color': 'rgba(0,0,0,0)' }\"\n>\n  <img\n    class=\"navbar-brand ml-4\"\n    routerLink=\"/welcome\"\n    routerLinkActive=\"text\"\n    src=\"https://res.cloudinary.com/dqpd1zyf4/image/upload/v1561028215/owtiheader_lrfugo.png\"\n  />\n  <!-- <button\n    class=\"navbar-toggler\"\n    type=\"button\"\n    data-toggle=\"collapse\"\n    data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\"\n  >\n    <span class=\"navbar-toggler-icon\"></span>\n  </button> -->\n\n  <div class=\"collapse navbar-collapse mr-4\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\">\n        <a\n          class=\"nav-link\"\n          routerLink=\"/bar-capacity\"\n          routerLinkActive=\"text-secondary\"\n          >Capacity</a\n        >\n      </li>\n      <li class=\"nav-item\">\n        <a\n          class=\"nav-link\"\n          routerLink=\"/work-with-us\"\n          routerLinkActive=\"text-secondary\"\n          >Work with us</a\n        >\n      </li>\n      <!-- <li class=\"nav-item\">\n        <a\n          class=\"nav-link\"\n          routerLink=\"/about-us\"\n          routerLinkActive=\"text-secondary\"\n          >About us</a\n        >\n      </li> -->\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/layout/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav a {\n  height: 22px;\n  font-family: \"Rubik\", sans-serif;\n  font-size: 18px;\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: 1px;\n  color: black; }\n\nbody,\nhtml {\n  width: 100%;\n  height: 100%;\n  background-color: #050505; }\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  font-family: Helvetica; }\n\nnav {\n  width: 100%;\n  height: 50px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: #333333; }\n\n#wrapper {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  display: block;\n  float: left; }\n\n#wrapper ul {\n  diplay: block;\n  width: 50%;\n  margin: 0 auto;\n  height: 100%;\n  text-align: center; }\n\n#wrapper li {\n  display: block;\n  float: left;\n  text-align: center;\n  width: 25%;\n  height: 100%;\n  transition: all ease-in-out 0.2s; }\n\n#wrapper a {\n  display: block;\n  float: left;\n  color: white;\n  width: 100%;\n  padding: 0 0.5em;\n  line-height: 50px;\n  text-decoration: none;\n  font-weight: bold; }\n\nli.different {\n  border: none;\n  position: relative; }\n\nli.different:hover {\n  border: none; }\n\nli:hover {\n  border-bottom: 5px solid #000000; }\n\n.different::after {\n  content: \"\";\n  position: absolute;\n  width: 0px;\n  height: 5px;\n  left: 50%;\n  bottom: 0;\n  background-color: black;\n  transition: all ease-in-out 0.2s; }\n\n.different:hover::after {\n  width: 100%;\n  left: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JvczM1L0RvY3VtZW50cy9maW5hbFByb2plY3QvZ2l0aHViL09XVElfRmluYWxfUHJvamVjdF9Gcm9udGVuZC9vd3RpLWZyb250ZW5kL3NyYy9hcHAvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFlBQVksRUFBQTs7QUFLZDs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxXQUFXLEVBQUE7O0FBR2I7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLGNBQWM7RUFDZCxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixnQ0FBZ0MsRUFBQTs7QUFFbEM7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLFlBQVksRUFBQTs7QUFFZDtFQUNFLGdDQUFnQyxFQUFBOztBQUVsQztFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxTQUFTO0VBQ1QsU0FBUztFQUNULHVCQUE4QjtFQUM5QixnQ0FBZ0MsRUFBQTs7QUFFbEM7RUFDRSxXQUFXO0VBQ1gsT0FBTyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYgYSB7XG4gIGhlaWdodDogMjJweDtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi8vIEFOSU1BQ0nDk05cblxuYm9keSxcbmh0bWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUwNTA1O1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xufVxuXG5uYXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcbn1cblxuI3dyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbiN3cmFwcGVyIHVsIHtcbiAgZGlwbGF5OiBibG9jaztcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jd3JhcHBlciBsaSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMjUlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjJzO1xufVxuI3dyYXBwZXIgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAwLjVlbTtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5saS5kaWZmZXJlbnQge1xuICBib3JkZXI6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmxpLmRpZmZlcmVudDpob3ZlciB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbmxpOmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICMwMDAwMDA7XG59XG4uZGlmZmVyZW50OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDBweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGxlZnQ6IDUwJTtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjJzO1xufVxuLmRpZmZlcmVudDpob3Zlcjo6YWZ0ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ow-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/layout/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/layout/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-layout/main-layout.component */ "./src/app/layout/main-layout/main-layout.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/layout/modal/modal.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _toast_toast_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./toast/toast.component */ "./src/app/layout/toast/toast.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/layout/nav/nav.component.ts");











var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_6__["MainLayoutComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_7__["ModalComponent"],
                _toast_toast_component__WEBPACK_IMPORTED_MODULE_9__["ToastComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_10__["NavComponent"]
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]],
            exports: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_6__["MainLayoutComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_7__["ModalComponent"],
                _toast_toast_component__WEBPACK_IMPORTED_MODULE_9__["ToastComponent"]
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/layout/main-layout/main-layout.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/main-layout/main-layout.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"principal\" class=\"container-fluid\">\n  <div class=\"row\">\n    <nav class=\"col-12 col-lg-2 bg-light pt-5\">\n      <hr />\n      <ow-nav></ow-nav>\n      <hr />\n      <a class=\"btn btn-link\" (click)=\"authService.logout()\">Logout</a>\n    </nav>\n    <main class=\"col-12 col-md-8 col-lg-10\">\n      <router-outlet></router-outlet>\n    </main>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/main-layout/main-layout.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layout/main-layout/main-layout.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  height: 100%; }\n  .container-fluid .row {\n    height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JvczM1L0RvY3VtZW50cy9maW5hbFByb2plY3QvZ2l0aHViL09XVElfRmluYWxfUHJvamVjdF9Gcm9udGVuZC9vd3RpLWZyb250ZW5kL3NyYy9hcHAvbGF5b3V0L21haW4tbGF5b3V0L21haW4tbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWSxFQUFBO0VBRGQ7SUFHSSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbWFpbi1sYXlvdXQvbWFpbi1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICAucm93IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/main-layout/main-layout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/main-layout/main-layout.component.ts ***!
  \*************************************************************/
/*! exports provided: MainLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function() { return MainLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");



var MainLayoutComponent = /** @class */ (function () {
    function MainLayoutComponent(authService) {
        this.authService = authService;
    }
    MainLayoutComponent.prototype.ngOnInit = function () { };
    MainLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "ow-main-layout",
            template: __webpack_require__(/*! ./main-layout.component.html */ "./src/app/layout/main-layout/main-layout.component.html"),
            styles: [__webpack_require__(/*! ./main-layout.component.scss */ "./src/app/layout/main-layout/main-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], MainLayoutComponent);
    return MainLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layout/modal/modal.component.html":
/*!***************************************************!*\
  !*** ./src/app/layout/modal/modal.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"myModal\" class=\"modal\" *ngIf=\"modalService.opened\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h3 class=\"modal-title text-center mt-3\">{{ modalService.title }}</h3>\n        <button type=\"button\" class=\"close\" (click)=\"modalService.close()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <ow-register></ow-register>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/modal/modal.component.scss":
/*!***************************************************!*\
  !*** ./src/app/layout/modal/modal.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\n  display: block;\n  background: rgba(0, 0, 0, 0.5); }\n\nh3 {\n  font-family: PlayfairDisplay;\n  font-weight: 900;\n  font-style: italic;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: center;\n  color: #000000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JvczM1L0RvY3VtZW50cy9maW5hbFByb2plY3QvZ2l0aHViL09XVElfRmluYWxfUHJvamVjdF9Gcm9udGVuZC9vd3RpLWZyb250ZW5kL3NyYy9hcHAvbGF5b3V0L21vZGFsL21vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbW9kYWwvbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG5oMyB7XG4gIGZvbnQtZmFtaWx5OiBQbGF5ZmFpckRpc3BsYXk7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/modal/modal.component.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/modal/modal.component.ts ***!
  \*************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/modal.service */ "./src/app/core/services/modal.service.ts");



var ModalComponent = /** @class */ (function () {
    function ModalComponent(modalService) {
        this.modalService = modalService;
    }
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "ow-modal",
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/layout/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.scss */ "./src/app/layout/modal/modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/layout/nav/nav.component.html":
/*!***********************************************!*\
  !*** ./src/app/layout/nav/nav.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <h3>\n    <a\n      class=\"nav-link\"\n      routerLink=\"/capacity\"\n      routerLinkActivate=\"text-secondary\"\n      >Capacity</a\n    >\n  </h3>\n  <h3>\n    <a\n      class=\"nav-link\"\n      routerLink=\"/my-account\"\n      routerLinkActivate=\"text-secondary\"\n      >My Account</a\n    >\n  </h3>\n</nav>\n"

/***/ }),

/***/ "./src/app/layout/nav/nav.component.scss":
/*!***********************************************!*\
  !*** ./src/app/layout/nav/nav.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/nav/nav.component.ts":
/*!*********************************************!*\
  !*** ./src/app/layout/nav/nav.component.ts ***!
  \*********************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ow-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/layout/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/layout/nav/nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/layout/toast/toast.component.html":
/*!***************************************************!*\
  !*** ./src/app/layout/toast/toast.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"toast-container\">\n  <div\n    class=\"toast fade show\"\n    role=\"alert\"\n    class=\"bg-{{ toast.variant }} text-light\"\n    *ngFor=\"let toast of toastService.toasts; let i = index\"\n  >\n    <div class=\"toast-header text-{{ toast.variant }}\">\n      <i class=\"fa fa-exclamation-triangle rounded mr-2\"></i>\n      <strong class=\"mr-auto\">{{ toast.title }}</strong>\n      <button\n        type=\"button\"\n        class=\"ml-2 mb-1 close text-{{ toast.variant }}\"\n        (click)=\"toastService.remove(i)\"\n      >\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"toast-body\">\n      {{ toast.message | capitalize: 2 }}\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/toast/toast.component.scss":
/*!***************************************************!*\
  !*** ./src/app/layout/toast/toast.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block; }\n  :host #toast-container {\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n    min-width: 300px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JvczM1L0RvY3VtZW50cy9maW5hbFByb2plY3QvZ2l0aHViL09XVElfRmluYWxfUHJvamVjdF9Gcm9udGVuZC9vd3RpLWZyb250ZW5kL3NyYy9hcHAvbGF5b3V0L3RvYXN0L3RvYXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYyxFQUFBO0VBRGhCO0lBR0ksZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvdG9hc3QvdG9hc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAjdG9hc3QtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAyMHB4O1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIG1pbi13aWR0aDogMzAwcHg7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/toast/toast.component.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/toast/toast.component.ts ***!
  \*************************************************/
/*! exports provided: ToastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastComponent", function() { return ToastComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/toast.service */ "./src/app/core/services/toast.service.ts");



var ToastComponent = /** @class */ (function () {
    function ToastComponent(toastService) {
        this.toastService = toastService;
    }
    ToastComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "ow-toast",
            template: __webpack_require__(/*! ./toast.component.html */ "./src/app/layout/toast/toast.component.html"),
            styles: [__webpack_require__(/*! ./toast.component.scss */ "./src/app/layout/toast/toast.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"]])
    ], ToastComponent);
    return ToastComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/loader/loader.component.html":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner-border text-primary\" role=\"status\">\n  <span class=\"sr-only\">Loading...</span>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/loader/loader.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/loader/loader.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.ts ***!
  \**************************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ow-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/shared/components/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.scss */ "./src/app/shared/components/loader/loader.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/login/login.component.html":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/login/login.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form\n  [formGroup]=\"loginForm\"\n  [owMarkAsTouched]=\"loginForm\"\n  (ngSubmit)=\"login()\"\n>\n  <div class=\"form-group\">\n    <input\n      class=\"form-control\"\n      type=\"text\"\n      formControlName=\"email\"\n      placeholder=\"Email\"\n    />\n    <ow-validation-messages\n      [control]=\"loginForm.get('email')\"\n    ></ow-validation-messages>\n  </div>\n  <div class=\"form-group\">\n    <input\n      class=\"form-control\"\n      type=\"password\"\n      formControlName=\"password\"\n      placeholder=\"Password\"\n    />\n    <ow-validation-messages\n      [control]=\"loginForm.get('password')\"\n    ></ow-validation-messages>\n  </div>\n  <button type=\"submit\" class=\"btn btn-dark btn-lg btn-block mt-2\">\n    SEND\n  </button>\n</form>\n"

/***/ }),

/***/ "./src/app/shared/components/login/login.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/login/login.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/components/login/login.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/login/login.component.ts ***!
  \************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _validators_mail_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../validators/mail.validator */ "./src/app/shared/validators/mail.validator.ts");
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/user.service */ "./src/app/core/services/user.service.ts");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, router, authService, userService) {
        this.fb = fb;
        this.router = router;
        this.authService = authService;
        this.userService = userService;
        this.loginForm = this.fb.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _validators_mail_validator__WEBPACK_IMPORTED_MODULE_5__["MailValidator"]]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(7)]]
        });
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.loginForm.valid) {
            this.authService.login(this.loginForm.value).subscribe(function () {
                _this.userService.getUserProfile().subscribe();
                console.log(_this.authService, _this.userService);
                _this.router.navigate(["/capacity"]);
            }, function () { return _this.loginForm.get("password").setValue(""); });
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "ow-login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/shared/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/shared/components/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/not-found/not-found.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/not-found/not-found.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n<p>\n  not-found works!\n</p>\n\n<p>\n  not-found works!\n</p>\n\n<p>\n  not-found works!\n</p>\n\n<p>\n  not-found works!\n</p>\n\n<p>\n  not-found works!\n</p>\n\n<p>\n  not-found works!\n</p>\n\n<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/shared/components/not-found/not-found.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/not-found/not-found.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/not-found/not-found.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/not-found/not-found.component.ts ***!
  \********************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ow-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/shared/components/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/shared/components/not-found/not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/register/register.component.html":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/register/register.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form\n  [formGroup]=\"registerForm\"\n  [owMarkAsTouched]=\"registerForm\"\n  (ngSubmit)=\"register()\"\n>\n  <div class=\"form-group\">\n    <input\n      class=\"form-control\"\n      type=\"text\"\n      formControlName=\"email\"\n      placeholder=\"Enter your email\"\n    />\n    <ow-validation-messages [control]=\"registerForm.get('email')\">\n    </ow-validation-messages>\n  </div>\n  <div class=\"form-group\">\n    <input\n      class=\"form-control\"\n      type=\"password\"\n      formControlName=\"password\"\n      placeholder=\"Enter your password\"\n    />\n    <ow-validation-messages [control]=\"registerForm.get('password')\">\n    </ow-validation-messages>\n  </div>\n  <div class=\"form-group\">\n    <input\n      class=\"form-control\"\n      type=\"password\"\n      formControlName=\"confirmPassword\"\n      placeholder=\"Confirm your password\"\n    />\n    <ow-validation-messages [control]=\"registerForm.get('confirmPassword')\">\n    </ow-validation-messages>\n  </div>\n  <button type=\"submit\" class=\"btn btn-dark btn-lg btn-block mt-2\">SEND</button>\n</form>\n"

/***/ }),

/***/ "./src/app/shared/components/register/register.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/register/register.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/components/register/register.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/register/register.component.ts ***!
  \******************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _validators_match_password_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../validators/match-password.validator */ "./src/app/shared/validators/match-password.validator.ts");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, authService) {
        this.fb = fb;
        this.authService = authService;
        this.registerForm = this.fb.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(7)]],
            confirmPassword: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        }, { validators: _validators_match_password_validator__WEBPACK_IMPORTED_MODULE_4__["MatchPasswordValidator"] });
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        var _a = this.registerForm.value, email = _a.email, password = _a.password;
        if (this.registerForm.valid) {
            this.authService.register({ email: email, password: password }).subscribe(function () {
                _this.registerForm.reset();
            });
        }
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "ow-register",
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/shared/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/shared/components/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/shared/directives/mark-as-touched.directive.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/directives/mark-as-touched.directive.ts ***!
  \****************************************************************/
/*! exports provided: MarkAsTouchedDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkAsTouchedDirective", function() { return MarkAsTouchedDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var MarkAsTouchedDirective = /** @class */ (function () {
    function MarkAsTouchedDirective() {
    }
    MarkAsTouchedDirective.prototype.onSubmit = function (event) {
        Object.values(this.owMarkAsTouched.controls).forEach(function (control) {
            return control.markAsTouched();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], MarkAsTouchedDirective.prototype, "owMarkAsTouched", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("submit", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], MarkAsTouchedDirective.prototype, "onSubmit", null);
    MarkAsTouchedDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: "[owMarkAsTouched]"
        })
    ], MarkAsTouchedDirective);
    return MarkAsTouchedDirective;
}());



/***/ }),

/***/ "./src/app/shared/pipes/capitalize.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/pipes/capitalize.pipe.ts ***!
  \*************************************************/
/*! exports provided: CapitalizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function() { return CapitalizePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CapitalizePipe = /** @class */ (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value) {
        return value.split("")[0].toUpperCase() + value.slice(1);
    };
    CapitalizePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: "capitalize"
        })
    ], CapitalizePipe);
    return CapitalizePipe;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/capitalize.pipe */ "./src/app/shared/pipes/capitalize.pipe.ts");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/loader/loader.component */ "./src/app/shared/components/loader/loader.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/shared/components/login/login.component.ts");
/* harmony import */ var _directives_mark_as_touched_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/mark-as-touched.directive */ "./src/app/shared/directives/mark-as-touched.directive.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/shared/components/not-found/not-found.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/shared/components/register/register.component.ts");
/* harmony import */ var _validation_messages_validation_messages_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./validation-messages/validation-messages.component */ "./src/app/shared/validation-messages/validation-messages.component.ts");











var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_4__["CapitalizePipe"],
                _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__["LoaderComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _directives_mark_as_touched_directive__WEBPACK_IMPORTED_MODULE_7__["MarkAsTouchedDirective"],
                _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _validation_messages_validation_messages_component__WEBPACK_IMPORTED_MODULE_10__["ValidationMessagesComponent"]
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
            exports: [
                _pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_4__["CapitalizePipe"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__["LoaderComponent"],
                _directives_mark_as_touched_directive__WEBPACK_IMPORTED_MODULE_7__["MarkAsTouchedDirective"],
                _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _validation_messages_validation_messages_component__WEBPACK_IMPORTED_MODULE_10__["ValidationMessagesComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/validation-messages/validation-messages.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/validation-messages/validation-messages.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"control?.dirty || control?.touched\">\n  <div class=\"invalid-feedback\" *ngIf=\"control.hasError('required')\">\n    <i class=\"fa fa-exclamation-triangle\"></i>This field is required\n  </div>\n\n  <div class=\"invalid-feedback\" *ngIf=\"control.hasError('mailformedMail')\">\n    <i class=\"fa fa-exclamation-triangle\"></i>This mail is not valid\n  </div>\n\n  <div class=\"invalid-feedback\" *ngIf=\"control.hasError('missingAt')\">\n    <i class=\"fa fa-exclamation-triangle\"></i>You need an @\n  </div>\n\n  <div class=\"invalid-feedback\" *ngIf=\"control.hasError('minLength')\">\n    <i class=\"fa fa-exclamation-triangle\"></i>The length is invalid\n  </div>\n</ng-container>\n\n<ng-container *ngIf=\"group?.dirty || group?.touched\">\n  <div\n    class=\"invalid-feedback\"\n    *ngIf=\"control.valid && group?.hasError('passwordMissMatch')\"\n  >\n    <i class=\"fa fa-exclamation-triangle\"></i> Password and confirmation\n    password should match\n  </div>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/shared/validation-messages/validation-messages.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/validation-messages/validation-messages.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC92YWxpZGF0aW9uLW1lc3NhZ2VzL3ZhbGlkYXRpb24tbWVzc2FnZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/validation-messages/validation-messages.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/validation-messages/validation-messages.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ValidationMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationMessagesComponent", function() { return ValidationMessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var ValidationMessagesComponent = /** @class */ (function () {
    function ValidationMessagesComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"])
    ], ValidationMessagesComponent.prototype, "control", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], ValidationMessagesComponent.prototype, "group", void 0);
    ValidationMessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "ow-validation-messages",
            template: __webpack_require__(/*! ./validation-messages.component.html */ "./src/app/shared/validation-messages/validation-messages.component.html"),
            styles: [__webpack_require__(/*! ./validation-messages.component.scss */ "./src/app/shared/validation-messages/validation-messages.component.scss")]
        })
    ], ValidationMessagesComponent);
    return ValidationMessagesComponent;
}());



/***/ }),

/***/ "./src/app/shared/validators/mail.validator.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/validators/mail.validator.ts ***!
  \*****************************************************/
/*! exports provided: MailValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailValidator", function() { return MailValidator; });
function MailValidator(control) {
    var EMAIL_REGEX = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if (control.value) {
        if (control.value.indexOf("@") === -1) {
            return { missingAt: true };
        }
        if (!EMAIL_REGEX.test(control.value)) {
            return { malFormedMail: true };
        }
    }
    return null;
}


/***/ }),

/***/ "./src/app/shared/validators/match-password.validator.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/validators/match-password.validator.ts ***!
  \***************************************************************/
/*! exports provided: MatchPasswordValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchPasswordValidator", function() { return MatchPasswordValidator; });
function MatchPasswordValidator(group) {
    var password = group.get("password").value;
    var confirmPassword = group.get("confirmPassword").value;
    if (password !== confirmPassword) {
        return { passwordMissMatch: true };
    }
    return null;
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiBaseUrl: "https://owti.herokuapp.com/api"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/bos35/Documents/finalProject/github/OWTI_Final_Project_Frontend/owti-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map