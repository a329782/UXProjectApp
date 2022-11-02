"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_statistics_statistics_module_ts"],{

/***/ 5962:
/*!*********************************************************!*\
  !*** ./src/app/statistics/statistics-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatisticsPageRoutingModule": () => (/* binding */ StatisticsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _statistics_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statistics.page */ 6024);




const routes = [
    {
        path: '',
        component: _statistics_page__WEBPACK_IMPORTED_MODULE_0__.StatisticsPage
    }
];
let StatisticsPageRoutingModule = class StatisticsPageRoutingModule {
};
StatisticsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StatisticsPageRoutingModule);



/***/ }),

/***/ 5452:
/*!*************************************************!*\
  !*** ./src/app/statistics/statistics.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatisticsPageModule": () => (/* binding */ StatisticsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _statistics_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statistics-routing.module */ 5962);
/* harmony import */ var _statistics_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./statistics.page */ 6024);







let StatisticsPageModule = class StatisticsPageModule {
};
StatisticsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _statistics_routing_module__WEBPACK_IMPORTED_MODULE_0__.StatisticsPageRoutingModule
        ],
        declarations: [_statistics_page__WEBPACK_IMPORTED_MODULE_1__.StatisticsPage]
    })
], StatisticsPageModule);



/***/ }),

/***/ 6024:
/*!***********************************************!*\
  !*** ./src/app/statistics/statistics.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatisticsPage": () => (/* binding */ StatisticsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _statistics_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statistics.page.html?ngResource */ 6390);
/* harmony import */ var _statistics_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./statistics.page.scss?ngResource */ 879);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let StatisticsPage = class StatisticsPage {
    constructor() { }
    ngOnInit() {
    }
};
StatisticsPage.ctorParameters = () => [];
StatisticsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-statistics',
        template: _statistics_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_statistics_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StatisticsPage);



/***/ }),

/***/ 879:
/*!************************************************************!*\
  !*** ./src/app/statistics/statistics.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0aXN0aWNzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 6390:
/*!************************************************************!*\
  !*** ./src/app/statistics/statistics.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Partidos</ion-title>\n    </ion-toolbar>\n  </ion-header>\n</ion-header>\n\n\n<ion-content [forceOverscroll]=\"false\">\n  \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_statistics_statistics_module_ts.js.map