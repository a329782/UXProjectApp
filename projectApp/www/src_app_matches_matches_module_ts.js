"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_matches_matches_module_ts"],{

/***/ 6574:
/*!***************************************************!*\
  !*** ./src/app/matches/matches-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatchesPageRoutingModule": () => (/* binding */ MatchesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _matches_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matches.page */ 8669);




const routes = [
    {
        path: '',
        component: _matches_page__WEBPACK_IMPORTED_MODULE_0__.MatchesPage
    }
];
let MatchesPageRoutingModule = class MatchesPageRoutingModule {
};
MatchesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MatchesPageRoutingModule);



/***/ }),

/***/ 7528:
/*!*******************************************!*\
  !*** ./src/app/matches/matches.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatchesPageModule": () => (/* binding */ MatchesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _matches_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matches-routing.module */ 6574);
/* harmony import */ var _matches_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matches.page */ 8669);







let MatchesPageModule = class MatchesPageModule {
};
MatchesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _matches_routing_module__WEBPACK_IMPORTED_MODULE_0__.MatchesPageRoutingModule
        ],
        declarations: [_matches_page__WEBPACK_IMPORTED_MODULE_1__.MatchesPage]
    })
], MatchesPageModule);



/***/ }),

/***/ 8669:
/*!*****************************************!*\
  !*** ./src/app/matches/matches.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatchesPage": () => (/* binding */ MatchesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _matches_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matches.page.html?ngResource */ 415);
/* harmony import */ var _matches_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matches.page.scss?ngResource */ 3869);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let MatchesPage = class MatchesPage {
    constructor() { }
    ngOnInit() {
    }
};
MatchesPage.ctorParameters = () => [];
MatchesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-matches',
        template: _matches_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_matches_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MatchesPage);



/***/ }),

/***/ 3869:
/*!******************************************************!*\
  !*** ./src/app/matches/matches.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXRjaGVzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 415:
/*!******************************************************!*\
  !*** ./src/app/matches/matches.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-title size=\"large\">Partidos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content [forceOverscroll]=\"false\">\n  \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_matches_matches_module_ts.js.map