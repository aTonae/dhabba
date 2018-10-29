(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _blank_page_blank_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blank-page/blank-page.component */ "./src/app/blank-page/blank-page.component.ts");
/* harmony import */ var _department_department_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./department/department.component */ "./src/app/department/department.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _unit_unit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./unit/unit.component */ "./src/app/unit/unit.component.ts");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _pay_pay_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pay/pay.component */ "./src/app/pay/pay.component.ts");
/* harmony import */ var _printer_printer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./printer/printer.component */ "./src/app/printer/printer.component.ts");
/* harmony import */ var _modifier_modifier_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modifier/modifier.component */ "./src/app/modifier/modifier.component.ts");
/* harmony import */ var _service_service_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service/service.component */ "./src/app/service/service.component.ts");
/* harmony import */ var _vendor_vendor_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./vendor/vendor.component */ "./src/app/vendor/vendor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    { path: '', component: _content_content_component__WEBPACK_IMPORTED_MODULE_2__["ContentComponent"] },
    { path: 'product', component: _product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"] },
    { path: 'blankpage', component: _blank_page_blank_page_component__WEBPACK_IMPORTED_MODULE_4__["BlankPageComponent"] },
    { path: 'dept', component: _department_department_component__WEBPACK_IMPORTED_MODULE_5__["DepartmentComponent"] },
    { path: 'cat', component: _category_category_component__WEBPACK_IMPORTED_MODULE_6__["CategoryComponent"] },
    { path: 'uni', component: _unit_unit_component__WEBPACK_IMPORTED_MODULE_7__["UnitComponent"] },
    { path: 'vend', component: _vendor_vendor_component__WEBPACK_IMPORTED_MODULE_13__["VendorComponent"] },
    { path: 'cstmr', component: _customer_customer_component__WEBPACK_IMPORTED_MODULE_8__["CustomerComponent"] },
    { path: 'paymthd', component: _pay_pay_component__WEBPACK_IMPORTED_MODULE_9__["PayComponent"] },
    { path: 'prnter', component: _printer_printer_component__WEBPACK_IMPORTED_MODULE_10__["PrinterComponent"] },
    { path: 'srvice', component: _service_service_component__WEBPACK_IMPORTED_MODULE_12__["ServiceComponent"] },
    { path: 'modi', component: _modifier_modifier_component__WEBPACK_IMPORTED_MODULE_11__["ModifierComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-sidebar></app-sidebar>\n<app-header></app-header>\n<router-outlet></router-outlet>\n\n\n\n\n\n\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'file';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _blank_page_blank_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blank-page/blank-page.component */ "./src/app/blank-page/blank-page.component.ts");
/* harmony import */ var _department_department_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./department/department.component */ "./src/app/department/department.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _unit_unit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./unit/unit.component */ "./src/app/unit/unit.component.ts");
/* harmony import */ var _tax_tax_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tax/tax.component */ "./src/app/tax/tax.component.ts");
/* harmony import */ var _vendor_vendor_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./vendor/vendor.component */ "./src/app/vendor/vendor.component.ts");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _pay_pay_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pay/pay.component */ "./src/app/pay/pay.component.ts");
/* harmony import */ var _printer_printer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./printer/printer.component */ "./src/app/printer/printer.component.ts");
/* harmony import */ var _modifier_modifier_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modifier/modifier.component */ "./src/app/modifier/modifier.component.ts");
/* harmony import */ var _service_service_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./service/service.component */ "./src/app/service/service.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _content_content_component__WEBPACK_IMPORTED_MODULE_7__["ContentComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_9__["ProductComponent"],
                _blank_page_blank_page_component__WEBPACK_IMPORTED_MODULE_10__["BlankPageComponent"],
                _department_department_component__WEBPACK_IMPORTED_MODULE_11__["DepartmentComponent"],
                _category_category_component__WEBPACK_IMPORTED_MODULE_12__["CategoryComponent"],
                _unit_unit_component__WEBPACK_IMPORTED_MODULE_13__["UnitComponent"],
                _tax_tax_component__WEBPACK_IMPORTED_MODULE_14__["TaxComponent"],
                _vendor_vendor_component__WEBPACK_IMPORTED_MODULE_15__["VendorComponent"],
                _customer_customer_component__WEBPACK_IMPORTED_MODULE_16__["CustomerComponent"],
                _pay_pay_component__WEBPACK_IMPORTED_MODULE_17__["PayComponent"],
                _printer_printer_component__WEBPACK_IMPORTED_MODULE_18__["PrinterComponent"],
                _modifier_modifier_component__WEBPACK_IMPORTED_MODULE_19__["ModifierComponent"],
                _service_service_component__WEBPACK_IMPORTED_MODULE_20__["ServiceComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blank-page/blank-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/blank-page/blank-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blank-page/blank-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/blank-page/blank-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\n   \n\n    <div id=\"page-wrapper\" class=\"gray-bg\">\n    <div class=\"row border-bottom\">\n   \n    </div>\n        <div class=\"row wrapper border-bottom white-bg page-heading\">\n            <div class=\"col-sm-4\">\n                <h2>This is main title</h2>\n                <ol class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\">\n                        <a href=\"index.html\">This is</a>\n                    </li>\n                    <li class=\"breadcrumb-item active\">\n                        <strong>Breadcrumb</strong>\n                    </li>\n                </ol>\n            </div>\n            <div class=\"col-sm-8\">\n                <div class=\"title-action\">\n                    <a href=\"\" class=\"btn btn-primary\">This is action area</a>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"wrapper wrapper-content\">\n            <div class=\"middle-box text-center animated fadeInRightBig\">\n                <h3 class=\"font-bold\">This is page content</h3>\n                <div class=\"error-desc\">\n                    You can create here any grid layout you want. And any variation layout you imagine:) Check out\n                    main dashboard and other site. It use many different layout.\n                    <br/><a href=\"index.html\" class=\"btn btn-primary m-t\">Dashboard</a>\n                </div>\n            </div>\n        </div>\n        <div class=\"footer\">\n            <div class=\"float-right\">\n                10GB of <strong>250GB</strong> Free.\n            </div>\n            <div>\n                <strong>Copyright</strong> Example Company &copy; 2014-2018\n            </div>\n        </div>\n\n    </div>\n    </div>\n\n"

/***/ }),

/***/ "./src/app/blank-page/blank-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/blank-page/blank-page.component.ts ***!
  \****************************************************/
/*! exports provided: BlankPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankPageComponent", function() { return BlankPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlankPageComponent = /** @class */ (function () {
    function BlankPageComponent() {
    }
    BlankPageComponent.prototype.ngOnInit = function () {
    };
    BlankPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blank-page',
            template: __webpack_require__(/*! ./blank-page.component.html */ "./src/app/blank-page/blank-page.component.html"),
            styles: [__webpack_require__(/*! ./blank-page.component.css */ "./src/app/blank-page/blank-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlankPageComponent);
    return BlankPageComponent;
}());



/***/ }),

/***/ "./src/app/category/category.component.css":
/*!*************************************************!*\
  !*** ./src/app/category/category.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/category/category.component.html":
/*!**************************************************!*\
  !*** ./src/app/category/category.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\n   \n\n  <div id=\"page-wrapper\" class=\"gray-bg\">\n  <div class=\"row border-bottom\">\n \n  </div>\n      <div class=\"row wrapper border-bottom white-bg page-heading\">\n          <div class=\"col-sm-4\">\n              <h2>This is main title</h2>\n              <ol class=\"breadcrumb\">\n                  <li class=\"breadcrumb-item\">\n                      <a href=\"index.html\">This is</a>\n                  </li>\n                  <li class=\"breadcrumb-item active\">\n                      <strong>Breadcrumb</strong>\n                  </li>\n              </ol>\n          </div>\n          <div class=\"col-sm-8\">\n              <div class=\"title-action\">\n                  <a href=\"\" class=\"btn btn-primary\">This is action area</a>\n              </div>\n          </div>\n      </div>\n\n      <div class=\"wrapper wrapper-content\">\n         \n        <div class=\"row\">\n          <div class=\"col-lg-6\" style=\"margin-left: 50px\">\n              <div class=\"ibox \">\n                  <div class=\"ibox-title\" style=\"text-align: center\">\n                      <h5>Category</h5>\n                    \n                  </div>\n                  <div class=\"ibox-content\">\n                      <form method=\"get\">\n                          <div class=\"form-group  row\"><label class=\"col-sm-2 col-form-label\">Category Name</label>\n\n                              <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)] = \"category.name\"></div>\n                          </div>\n                      \n                       \n                          <div class=\"form-group row\"><label class=\"col-sm-2 col-form-label\">Department</label>\n\n                              <div class=\"col-sm-10\"><select class=\"form-control m-b\" name=\"account\" [(ngModel)] = \"category.account\">\n                                  <option>option 1</option>\n                                  <option>option 2</option>\n                                  <option>option 3</option>\n                                  <option>option 4</option>\n                              </select>\n\n                              </div>\n                          </div>\n\n                          <div class=\"form-group row\"><label class=\"col-sm-2 col-form-label\">Printer</label>\n\n                              <div class=\"col-sm-10\"><select class=\"form-control m-b\" name=\"printer\" [(ngModel)] = \"category.printer\">\n                                  <option>option 1</option>\n                                  <option>option 2</option>\n                                  <option>option 3</option>\n                                  <option>option 4</option>\n                              </select>\n\n                              </div>\n                          </div>\n                          <div class=\"form-group row\"><label class=\"col-sm-2 col-form-label\">Position</label>\n\n                              <div class=\"col-sm-10\"><input type=\"text\" placeholder=\"0\" class=\"form-control\" name=\"position\" [(ngModel)] = \"category.position\"></div>\n                          </div>\n\n                          \n                         \n                                 \n                                  \n\n                                \n                          <div class=\"form-group row\"><label class=\"col-sm-2 col-form-label\">Color</label>\n\n                              <div class=\"col-sm-10\">\n                                  \n                             \n                                  <div class=\"input-group\"><input type=\"text\" class=\"form-control\" name=\"color\" [(ngModel)] = \"category.color\">\n\n                                      <div class=\"input-group-append\">\n                                          <button data-toggle=\"dropdown\" class=\"btn btn-white dropdown-toggle\" type=\"button\">... </button>\n                                          <ul class=\"dropdown-menu float-right\">\n                                              <li><a href=\"#\">Action</a></li>\n                                              <li><a href=\"#\">Another action</a></li>\n                                              <li><a href=\"#\">Something else here</a></li>\n                                              <li class=\"dropdown-divider\"></li>\n                                              <li><a href=\"#\">Separated link</a></li>\n                                          </ul>\n                                      </div>\n                                      </div>\n                              </div>\n                          </div>\n                          <div class=\"form-group row\">\n                            <div class=\"col-sm-6 col-sm-offset-3\">\n                              <button class=\"btn btn-white btn-sm\" type=\"submit\">New</button>\n                              <button class=\"btn btn-white btn-sm\" type=\"submit\">Cancel</button>\n                              <button class=\"btn btn-primary btn-sm\" type=\"submit\" (click)=addCat()>Save</button>\n                          </div>\n                          </div>\n                      </form>\n                  </div>\n              </div>\n          </div>\n     \n<div class=\"col-lg-5\">\n  <div class=\"ibox\">\n      <div class=\"ibox-title\" style=\"text-align: center\">\n        <h5>Search</h5>\n         \n\n          \n      </div>\n      <div class=\"ibox-content\">\n\n          <input type=\"text\" class=\"form-control form-control-sm m-b-xs\" id=\"filter\"\n                 placeholder=\"Search in table\">\n\n          <table class=\"footable table table-stripped\" data-page-size=\"8\" data-filter=#filter>\n              \n              <tr>\n                  <th>Name</th>\n                  <th>Department</th>\n                  <th>Printer</th>\n                  <th>Position</th>\n                  <th>Color</th>\n\n                </tr>\n              <tr *ngFor=\"let cat of categories\">\n                <td>{{cat.name}}</td>\n                <td>{{cat.account}}</td>\n                <td>{{cat.printer}}</td>\n                <td>{{cat.position}}</td>\n                <td>{{cat.color}}</td>\n\n              </tr>\n      \n        \n          </table>\n      </div>\n  </div>\n\n</div>\n\n\n\n\n  </div>\n      </div>\n      <div class=\"footer\">\n          <div class=\"float-right\">\n              10GB of <strong>250GB</strong> Free.\n          </div>\n          <div>\n              <strong>Copyright</strong> Example Company &copy; 2014-2018\n          </div>\n      </div>\n\n  </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/category/category.component.ts":
/*!************************************************!*\
  !*** ./src/app/category/category.component.ts ***!
  \************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CategoryComponent = /** @class */ (function () {
    function CategoryComponent() {
        this.categories = [];
        this.category = {
            name: "",
            account: "",
            printer: "",
            position: "",
            color: "",
        };
    }
    CategoryComponent.prototype.ngOnInit = function () {
    };
    CategoryComponent.prototype.addCat = function () {
        this.categories.push({
            name: this.category.name,
            account: this.category.account,
            printer: this.category.printer,
            position: this.category.position,
            color: this.category.color,
        });
    };
    CategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! ./category.component.html */ "./src/app/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.css */ "./src/app/category/category.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/content/content.component.css":
/*!***********************************************!*\
  !*** ./src/app/content/content.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/content.component.html":
/*!************************************************!*\
  !*** ./src/app/content/content.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\n  \n\n  <div id=\"page-wrapper\" class=\"gray-bg\" >\n  <div class=\"row border-bottom\">\n  \n  </div>\n      <div class=\"row wrapper border-bottom white-bg page-heading\">\n          <div class=\"col-lg-10\">\n              <h2>Basic Form</h2>\n              <ol class=\"breadcrumb\">\n                  <li class=\"breadcrumb-item\">\n                      <a href=\"index.html\">Home</a>\n                  </li>\n                  <li class=\"breadcrumb-item\">\n                      <a>Forms</a>\n                  </li>\n                  <li class=\"breadcrumb-item active\">\n                      <strong>Basic Form</strong>\n                  </li>\n              </ol>\n          </div>\n          <div class=\"col-lg-2\">\n\n          </div>\n      </div>\n  <div class=\"wrapper wrapper-content animated fadeInRight\">\n      <div class=\"row\">\n      <div class=\"col-lg-7\">\n          <div class=\"ibox \">\n              <div class=\"ibox-title\">\n                  <h5>Basic form <small>Simple login form example</small></h5>\n                  <div class=\"ibox-tools\">\n                      <a class=\"collapse-link\">\n                          <i class=\"fa fa-chevron-up\"></i>\n                      </a>\n                      <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n                          <i class=\"fa fa-wrench\"></i>\n                      </a>\n                      <ul class=\"dropdown-menu dropdown-user\">\n                          <li><a href=\"#\" class=\"dropdown-item\">Config option 1</a>\n                          </li>\n                          <li><a href=\"#\" class=\"dropdown-item\">Config option 2</a>\n                          </li>\n                      </ul>\n                      <a class=\"close-link\">\n                          <i class=\"fa fa-times\"></i>\n                      </a>\n                  </div>\n              </div>\n              <div class=\"ibox-content\">\n                  <div class=\"row\">\n                      <div class=\"col-sm-6 b-r\"><h3 class=\"m-t-none m-b\">Sign in</h3>\n                          <p>Sign in today for more expirience.</p>\n                          <form role=\"form\">\n                              <div class=\"form-group\"><label>Email</label> <input type=\"email\" placeholder=\"Enter email\" class=\"form-control\"></div>\n                              <div class=\"form-group\"><label>Password</label> <input type=\"password\" placeholder=\"Password\" class=\"form-control\"></div>\n                              <div>\n                                  <button class=\"btn btn-sm btn-primary float-right m-t-n-xs\" type=\"submit\"><strong>Log in</strong></button>\n                                  <label> <input type=\"checkbox\" class=\"i-checks\"> Remember me </label>\n                              </div>\n                          </form>\n                      </div>\n                      <div class=\"col-sm-6\"><h4>Not a member?</h4>\n                          <p>You can create an account:</p>\n                          <p class=\"text-center\">\n                              <a href=\"\"><i class=\"fa fa-sign-in big-icon\"></i></a>\n                          </p>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n          <div class=\"col-lg-5\">\n              <div class=\"ibox \">\n                  <div class=\"ibox-title\">\n                      <h5>Horizontal form</h5>\n                      <div class=\"ibox-tools\">\n                          <a class=\"collapse-link\">\n                              <i class=\"fa fa-chevron-up\"></i>\n                          </a>\n                          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n                              <i class=\"fa fa-wrench\"></i>\n                          </a>\n                          <ul class=\"dropdown-menu dropdown-user\">\n                              <li><a href=\"#\" class=\"dropdown-item\">Config option 1</a>\n                              </li>\n                              <li><a href=\"#\" class=\"dropdown-item\">Config option 2</a>\n                              </li>\n                          </ul>\n                          <a class=\"close-link\">\n                              <i class=\"fa fa-times\"></i>\n                          </a>\n                      </div>\n                  </div>\n                  <div class=\"ibox-content\">\n                      <form>\n                          <p>Sign in today for more expirience.</p>\n                          <div class=\"form-group row\"><label class=\"col-lg-2 col-form-label\">Email</label>\n\n                              <div class=\"col-lg-10\"><input type=\"email\" placeholder=\"Email\" class=\"form-control\"> <span class=\"form-text m-b-none\">Example block-level help text here.</span>\n                              </div>\n                          </div>\n                          <div class=\"form-group row\"><label class=\"col-lg-2 col-form-label\">Password</label>\n\n                              <div class=\"col-lg-10\"><input type=\"password\" placeholder=\"Password\" class=\"form-control\"></div>\n                          </div>\n                          <div class=\"form-group row\">\n                              <div class=\"col-lg-offset-2 col-lg-10\">\n                                  <div class=\"i-checks\"><label> <input type=\"checkbox\"><i></i> Remember me </label></div>\n                              </div>\n                          </div>\n                          <div class=\"form-group row\">\n                              <div class=\"col-lg-offset-2 col-lg-10\">\n                                  <button class=\"btn btn-sm btn-white\" type=\"submit\">Sign in</button>\n                              </div>\n                          </div>\n                      </form>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"row\">\n          <div class=\"col-lg-8\">\n              <div class=\"ibox \">\n                  <div class=\"ibox-title\">\n                      <h5>Inline form</h5>\n                      <div class=\"ibox-tools\">\n                          <a class=\"collapse-link\">\n                              <i class=\"fa fa-chevron-up\"></i>\n                          </a>\n                          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n                              <i class=\"fa fa-wrench\"></i>\n                          </a>\n                          <ul class=\"dropdown-menu dropdown-user\">\n                              <li><a href=\"#\" class=\"dropdown-item\">Config option 1</a>\n                              </li>\n                              <li><a href=\"#\" class=\"dropdown-item\">Config option 2</a>\n                              </li>\n                          </ul>\n                          <a class=\"close-link\">\n                              <i class=\"fa fa-times\"></i>\n                          </a>\n                      </div>\n                  </div>\n                  <div class=\"ibox-content\">\n                      <form role=\"form\" class=\"form-inline\">\n                          <div class=\"form-group\">\n                              <label for=\"exampleInputEmail2\" class=\"sr-only\">Email address</label>\n                              <input type=\"email\" placeholder=\"Enter email\" id=\"exampleInputEmail2\"\n                                     class=\"form-control\">\n                          </div>\n                          <div class=\"form-group\">\n                              <label for=\"exampleInputPassword2\" class=\"sr-only\">Password</label>\n                              <input type=\"password\" placeholder=\"Password\" id=\"exampleInputPassword2\"\n                                     class=\"form-control\">\n                          </div>\n                          <div class=\"checkbox m-r-xs\">\n                              <input type=\"checkbox\" id=\"checkbox1\">\n                              <label for=\"checkbox1\">\n                                  Remember me\n                              </label>\n                          </div>\n                          <button class=\"btn btn-white\" type=\"submit\">Sign in</button>\n                      </form>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-lg-4\">\n              <div class=\"ibox \">\n                  <div class=\"ibox-title\">\n                      <h5>Modal form <small>Example of login in modal box</small></h5>\n                      <div class=\"ibox-tools\">\n                          <a class=\"collapse-link\">\n                              <i class=\"fa fa-chevron-up\"></i>\n                          </a>\n                          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n                              <i class=\"fa fa-wrench\"></i>\n                          </a>\n                          <ul class=\"dropdown-menu dropdown-user\">\n                              <li><a href=\"#\" class=\"dropdown-item\">Config option 1</a>\n                              </li>\n                              <li><a href=\"#\" class=\"dropdown-item\">Config option 2</a>\n                              </li>\n                          </ul>\n                          <a class=\"close-link\">\n                              <i class=\"fa fa-times\"></i>\n                          </a>\n                      </div>\n                  </div>\n                  <div class=\"ibox-content\">\n                      <div class=\"text-center\">\n                      <a data-toggle=\"modal\" class=\"btn btn-primary\" href=\"#modal-form\">Form in simple modal box</a>\n                      </div>\n                      <div id=\"modal-form\" class=\"modal fade\" aria-hidden=\"true\">\n                          <div class=\"modal-dialog\">\n                              <div class=\"modal-content\">\n                                  <div class=\"modal-body\">\n                                      <div class=\"row\">\n                                          <div class=\"col-sm-6 b-r\"><h3 class=\"m-t-none m-b\">Sign in</h3>\n\n                                              <p>Sign in today for more expirience.</p>\n\n                                              <form role=\"form\">\n                                                  <div class=\"form-group\"><label>Email</label> <input type=\"email\" placeholder=\"Enter email\" class=\"form-control\"></div>\n                                                  <div class=\"form-group\"><label>Password</label> <input type=\"password\" placeholder=\"Password\" class=\"form-control\"></div>\n                                                  <div>\n                                                      <button class=\"btn btn-sm btn-primary float-right m-t-n-xs\" type=\"submit\"><strong>Log in</strong></button>\n                                                      <label> <input type=\"checkbox\" class=\"i-checks\"> Remember me </label>\n                                                  </div>\n                                              </form>\n                                          </div>\n                                          <div class=\"col-sm-6\"><h4>Not a member?</h4>\n                                              <p>You can create an account:</p>\n                                              <p class=\"text-center\">\n                                                  <a href=\"\"><i class=\"fa fa-sign-in big-icon\"></i></a>\n                                              </p>\n                                      </div>\n                                  </div>\n                              </div>\n                              </div>\n                          </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n      <div class=\"row\">\n          <div class=\"col-lg-12\">\n              <div class=\"ibox \">\n                  <div class=\"ibox-title\">\n                      <h5>All form elements <small>With custom checbox and radion elements.</small></h5>\n                      <div class=\"ibox-tools\">\n                          <a class=\"collapse-link\">\n                              <i class=\"fa fa-chevron-up\"></i>\n                          </a>\n                          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n                              <i class=\"fa fa-wrench\"></i>\n                          </a>\n                          <ul class=\"dropdown-menu dropdown-user\">\n                              <li><a href=\"#\" class=\"dropdown-item\">Config option 1</a>\n                              </li>\n                              <li><a href=\"#\" class=\"dropdown-item\">Config option 2</a>\n                              </li>\n                          </ul>\n                          <a class=\"close-link\">\n                              <i class=\"fa fa-times\"></i>\n                          </a>\n                      </div>\n                  </div>\n                  <div class=\"ibox-content\">\n                      <form method=\"get\">\n                          <div class=\"form-group  row\"><label class=\"col-sm-2 col-form-label\">Normal</label>\n\n                              <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\"></div>\n                          </div>\n                          <div class=\"hr-line-dashed\"></div>\n                          <div class=\"form-group row\"><label class=\"col-sm-2 col-form-label\">Help text</label>\n                              <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\"> <span class=\"form-text m-b-none\">A block of help text that breaks onto a new line and may extend beyond one line.</span>\n                              </div>\n                          </div>\n                          <div class=\"hr-line-dashed\"></div>\n                          <div class=\"form-group row\"><label class=\"col-sm-2 col-form-label\">Password</label>\n\n                              <div class=\"col-sm-10\"><input type=\"password\" class=\"form-control\" name=\"password\"></div>\n                          </div>\n                          <div class=\"hr-line-dashed\"></div>\n                          <div class=\"form-group row\"><label class=\"col-sm-2 col-form-label\">Placeholder</label>\n\n                              <div class=\"col-sm-10\"><input type=\"text\" placeholder=\"placeholder\" class=\"form-control\"></div>\n                          </div>\n                          <div class=\"hr-line-dashed\"></div>\n                          <div class=\"form-group row\"><label class=\"col-lg-2 col-form-label\">Disabled</label>\n\n                              <div class=\"col-lg-10\"><input type=\"text\" disabled=\"\" placeholder=\"Disabled input here...\" class=\"form-control\"></div>\n                          </div>\n                          <div class=\"hr-line-dashed\"></div>\n                          <div class=\"form-group row\"><label class=\"col-lg-2 col-form-label\">Static control</label>\n\n                              <div class=\"col-lg-10\"><p class=\"form-control-static\">email@example.com</p></div>\n                          </div>\n                          <div class=\"hr-line-dashed\"></div>\n                          <div class=\"form-group row\"><label class=\"col-sm-2 col-form-label\">Checkboxes and radios <br/>\n                              <small class=\"text-navy\">Normal Bootstrap elements</small></label>\n\n                              <div class=\"col-sm-10\">\n                                  <div><label> <input type=\"checkbox\" value=\"\"> Option one is this and that&mdash;be sure to include why it's great </label></div>\n                                  <div><label> <input type=\"radio\" checked=\"\" value=\"option1\" id=\"optionsRadios1\" name=\"optionsRadios\"> Option one is this and that&mdash;be sure to\n                                      include why it's great </label></div>\n                                  <div><label> <input type=\"radio\" value=\"option2\" id=\"optionsRadios2\" name=\"optionsRadios\"> Option two can be something else and selecting it will\n                                      deselect option one </label></div>\n                              </div>\n                          </div>\n                          <div class=\"hr-line-dashed\"></div>\n                          <div class=\"form-group row\"><label class=\"col-sm-2 col-form-label\">Inline checkboxes</label>\n\n                              <div class=\"col-sm-10\"><label> <input type=\"checkbox\" value=\"option1\" id=\"inlineCheckbox1\"> a </label> <label class=\"checkbox-inline\">\n                                  <input type=\"checkbox\" value=\"option2\" id=\"inlineCheckbox2\"> b </label> <label>\n                                  <input type=\"checkbox\" value=\"option3\" id=\"inlineCheckbox3\"> c </label></div>\n                          </div>\n                          <div class=\"hr-line-dashed\"></div>\n                          <div class=\"form-group row\"><label class=\"col-sm-2 col-form-label\">Checkboxes &amp; radios <br/><small class=\"text-navy\">Custom elements</small></label>\n\n                              <div class=\"col-sm-10\">\n                                  <div class=\"i-checks\"><label> <input type=\"checkbox\" value=\"\"> <i></i> Option one </label></div>\n                                  <div class=\"i-checks\"><label> <input type=\"checkbox\" value=\"\" checked=\"\"> <i></i> Option two checked </label></div>\n                                  <div class=\"i-checks\"><label> <input type=\"checkbox\" value=\"\" disabled=\"\" checked=\"\"> <i></i> Option three checked and disabled </label></div>\n                                  <div class=\"i-checks\"><label> <input type=\"checkbox\" value=\"\" disabled=\"\"> <i></i> Option four disabled </label></div>\n                                  <div class=\"i-checks\"><label> <input type=\"radio\" value=\"option1\" name=\"a\"> <i></i> Option one </label></div>\n                                  <div class=\"i-checks\"><label> <input type=\"radio\" checked=\"\" value=\"option2\" name=\"a\"> <i></i> Option two checked </label></div>\n                                  <div class=\"i-checks\"><label> <input type=\"radio\" disabled=\"\" checked=\"\" value=\"option2\"> <i></i> Option three checked and disabled </label></div>\n                                  <div class=\"i-checks\"><label> <input type=\"radio\" disabled=\"\" name=\"a\"> <i></i> Option four disabled </label></div>\n                              </div>\n                          </div>\n                          <div class=\"hr-line-dashed\"></div>\n                          <div class=\"form-group row\"><label class=\"col-sm-2 col-form-label\">Inline checkboxes</label>\n\n                              <div class=\"col-sm-10\"><label class=\"checkbox-inline i-checks\"> <input type=\"checkbox\" value=\"option1\">a </label>\n                                  <label class=\"i-checks\"> <input type=\"checkbox\" value=\"option2\"> b </label>\n                                  <label class=\"i-checks\"> <input type=\"checkbox\" value=\"option3\"> c </label></div>\n                          </div>\n                          <div class=\"hr-line-dashed\"></div>\n                          <div class=\"form-group row\"><label class=\"col-sm-2 col-form-label\">Select</label>\n\n                              <div class=\"col-sm-10\"><select class=\"form-control m-b\" name=\"account\">\n                                  <option>option 1</option>\n                                  <option>option 2</option>\n                                  <option>option 3</option>\n                                  <option>option 4</option>\n                              </select>\n\n                                  <div class=\"col-lg-4 m-l-n\"><select class=\"form-control\" multiple=\"\">\n                                      <option>option 1</option>\n                                      <option>option 2</option>\n                                      <option>option 3</option>\n                                      <option>option 4</option>\n                                  </select></div>\n                              </div>\n                          </div>\n                          <div class=\"hr-line-dashed\"></div>\n                          <div class=\"form-group row has-success\"><label class=\"col-sm-2 col-form-label\">Input with success</label>\n\n                              <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\"></div>\n                          </div>\n                          <div class=\"hr-line-dashed\"></div>\n                          <div class=\"form-group row has-warning\"><label class=\"col-sm-2 col-form-label\">Input with warning</label>\n\n                              <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\"></div>\n                          </div>\n                          <div class=\"hr-line-dashed\"></div>\n                          <div class=\"form-group  row has-error\"><label class=\"col-sm-2 col-form-label\">Input with error</label>\n\n                              <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\"></div>\n                          </div>\n                          <div class=\"hr-line-dashed\"></div>\n                          <div class=\"form-group row\"><label class=\"col-sm-2 col-form-label\">Control sizing</label>\n\n                              <div class=\"col-sm-10\"><input type=\"text\" placeholder=\".form-control-lg\" class=\"form-control form-control-lg m-b\">\n                                  <input type=\"text\" placeholder=\"Default input\" class=\"form-control m-b\"> <input type=\"text\" placeholder=\".form-control-sm\" class=\"form-control form-control-sm\">\n                              </div>\n                          </div>\n                          <div class=\"hr-line-dashed\"></div>\n                          <div class=\"form-group row\"><label class=\"col-sm-2 col-form-label\">Column sizing</label>\n\n                              <div class=\"col-sm-10\">\n                                  <div class=\"row\">\n                                      <div class=\"col-md-2\"><input type=\"text\" placeholder=\".col-md-2\" class=\"form-control\"></div>\n                                      <div class=\"col-md-3\"><input type=\"text\" placeholder=\".col-md-3\" class=\"form-control\"></div>\n                                      <div class=\"col-md-4\"><input type=\"text\" placeholder=\".col-md-4\" class=\"form-control\"></div>\n                                  </div>\n                              </div>\n                          </div>\n                          <div class=\"hr-line-dashed\"></div>\n                          <div class=\"form-group row\"><label class=\"col-sm-2 col-form-label\">Input groups</label>\n\n                              <div class=\"col-sm-10\">\n                                  <div class=\"input-group m-b\">\n                                      <div class=\"input-group-prepend\">\n                                          <span class=\"input-group-addon\">@</span>\n                                      </div>\n                                      <input type=\"text\" placeholder=\"Username\" class=\"form-control\">\n                                  </div>\n                                  <div class=\"input-group m-b\">\n                                      <input type=\"text\" class=\"form-control\">\n                                      <div class=\"input-group-append\">\n                                          <span class=\"input-group-addon\">.00</span>\n                                          </div>\n                                      </div>\n                                  <div class=\"input-group m-b\">\n                                      <div class=\"input-group-prepend\">\n                                          <span class=\"input-group-addon\">$</span>\n                                      </div>\n                                      <input type=\"text\" class=\"form-control\">\n                                      <div class=\"input-group-append\">\n                                          <span class=\"input-group-addon\">.00</span>\n                                      </div>\n                                  </div>\n                                  <div class=\"input-group m-b\">\n                                      <div class=\"input-group-prepend\">\n                                          <span class=\"input-group-addon\">\n                                          <input type=\"checkbox\">\n                                              </span>\n                                      </div>\n                                      <input type=\"text\" class=\"form-control\">\n                                  </div>\n                                  <div class=\"input-group m-b\">\n                                      <div class=\"input-group-prepend\">\n                                          <span class=\"input-group-addon\">\n                                          <input type=\"radio\">\n                                              </span>\n                                      </div>\n                                      <input type=\"text\" class=\"form-control\">\n                                  </div>\n                              </div>\n                          </div>\n                          <div class=\"hr-line-dashed\"></div>\n                          <div class=\"form-group row\"><label class=\"col-sm-2 col-form-label\">Button addons</label>\n\n                              <div class=\"col-sm-10\">\n\n                                  <div class=\"input-group m-b\"><span class=\"input-group-prepend\">\n                                      <button type=\"button\" class=\"btn btn-primary\">Go!</button> </span> <input type=\"text\" class=\"form-control\">\n                                  </div>\n                                  <div class=\"input-group\"><input type=\"text\" class=\"form-control\"> <span class=\"input-group-append\"> <button type=\"button\" class=\"btn btn-primary\">Go!\n                                  </button> </span></div>\n                              </div>\n                          </div>\n                          <div class=\"hr-line-dashed\"></div>\n                          <div class=\"form-group row\"><label class=\"col-sm-2 col-form-label\">With dropdowns</label>\n\n                              <div class=\"col-sm-10\">\n                                  <div class=\"input-group m-b\">\n                                      <div class=\"input-group-prepend\">\n                                          <button data-toggle=\"dropdown\" class=\"btn btn-white dropdown-toggle\" type=\"button\">Action </button>\n                                          <ul class=\"dropdown-menu\">\n                                              <li><a href=\"#\">Action</a></li>\n                                              <li><a href=\"#\">Another action</a></li>\n                                              <li><a href=\"#\">Something else here</a></li>\n                                              <li class=\"dropdown-divider\"></li>\n                                              <li><a href=\"#\">Separated link</a></li>\n                                          </ul>\n                                      </div>\n                                       <input type=\"text\" class=\"form-control\"></div>\n                                  <div class=\"input-group\"><input type=\"text\" class=\"form-control\">\n\n                                      <div class=\"input-group-append\">\n                                          <button data-toggle=\"dropdown\" class=\"btn btn-white dropdown-toggle\" type=\"button\">Action </button>\n                                          <ul class=\"dropdown-menu float-right\">\n                                              <li><a href=\"#\">Action</a></li>\n                                              <li><a href=\"#\">Another action</a></li>\n                                              <li><a href=\"#\">Something else here</a></li>\n                                              <li class=\"dropdown-divider\"></li>\n                                              <li><a href=\"#\">Separated link</a></li>\n                                          </ul>\n                                      </div>\n                                      </div>\n                              </div>\n                          </div>\n                          <div class=\"hr-line-dashed\"></div>\n                          <div class=\"form-group row\"><label class=\"col-sm-2 col-form-label\">Segmented</label>\n\n                              <div class=\"col-sm-10\">\n                                  <div class=\"input-group m-b\">\n                                      <div class=\"input-group-prepend\">\n                                          <button tabindex=\"-1\" class=\"btn btn-white\" type=\"button\">Action</button>\n                                          <button data-toggle=\"dropdown\" class=\"btn btn-white dropdown-toggle\" type=\"button\"></button>\n                                          <ul class=\"dropdown-menu\">\n                                              <li><a href=\"#\">Action</a></li>\n                                              <li><a href=\"#\">Another action</a></li>\n                                              <li><a href=\"#\">Something else here</a></li>\n                                              <li class=\"dropdown-divider\"></li>\n                                              <li><a href=\"#\">Separated link</a></li>\n                                          </ul>\n                                      </div>\n                                      <input type=\"text\" class=\"form-control\"></div>\n                                  <div class=\"input-group\"><input type=\"text\" class=\"form-control\">\n\n                                      <div class=\"input-group-append\">\n                                          <button tabindex=\"-1\" class=\"btn btn-white\" type=\"button\">Action</button>\n                                          <button data-toggle=\"dropdown\" class=\"btn btn-white dropdown-toggle\" type=\"button\"></button>\n                                          <ul class=\"dropdown-menu float-right\">\n                                              <li><a href=\"#\">Action</a></li>\n                                              <li><a href=\"#\">Another action</a></li>\n                                              <li><a href=\"#\">Something else here</a></li>\n                                              <li class=\"dropdown-divider\"></li>\n                                              <li><a href=\"#\">Separated link</a></li>\n                                          </ul>\n                                      </div>\n                                      </div>\n                              </div>\n                          </div>\n                          <div class=\"hr-line-dashed\"></div>\n                          <div class=\"form-group row\">\n                              <div class=\"col-sm-4 col-sm-offset-2\">\n                                  <button class=\"btn btn-white btn-sm\" type=\"submit\">Cancel</button>\n                                  <button class=\"btn btn-primary btn-sm\" type=\"submit\">Save changes</button>\n                              </div>\n                          </div>\n                      </form>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n  \n  <div class=\"footer\">\n      <div class=\"float-right\">\n          10GB of <strong>250GB</strong> Free.\n      </div>\n      <div>\n          <strong>Copyright</strong> Example Company &copy; 2014-2018\n      </div>\n  </div>\n\n\n  </div>\n  </div>\n  \n  \n"

/***/ }),

/***/ "./src/app/content/content.component.ts":
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.css */ "./src/app/content/content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer.component.css":
/*!*************************************************!*\
  !*** ./src/app/customer/customer.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/customer/customer.component.html":
/*!**************************************************!*\
  !*** ./src/app/customer/customer.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\n   \n\n    <div id=\"page-wrapper\" class=\"gray-bg\">\n    <div class=\"row border-bottom\">\n   \n    </div>\n        <div class=\"row wrapper border-bottom white-bg page-heading\">\n            <div class=\"col-sm-4\">\n                <h2>This is main title</h2>\n                <ol class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\">\n                        <a href=\"index.html\">This is</a>\n                    </li>\n                    <li class=\"breadcrumb-item active\">\n                        <strong>Breadcrumb</strong>\n                    </li>\n                </ol>\n            </div>\n            <div class=\"col-sm-8\">\n                <div class=\"title-action\">\n                    <a href=\"\" class=\"btn btn-primary\">This is action area</a>\n                </div>\n            </div>\n        </div>\n\n        \n        <div class=\"row\">\n                <div class=\"col-lg-8\">\n                    <div class=\"ibox \">\n                        <div class=\"ibox-title\">\n                          <h5>Customer</h5>\n                            \n                        </div>\n                        <div class=\"ibox-content\">\n                            <form method=\"get\">\n                                <div class=\"form-group  row\"><label class=\"col-sm-2 col-form-label\">Phone Number</label>\n\n                                    <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\"></div>\n                                </div>\n                                <div class=\"form-group  row\"><label class=\"col-sm-2 col-form-label\">First Name  </label>\n\n                                    <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\"></div>\n                                </div>\n                                <div class=\"form-group  row\"><label class=\"col-sm-2 col-form-label\">Last Name</label>\n\n                                    <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\"></div>\n                                </div>\n                                <div class=\"form-group  row\"><label class=\"col-sm-2 col-form-label\">DOB</label>\n\n                                    <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\"></div>\n                                </div>\n                                <div class=\"form-group  row\"><label class=\"col-sm-2 col-form-label\">Street No</label>\n\n                                    <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\"></div>\n                                </div>\n                                <div class=\"form-group  row\"><label class=\"col-sm-2 col-form-label\">Street Name</label>\n\n                                    <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\"></div>\n                                </div>\n                                <div class=\"form-group  row\"><label class=\"col-sm-2 col-form-label\">City</label>\n\n                                    <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\"></div>\n                                </div>\n                                <div class=\"form-group  row\"><label class=\"col-sm-2 col-form-label\">State</label>\n\n                                    <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\"></div>\n                                </div>\n                                <div class=\"form-group  row\"><label class=\"col-sm-2 col-form-label\">Map Ref.</label>\n\n                                    <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\"></div>\n                                </div>\n                                <div class=\"form-group  row\"><label class=\"col-sm-2 col-form-label\">Email</label>\n\n                                    <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\"></div>\n                                </div>\n                            \n                                <div class=\"form-group  row\"><label class=\"col-sm-2 col-form-label\">Zip Code</label>\n\n                                    <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\"></div>\n                                </div>\n                               \n                             \n                                <div class=\"form-group row\"><label class=\"col-sm-2 col-form-label\">Account</label>\n\n                                    <div class=\"col-sm-10\"><select class=\"form-control m-b\" name=\"account\">\n                                        <option>option 1</option>\n                                        <option>option 2</option>\n                                        <option>option 3</option>\n                                        <option>option 4</option>\n                                    </select>\n\n                                    </div>\n                                </div>\n\n                                <div class=\"form-group  row\"><label class=\"col-sm-2 col-form-label\">Creadit Limit</label>\n\n                                    <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\"></div>\n                                </div>\n                            \n                                <div class=\"form-group  row\"><label class=\"col-sm-2 col-form-label\">Outstanding Limit</label>\n\n                                    <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\"></div>\n                                </div>\n                            \n\n                                <div class=\"form-group row\">\n                                    <div class=\"col-sm-8 col-sm-offset-4\">\n                                        <button class=\"btn btn-white btn-sm\" type=\"submit\">New</button>\n                                        <button class=\"btn btn-primary btn-sm\" type=\"submit\">Save</button>\n                                        <button class=\"btn btn-primary btn-sm\" type=\"submit\">Delete</button>\n                                        <button class=\"btn btn-primary btn-sm\" type=\"submit\">Payment</button>\n                                    </div>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n           \n    <div class=\"col-lg-4\">\n        <div class=\"ibox \">\n            <div class=\"ibox-title\">\n                <h5>Search</h5>\n               \n\n                \n            </div>\n            <div class=\"ibox-content\">\n                <input type=\"text\" class=\"form-control form-control-sm m-b-xs\" id=\"filter\"\n                       placeholder=\"Search in table\">\n\n                <table class=\"footable table table-stripped\" data-page-size=\"8\" data-filter=#filter>\n                    \n            \n              \n                </table>\n            </div>\n        </div>\n\n</div>\n\n\n\n\n        </div>\n        <div class=\"footer\">\n            <div class=\"float-right\">\n                10GB of <strong>250GB</strong> Free.\n            </div>\n            <div>\n                <strong>Copyright</strong> Example Company &copy; 2014-2018\n            </div>\n        </div>\n\n    </div>\n    </div>\n\n\n"

/***/ }),

/***/ "./src/app/customer/customer.component.ts":
/*!************************************************!*\
  !*** ./src/app/customer/customer.component.ts ***!
  \************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomerComponent = /** @class */ (function () {
    function CustomerComponent() {
    }
    CustomerComponent.prototype.ngOnInit = function () {
    };
    CustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/app/customer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.css */ "./src/app/customer/customer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/department/department.component.css":
/*!*****************************************************!*\
  !*** ./src/app/department/department.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/department/department.component.html":
/*!******************************************************!*\
  !*** ./src/app/department/department.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\n   \n\n  <div id=\"page-wrapper\" class=\"gray-bg\">\n  <div class=\"row border-bottom\">\n \n  </div>\n      <div class=\"row wrapper border-bottom white-bg page-heading\">\n          <div class=\"col-sm-4\">\n              <h2>This is main title</h2>\n              <ol class=\"breadcrumb\">\n                  <li class=\"breadcrumb-item\">\n                      <a href=\"index.html\">This is</a>\n                  </li>\n                  <li class=\"breadcrumb-item active\">\n                      <strong>Breadcrumb</strong>\n                  </li>\n              </ol>\n          </div>\n          <div class=\"col-sm-8\">\n              <div class=\"title-action\">\n                  <a href=\"\" class=\"btn btn-primary\">This is action area</a>\n              </div>\n          </div>\n      </div>\n\n     \n      <div class=\"row\">\n        <div class=\"col-lg-6\">\n            <div class=\"ibox \">\n                <div class=\"ibox-title\">\n                    <h5>Department</h5>\n                    \n                </div>\n                <div class=\"ibox-content\">\n                    <form method=\"get\">\n                        <div class=\"form-group  row\"><label class=\"col-sm-2 col-form-label\">Department</label>\n\n                            <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)] = \"department.name\"></div>\n                        </div>\n                    \n                     \n                        <div class=\"form-group row\"><label class=\"col-sm-2 col-form-label\">Sort Order</label>\n\n                            <div class=\"col-sm-10\"><input type=\"text\" placeholder=\"0\" class=\"form-control\" name=\"order\" [(ngModel)] = \"department.order\"></div>\n                        </div>\n\n\n                        \n                       \n                               \n                                \n\n                              \n                        <div class=\"form-group row\"><label class=\"col-sm-2 col-form-label\">Color</label>\n\n                            <div class=\"col-sm-10\">\n                                \n                           \n                                <div class=\"input-group\"><input type=\"text\" class=\"form-control\" [(ngModel)] = \"department.color\" name=\"color\">\n\n                                    <div class=\"input-group-append\">\n                                        <button data-toggle=\"dropdown\" class=\"btn btn-white dropdown-toggle\" type=\"button\">Action </button>\n                                        <ul class=\"dropdown-menu float-right\">\n                                            <li><a href=\"#\">Action</a></li>\n                                            <li><a href=\"#\">Another action</a></li>\n                                            <li><a href=\"#\">Something else here</a></li>\n                                            <li class=\"dropdown-divider\"></li>\n                                            <li><a href=\"#\">Separated link</a></li>\n                                        </ul>\n                                    </div>\n                                    </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-sm-6 col-sm-offset-3\">\n                                <button class=\"btn btn-white btn-sm\" type=\"submit\">New</button>\n                                <button class=\"btn btn-white btn-sm\" type=\"submit\">Cancel</button>\n                                <button class=\"btn btn-primary btn-sm\" type=\"submit\" (click)=addDept()>Save</button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-5\">\n            <div class=\"ibox \">\n                <div class=\"ibox-title\" style=\"text-align: center\">\n                  <h5>Search</h5>\n                   \n    \n                    \n                </div>\n                <div class=\"ibox-content\">\n                    <input type=\"text\" class=\"form-control form-control-sm m-b-xs\" id=\"filter\"\n                           placeholder=\"Search in table\">\n    \n                    <table class=\"footable table table-stripped\" data-page-size=\"8\" data-filter=#filter>\n                        <tr>\n                            <th>Name</th>\n                            <th>Order</th>\n                            <th>Color</th>\n  \n                          </tr>\n                        <tr *ngFor=\"let dept of departments\">\n                          <td>{{dept.name}}</td>\n                          <td>{{dept.order}}</td>\n                          <td>{{dept.color}}</td>\n\n                        </tr>\n                \n                  \n                    </table>\n                </div>\n            </div>\n    \n    </div>\n    \n    </div>\n      <div class=\"footer\">\n          <div class=\"float-right\">\n              10GB of <strong>250GB</strong> Free.\n          </div>\n          <div>\n              <strong>Copyright</strong> Example Company &copy; 2014-2018\n          </div>\n      </div>\n\n  </div>\n  </div>\n\n\n"

/***/ }),

/***/ "./src/app/department/department.component.ts":
/*!****************************************************!*\
  !*** ./src/app/department/department.component.ts ***!
  \****************************************************/
/*! exports provided: DepartmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentComponent", function() { return DepartmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DepartmentComponent = /** @class */ (function () {
    function DepartmentComponent() {
        this.departments = [];
        this.department = {
            name: "",
            order: 0,
            color: ""
        };
    }
    DepartmentComponent.prototype.ngOnInit = function () {
    };
    DepartmentComponent.prototype.addDept = function () {
        this.departments.push({
            name: this.department.name,
            order: this.department.order,
            color: this.department.color
        });
    };
    DepartmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-department',
            template: __webpack_require__(/*! ./department.component.html */ "./src/app/department/department.component.html"),
            styles: [__webpack_require__(/*! ./department.component.css */ "./src/app/department/department.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DepartmentComponent);
    return DepartmentComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-static-top\" role=\"navigation\">\n  <div class=\"navbar-header\" >\n      <a class=\"navbar-minimalize minimalize-styl-2 btn btn-primary \" href=\"#\"><i class=\"fa fa-bars\"></i> </a>\n      <form role=\"search\" class=\"navbar-form-custom\" action=\"search_results.html\">\n          <div class=\"form-group\" style=\"text-align: center\">\n              <input type=\"text\" placeholder=\"Search for something...\" class=\"form-control\" name=\"top-search\" id=\"top-search\">\n          </div>\n      </form>\n  </div>\n      <ul class=\"nav navbar-top-links navbar-center\">\n          <li>\n              <span class=\"m-r-sm text-muted welcome-message\">Welcome to INSPINIA+ Admin Theme.</span>\n          </li>\n          <li class=\"dropdown\">\n              <a class=\"dropdown-toggle count-info\" data-toggle=\"dropdown\" href=\"#\">\n                  <i class=\"fa fa-envelope\"></i>  <span class=\"label label-warning\">16</span>\n              </a>\n              <ul class=\"dropdown-menu dropdown-messages\">\n                  <li>\n                      <div class=\"dropdown-messages-box\">\n                          <a class=\"dropdown-item float-left\" href=\"profile.html\">\n                              <img alt=\"image\" class=\"rounded-circle\" src=\"img/a7.jpg\">\n                          </a>\n                          <div class=\"media-body\">\n                              <small class=\"float-right\">46h ago</small>\n                              <strong>Mike Loreipsum</strong> started following <strong>Monica Smith</strong>. <br>\n                              <small class=\"text-muted\">3 days ago at 7:58 pm - 10.06.2014</small>\n                          </div>\n                      </div>\n                  </li>\n                  <li class=\"dropdown-divider\"></li>\n                  <li>\n                      <div class=\"dropdown-messages-box\">\n                          <a class=\"dropdown-item float-left\" href=\"profile.html\">\n                              <img alt=\"image\" class=\"rounded-circle\" src=\"img/a4.jpg\">\n                          </a>\n                          <div class=\"media-body \">\n                              <small class=\"float-right text-navy\">5h ago</small>\n                              <strong>Chris Johnatan Overtunk</strong> started following <strong>Monica Smith</strong>. <br>\n                              <small class=\"text-muted\">Yesterday 1:21 pm - 11.06.2014</small>\n                          </div>\n                      </div>\n                  </li>\n                  <li class=\"dropdown-divider\"></li>\n                  <li>\n                      <div class=\"dropdown-messages-box\">\n                          <a class=\"dropdown-item float-left\" href=\"profile.html\">\n                              <img alt=\"image\" class=\"rounded-circle\" src=\"img/profile.jpg\">\n                          </a>\n                          <div class=\"media-body \">\n                              <small class=\"float-right\">23h ago</small>\n                              <strong>Monica Smith</strong> love <strong>Kim Smith</strong>. <br>\n                              <small class=\"text-muted\">2 days ago at 2:30 am - 11.06.2014</small>\n                          </div>\n                      </div>\n                  </li>\n                  <li class=\"dropdown-divider\"></li>\n                  <li>\n                      <div class=\"text-center link-block\">\n                          <a href=\"mailbox.html\" class=\"dropdown-item\">\n                              <i class=\"fa fa-envelope\"></i> <strong>Read All Messages</strong>\n                          </a>\n                      </div>\n                  </li>\n              </ul>\n          </li>\n          <li class=\"dropdown\">\n              <a class=\"dropdown-toggle count-info\" data-toggle=\"dropdown\" href=\"#\">\n                  <i class=\"fa fa-bell\"></i>  <span class=\"label label-primary\">8</span>\n              </a>\n              <ul class=\"dropdown-menu dropdown-alerts\">\n                  <li>\n                      <a href=\"mailbox.html\" class=\"dropdown-item\">\n                          <div>\n                              <i class=\"fa fa-envelope fa-fw\"></i> You have 16 messages\n                              <span class=\"float-right text-muted small\">4 minutes ago</span>\n                          </div>\n                      </a>\n                  </li>\n                  <li class=\"dropdown-divider\"></li>\n                  <li>\n                      <a href=\"profile.html\" class=\"dropdown-item\">\n                          <div>\n                              <i class=\"fa fa-twitter fa-fw\"></i> 3 New Followers\n                              <span class=\"float-right text-muted small\">12 minutes ago</span>\n                          </div>\n                      </a>\n                  </li>\n                  <li class=\"dropdown-divider\"></li>\n                  <li>\n                      <a href=\"grid_options.html\" class=\"dropdown-item\">\n                          <div>\n                              <i class=\"fa fa-upload fa-fw\"></i> Server Rebooted\n                              <span class=\"float-right text-muted small\">4 minutes ago</span>\n                          </div>\n                      </a>\n                  </li>\n                  <li class=\"dropdown-divider\"></li>\n                  <li>\n                      <div class=\"text-center link-block\">\n                          <a href=\"notifications.html\" class=\"dropdown-item\" style=\"color:orangered\">\n                              <strong>See All Alerts</strong>\n                              <i class=\"fa fa-angle-right\" style=\"color:black\"></i>\n                          </a>\n                      </div>\n                  </li>\n              </ul>\n          </li>\n\n\n          <li>\n              <a href=\"login.html\">\n                  <i class=\"fa fa-sign-out\"></i><span style=\"color:black\">\n                      Logout</span>\n              </a>\n          </li>\n      </ul>\n\n  </nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/modifier/modifier.component.css":
/*!*************************************************!*\
  !*** ./src/app/modifier/modifier.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modifier/modifier.component.html":
/*!**************************************************!*\
  !*** ./src/app/modifier/modifier.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\n   \n\n    <div id=\"page-wrapper\" class=\"gray-bg\">\n    <div class=\"row border-bottom\">\n   \n    </div>\n        <div class=\"row wrapper border-bottom white-bg page-heading\">\n            <div class=\"col-sm-4\">\n                <h2>This is main title</h2>\n                <ol class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\">\n                        <a href=\"index.html\">This is</a>\n                    </li>\n                    <li class=\"breadcrumb-item active\">\n                        <strong>Breadcrumb</strong>\n                    </li>\n                </ol>\n            </div>\n            <div class=\"col-sm-8\">\n                <div class=\"title-action\">\n                    <a href=\"\" class=\"btn btn-primary\">This is action area</a>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n                <div class=\"col-lg-6\">\n                    <div class=\"ibox \">\n                        <div class=\"ibox-title\">\n                            <h5>Modifier</h5>\n                          \n                        </div>\n                        <div class=\"ibox-content\">\n                            <form method=\"get\">\n                                <div class=\"form-group  row\"><label class=\"col-sm-2 col-form-label\">Modifier Name</label>\n\n                                    <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\"></div>\n                                </div>\n                                \n                                <div class=\"form-group  row\"><label class=\"col-sm-2 col-form-label\">Sort Number</label>\n\n                                    <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\"></div>\n                                </div>\n                                <div class=\"form-group  row\"><label class=\"col-sm-2 col-form-label\">Price</label>\n\n                                    <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\"></div>\n                                </div>\n\n                                <div class=\"form-group row\"><label class=\"col-sm-2 col-form-label\">Color</label>\n\n                                    <div class=\"col-sm-10\">\n                                        \n                                   \n                                        <div class=\"input-group\"><input type=\"text\" class=\"form-control\">\n\n                                            <div class=\"input-group-append\">\n                                                <button data-toggle=\"dropdown\" class=\"btn btn-white dropdown-toggle\" type=\"button\">Action </button>\n                                                <ul class=\"dropdown-menu float-right\">\n                                                    <li><a href=\"#\">Action</a></li>\n                                                    <li><a href=\"#\">Another action</a></li>\n                                                    <li><a href=\"#\">Something else here</a></li>\n                                                    <li class=\"dropdown-divider\"></li>\n                                                    <li><a href=\"#\">Separated link</a></li>\n                                                </ul>\n                                            </div>\n                                            </div>\n                                    </div>\n                                </div>\n                                <div style=\"align-items: center\"><label> <input type=\"checkbox\" value=\"\"> Print to Kitchen </label></div>\n                                \n\n                             \n\n\n                                \n                               \n                                       \n                                        \n\n                                      \n                             \n                                <div class=\"form-group row\">\n                                    <div class=\"col-sm-6 col-sm-offset-3\">\n                                            <button class=\"btn btn-white btn-sm\" type=\"submit\">New</button>\n                                        <button class=\"btn btn-white btn-sm\" type=\"submit\">Cancel</button>\n                                        <button class=\"btn btn-primary btn-sm\" type=\"submit\">Save changes</button>\n                                    </div>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-5\">\n                    <div class=\"ibox \">\n                        <div class=\"ibox-title\">\n                            <h5>Search</h5>\n                           \n            \n                            \n                        </div>\n                        <div class=\"ibox-content\">\n                            <input type=\"text\" class=\"form-control form-control-sm m-b-xs\" id=\"filter\"\n                                   placeholder=\"Search in table\">\n            \n                            <table class=\"footable table table-stripped\" data-page-size=\"8\" data-filter=#filter>\n                                \n                        \n                          \n                            </table>\n                        </div>\n                    </div>\n            \n            </div>\n            \n            </div>\n        <div class=\"footer\">\n            <div class=\"float-right\">\n                10GB of <strong>250GB</strong> Free.\n            </div>\n            <div>\n                <strong>Copyright</strong> Example Company &copy; 2014-2018\n            </div>\n        </div>\n\n    </div>\n    </div>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/modifier/modifier.component.ts":
/*!************************************************!*\
  !*** ./src/app/modifier/modifier.component.ts ***!
  \************************************************/
/*! exports provided: ModifierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifierComponent", function() { return ModifierComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModifierComponent = /** @class */ (function () {
    function ModifierComponent() {
    }
    ModifierComponent.prototype.ngOnInit = function () {
    };
    ModifierComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modifier',
            template: __webpack_require__(/*! ./modifier.component.html */ "./src/app/modifier/modifier.component.html"),
            styles: [__webpack_require__(/*! ./modifier.component.css */ "./src/app/modifier/modifier.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ModifierComponent);
    return ModifierComponent;
}());



/***/ }),

/***/ "./src/app/pay/pay.component.css":
/*!***************************************!*\
  !*** ./src/app/pay/pay.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pay/pay.component.html":
/*!****************************************!*\
  !*** ./src/app/pay/pay.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\n   \n\n    <div id=\"page-wrapper\" class=\"gray-bg\">\n    <div class=\"row border-bottom\">\n   \n    </div>\n        <div class=\"row wrapper border-bottom white-bg page-heading\">\n            <div class=\"col-sm-4\">\n                <h2>This is main title</h2>\n                <ol class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\">\n                        <a href=\"index.html\">This is</a>\n                    </li>\n                    <li class=\"breadcrumb-item active\">\n                        <strong>Breadcrumb</strong>\n                    </li>\n                </ol>\n            </div>\n            <div class=\"col-sm-8\">\n                <div class=\"title-action\">\n                    <a href=\"\" class=\"btn btn-primary\">This is action area</a>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-lg-6\">\n                <div class=\"ibox \"  style=\"margin-left: 50px\">\n                    <div class=\"ibox-title\">\n                        <h5>Pay Method</h5>\n                       \n                    </div>\n                    <div class=\"ibox-content\">\n                        <form method=\"get\">\n                            <div class=\"form-group  row\"><label class=\"col-sm-2 col-form-label\">Pay Method</label>\n\n                                <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\"></div>\n                            </div>\n                        \n                            <div class=\"form-group row\"><label class=\"col-sm-2 col-form-label\">Pay Type</label>\n\n                                <div class=\"col-sm-10\"><select class=\"form-control m-b\" name=\"account\">\n                                    <option>option 1</option>\n                                    <option>option 2</option>\n                                    <option>option 3</option>\n                                    <option>option 4</option>\n                                </select>\n\n                                </div>\n                            </div>\n                            <div class=\"form-group  row\"><label class=\"col-sm-2 col-form-label\">Sort Order</label>\n\n                                <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\"></div>\n                            </div>\n                        \n\n\n                            \n                           \n                                   \n                                    \n\n                                  \n                         \n                            <div class=\"form-group row\">\n                                <div class=\"col-sm-6 col-sm-offset-\">\n                                    <button class=\"btn btn-white btn-sm\" type=\"submit\">New</button>\n                                    <button class=\"btn btn-primary btn-sm\" type=\"submit\">Save</button>\n                                    <button class=\"btn btn-white btn-sm\" type=\"submit\">Delete</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4\">\n                <div class=\"ibox \">\n                    <div class=\"ibox-title\">\n                       <h5>Search</h5>\n        \n                        \n                    </div>\n                    <div class=\"ibox-content\">\n                        <input type=\"text\" class=\"form-control form-control-sm m-b-xs\" id=\"filter\"\n                               placeholder=\"Search in table\">\n        \n                        <table class=\"footable table table-stripped\" data-page-size=\"8\" data-filter=#filter>\n                            \n                    \n                      \n                        </table>\n                    </div>\n                </div>\n        \n        </div>\n        \n        </div>\n        <div class=\"footer\">\n            <div class=\"float-right\">\n                10GB of <strong>250GB</strong> Free.\n            </div>\n            <div>\n                <strong>Copyright</strong> Example Company &copy; 2014-2018\n            </div>\n        </div>\n\n    </div>\n    </div>\n\n\n"

/***/ }),

/***/ "./src/app/pay/pay.component.ts":
/*!**************************************!*\
  !*** ./src/app/pay/pay.component.ts ***!
  \**************************************/
/*! exports provided: PayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayComponent", function() { return PayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PayComponent = /** @class */ (function () {
    function PayComponent() {
    }
    PayComponent.prototype.ngOnInit = function () {
    };
    PayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pay',
            template: __webpack_require__(/*! ./pay.component.html */ "./src/app/pay/pay.component.html"),
            styles: [__webpack_require__(/*! ./pay.component.css */ "./src/app/pay/pay.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PayComponent);
    return PayComponent;
}());



/***/ }),

/***/ "./src/app/printer/printer.component.css":
/*!***********************************************!*\
  !*** ./src/app/printer/printer.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/printer/printer.component.html":
/*!************************************************!*\
  !*** ./src/app/printer/printer.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\n   \n\n    <div id=\"page-wrapper\" class=\"gray-bg\">\n    <div class=\"row border-bottom\">\n   \n    </div>\n        <div class=\"row wrapper border-bottom white-bg page-heading\">\n            <div class=\"col-sm-4\">\n                <h2>This is main title</h2>\n                <ol class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\">\n                        <a href=\"index.html\">This is</a>\n                    </li>\n                    <li class=\"breadcrumb-item active\">\n                        <strong>Breadcrumb</strong>\n                    </li>\n                </ol>\n            </div>\n            <div class=\"col-sm-8\">\n                <div class=\"title-action\">\n                    <a href=\"\" class=\"btn btn-primary\">This is action area</a>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-lg-8\">\n                <div class=\"ibox \">\n                    <div class=\"ibox-title\">\n                        <h5>Printer</h5>\n                        <div class=\"ibox-tools\">\n                            <a class=\"collapse-link\">\n                                <i class=\"fa fa-chevron-up\"></i>\n                            </a>\n                            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n                                <i class=\"fa fa-wrench\"></i>\n                            </a>\n                            <ul class=\"dropdown-menu dropdown-user\">\n                                <li><a href=\"#\" class=\"dropdown-item\">Config option 1</a>\n                                </li>\n                                <li><a href=\"#\" class=\"dropdown-item\">Config option 2</a>\n                                </li>\n                            </ul>\n                            <a class=\"close-link\">\n                                <i class=\"fa fa-times\"></i>\n                            </a>\n                        </div>\n                    </div>\n                    <div class=\"ibox-content\">\n                        <form method=\"get\">\n                            <div class=\"form-group  row\"><label class=\"col-sm-2 col-form-label\">Printer</label>\n\n                                <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\"></div>\n                            </div>\n                        \n                            <div class=\"form-group row\"><label class=\"col-sm-2 col-form-label\">Printer Type</label>\n\n                                <div class=\"col-sm-10\"><select class=\"form-control m-b\" name=\"account\">\n                                    <option>option 1</option>\n                                    <option>option 2</option>\n                                    <option>option 3</option>\n                                    <option>option 4</option>\n                                </select>\n\n                                </div>\n                            </div>\n                            <div class=\"form-group row\"><label class=\"col-sm-2 col-form-label\">Windows</label>\n\n                                <div class=\"col-sm-10\"><select class=\"form-control m-b\" name=\"account\">\n                                    <option>option 1</option>\n                                    <option>option 2</option>\n                                    <option>option 3</option>\n                                    <option>option 4</option>\n                                </select>\n\n                                </div>\n                            </div>\n\n\n\n                            \n                           \n                                   \n                                    \n\n                                  \n                         \n                            <div class=\"form-group row\">\n                                <div class=\"col-sm-6 col-sm-offset-\">\n                                    <button class=\"btn btn-white btn-sm\" type=\"submit\">New</button>\n                                    <button class=\"btn btn-primary btn-sm\" type=\"submit\">Save</button>\n                                    <button class=\"btn btn-white btn-sm\" type=\"submit\">Delete</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4\">\n                <div class=\"ibox \">\n                    <div class=\"ibox-title\">\n                       <h5>Search</h5>\n        \n                        \n                    </div>\n                    <div class=\"ibox-content\">\n                        <input type=\"text\" class=\"form-control form-control-sm m-b-xs\" id=\"filter\"\n                               placeholder=\"Search in table\">\n        \n                        <table class=\"footable table table-stripped\" data-page-size=\"8\" data-filter=#filter>\n                            \n                    \n                      \n                        </table>\n                    </div>\n                </div>\n        \n        </div>\n        \n        </div>\n        <div class=\"footer\">\n            <div class=\"float-right\">\n                10GB of <strong>250GB</strong> Free.\n            </div>\n            <div>\n                <strong>Copyright</strong> Example Company &copy; 2014-2018\n            </div>\n        </div>\n\n    </div>\n    </div>\n\na"

/***/ }),

/***/ "./src/app/printer/printer.component.ts":
/*!**********************************************!*\
  !*** ./src/app/printer/printer.component.ts ***!
  \**********************************************/
/*! exports provided: PrinterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrinterComponent", function() { return PrinterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrinterComponent = /** @class */ (function () {
    function PrinterComponent() {
    }
    PrinterComponent.prototype.ngOnInit = function () {
    };
    PrinterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-printer',
            template: __webpack_require__(/*! ./printer.component.html */ "./src/app/printer/printer.component.html"),
            styles: [__webpack_require__(/*! ./printer.component.css */ "./src/app/printer/printer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PrinterComponent);
    return PrinterComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\n  \n\n    <div id=\"page-wrapper\" class=\"gray-bg\">\n    <div class=\"row border-bottom\">\n    \n    </div>\n        <div class=\"row wrapper border-bottom white-bg page-heading\">\n            <div class=\"col-lg-10\">\n                <h2>Basic Form</h2>\n                <ol class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\">\n                        <a href=\"index.html\">Home</a>\n                    </li>\n                    <li class=\"breadcrumb-item\">\n                        <a>Forms</a>\n                    </li>\n                    <li class=\"breadcrumb-item active\">\n                        <strong>Basic Form</strong>\n                    </li>\n                </ol>\n            </div>\n            \n        </div>\n        \n    <div class=\"wrapper wrapper-content animated fadeInRight\">\n        <div class=\"row\">\n        <div class=\"col-lg-4\">\n            <div class=\"ibox \">\n                <div class=\"ibox-title\">\n                    <h5>Basic form <small>Simple login form example</small></h5>\n                    <div class=\"ibox-tools\">\n                        <a class=\"collapse-link\">\n                            <i class=\"fa fa-chevron-up\"></i>\n                        </a>\n                        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n                            <i class=\"fa fa-wrench\"></i>\n                        </a>\n                        <ul class=\"dropdown-menu dropdown-user\">\n                            <li><a href=\"#\" class=\"dropdown-item\">Config option 1</a>\n                            </li>\n                            <li><a href=\"#\" class=\"dropdown-item\">Config option 2</a>\n                            </li>\n                        </ul>\n                        <a class=\"close-link\">\n                            <i class=\"fa fa-times\"></i>\n                        </a>\n                    </div>\n                </div>\n                <div class=\"ibox-content\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-2 b-r\"><h3 class=\"m-t-none m-b\">Sign in</h3>\n                            <p>Sign in today for more expirience.</p>\n                            <form role=\"form\">\n                                <div class=\"form-group\"><label>Email</label> <input type=\"email\" placeholder=\"Enter email\" class=\"form-control\"></div>\n                                <div class=\"form-group\"><label>Password</label> <input type=\"password\" placeholder=\"Password\" class=\"form-control\"></div>\n                                <div>\n                                    <button class=\"btn btn-sm btn-primary float-right m-t-n-xs\" type=\"submit\"><strong>Log in</strong></button>\n                                    <label> <input type=\"checkbox\" class=\"i-checks\"> Remember me </label>\n                                </div>\n                            </form>\n                        </div>\n                        <div class=\"col-sm-4\"><h4>Not a member?</h4>\n                            <p>You can create an account:</p>\n                            <p class=\"text-center\">\n                                <a href=\"\"><i class=\"fa fa-sign-in big-icon\"></i></a>\n                            </p>\n                        </div>\n                    </div>\n                    \n                </div>\n            </div>\n        </div>\n            <div class=\"col-lg-2\">\n                <div class=\"ibox \">\n                    <div class=\"ibox-title\">\n                        <h5>Horizontal form</h5>\n                        <div class=\"ibox-tools\">\n                            <a class=\"collapse-link\">\n                                <i class=\"fa fa-chevron-up\"></i>\n                            </a>\n                            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n                                <i class=\"fa fa-wrench\"></i>\n                            </a>\n                            <ul class=\"dropdown-menu dropdown-user\">\n                                <li><a href=\"#\" class=\"dropdown-item\">Config option 1</a>\n                                </li>\n                                <li><a href=\"#\" class=\"dropdown-item\">Config option 2</a>\n                                </li>\n                            </ul>\n                            <a class=\"close-link\">\n                                <i class=\"fa fa-times\"></i>\n                            </a>\n                        </div>\n                    </div>\n                    <div class=\"ibox-content\">\n                        <form>\n                            <p>Sign in today for more expirience.</p>\n                            <div class=\"form-group row\"><label class=\"col-lg-2 col-form-label\">Email</label>\n  \n                                <div class=\"col-lg-10\"><input type=\"email\" placeholder=\"Email\" class=\"form-control\"> <span class=\"form-text m-b-none\">Example block-level help text here.</span>\n                                </div>\n                            </div>\n                            <div class=\"form-group row\"><label class=\"col-lg-2 col-form-label\">Password</label>\n  \n                                <div class=\"col-lg-10\"><input type=\"password\" placeholder=\"Password\" class=\"form-control\"></div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <div class=\"col-lg-offset-2 col-lg-10\">\n                                    <div class=\"i-checks\"><label> <input type=\"checkbox\"><i></i> Remember me </label></div>\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <div class=\"col-lg-offset-2 col-lg-10\">\n                                    <button class=\"btn btn-sm btn-white\" type=\"submit\">Sign in</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-lg-8\">\n                <div class=\"ibox \">\n                    <div class=\"ibox-title\">\n                        <h5>Inline form</h5>\n                        <div class=\"ibox-tools\">\n                            <a class=\"collapse-link\">\n                                <i class=\"fa fa-chevron-up\"></i>\n                            </a>\n                            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n                                <i class=\"fa fa-wrench\"></i>\n                            </a>\n                            <ul class=\"dropdown-menu dropdown-user\">\n                                <li><a href=\"#\" class=\"dropdown-item\">Config option 1</a>\n                                </li>\n                                <li><a href=\"#\" class=\"dropdown-item\">Config option 2</a>\n                                </li>\n                            </ul>\n                            <a class=\"close-link\">\n                                <i class=\"fa fa-times\"></i>\n                            </a>\n                        </div>\n                    </div>\n                    <div class=\"ibox-content\">\n                        <form role=\"form\" class=\"form-inline\">\n                            <div class=\"form-group\">\n                                <label for=\"exampleInputEmail2\" class=\"sr-only\">Email address</label>\n                                <input type=\"email\" placeholder=\"Enter email\" id=\"exampleInputEmail2\"\n                                       class=\"form-control\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"exampleInputPassword2\" class=\"sr-only\">Password</label>\n                                <input type=\"password\" placeholder=\"Password\" id=\"exampleInputPassword2\"\n                                       class=\"form-control\">\n                            </div>\n                            <div class=\"checkbox m-r-xs\">\n                                <input type=\"checkbox\" id=\"checkbox1\">\n                                <label for=\"checkbox1\">\n                                    Remember me\n                                </label>\n                            </div>\n                            <button class=\"btn btn-white\" type=\"submit\">Sign in</button>\n                        </form>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4\">\n                <div class=\"ibox \">\n                    <div class=\"ibox-title\">\n                        <h5>Modal form <small>Example of login in modal box</small></h5>\n                        <div class=\"ibox-tools\">\n                            <a class=\"collapse-link\">\n                                <i class=\"fa fa-chevron-up\"></i>\n                            </a>\n                            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n                                <i class=\"fa fa-wrench\"></i>\n                            </a>\n                            <ul class=\"dropdown-menu dropdown-user\">\n                                <li><a href=\"#\" class=\"dropdown-item\">Config option 1</a>\n                                </li>\n                                <li><a href=\"#\" class=\"dropdown-item\">Config option 2</a>\n                                </li>\n                            </ul>\n                            <a class=\"close-link\">\n                                <i class=\"fa fa-times\"></i>\n                            </a>\n                        </div>\n                    </div>\n                    <div class=\"ibox-content\">\n                        <div class=\"text-center\">\n                        <a data-toggle=\"modal\" class=\"btn btn-primary\" href=\"#modal-form\">Form in simple modal box</a>\n                        </div>\n                        <div id=\"modal-form\" class=\"modal fade\" aria-hidden=\"true\">\n                            <div class=\"modal-dialog\">\n                                <div class=\"modal-content\">\n                                    <div class=\"modal-body\">\n                                        <div class=\"row\">\n                                            <div class=\"col-sm-6 b-r\"><h3 class=\"m-t-none m-b\">Sign in</h3>\n  \n                                                <p>Sign in today for more expirience.</p>\n  \n                                                <form role=\"form\">\n                                                    <div class=\"form-group\"><label>Email</label> <input type=\"email\" placeholder=\"Enter email\" class=\"form-control\"></div>\n                                                    <div class=\"form-group\"><label>Password</label> <input type=\"password\" placeholder=\"Password\" class=\"form-control\"></div>\n                                                    <div>\n                                                        <button class=\"btn btn-sm btn-primary float-right m-t-n-xs\" type=\"submit\"><strong>Log in</strong></button>\n                                                        <label> <input type=\"checkbox\" class=\"i-checks\"> Remember me </label>\n                                                    </div>\n                                                </form>\n                                            </div>\n                                            <div class=\"col-sm-6\"><h4>Not a member?</h4>\n                                                <p>You can create an account:</p>\n                                                <p class=\"text-center\">\n                                                    <a href=\"\"><i class=\"fa fa-sign-in big-icon\"></i></a>\n                                                </p>\n                                        </div>\n                                    </div>\n                                </div>\n                                </div>\n                            </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n        <div class=\"row\">\n            \n        </div>\n    </div>\n    \n    <div class=\"footer\">\n        <div class=\"float-right\">\n            10GB of <strong>250GB</strong> Free.\n        </div>\n        <div>\n            <strong>Copyright</strong> Example Company &copy; 2014-2018\n        </div>\n    </div>\n  \n  \n    </div>\n    </div>\n    \n    \n  "

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/service/service.component.css":
/*!***********************************************!*\
  !*** ./src/app/service/service.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/service/service.component.html":
/*!************************************************!*\
  !*** ./src/app/service/service.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\n   \n\n    <div id=\"page-wrapper\" class=\"gray-bg\">\n    <div class=\"row border-bottom\">\n   \n    </div>\n        <div class=\"row wrapper border-bottom white-bg page-heading\">\n            <div class=\"col-sm-4\">\n                <h2>This is main title</h2>\n                <ol class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\">\n                        <a href=\"index.html\">This is</a>\n                    </li>\n                    <li class=\"breadcrumb-item active\">\n                        <strong>Breadcrumb</strong>\n                    </li>\n                </ol>\n            </div>\n            <div class=\"col-sm-8\">\n                <div class=\"title-action\">\n                    <a href=\"\" class=\"btn btn-primary\">This is action area</a>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n                <div class=\"col-lg-8\">\n                    <div class=\"ibox \">\n                        <div class=\"ibox-title\">\n                            <h5>Service</h5>\n                            \n                        </div>\n                        <div class=\"ibox-content\">\n                            <form method=\"get\">\n                                <div class=\"form-group  row\"><label class=\"col-sm-2 col-form-label\">Units</label>\n\n                                    <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\"  name=\"name\" [(ngModel)]=\"service.name\"></div>\n                                </div>\n                                \n                                <div class=\"form-group row\">\n                                    <div class=\"col-sm-4 col-sm-offset-2\">\n                                        <button class=\"btn btn-white btn-sm\" type=\"submit\">Cancel</button>\n                                        <button class=\"btn btn-primary btn-sm\" type=\"submit\" (click)= save()>Save changes</button>\n                                    </div>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4\">\n                    <div class=\"ibox \">\n                        <div class=\"ibox-title\">\n                            <h5>Search</h5>\n                           \n            \n                            \n                        </div>\n                        <div class=\"ibox-content\">\n                            <input type=\"text\" class=\"form-control form-control-sm m-b-xs\" id=\"filter\"\n                                   placeholder=\"Search in table\">\n            \n                            <table class=\"footable table table-stripped\" data-page-size=\"8\" data-filter=#filter>\n                                \n                        \n                          \n                            </table>\n                        </div>\n                    </div>\n            \n            </div>\n            \n            </div>\n        \n        <div class=\"footer\">\n            <div class=\"float-right\">\n                10GB of <strong>250GB</strong> Free.\n            </div>\n            <div>\n                <strong>Copyright</strong> Example Company &copy; 2014-2018\n            </div>\n        </div>\n\n    </div>\n    </div>\n\n"

/***/ }),

/***/ "./src/app/service/service.component.ts":
/*!**********************************************!*\
  !*** ./src/app/service/service.component.ts ***!
  \**********************************************/
/*! exports provided: ServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceComponent", function() { return ServiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServiceComponent = /** @class */ (function () {
    function ServiceComponent() {
        this.services = [];
        this.service = {
            name: "",
        };
    }
    ServiceComponent.prototype.ngOnInit = function () {
    };
    ServiceComponent.prototype.save = function () {
        this.services.push({
            name: this.service.name,
        });
    };
    ServiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-service',
            template: __webpack_require__(/*! ./service.component.html */ "./src/app/service/service.component.html"),
            styles: [__webpack_require__(/*! ./service.component.css */ "./src/app/service/service.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServiceComponent);
    return ServiceComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar-default navbar-static-side\" role=\"navigation\" >\n  <div class=\"sidebar-collapse\" >\n      <ul class=\"nav metismenu\" id=\"side-menu\">\n          <li class=\"nav-header\" style=\"background-color: orangered;\">\n              <div class=\"dropdown profile-element\">\n                  <img alt=\"image\" class=\"rounded-circle\" src=\"./assets/img/profile_small.jpg\"/>\n                  <a data-toggle=\"dropdown\" class=\"dropdown-toggle\" href=\"#\">\n                      <span class=\"block m-t-xs font-bold\">David Williams</span>\n                      <span class=\"text-muted text-xs block\">Art Director <b class=\"caret\"></b></span>\n                  </a>\n                  <ul class=\"dropdown-menu animated fadeInRight m-t-xs\">\n                      <li><a class=\"dropdown-item\" href=\"profile.html\">Profile</a></li>\n                      <li><a class=\"dropdown-item\" href=\"contacts.html\">Contacts</a></li>\n                      <li><a class=\"dropdown-item\" href=\"mailbox.html\">Mailbox</a></li>\n                      <li class=\"dropdown-divider\"></li>\n                      <li><a class=\"dropdown-item\" href=\"login.html\">Logout</a></li>\n                  </ul>\n              </div>\n              <div class=\"logo-element\"  >\n                  \n              </div>\n          </li>\n          <li class=\"active\" style=\"background-color: orangered;\">\n            <a href=\"#\"><i class=\"fa fa-edit\"></i> <span class=\"nav-label\">Master</span><span class=\"fa arrow\"></span></a>\n            <ul class=\"nav nav-second-level\" style=\"background-color: rgb(212, 63, 17)\">\n                <li><a routerLink=\"/dept\">Department</a></li>\n                <li><a routerLink=\"/cat\">Category</a></li>\n                <li><a routerLink=\"/uni\">Unit</a></li>\n                <li><a routerLink=\"/taxx\">Tax</a></li>\n                <li><a routerLink=\"/vend\">Vendor</a></li>\n                <li><a routerLink=\"/cstmr\">Customer</a></li>\n                <li><a routerLink=\"/paymthd\">Pay Method</a></li>\n                <li><a routerLink=\"/prnter\">Printer</a></li>\n                <li><a routerLink=\"/modi\">Modifier</a></li>\n                <li><a routerLink=\"/srvice\">Service Size</a></li>\n            </ul>\n        </li>\n        \n          \n          \n          <li class=\"deactive\" style=\"background-color: orangered;\">\n              <a href=\"#\"><i class=\"fa fa-edit\"></i> <span class=\"nav-label\">Inventory</span><span class=\"fa arrow\"></span></a>\n              <ul class=\"nav nav-second-level\" style=\"background-color: rgb(212, 63, 17)\">\n                  <li><a href=\"form_basic.html\">Product</a></li>\n                  <li><a href=\"form_advanced.html\">Opening Stock</a></li>\n                  <li><a href=\"form_wizard.html\">Inventory adjustments</a></li>\n                  <li><a href=\"form_file_upload.html\">Indent Request</a></li>\n                  <li><a href=\"form_editors.html\">Transfer Warehouse</a></li>\n                  <li><a href=\"form_autocomplete.html\">Accept Goods</a></li>\n                  <li><a href=\"form_markdown.html\">Audit Trial</a></li>\n                  <li><a href=\"form_markdown.html\">Quick Inventory</a></li>\n                  <li><a href=\"form_markdown.html\">Wastage</a></li>\n              </ul>\n          </li>\n          \n          \n          \n          \n\n         \n          \n          \n          \n         \n          \n         \n      </ul>\n\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/tax/tax.component.css":
/*!***************************************!*\
  !*** ./src/app/tax/tax.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tax/tax.component.html":
/*!****************************************!*\
  !*** ./src/app/tax/tax.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\n   \n\n    <div id=\"page-wrapper\" class=\"gray-bg\">\n    <div class=\"row border-bottom\">\n   \n    </div>\n        <div class=\"row wrapper border-bottom white-bg page-heading\">\n            <div class=\"col-sm-4\">\n                <h2>This is main title</h2>\n                <ol class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\">\n                        <a href=\"index.html\">This is</a>\n                    </li>\n                    <li class=\"breadcrumb-item active\">\n                        <strong>Breadcrumb</strong>\n                    </li>\n                </ol>\n            </div>\n            <div class=\"col-sm-8\">\n                <div class=\"title-action\">\n                    <a href=\"\" class=\"btn btn-primary\">This is action area</a>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"wrapper wrapper-content\">\n            <div class=\"middle-box text-center animated fadeInRightBig\">\n                <h3 class=\"font-bold\">This is page content</h3>\n                <div class=\"error-desc\">\n                    You can create here any grid layout you want. And any variation layout you imagine:) Check out\n                    main dashboard and other site. It use many different layout.\n                    <br/><a href=\"index.html\" class=\"btn btn-primary m-t\">Dashboard</a>\n                </div>\n            </div>\n        </div>\n        <div class=\"footer\">\n            <div class=\"float-right\">\n                10GB of <strong>250GB</strong> Free.\n            </div>\n            <div>\n                <strong>Copyright</strong> Example Company &copy; 2014-2018\n            </div>\n        </div>\n\n    </div>\n    </div>\n\n"

/***/ }),

/***/ "./src/app/tax/tax.component.ts":
/*!**************************************!*\
  !*** ./src/app/tax/tax.component.ts ***!
  \**************************************/
/*! exports provided: TaxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxComponent", function() { return TaxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TaxComponent = /** @class */ (function () {
    function TaxComponent() {
    }
    TaxComponent.prototype.ngOnInit = function () {
    };
    TaxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tax',
            template: __webpack_require__(/*! ./tax.component.html */ "./src/app/tax/tax.component.html"),
            styles: [__webpack_require__(/*! ./tax.component.css */ "./src/app/tax/tax.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TaxComponent);
    return TaxComponent;
}());



/***/ }),

/***/ "./src/app/unit/unit.component.css":
/*!*****************************************!*\
  !*** ./src/app/unit/unit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/unit/unit.component.html":
/*!******************************************!*\
  !*** ./src/app/unit/unit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\n   \n\n    <div id=\"page-wrapper\" class=\"gray-bg\">\n    <div class=\"row border-bottom\">\n   \n    </div>\n        <div class=\"row wrapper border-bottom white-bg page-heading\">\n            <div class=\"col-sm-4\">\n                <h2>This is main title</h2>\n                <ol class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\">\n                        <a href=\"index.html\">This is</a>\n                    </li>\n                    <li class=\"breadcrumb-item active\">\n                        <strong>Breadcrumb</strong>\n                    </li>\n                </ol>\n            </div>\n            <div class=\"col-sm-8\">\n                <div class=\"title-action\">\n                    <a href=\"\" class=\"btn btn-primary\">This is action area</a>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"wrapper wrapper-content\">\n            <div class=\"row\">\n                <div class=\"col-lg-6\">\n                    <div class=\"ibox \">\n                        <div class=\"ibox-title\">\n                            <h5>Unit</h5>\n                            \n                        </div>\n                        <div class=\"ibox-content\">\n                            <form method=\"get\">\n                                <div class=\"form-group  row\"><label class=\"col-sm-2 col-form-label\">Units</label>\n\n                                    <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\" name =\"name\" [(ngModel)]=unit.name></div>\n                                </div>\n                            \n                             \n\n\n                                \n                               \n                                       \n                                        \n\n                                      \n                             \n                                <div class=\"form-group row\">\n                                    <div class=\"col-sm-6 col-sm-offset-3\">\n                                        <button class=\"btn btn-white btn-sm\" type=\"submit\" >New</button>\n                                        <button class=\"btn btn-white btn-sm\" type=\"submit\"  >Cancel</button>\n                                        <button class=\"btn btn-primary btn-sm\" type=\"submit\"(click)=addunit()>Save changes</button>\n                                    </div>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4\">\n                    <div class=\"ibox \">\n                        <div class=\"ibox-title\" style=\"text-align: center\">\n                          <h5>Search</h5>\n                           \n            \n                            \n                        </div>\n                        <div class=\"ibox-content\">\n                            <input type=\"text\" class=\"form-control form-control-sm m-b-xs\" id=\"filter\"\n                                   placeholder=\"Search in table\">\n            \n                            <table class=\"footable table table-stripped\" data-page-size=\"8\" data-filter=#filter>\n                        <tr  >\n                          <th> Unit </th>\n\n                        </tr>  \n                        \n                        <tr *ngFor=\"let uni of units\">\n                          <td>{{uni.name}}</td>\n\n                        </tr>\n                        \n                          \n                            </table>\n                        </div>\n                    </div>\n            \n            </div>\n            \n            </div>\n            \n        </div>\n        <div class=\"footer\">\n            <div class=\"float-right\">\n                10GB of <strong>250GB</strong> Free.\n            </div>\n            <div>\n                <strong>Copyright</strong> Example Company &copy; 2014-2018\n            </div>\n        </div>\n\n    </div>\n    </div>\n\n"

/***/ }),

/***/ "./src/app/unit/unit.component.ts":
/*!****************************************!*\
  !*** ./src/app/unit/unit.component.ts ***!
  \****************************************/
/*! exports provided: UnitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitComponent", function() { return UnitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UnitComponent = /** @class */ (function () {
    function UnitComponent() {
        this.units = [];
        this.unit = {
            name: "",
        };
    }
    UnitComponent.prototype.ngOnInit = function () {
    };
    UnitComponent.prototype.addunit = function () {
        this.units.push({
            name: this.unit.name,
        });
    };
    UnitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-unit',
            template: __webpack_require__(/*! ./unit.component.html */ "./src/app/unit/unit.component.html"),
            styles: [__webpack_require__(/*! ./unit.component.css */ "./src/app/unit/unit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UnitComponent);
    return UnitComponent;
}());



/***/ }),

/***/ "./src/app/vendor/vendor.component.css":
/*!*********************************************!*\
  !*** ./src/app/vendor/vendor.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/vendor/vendor.component.html":
/*!**********************************************!*\
  !*** ./src/app/vendor/vendor.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\n   \n\n  <div id=\"page-wrapper\" class=\"gray-bg\">\n  <div class=\"row border-bottom\">\n \n  </div>\n      <div class=\"row wrapper border-bottom white-bg page-heading\">\n          <div class=\"col-sm-4\">\n              <h2>This is main title</h2>\n              <ol class=\"breadcrumb\">\n                  <li class=\"breadcrumb-item\">\n                      <a href=\"index.html\">This is</a>\n                  </li>\n                  <li class=\"breadcrumb-item active\">\n                      <strong>Breadcrumb</strong>\n                  </li>\n              </ol>\n          </div>\n          <div class=\"col-sm-8\">\n              <div class=\"title-action\">\n                  <a href=\"\" class=\"btn btn-primary\">This is action area</a>\n              </div>\n          </div>\n      </div>\n\n     \n      <div class=\"row\">\n        <div class=\"col-lg-5\">\n            <div class=\"ibox \">\n                <div class=\"ibox-title\">\n                    <h5>Vendor</h5>\n                    \n                </div>\n                <div class=\"ibox-content\">\n                    <form method=\"get\">\n                        <div class=\"form-group  row\"><label class=\"col-sm-2 col-form-label\">Company Name</label>\n\n                            <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\"></div>\n                        </div>\n                        <div class=\"form-group  row\"><label class=\"col-sm-2 col-form-label\">Contact Person</label>\n\n                            <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\"></div>\n                        </div>\n                        <div class=\"form-group  row\"><label class=\"col-sm-2 col-form-label\">Account Number</label>\n\n                            <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\"></div>\n                        </div>\n                        <div class=\"form-group  row\"><label class=\"col-sm-2 col-form-label\">Address1</label>\n\n                            <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\"></div>\n                        </div>\n                        <div class=\"form-group  row\"><label class=\"col-sm-2 col-form-label\">Address2</label>\n\n                            <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\"></div>\n                        </div>\n                        <div class=\"form-group  row\"><label class=\"col-sm-2 col-form-label\">Mobile Numer</label>\n\n                            <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\"></div>\n                        </div>\n                        <div class=\"form-group  row\"><label class=\"col-sm-2 col-form-label\">Phone Number</label>\n\n                            <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\"></div>\n                        </div>\n                        <div class=\"form-group  row\"><label class=\"col-sm-2 col-form-label\">Fax Number</label>\n\n                            <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\"></div>\n                        </div>\n                        <div class=\"form-group  row\"><label class=\"col-sm-2 col-form-label\">Email ID</label>\n\n                            <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\"></div>\n                        </div>\n                        <div class=\"form-group  row\"><label class=\"col-sm-2 col-form-label\">Zip Code</label>\n\n                            <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\"></div>\n                        </div>\n                        <div class=\"form-group  row\"><label class=\"col-sm-2 col-form-label\">City</label>\n\n                            <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\"></div>\n                        </div>\n                    \n                     \n                        <div class=\"form-group row\"><label class=\"col-sm-2 col-form-label\">Country</label>\n\n                            <div class=\"col-sm-10\"><select class=\"form-control m-b\" name=\"account\">\n                                <option>option 1</option>\n                                <option>option 2</option>\n                                <option>option 3</option>\n                                <option>option 4</option>\n                            </select>\n\n                            </div>\n                        </div>\n\n                        <div class=\"form-group row\"><label class=\"col-sm-2 col-form-label\">State</label>\n\n                            <div class=\"col-sm-10\"><select class=\"form-control m-b\" name=\"account\">\n                                <option>option 1</option>\n                                <option>option 2</option>\n                                <option>option 3</option>\n                                <option>option 4</option>\n                            </select>\n\n                            </div>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <div class=\"col-sm-4 col-sm-offset-2\">\n                                <button class=\"btn btn-white btn-sm\" type=\"submit\">New</button>\n                                <button class=\"btn btn-white btn-sm\" type=\"submit\">Cancel</button>\n                                <button class=\"btn btn-primary btn-sm\" type=\"submit\">Save changes</button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n   \n<div class=\"col-lg-6\">\n<div class=\"ibox\">\n    <div class=\"ibox-title\" style=\"text-align: center;\"> \n      <h5>Search</h5>\n       \n\n        \n    </div>\n    <div class=\"ibox-content\">\n        <input type=\"text\" class=\"form-control form-control-sm m-b-xs\" id=\"filter\"\n               placeholder=\"Search in table\">\n\n        <table class=\"footable table table-stripped\" data-page-size=\"8\" data-filter=#filter>\n            \n    \n      \n        </table>\n    </div>\n</div>\n\n</div>\n\n\n\n\n</div>\n      <div class=\"footer\">\n          <div class=\"float-right\">\n              10GB of <strong>250GB</strong> Free.\n          </div>\n          <div>\n              <strong>Copyright</strong> Example Company &copy; 2014-2018\n          </div>\n      </div>\n\n  </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/vendor/vendor.component.ts":
/*!********************************************!*\
  !*** ./src/app/vendor/vendor.component.ts ***!
  \********************************************/
/*! exports provided: VendorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorComponent", function() { return VendorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VendorComponent = /** @class */ (function () {
    function VendorComponent() {
    }
    VendorComponent.prototype.ngOnInit = function () {
    };
    VendorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vendor',
            template: __webpack_require__(/*! ./vendor.component.html */ "./src/app/vendor/vendor.component.html"),
            styles: [__webpack_require__(/*! ./vendor.component.css */ "./src/app/vendor/vendor.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VendorComponent);
    return VendorComponent;
}());



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
    production: false
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

module.exports = __webpack_require__(/*! D:\restaurant\restaurant\file\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map