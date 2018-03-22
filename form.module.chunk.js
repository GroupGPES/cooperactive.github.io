webpackJsonp(["form.module"],{

/***/ "./src/app/layout/form/form-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_component__ = __webpack_require__("./src/app/layout/form/form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__form_component__["a" /* FormComponent */]
    }
];
var FormRoutingModule = (function () {
    function FormRoutingModule() {
    }
    FormRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], FormRoutingModule);
    return FormRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/form/form.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Cadastro de Doadores'\" [icon]=\"'fa-pencil'\"></app-page-header>\n    <div class=\"row\">\n\n        <div id=\"First_Division\" class=\"col-lg-6\" style=\"width:557;height:591;\">\n\n            <form class=\"role\">\n                <fieldset class=\"form-content\">\n                    \n                    <!--<mat-form-field>\n                        <input matInput placeholder=\"Input\">\n                    </mat-form-field> -->\n\n                    <!-- Nome do contribuinte -->\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\"  id=\"txtName\" name=\"txtName\" placeholder=\"Nome do contribuinte*\" tabindex=\"1\" required>\n                    </div>\n\n                    <!-- Endereço do Contribuinte -->\n                    <input class=\"form-control\" placeholder=\"Endereço do contribuinte*\" style=\"width:384px;\" id=\"txtAddress\" name=\"txtAddress\" tabindex=\"4\" required>\n                    <br/>\n\n                    <!-- Complemento -->\n                    <input class=\"form-control\" placeholder=\"Complemento\" style=\"width:284px;\" id=\"txtComplement\" name=\"txtComplement\" tabindex=\"7\">\n                    <br/>\n\n                    <!-- Referência da residência -->\n                    <textarea class=\"form-control\" placeholder=\"Referência\" style=\"width:384px;\" id=\"txtReference\" name=\"txtReference\" tabindex=\"9\"></textarea>\n                    <br/>\n\n                </fieldset>\n\n                <!--<fieldset class=\"form-group\">\n                    <label></label>\n                </fieldset> EXEMPLO DE SETOR-->\n\n                <button type=\"submit\" id=\"btnSave\" name=\"btnSave\" class=\"btn btn-success\" value=\"Salvar\" style=\"cursor: pointer;\" tabindex=\"10\">\n                    <span><i class=\"fa fa-fw fa-save\"></i>&nbsp;Salvar</span>\n                </button>\n            </form>\n\n        </div>\n\n        <div id=\"Second_Division\" class=\"col-lg-3\" style=\"width:127;height:591;\">\n            <form role=\"form\">\n                <fieldset class=\"form-group\">\n                    <!-- Data de nascimento -->\n                    <input class=\"form-control\" type=\"date\" style=\"width:164px;\" id=\"txtBirth\" name=\"txtBirth\" tabindex=\"2\">\n                    <br/>\n\n                    <!-- Número da residência -->\n                    <input class=\"form-control\" placeholder=\"Número*\" style=\"width:164px;\" id=\"txtNumber\" name=\"txtNumber\" tabindex=\"5\" required>\n                    <br/>\n\n                    <!-- Cidade -->\n                    <input class=\"form-control\" placeholder=\"Cidade*\" style=\"width:284px;\" id=\"txtCity\" name=\"txtCity\" tabindex=\"8\" required>\n                </fieldset>\n            </form>\n        </div>\n\n        <div id=\"Third_Division\" class=\"col-lg-3\">\n            <form role=\"form\">\n                <fieldset class=\"form-group\">\n                    <!-- Sexo -->\n                    <select class=\"form-control\" style=\"width:164px;\" id=\"slcGen\" name=\"slcGen\" tabindex=\"3\" required>\n                            <option disabled selected>--Selecione--</option>\n                            <option value=\"M\">M</option>\n                            <option value=\"F\">F</option>\n                        </select>\n                        <br/>\n\n                    <!-- Bairro -->\n                    <input class=\"form-control\" placeholder=\"Bairro*\" style=\"width:184px;\" id=\"txtNeighborhood\" name=\"txtNeighborhood\" tabindex=\"6\" required>\n                </fieldset>\n            </form>\n        </div>\n        <!-- RESERVADO AO FOOTER DA PÁGINA -->\n</div>\n"

/***/ }),

/***/ "./src/app/layout/form/form.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/form/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("./src/app/router.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormComponent = (function () {
    function FormComponent() {
    }
    FormComponent.prototype.ngOnInit = function () { };
    FormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-form',
            template: __webpack_require__("./src/app/layout/form/form.component.html"),
            styles: [__webpack_require__("./src/app/layout/form/form.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/layout/form/form.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModule", function() { return FormModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_routing_module__ = __webpack_require__("./src/app/layout/form/form-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__form_component__ = __webpack_require__("./src/app/layout/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("./src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FormModule = (function () {
    function FormModule() {
    }
    FormModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__form_routing_module__["a" /* FormRoutingModule */], __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* PageHeaderModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__form_component__["a" /* FormComponent */]]
        })
    ], FormModule);
    return FormModule;
}());



/***/ })

});
//# sourceMappingURL=form.module.chunk.js.map