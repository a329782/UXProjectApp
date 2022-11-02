"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_profile_profile_module_ts"],{

/***/ 6829:
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 2919);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 4523:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 6829);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 2919);







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 2919:
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page.html?ngResource */ 8907);
/* harmony import */ var _profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss?ngResource */ 6611);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let ProfilePage = class ProfilePage {
    constructor() { }
    ngOnInit() {
    }
};
ProfilePage.ctorParameters = () => [];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-profile',
        template: _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfilePage);



/***/ }),

/***/ 6611:
/*!******************************************************!*\
  !*** ./src/app/profile/profile.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: white;\n}\n\n.status-bar {\n  background-color: white;\n  height: 44px;\n}\n\nion-toolbar {\n  display: flex;\n  align-items: center;\n  padding-left: 25px;\n  height: 97px;\n  --background: white;\n  --border-color: black;\n}\n\nion-toolbar ion-label {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 38px;\n  font-weight: 600;\n  color: black;\n}\n\n.profile-container {\n  color: black;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-direction: column;\n  flex-wrap: wrap;\n  font-size: 18px;\n  font-family: \"Roboto\", sans-serif;\n  height: 100%;\n}\n\n.profile-container ion-icon {\n  color: #1374E9;\n  font-size: 156px;\n}\n\n.profile-container #name {\n  font-size: 36px;\n  font-weight: bold;\n}\n\n.profile-container ion-text {\n  font-weight: bold;\n}\n\n.email-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  width: 100%;\n  padding: 20px;\n  padding-left: 40px;\n  gap: 20px;\n}\n\n.phone-container {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  padding-left: 40px;\n  gap: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUNJO0VBQ0ksaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ1I7O0FBSUE7RUFDSSxZQUFBO0VBRUEsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0FBRko7O0FBR0k7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFEUjs7QUFHSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQURSOztBQUdJO0VBQ0ksaUJBQUE7QUFEUjs7QUFLQTtFQUVJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFISjs7QUFNQTtFQUVJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBTEoiLCJmaWxlIjoicHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLnN0YXR1cy1iYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGhlaWdodDogNDRweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgaGVpZ2h0OiA5N3B4O1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgLS1ib3JkZXItY29sb3I6IGJsYWNrO1xuXG4gICAgaW9uLWxhYmVse1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cbn1cblxuXG4ucHJvZmlsZS1jb250YWluZXIge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IHBpbms7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGlvbi1pY29uIHtcbiAgICAgICAgY29sb3I6ICMxMzc0RTk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTU2cHg7XG4gICAgfVxuICAgICNuYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgaW9uLXRleHQge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59XG5cbi5lbWFpbC1jb250YWluZXIge1xuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgZ2FwOiAyMHB4O1xufVxuXG4ucGhvbmUtY29udGFpbmVyIHtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLy9qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICBnYXA6IDIwcHg7XG59XG5cbiJdfQ== */";

/***/ }),

/***/ 8907:
/*!******************************************************!*\
  !*** ./src/app/profile/profile.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header mode=\"ios\">\n  <div class=\"status-bar\">\n      \n  </div>\n  <ion-toolbar>\n    \n    <ion-label>Mi Perfil</ion-label>\n\n    <ion-button slot=\"end\" fill=\"clear\">\n      Editar\n      <ion-icon slot=\"end\" name=\"create\"></ion-icon>\n    </ion-button>\n\n    <div class=\"toolbar-line\"></div>\n  </ion-toolbar>\n  \n</ion-header>\n\n<ion-content [forceOverscroll]=\"false\">\n\n  <div class=\"profile-container\">\n\n    <ion-icon name=\"person-circle\"></ion-icon>\n\n    \n    <ion-label id=\"name\">Juan Perez</ion-label>\n    \n    <div class=\"email-container\">\n      <ion-text>Correo: </ion-text>\n      <ion-label id=\"email\">adidas_spiderman@hotmail.com</ion-label>\n    </div>\n    \n    <div class=\"phone-container\">\n      <ion-text>Telefono: </ion-text>\n      <ion-label id=\"phone-number\">614-423-4231</ion-label>\n    </div>\n\n  </div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_profile_profile_module_ts.js.map