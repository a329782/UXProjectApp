"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_team_team_module_ts"],{

/***/ 7468:
/*!*********************************************!*\
  !*** ./src/app/team/team-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamPageRoutingModule": () => (/* binding */ TeamPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _team_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./team.page */ 7906);




const routes = [
    {
        path: '',
        component: _team_page__WEBPACK_IMPORTED_MODULE_0__.TeamPage
    }
];
let TeamPageRoutingModule = class TeamPageRoutingModule {
};
TeamPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TeamPageRoutingModule);



/***/ }),

/***/ 3669:
/*!*************************************!*\
  !*** ./src/app/team/team.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamPageModule": () => (/* binding */ TeamPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _team_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./team-routing.module */ 7468);
/* harmony import */ var _team_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./team.page */ 7906);







let TeamPageModule = class TeamPageModule {
};
TeamPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _team_routing_module__WEBPACK_IMPORTED_MODULE_0__.TeamPageRoutingModule
        ],
        declarations: [_team_page__WEBPACK_IMPORTED_MODULE_1__.TeamPage]
    })
], TeamPageModule);



/***/ }),

/***/ 7906:
/*!***********************************!*\
  !*** ./src/app/team/team.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamPage": () => (/* binding */ TeamPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _team_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./team.page.html?ngResource */ 6282);
/* harmony import */ var _team_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./team.page.scss?ngResource */ 5619);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let TeamPage = class TeamPage {
    constructor() { }
    ngOnInit() {
    }
};
TeamPage.ctorParameters = () => [];
TeamPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-team',
        template: _team_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_team_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TeamPage);



/***/ }),

/***/ 5619:
/*!************************************************!*\
  !*** ./src/app/team/team.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWFtLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 6282:
/*!************************************************!*\
  !*** ./src/app/team/team.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>team</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_team_team_module_ts.js.map