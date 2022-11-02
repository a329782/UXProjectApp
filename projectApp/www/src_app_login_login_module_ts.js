"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6825);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 1729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 7047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let LoginPage = class LoginPage {
    constructor() { }
    ngOnInit() {
    }
};
LoginPage.ctorParameters = () => [];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 7047:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Inter&family=Roboto:wght@400;700&display=swap\");\nion-content {\n  --ion-background-color: white;\n}\n.container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding-inline: 20px;\n  color: black;\n  min-height: 90%;\n}\nimg {\n  width: 95px;\n  height: 86px;\n  align-self: center;\n  opacity: 100%;\n}\n.login-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  font-size: 22px;\n  padding-top: 40px;\n}\n.login-container #txt-login {\n  align-self: flex-start;\n  padding-left: 33px;\n}\n.text-boxes {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 21px;\n  padding-top: 30px;\n  padding-bottom: 20px;\n}\nion-input {\n  max-width: 270px;\n  flex-basis: 61px;\n  font-family: \"Inter\", sans-serif;\n  --color: gray;\n  --padding-start: 16px;\n  --background: white;\n  border: 1px solid rgba(0, 0, 0, 0.4);\n  border-radius: 10px;\n  border-color: gray;\n}\nion-input ion-icon {\n  padding-left: 20px;\n}\n#txt-area-email {\n  height: 61px;\n}\nion-button {\n  width: 271px;\n  height: 42px;\n  font-size: 14px;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 700;\n}\n#bttn-login {\n  --background: white;\n  --border-style: solid;\n  --border-color: rgba(0, 0, 0, 0.4);\n  --border-width: 1px;\n  --border-radius: 18px;\n  color: black;\n}\n#txt-forgot-password {\n  color: #007AFF;\n  display: flex;\n  justify-content: center;\n  padding-top: 15px;\n  font-size: 12px;\n  font-family: \"Inter\", \"sans-serif\";\n}\n.login-with {\n  color: rgba(0, 0, 0, 0.4);\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  align-items: flex-end;\n  padding-top: 105px;\n  gap: 12px;\n  font-size: 12px;\n  font-family: \"Inter\", sans-serif;\n}\n#txt-login-with {\n  margin-top: -3px;\n}\n#line-1 {\n  width: 100px;\n  height: 1px;\n  background: rgba(0, 0, 0, 0.4);\n}\n#line-2 {\n  width: 100px;\n  height: 1px;\n  background: rgba(0, 0, 0, 0.4);\n}\n.container-connect {\n  padding-top: 20px;\n  display: flex;\n  justify-content: center;\n}\n.container-connect ion-button {\n  width: 144px;\n  height: 32px;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 12px;\n  --border-radius: 18px;\n}\n.container-connect ion-button .bttn-container-fb {\n  display: flex;\n  justify-content: flex-start;\n  min-width: 144px;\n  gap: 20px;\n}\n.container-connect ion-button .bttn-container-fb ion-icon {\n  padding-left: 20px;\n  font-size: 13px;\n  color: black;\n}\n.container-connect ion-button .bttn-container-google {\n  display: flex;\n  justify-content: flex-start;\n  min-width: 144px;\n  gap: 20px;\n}\n.container-connect ion-button .bttn-container-google ion-icon {\n  padding-left: 20px;\n  font-size: 13px;\n  color: black;\n}\n#bttn-facebook {\n  --background: #5C7DC1;\n}\n#bttn-google {\n  --background: #C6C9D0;\n}\n.no-account-container {\n  display: flex;\n  justify-content: space-evenly;\n  font-size: 12px;\n  padding-top: 46px;\n}\n#txt-no-account {\n  color: rgba(118, 118, 118, 0.9);\n}\n#txt-register {\n  color: #007AFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSx3RkFBQTtBQUNBLHFHQUFBO0FBRVI7RUFDSSw2QkFBQTtBQUFKO0FBR0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBRUEsWUFBQTtFQUNBLGVBQUE7QUFESjtBQUlBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFESjtBQUlBO0VBRUksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNIQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBRko7QUFJSTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7QUFGUjtBQU9BO0VBRUksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBTko7QUFVQTtFQUVJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBUko7QUFVSTtFQUNJLGtCQUFBO0FBUlI7QUFZQTtFQUNJLFlBQUE7QUFUSjtBQVlBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtBQVRKO0FBWUE7RUFDSSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQVRKO0FBWUE7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7QUFUSjtBQVlBO0VBRUkseUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFFQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FBWEo7QUFjQTtFQUVJLGdCQUFBO0FBWko7QUFlQTtFQUVJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUFiSjtBQWdCQTtFQUVJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUFkSjtBQWlCQTtFQUVJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBZko7QUFnQkk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBZFI7QUFlUTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQWJaO0FBY1k7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBWmhCO0FBZVE7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFiWjtBQWNZO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQVpoQjtBQWtCQTtFQUNJLHFCQUFBO0FBZko7QUFrQkE7RUFDSSxxQkFBQTtBQWZKO0FBa0JBO0VBRUksYUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBaEJKO0FBbUJBO0VBQ0ksK0JBQUE7QUFoQko7QUFtQkE7RUFDSSxjQUFBO0FBaEJKIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlciZmYW1pbHk9Um9ib3RvOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcblxuaW9uLWNvbnRlbnQge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZy1pbmxpbmU6IDIwcHg7XG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIG1pbi1oZWlnaHQ6IDkwJTtcbn1cblxuaW1nIHtcbiAgICB3aWR0aDogOTVweDtcbiAgICBoZWlnaHQ6IDg2cHg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIG9wYWNpdHk6IDEwMCU7XG59XG5cbi5sb2dpbi1jb250YWluZXIge1xuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OidMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgXG4gICAgI3R4dC1sb2dpbiB7XG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMzNweDtcbiAgICB9XG5cbn1cblxuLnRleHQtYm94ZXMge1xuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDIxcHg7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgXG59XG5cbmlvbi1pbnB1dCB7XG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICAgIG1heC13aWR0aDogMjcwcHg7XG4gICAgZmxleC1iYXNpczogNjFweDtcbiAgICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcbiAgICAtLWNvbG9yOiBncmF5O1xuICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci1jb2xvcjogZ3JheTtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIH1cbn1cblxuI3R4dC1hcmVhLWVtYWlsIHtcbiAgICBoZWlnaHQ6IDYxcHg7XG59XG5cbmlvbi1idXR0b24ge1xuICAgIHdpZHRoOiAyNzFweDtcbiAgICBoZWlnaHQ6IDQycHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4jYnR0bi1sb2dpbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgLS1ib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMThweDtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbiN0eHQtZm9yZ290LXBhc3N3b3JkIHtcbiAgICBjb2xvcjogIzAwN0FGRjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LWZhbWlseTogJ0ludGVyJywgJ3NhbnMtc2VyaWYnO1xufVxuXG4ubG9naW4td2l0aCB7XG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIHBhZGRpbmctdG9wOiAxMDVweDtcbiAgICAvL2hlaWdodDogMTA1cHg7XG4gICAgZ2FwOiAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcbn1cblxuI3R4dC1sb2dpbi13aXRoIHtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IGFxdWE7XG4gICAgbWFyZ2luLXRvcDogLTNweDtcbn1cblxuI2xpbmUtMSB7XG4gICAgXG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4jbGluZS0yIHtcbiAgICBcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsIDAuNClcbn1cblxuLmNvbnRhaW5lci1jb25uZWN0IHtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAxNDRweDtcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxOHB4O1xuICAgICAgICAuYnR0bi1jb250YWluZXItZmIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTQ0cHg7XG4gICAgICAgICAgICBnYXA6IDIwcHg7XG4gICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmJ0dG4tY29udGFpbmVyLWdvb2dsZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxNDRweDtcbiAgICAgICAgICAgIGdhcDogMjBweDtcbiAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuI2J0dG4tZmFjZWJvb2sge1xuICAgIC0tYmFja2dyb3VuZDogIzVDN0RDMTtcbn1cblxuI2J0dG4tZ29vZ2xlIHtcbiAgICAtLWJhY2tncm91bmQ6ICNDNkM5RDA7XG59XG5cbi5uby1hY2NvdW50LWNvbnRhaW5lciB7XG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgcGFkZGluZy10b3A6IDQ2cHg7XG59XG5cbiN0eHQtbm8tYWNjb3VudCB7XG4gICAgY29sb3I6IHJnYmEoMTE4LDExOCwxMTgsMC45KVxufVxuXG4jdHh0LXJlZ2lzdGVyIHtcbiAgICBjb2xvcjogIzAwN0FGRjtcbn1cblxuIl19 */";

/***/ }),

/***/ 1729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-content [forceOverscroll]=\"false\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\"></ion-title>\n    </ion-toolbar>\n  </ion-header> \n  <div class=\"container\">\n    <img src=\"assets/img/logo.png\" alt=\"logo\">\n    <div class=\"login-container\">\n      <ion-thumbnail>\n        \n      </ion-thumbnail>\n      <ion-text id=\"txt-login\">Iniciar sesión</ion-text>\n      \n      <div class=\"text-boxes\">\n        <ion-input placeholder=\"Correo electrónico\" id=\"txt-area-email\" type=\"email\"> <ion-icon name=\"person-outline\"></ion-icon></ion-input>\n\n        <ion-input placeholder=\"Contraseña\" id=\"txt-area-password\" type=\"password\"><ion-icon name=\"lock-closed-outline\"></ion-icon></ion-input>\n      </div>\n\n      <ion-button id=\"bttn-login\" [routerLink]=\"['/tabs']\">Iniciar Sesion</ion-button>\n\n    </div>\n\n    <ion-text id=\"txt-forgot-password\">¿Olvidaste tu contraseña?</ion-text>\n    \n    <div class=\"login-with\">\n\n      <div id=\"line-1\"></div>\n      <ion-text id=\"txt-login-with\">o inicia sesion con</ion-text>\n      <div id=\"line-2\"></div>\n\n    </div>\n\n\n    <div class=\"container-connect\">\n\n      <ion-button id=\"bttn-facebook\">\n        <div class=\"bttn-container-fb\">\n          <ion-icon name=\"logo-facebook\"></ion-icon>\n          Facebook\n        </div>\n      </ion-button>\n\n        <ion-button id=\"bttn-google\">\n          <div class=\"bttn-container-google\">\n            <ion-icon name=\"logo-google\"></ion-icon>Google\n          </div>\n        </ion-button>\n      \n    </div>\n\n    <div class=\"no-account-container\">\n      <ion-text id=\"txt-no-account\">¿Aún no tienes cuenta?</ion-text>\n      <ion-text id=\"txt-register\">Registrarse</ion-text>\n    </div>\n\n  </div>\n  \n  <!-- <app-explore-container name=\"Tab 2 page\"></app-explore-container> -->\n\n\n</ion-content>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map