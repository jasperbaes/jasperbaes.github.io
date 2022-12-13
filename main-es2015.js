(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/timeline/timeline.component.ts");
/* harmony import */ var _simulator_simulator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./simulator/simulator.component */ "./src/app/simulator/simulator.component.ts");







const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    // {path: 'posts', component: BlogComponent},
    { path: 'timeline', component: _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_3__["TimelineComponent"] },
    { path: 'caps', component: _simulator_simulator_component__WEBPACK_IMPORTED_MODULE_4__["SimulatorComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_bottomsheet_bottomsheet_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/bottomsheet/bottomsheet.component */ "./src/app/components/bottomsheet/bottomsheet.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/timeline/timeline.component.ts");












function AppComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-home", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("postEvent", function AppComponent_ng_template_18_Template_app_home_postEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.receivePost($event); })("tabEvent", function AppComponent_ng_template_18_Template_app_home_tabEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.receiveTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-timeline", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("postEvent", function AppComponent_ng_template_20_Template_app_timeline_postEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.receivePost($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(router, _bottomSheet, titleService) {
        this.router = router;
        this._bottomSheet = _bottomSheet;
        this.titleService = titleService;
        this.title = 'Jasper Baes';
        this.selectedTab = -1;
        this.openPost = null;
        this.titleService.setTitle("Jasper Baes");
        this.navLinks = [
            {
                label: 'About me',
                link: './',
                index: 0
                // }, {
                //   label: 'Posts',
                //   link: './posts',
                //   index: 1
            }, {
                label: 'Timeline',
                link: './timeline',
                index: 1
            },
            {
                label: 'CAPS tool',
                link: './caps',
                index: 2
            }
        ];
    }
    onTabClick(event) {
        // this.router.navigate(['/', event.tab.textLabel.toLowerCase()]).then();
        if (event.tab.textLabel.toLowerCase() == 'posts') {
            this.router.navigate(['/posts']);
        }
        else if (event.tab.textLabel.toLowerCase() == 'timeline') {
            this.openPost = null;
            this.router.navigate(['/timeline']);
        }
        else if (event.tab.textLabel.toLowerCase() == 'caps tool') {
            this.openPost = null;
            this.router.navigate(['/caps']);
        }
        else {
            this.router.navigate(['/']);
        }
    }
    ngOnInit() {
        this.router.events.subscribe((res) => {
            this.selectedTab = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
        });
    }
    openBottomSheet() {
        this._bottomSheet.open(_components_bottomsheet_bottomsheet_component__WEBPACK_IMPORTED_MODULE_1__["BottomsheetComponent"]);
    }
    receivePost($event) {
        this.openPost = $event;
        this.selectedTab = 1;
        this.router.navigate(['/posts']);
    }
    receiveTab($event) {
        this.selectedTab = $event;
        if ($event == '0') {
            this.openPost = null;
        }
    }
    swipe(e, when) {
        const coord = [e.changedTouches[0].clientX, e.changedTouches[0].clientY];
        const time = new Date().getTime();
        if (when === 'start') {
            this.swipeCoord = coord;
            this.swipeTime = time;
        }
        else if (when === 'end') {
            const direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
            const duration = time - this.swipeTime;
            if (duration < 1000 //
                && Math.abs(direction[0]) > 30 // Long enough
                && Math.abs(direction[0]) > Math.abs(direction[1] * 3)) { // Horizontal enough
                const swipe = direction[0] < 0 ? 'next' : 'previous';
                console.log('swipe', direction[0] < 0 ? 'next' : 'previous');
                if (swipe == 'next') {
                    if (this.selectedTab < 3)
                        this.selectedTab++;
                }
                else {
                    if (this.selectedTab > 0)
                        this.selectedTab--;
                }
            }
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheet"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 21, vars: 1, consts: [["rel", "preload", "href", "/assets/fonts/Raleway-Regular.ttf", "as", "font", "type", "font/ttf", "crossorigin", ""], ["rel", "preload", "href", "/assets/fonts/Raleway-Black.ttf", "as", "font", "type", "font/ttf", "crossorigin", ""], ["rel", "stylesheet", "href", "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css", "integrity", "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh", "crossorigin", "anonymous"], [1, "mat-app-background"], ["color", "primary", 1, "app-toolbar"], [1, "my-auto", "ml-3", "pb-0", "mb-0"], [1, "text-nowrap", "mt-0", "pt-0"], [1, "example-spacer"], ["mat-icon-button", "", 1, "example-icon", "favorite-icon", 2, "font-size", "0rem !important", "display", "flex", "justify-content", "center", 3, "click"], ["color", "white"], [3, "touchstart", "touchend"], ["mat-align-tabs", "center", 3, "selectedIndex", "selectedTabChange"], ["label", "About me", "id", "about-me"], ["matTabContent", ""], ["label", "Timeline"], [1, "container"], [3, "postEvent", "tabEvent"], [3, "postEvent"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-toolbar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "JASPER BAES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cybersecurity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "consultant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_12_listener() { return ctx.openBottomSheet(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("touchstart", function AppComponent_Template_div_touchstart_15_listener($event) { return ctx.swipe($event, "start"); })("touchend", function AppComponent_Template_div_touchend_15_listener($event) { return ctx.swipe($event, "end"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-tab-group", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedTabChange", function AppComponent_Template_mat_tab_group_selectedTabChange_16_listener($event) { return ctx.onTabClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-tab", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AppComponent_ng_template_18_Template, 2, 0, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-tab", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AppComponent_ng_template_20_Template, 2, 0, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", ctx.selectedTab);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabContent"], _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_10__["TimelineComponent"]], styles: [".example-icon[_ngcontent-%COMP%] {\n  padding: 0 14px;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n@font-face {\n  font-family: raleway;\n  src: local(\"raleway\"), url(/assets/fonts/Raleway-Regular.ttf);\n  font-weight: bold;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: raleway-bold;\n  src: local(\"raleway-bold\"), url(/assets/fonts/Raleway-Black.ttf);\n  font-weight: bold;\n  font-display: swap;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-family: raleway-bold !important;\n  font-size: 2rem;\n}\n\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  font-family: raleway !important;\n  font-size: 1.2rem;\n  line-height: 80%;\n}\n\n.jbaes-bold[_ngcontent-%COMP%] {\n  font-family: raleway-bold !important;\n}\n\n@media only screen and (max-width: 400px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n\n  h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n}\n\n.app-toolbar[_ngcontent-%COMP%] {\n  position: sticky;\n  position: -webkit-sticky;\n  \n  top: 0;\n  \n  z-index: 1000;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxqYmFlc1xcRGV2ZWxvcG1lbnRcXGJsb2cvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZUFBQTtBQ0FKOztBREVFO0VBQ0UsY0FBQTtBQ0NKOztBREdFO0VBQ0Usb0JBQUE7RUFDQSw2REFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURFRTtFQUNFLHlCQUFBO0VBQ0EsZ0VBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0U7RUFDRSxvQ0FBQTtFQUNBLGVBQUE7QUNESjs7QURHRTtFQUNFLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREdFO0VBQ0Usb0NBQUE7QUNBSjs7QURHRTtFQUNFO0lBQ0UsaUJBQUE7RUNBSjs7RURFRTtJQUNFLGlCQUFBO0VDQ0o7QUFDRjs7QURFRTtFQUNFLGdCQUFBO0VBQ0Esd0JBQUE7RUFBMEIseUJBQUE7RUFDMUIsTUFBQTtFQUFRLHlDQUFBO0VBQ1IsYUFBQTtFQUFlLCtEQUFBO0FDR25CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5leGFtcGxlLWljb24ge1xyXG4gICAgcGFkZGluZzogMCAxNHB4O1xyXG4gIH1cclxuICAuZXhhbXBsZS1zcGFjZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgfVxyXG5cclxuXHJcbiAgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogcmFsZXdheTtcclxuICAgIHNyYzogbG9jYWwoXCJyYWxld2F5XCIpLCB1cmwoL2Fzc2V0cy9mb250cy9SYWxld2F5LVJlZ3VsYXIudHRmKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gIH1cclxuICBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiByYWxld2F5LWJvbGQ7XHJcbiAgICBzcmM6IGxvY2FsKFwicmFsZXdheS1ib2xkXCIpLCB1cmwoL2Fzc2V0cy9mb250cy9SYWxld2F5LUJsYWNrLnR0Zik7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICB9XHJcbiAgXHJcbiAgaDEge1xyXG4gICAgZm9udC1mYW1pbHk6IHJhbGV3YXktYm9sZCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gIH1cclxuICBoMiwgaDMge1xyXG4gICAgZm9udC1mYW1pbHk6IHJhbGV3YXkgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDgwJTtcclxuICB9XHJcblxyXG4gIC5qYmFlcy1ib2xkIHtcclxuICAgIGZvbnQtZmFtaWx5OiByYWxld2F5LWJvbGQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgIGgxIHtcclxuICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICB9XHJcbiAgICBoMiwgaDMge1xyXG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hcHAtdG9vbGJhciB7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5OyAvKiBGb3IgbWFjT1MvaU9TIFNhZmFyaSAqL1xyXG4gICAgdG9wOiAwOyAvKiBTZXRzIHRoZSBzdGlja3kgdG9vbGJhciB0byBiZSBvbiB0b3AgKi9cclxuICAgIHotaW5kZXg6IDEwMDA7IC8qIEVuc3VyZSB0aGF0IHlvdXIgYXBwJ3MgY29udGVudCBkb2Vzbid0IG92ZXJsYXAgdGhlIHRvb2xiYXIgKi9cclxufSIsIi5leGFtcGxlLWljb24ge1xuICBwYWRkaW5nOiAwIDE0cHg7XG59XG5cbi5leGFtcGxlLXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IHJhbGV3YXk7XG4gIHNyYzogbG9jYWwoXCJyYWxld2F5XCIpLCB1cmwoL2Fzc2V0cy9mb250cy9SYWxld2F5LVJlZ3VsYXIudHRmKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogcmFsZXdheS1ib2xkO1xuICBzcmM6IGxvY2FsKFwicmFsZXdheS1ib2xkXCIpLCB1cmwoL2Fzc2V0cy9mb250cy9SYWxld2F5LUJsYWNrLnR0Zik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5oMSB7XG4gIGZvbnQtZmFtaWx5OiByYWxld2F5LWJvbGQgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG5oMiwgaDMge1xuICBmb250LWZhbWlseTogcmFsZXdheSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDgwJTtcbn1cblxuLmpiYWVzLWJvbGQge1xuICBmb250LWZhbWlseTogcmFsZXdheS1ib2xkICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICB9XG5cbiAgaDIsIGgzIHtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgfVxufVxuLmFwcC10b29sYmFyIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICAvKiBGb3IgbWFjT1MvaU9TIFNhZmFyaSAqL1xuICB0b3A6IDA7XG4gIC8qIFNldHMgdGhlIHN0aWNreSB0b29sYmFyIHRvIGJlIG9uIHRvcCAqL1xuICB6LWluZGV4OiAxMDAwO1xuICAvKiBFbnN1cmUgdGhhdCB5b3VyIGFwcCdzIGNvbnRlbnQgZG9lc24ndCBvdmVybGFwIHRoZSB0b29sYmFyICovXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheet"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _components_bottomsheet_bottomsheet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/bottomsheet/bottomsheet.component */ "./src/app/components/bottomsheet/bottomsheet.component.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/dialog/dialog.component */ "./src/app/components/dialog/dialog.component.ts");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/timeline/timeline.component.ts");
/* harmony import */ var _simulator_simulator_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./simulator/simulator.component */ "./src/app/simulator/simulator.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");


























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ReactiveFormsModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _blog_blog_component__WEBPACK_IMPORTED_MODULE_6__["BlogComponent"],
        _components_bottomsheet_bottomsheet_component__WEBPACK_IMPORTED_MODULE_7__["BottomsheetComponent"],
        _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_20__["DialogComponent"],
        _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_21__["TimelineComponent"],
        _simulator_simulator_component__WEBPACK_IMPORTED_MODULE_22__["SimulatorComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ReactiveFormsModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    _blog_blog_component__WEBPACK_IMPORTED_MODULE_6__["BlogComponent"],
                    _components_bottomsheet_bottomsheet_component__WEBPACK_IMPORTED_MODULE_7__["BottomsheetComponent"],
                    _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_20__["DialogComponent"],
                    _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_21__["TimelineComponent"],
                    _simulator_simulator_component__WEBPACK_IMPORTED_MODULE_22__["SimulatorComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ReactiveFormsModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../components/dialog/dialog.component */ "./src/app/components/dialog/dialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");









function BlogComponent_div_2_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r1.subtitle);
} }
function BlogComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BlogComponent_div_2_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.openDialog($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, BlogComponent_div_2_span_5_Template, 3, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", post_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", post_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", post_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", post_r1.subtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r1.date);
} }
class BlogComponent {
    constructor(route, dialog) {
        this.route = route;
        this.dialog = dialog;
        this.posts = [];
        this.tabEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    openDialog(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let article = event.target.closest('.target').id;
            let postObj = this.posts.filter(el => el.id == article)[0].title;
            fetch(`/assets/pages/${article}.html`)
                .then((res) => res.text())
                .then((text) => {
                this.sendData(postObj, text);
            });
        });
    }
    openDialog2(postId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            fetch(`/assets/pages/${postId}.html`)
                .then((res) => res.text())
                .then((text) => {
                let postObj = this.posts.filter(el => el.id == postId)[0].title;
                this.sendData(postObj, text);
            });
        });
    }
    sendData(title, content) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.data = {
            title: title,
            content: content,
        };
        this.dialog.open(_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"], dialogConfig);
    }
    ngOnInit() {
        this.tabEvent.emit('1');
        fetch(`/assets/posts.json`)
            .then((res) => res.json())
            .then((json) => {
            this.posts = json.posts.reverse();
        })
            .then(() => {
            if (this.openPost != null) {
                this.openDialog2(this.openPost);
            }
            this.openPost = null;
        });
    }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], inputs: { openPost: "openPost" }, outputs: { tabEvent: "tabEvent" }, decls: 3, vars: 1, consts: [["rel", "stylesheet", "type", "text/css", "href", "/assets/css/blog.css"], [1, "masonry", "masonry--h", "mt-3", "mb-3"], ["class", "target", 3, "id", "click", 4, "ngFor", "ngForOf"], [1, "target", 3, "id", "click"], [1, "masonry-brick", "masonry-brick--h", "masonry-cont"], ["alt", "Masonry Brick #1", 1, "masonry-img", 3, "src"], [1, "bottom-left"], ["class", "subt", 4, "ngIf"], ["aria-hidden", "false", "aria-label", "Example home icon"], [1, "subt"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BlogComponent_div_2_Template, 11, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.posts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]], styles: ["p[_ngcontent-%COMP%], mat-list-item[_ngcontent-%COMP%], mat-card-subtitle[_ngcontent-%COMP%], mat-card-title[_ngcontent-%COMP%], mat-card-subtitle[_ngcontent-%COMP%], mat-card[_ngcontent-%COMP%], mat-chip-list[_ngcontent-%COMP%] {\n  font-family: raleway !important;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], .bold[_ngcontent-%COMP%] {\n  font-family: raleway-bold !important;\n}\n\nh5[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\ncode[_ngcontent-%COMP%], .mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem !important;\n}\n\n.card[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.border-secondary[_ngcontent-%COMP%] {\n  border-color: gray !important;\n}\n\n.card-img-top[_ngcontent-%COMP%] {\n  border-bottom: 1px solid black;\n}\n\n.masonry[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  width: 100%;\n  justify-content: center;\n}\n\n.masonry-brick[_ngcontent-%COMP%] {\n  flex: auto;\n  height: 350px;\n  min-width: 150px;\n  margin: 0 8px 8px 0;\n  \n}\n\n.masonry-brick[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.masonry-brick[_ngcontent-%COMP%]:nth-child(4n+1) {\n  width: 350px;\n}\n\n.masonry-brick[_ngcontent-%COMP%]:nth-child(4n+1):nth-child(4n+2) {\n  width: 325px;\n}\n\n.masonry-brick[_ngcontent-%COMP%]:nth-child(4n+1):nth-child(4n+3) {\n  width: 180px;\n}\n\n.masonry-brick[_ngcontent-%COMP%]:nth-child(4n+1):nth-child(4n+4) {\n  width: 380px;\n}\n\n.masonry-img[_ngcontent-%COMP%] {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: 100%;\n  -webkit-filter: brightness(70%);\n          filter: brightness(70%);\n}\n\n.masonry-cont[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  color: white;\n}\n\n.bottom-left[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 75%;\n  font-weight: bold;\n  font-size: 1.5rem;\n  color: black;\n  background-color: white;\n  padding: 0.75rem 1.5rem;\n  border-radius: 5px;\n  line-height: normal;\n}\n\n.subt[_ngcontent-%COMP%] {\n  font-family: raleway !important;\n  font-size: 14px;\n}\n\n@media only screen and (max-width: 1000px) {\n  .masonry-brick[_ngcontent-%COMP%]:nth-child(4n+1) {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9DOlxcVXNlcnNcXGpiYWVzXFxEZXZlbG9wbWVudFxcYmxvZy9zcmNcXGFwcFxcYmxvZ1xcYmxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFFOzs7Ozs7O0VBT0UsK0JBQUE7QUNDSjs7QURFRTs7OztFQUlFLG9DQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBREVBOztFQUVFLDBCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FEQ0E7RUFDRSw2QkFBQTtBQ0VGOztBRENBO0VBQ0UsOEJBQUE7QUNFRjs7QURDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQ0VGOztBRENBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQXFCLGdCQUFBO0FDR3ZCOztBREFBO0VBQ0UsZUFBQTtBQ0dGOztBREFBO0VBQ0UsWUFBQTtBQ0dGOztBRERBO0VBQ0UsWUFBQTtBQ0lGOztBREZBO0VBQ0UsWUFBQTtBQ0tGOztBREhBO0VBQ0UsWUFBQTtBQ01GOztBREhBO0VBQ0Usb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtBQ01GOztBREhBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNNRjs7QURKQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDT0Y7O0FESkE7RUFDRSwrQkFBQTtFQUNBLGVBQUE7QUNPRjs7QURKQTtFQUNFO0lBQ0UsV0FBQTtFQ09GO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ibG9nL2Jsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIHAsXHJcbiAgbWF0LWxpc3QtaXRlbSxcclxuICBtYXQtY2FyZC1zdWJ0aXRsZSxcclxuICBtYXQtY2FyZC10aXRsZSxcclxuICBtYXQtY2FyZC1zdWJ0aXRsZSxcclxuICBtYXQtY2FyZCxcclxuICBtYXQtY2hpcC1saXN0IHtcclxuICAgIGZvbnQtZmFtaWx5OiByYWxld2F5ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBoMSxcclxuICBoMixcclxuICBoNSxcclxuICAuYm9sZCB7XHJcbiAgICBmb250LWZhbWlseTogcmFsZXdheS1ib2xkICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuaDUge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbmNvZGUsXHJcbi5tYXQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmJvcmRlci1zZWNvbmRhcnkge1xyXG4gIGJvcmRlci1jb2xvcjogZ3JheSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZC1pbWctdG9wIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi5tYXNvbnJ5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYXNvbnJ5LWJyaWNrIHtcclxuICBmbGV4OiBhdXRvO1xyXG4gIGhlaWdodDogMzUwcHg7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBtYXJnaW46IDAgOHB4IDhweCAwOyAvKiBTb21lIGd1dHRlciAqL1xyXG59XHJcblxyXG4ubWFzb25yeS1icmljazpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubWFzb25yeS1icmljazpudGgtY2hpbGQoNG4rMSkge1xyXG4gIHdpZHRoOiAzNTBweDtcclxufVxyXG4ubWFzb25yeS1icmljazpudGgtY2hpbGQoNG4rMSk6bnRoLWNoaWxkKDRuKzIpIHtcclxuICB3aWR0aDogMzI1cHg7XHJcbn1cclxuLm1hc29ucnktYnJpY2s6bnRoLWNoaWxkKDRuKzEpOm50aC1jaGlsZCg0biszKSB7XHJcbiAgd2lkdGg6IDE4MHB4O1xyXG59XHJcbi5tYXNvbnJ5LWJyaWNrOm50aC1jaGlsZCg0bisxKTpudGgtY2hpbGQoNG4rNCkge1xyXG4gIHdpZHRoOiAzODBweDtcclxufVxyXG5cclxuLm1hc29ucnktaW1nIHtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDcwJSk7XHJcbn1cclxuXHJcbi5tYXNvbnJ5LWNvbnQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5ib3R0b20tbGVmdCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB3aWR0aDogNzUlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLnN1YnQge1xyXG4gIGZvbnQtZmFtaWx5OiByYWxld2F5ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gIC5tYXNvbnJ5LWJyaWNrOm50aC1jaGlsZCg0bisxKSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuIiwicCxcbm1hdC1saXN0LWl0ZW0sXG5tYXQtY2FyZC1zdWJ0aXRsZSxcbm1hdC1jYXJkLXRpdGxlLFxubWF0LWNhcmQtc3VidGl0bGUsXG5tYXQtY2FyZCxcbm1hdC1jaGlwLWxpc3Qge1xuICBmb250LWZhbWlseTogcmFsZXdheSAhaW1wb3J0YW50O1xufVxuXG5oMSxcbmgyLFxuaDUsXG4uYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiByYWxld2F5LWJvbGQgIWltcG9ydGFudDtcbn1cblxuaDUge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuY29kZSxcbi5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4uY2FyZDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJvcmRlci1zZWNvbmRhcnkge1xuICBib3JkZXItY29sb3I6IGdyYXkgIWltcG9ydGFudDtcbn1cblxuLmNhcmQtaW1nLXRvcCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbn1cblxuLm1hc29ucnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tYXNvbnJ5LWJyaWNrIHtcbiAgZmxleDogYXV0bztcbiAgaGVpZ2h0OiAzNTBweDtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWFyZ2luOiAwIDhweCA4cHggMDtcbiAgLyogU29tZSBndXR0ZXIgKi9cbn1cblxuLm1hc29ucnktYnJpY2s6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tYXNvbnJ5LWJyaWNrOm50aC1jaGlsZCg0bisxKSB7XG4gIHdpZHRoOiAzNTBweDtcbn1cblxuLm1hc29ucnktYnJpY2s6bnRoLWNoaWxkKDRuKzEpOm50aC1jaGlsZCg0bisyKSB7XG4gIHdpZHRoOiAzMjVweDtcbn1cblxuLm1hc29ucnktYnJpY2s6bnRoLWNoaWxkKDRuKzEpOm50aC1jaGlsZCg0biszKSB7XG4gIHdpZHRoOiAxODBweDtcbn1cblxuLm1hc29ucnktYnJpY2s6bnRoLWNoaWxkKDRuKzEpOm50aC1jaGlsZCg0bis0KSB7XG4gIHdpZHRoOiAzODBweDtcbn1cblxuLm1hc29ucnktaW1nIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg3MCUpO1xufVxuXG4ubWFzb25yeS1jb250IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJvdHRvbS1sZWZ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDc1JTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG4uc3VidCB7XG4gIGZvbnQtZmFtaWx5OiByYWxld2F5ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLm1hc29ucnktYnJpY2s6bnRoLWNoaWxkKDRuKzEpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-blog',
                template: ` <div [innerHtml]="safeHtml"></div> `,
                templateUrl: './blog.component.html',
                styleUrls: ['./blog.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, { openPost: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], tabEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/bottomsheet/bottomsheet.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/bottomsheet/bottomsheet.component.ts ***!
  \*****************************************************************/
/*! exports provided: BottomsheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomsheetComponent", function() { return BottomsheetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");






class BottomsheetComponent {
    constructor() { }
    ngOnInit() {
    }
}
BottomsheetComponent.ɵfac = function BottomsheetComponent_Factory(t) { return new (t || BottomsheetComponent)(); };
BottomsheetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BottomsheetComponent, selectors: [["app-bottomsheet"]], decls: 28, vars: 0, consts: [[1, "ml-4", "mt-2"], ["mat-list-icon", ""], ["mat-line", ""], [1, "mr-2", "devicon-linkedin-plain"], ["href", "https://www.linkedin.com/in/jasper-baes/", "target", "_blank"], [1, "mr-2", "devicon-twitter-plain"], ["href", "https://twitter.com/BaesJasper/", "target", "_blank"], ["href", "/assets/jasper-baes.pdf", "target", "_blank"]], template: function BottomsheetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contact Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "mail_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "jasper.baes[at]pm[dot]me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "jasper-baes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "BaesJasper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "download");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "jasper-baes.pdf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListIconCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatLine"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDivider"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYm90dG9tc2hlZXQvYm90dG9tc2hlZXQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BottomsheetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bottomsheet',
                templateUrl: './bottomsheet.component.html',
                styleUrls: ['./bottomsheet.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/dialog/dialog.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/dialog/dialog.component.ts ***!
  \*******************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");




class DialogComponent {
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
    }
    ngOnInit() { }
    close() {
        this.dialogRef.close();
    }
}
DialogComponent.ɵfac = function DialogComponent_Factory(t) { return new (t || DialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
DialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogComponent, selectors: [["app-dialog"]], decls: 6, vars: 2, consts: [[1, "close", 3, "click"], ["mat-dialog-title", ""], [1, "mat-typography"], [3, "innerHTML"]], template: function DialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogComponent_Template_button_click_0_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.data.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"]], styles: [".close[_ngcontent-%COMP%] {\n  outline: none;\n  box-shadow: none;\n  font-size: 1.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaWFsb2cvQzpcXFVzZXJzXFxqYmFlc1xcRGV2ZWxvcG1lbnRcXGJsb2cvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGRpYWxvZ1xcZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsb3NlIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbn0iLCIuY2xvc2Uge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dialog',
                templateUrl: './dialog.component.html',
                styleUrls: ['./dialog.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");










class HomeComponent {
    constructor(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.post = null;
        this.postEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tabEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.route = router.url;
        console.log(this.route);
    }
    ngOnInit() {
        this.tabEvent.emit('0');
        this.activatedRoute.queryParams.subscribe(params => {
            let id = params['post'];
            if ((id === null || id === void 0 ? void 0 : id.length) > 0) {
                this.postEvent.emit(id);
            }
        });
    }
    clickPost(id) {
        this.post = 'post' + id;
        this.postEvent.emit(this.post);
    }
    getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], outputs: { postEvent: "postEvent", tabEvent: "tabEvent" }, decls: 364, vars: 1, consts: [[1, "row", "mt-3", "mt-lg-5"], ["id", "left-pane", 1, "col-lg-4", "text-center"], ["src", "/assets/images/jasper.webp", "alt", "...", 1, "img-thumbnail", "rounded", "mx-auto", "d-block"], [1, "font-weight-bold", "mt-4"], [1, "w-75", "mx-auto"], [1, "mt-4", "mb-4", "text-left"], [1, "w-75"], ["mat-list-icon", ""], ["mat-line", ""], [1, "mt-2", "w-75"], [1, "col-lg-8", "order-lg-2"], [1, "mb-1"], [1, "mt-3"], [1, "row", "mb-3"], [1, "col-lg-9", "col-7"], [1, "col-lg-3", "col-5", "text-right"], [1, "mb-0"], ["href", "https://toreon.com", "target", "_blank"], ["mat-raised-button", "", "color", "primary", 1, "mt-3", "mr-3"], [1, "mr-2"], ["href", "/assets/toreon-letter-of-recommendation.pdf", "target", "_blank"], ["mat-raised-button", "", "color", "primary", 1, "mt-3", 3, "click"], [1, "col-lg-9", "col-8"], [1, "col-lg-3", "col-4", "text-right"], [1, "col-lg-8", "col-8"], [1, "col-lg-4", "col-4", "text-right"], [1, "font-weight-bold", "mt-4", "mb-1"], [1, "p-2", "pl-3"], [1, "bold", "mb-1"], [1, "font-weight-bold", "mb-1"], [1, "devicon-java-plain"], [1, "devicon-javascript-plain"], [1, "devicon-typescript-plain"], [1, "devicon-python-plain"], [1, "devicon-csharp-plain"], [1, "devicon-html5-plain"], [1, "devicon-css3-plain"], [1, "devicon-bootstrap-plain"], [1, "devicon-jquery-plain"], [1, "devicon-dart-plain"], [1, "devicon-php-plain"], [1, "devicon-linux-plain"], [1, "devicon-windows8-plain"], [1, "devicon-mysql-plain"], [1, "devicon-laravel-plain"], [1, "devicon-vuejs-plain"], [1, "devicon-angularjs-plain"], [1, "devicon-flutter-plain"], [1, "devicon-dot-net-plain"], [1, "devicon-git-plain"], [1, "devicon-apache-plain"], [1, "font-weight-bold", "mt-2", "mb-1"], [1, "row"], [1, "col"], [1, "mb-2"], [1, "mb-0", "bold"], [1, "mb-1", "mt-3", "bold"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "JASPER ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " BAES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "A driven young man with a passion for computer science and everything related to cybersecurity. Taking every opportunity to expand my horizons and learn new things, and this in the most challenging, educational and informative way.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-list-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cybersecurity consultant ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Belgian");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-list-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "mail_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "jasper.baes[at]pm[dot]me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-list-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Region Ghent/Antwerp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "EXPERIENCE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Cybersecurity consultant ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-card-subtitle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Toreon, Antwerp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-card-subtitle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Sept 2021 - ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-card-subtitle", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " \u2022 Microsoft 365 & Azure Cloud Security \u2601\uFE0F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " \u2022 Security automated solution/tool development (M365 cloud assessment, Conditional Access Pentest, Toreon Security Office Portal) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " \u2022 Toreonite of the year 2022 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "open_in_new");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Visit Toreon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Internship: Microsoft Cloud Security Automation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-card-subtitle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Toreon, Antwerp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-card-subtitle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Feb - Jul 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-card-subtitle", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\u2022 17 week fully remote research and development of a Microsoft Cloud Zero Trust assessment tool ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " \u2022 Research of the best options to: design the tool, measure and extract data, handling data, storing data and the most ideal method to report findings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " \u2022 This tool helps to determine cloud security maturity of an organisation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "open_in_new");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Visit Toreon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Internship: Internal IT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-card-subtitle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Toreon, Antwerp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-card-subtitle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Mar - Apr 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-card-subtitle", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "\u2022 3 week fully remote research of all possibilities and capabilities of Microsoft Intune ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " \u2022 Designing, creating, testing and documenting of various policies, profiles and features ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " \u2022 Focus on company data security, user privacy and user-friendliness");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "mat-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "open_in_new");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " Letter-of-Recommendation.pdf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_99_listener() { return ctx.clickPost(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "mat-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Read my post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Internship: Software Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "mat-card-subtitle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Jimber Software, Bruges ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "mat-card-subtitle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Aug 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "mat-card-subtitle", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "\u2022 Participated in the development of a Two-Factor Authenticator application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " \u2022 Learned Flutter app development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " \u2022 Gained experience with Vue.js front-end framework");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " \u2022 Acquired software project knowledge and techniques");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " \u2022 Fixing bugs and implementing features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Exchange Software Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "mat-card-subtitle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Chandigarh Group of Colleges Landran, India ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "mat-card-subtitle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Feb 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "mat-card-subtitle", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "\u2022 5-day project with Computer Science students from CGC in Chandigarh (India) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " \u2022 Development of IntelliCrowd, a crowd surveillance system");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " \u2022 Learning a lot about AI and Machine Learning with sklearn, Jupyter and Tensorflow Keras ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_145_listener() { return ctx.clickPost(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "mat-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " Read my post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Bartender, waiter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "mat-card-subtitle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "WVG, Beervelde ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, " Faits Divers, Ghent ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " Westhinder, Wenduine ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "mat-card-subtitle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Aug 2016 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, " Feb - Apr 2018 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, " Jul 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Windsurf Instructor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "mat-card-subtitle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Lakeside Paradise, Knokke-Heist ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, " WVG, Beervelde ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "mat-card-subtitle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "2016 - 2018 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "2016 - present");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "h2", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "EDUCATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "mat-card", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Applied Informatics: Cyber Security Professional (CSP)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "mat-card-subtitle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Howest, Bruges");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "2018 - 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Accountancy & IT (Boekhouden Informatica)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "mat-card-subtitle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Sint-Lievenscollege Business, Ghent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "2016 - 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "h2", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "SKILLS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "\u2022 Microsoft 365 and Azure Security");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "\u2022 Identity and Access Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "\u2022 Information Protection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "\u2022 Programming, frameworks & others:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "mat-chip-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "mat-chip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Java");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "mat-chip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "JavaScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "mat-chip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "TypeScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "mat-chip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "Python");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "mat-chip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "C#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "mat-chip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "mat-chip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "mat-chip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "mat-chip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "jQuery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "mat-chip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "Dart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "mat-chip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "PHP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "mat-chip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "Bash");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "mat-chip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](245, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "PowerShell");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "mat-chip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "MySQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "mat-chip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "NoSQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "mat-chip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](253, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "Laravel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "mat-chip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](256, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "Vue.js");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "mat-chip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](259, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "Vuetify");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "mat-chip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](262, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "mat-chip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](265, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "Angular Material");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "mat-chip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](268, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "Flutter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "mat-chip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](271, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, ".NET");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "mat-chip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](274, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "Git");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "mat-chip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](277, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "Apache");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "mat-chip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "Ansible automation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "mat-chip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "VMware");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "mat-chip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "Power BI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "mat-chip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "\u2022 Database-, network- and devicemanagement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "\u2022 Linux & Windows Server and Security");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "\u2022 Pentesting, Forensics, Malware Analysis, Reverse Engineering");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "\u2022 Cybercrime, Privacy and IT Law (Data Protection Officer (DPO) certified)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "\u2022 Projectmanagement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "\u2022 Team-player, self-sufficient and self-motivated");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "h2", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "CERTIFICATIONS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "\u2022 Microsoft Certified: Security Administrator Associate (MS-500)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "\u2022 Microsoft Certified: Azure Security Engineer Associate (AZ-500)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "\u2022 Microsoft Certified: Identity and Access Administrator (SC-300)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "\u2022 Microsoft Certified: Information Protection Administrator (SC-400)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "\u2022 Microsoft Certified: Security, Compliance, and Identity Fundamentals (SC-900)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](314, "p", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "\u2022 Data Protection Officer (DPO)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "\u2022 Foundations of Operationalizing MITRE ATT&CK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, "\u2022 MITRE ATT&CK Security Stack Mappings: Azure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "\u2022 Cisco CyberOps Associate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "\u2022 Autopsy 8-Hour Online Training");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](325, "p", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "\u2022 Business Management Certificate (bedrijfsbeheer)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "h2", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "LANGUAGES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "p", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "Dutch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, "Native");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "p", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338, "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, "Full professional proficiency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "p", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "French");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "Limited proficiency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "h2", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, "EXTRA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, "\u2022 WVG Youth Board Member since 2016");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "\u2022 Drivers Licence type B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "\u2022 Certificate Windsurf Instructor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, "\u2022 Certificate First Aid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "\u2022 Playing the guitar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, "Cookies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, "Google Analytics is used to monitor visitor numbers (no IP addresses).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](363, "div", 12);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" 03/04/2000 - ", ctx.getAge("04/03/2000"), "y ");
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListIconCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatLine"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChip"]], styles: ["p[_ngcontent-%COMP%], mat-list-item[_ngcontent-%COMP%], mat-card-subtitle[_ngcontent-%COMP%], mat-card-title[_ngcontent-%COMP%], mat-card-subtitle[_ngcontent-%COMP%], mat-panel-title[_ngcontent-%COMP%], mat-card[_ngcontent-%COMP%], mat-chip-list[_ngcontent-%COMP%] {\n  font-family: raleway !important;\n}\n\nmat-card-subtitle[_ngcontent-%COMP%] {\n  color: black;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], .bold[_ngcontent-%COMP%] {\n  font-family: raleway-bold !important;\n}\n\n@media only screen and (max-width: 600px) {\n  p[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n.mat-list-item[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.mat-card-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n\n.mat-expansion-panel-header[_ngcontent-%COMP%] {\n  height: 2.5rem !important;\n}\n\n@media only screen and (min-width: 1000px) {\n  .col-lg-5[_ngcontent-%COMP%] {\n    margin-top: 10rem;\n  }\n\n  #left-pane[_ngcontent-%COMP%] {\n    border-right: 1px solid gray;\n  }\n\n  img[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n\n@media only screen and (max-width: 1000px) {\n  img[_ngcontent-%COMP%] {\n    max-width: 50%;\n  }\n}\n\n[class*=\" devicon-\"][_ngcontent-%COMP%], [class^=devicon-][_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  margin-right: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXGpiYWVzXFxEZXZlbG9wbWVudFxcYmxvZy9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztFQVFFLCtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7OztFQUdFLG9DQUFBO0FDQ0Y7O0FER0E7RUFDRTtJQUNFLHNCQUFBO0VDQUY7QUFDRjs7QURHQTtFQUNFLGlCQUFBO0FDREY7O0FER0E7RUFDRSxpQkFBQTtBQ0FGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREdBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLGlCQUFBO0VDQ0Y7O0VEQ0E7SUFDRSw0QkFBQTtFQ0VGOztFREFBO0lBQ0UsZUFBQTtFQ0dGO0FBQ0Y7O0FEQUE7RUFDRTtJQUNFLGNBQUE7RUNFRjtBQUNGOztBRENBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCxcclxubWF0LWxpc3QtaXRlbSxcclxubWF0LWNhcmQtc3VidGl0bGUsXHJcbm1hdC1jYXJkLXRpdGxlLFxyXG5tYXQtY2FyZC1zdWJ0aXRsZSxcclxubWF0LXBhbmVsLXRpdGxlLFxyXG5tYXQtY2FyZCxcclxubWF0LWNoaXAtbGlzdCB7XHJcbiAgZm9udC1mYW1pbHk6IHJhbGV3YXkgIWltcG9ydGFudDtcclxufVxyXG5cclxubWF0LWNhcmQtc3VidGl0bGUge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuaDEsXHJcbmgyLFxyXG4uYm9sZCB7XHJcbiAgZm9udC1mYW1pbHk6IHJhbGV3YXktYm9sZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIHAge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LXNpemU6IDIuNXJlbTtcclxufVxyXG5oMiB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxucCB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG5cclxuLm1hdC1saXN0LWl0ZW0ge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4ubWF0LWNhcmQtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG59XHJcblxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xyXG4gIGhlaWdodDogMi41cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XHJcbiAgLmNvbC1sZy01IHtcclxuICAgIG1hcmdpbi10b3A6IDEwcmVtO1xyXG4gIH1cclxuICAjbGVmdC1wYW5lIHtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyYXk7XHJcbiAgfVxyXG4gIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDUwJTtcclxuICB9XHJcbn1cclxuXHJcbltjbGFzcyo9XCIgZGV2aWNvbi1cIl0sIFtjbGFzc149ZGV2aWNvbi1dIHtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxufVxyXG4iLCJwLFxubWF0LWxpc3QtaXRlbSxcbm1hdC1jYXJkLXN1YnRpdGxlLFxubWF0LWNhcmQtdGl0bGUsXG5tYXQtY2FyZC1zdWJ0aXRsZSxcbm1hdC1wYW5lbC10aXRsZSxcbm1hdC1jYXJkLFxubWF0LWNoaXAtbGlzdCB7XG4gIGZvbnQtZmFtaWx5OiByYWxld2F5ICFpbXBvcnRhbnQ7XG59XG5cbm1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5oMSxcbmgyLFxuLmJvbGQge1xuICBmb250LWZhbWlseTogcmFsZXdheS1ib2xkICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgcCB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxufVxuaDEge1xuICBmb250LXNpemU6IDIuNXJlbTtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLm1hdC1saXN0LWl0ZW0ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4ubWF0LWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgaGVpZ2h0OiAyLjVyZW0gIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgLmNvbC1sZy01IHtcbiAgICBtYXJnaW4tdG9wOiAxMHJlbTtcbiAgfVxuXG4gICNsZWZ0LXBhbmUge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyYXk7XG4gIH1cblxuICBpbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDUwJTtcbiAgfVxufVxuW2NsYXNzKj1cIiBkZXZpY29uLVwiXSwgW2NsYXNzXj1kZXZpY29uLV0ge1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { postEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], tabEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/simulator/simulator.component.ts":
/*!**************************************************!*\
  !*** ./src/app/simulator/simulator.component.ts ***!
  \**************************************************/
/*! exports provided: SimulatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulatorComponent", function() { return SimulatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");





class SimulatorComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
SimulatorComponent.ɵfac = function SimulatorComponent_Factory(t) { return new (t || SimulatorComponent)(); };
SimulatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SimulatorComponent, selectors: [["app-simulator"]], decls: 93, vars: 0, consts: [["rel", "stylesheet", "type", "text/css", "href", "/assets/css/blog.css"], [1, "mt-3", "mb-5", "card", "p-4"], [1, "bold", "mb-4", "text-center"], [1, "color-caps"], [1, "text-center"], [1, "row", "justify-content-around", "mt-3", "text-center"], [1, "card", "col-4", "p-3", "bg-light", "border-caps"], [1, "title-bold"], [1, "mt-4", "text-center"], [1, "row"], ["href", "https://caps.jbaes.be/demo", "target", "_blank", 1, "col", "text-center", 2, "width", "fit-content"], ["mat-raised-button", "", 1, "text-white", "mt-2", "mb-4", "font-weight-bold", "text-center", "bg-color-caps"], [2, "border-top-color", "rgba(0, 0, 0, 0.12)"], [1, "font-weight-bold", "mt-4"], ["href", "https://caps.jbaes.be/", "target", "_blank"], ["href", "https://docs.docker.com/get-docker/", "target", "_blank"], ["mat-raised-button", "", 1, "text-white", "mt-3", "font-weight-bold", "text-center", "bg-color-caps", 2, "width", "fit-content"], [1, "mt-3"], ["href", "https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/", "target", "_blank"], [1, "p-3", "bg-light", "border-caps", 2, "width", "fit-content"]], template: function SimulatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "onditional ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "ccess ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "P");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "olicy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "S");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "imulator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "automated policy testing through simulations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "What?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " (simplified)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "CAPS is a tool used to automatically test situations on your Azure conditional access policies.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "What?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " (advanced)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "CAPS is a locally hosted tool, simulating different sign-in and resource-accessing pre-defined situations in your tenant. It allows you to periodically test and evaluate your Azure conditional access policies, making sure your technical policies align with government vision and user access security holes can be discovered and mitigated.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " CAPS will give you better insights in how your Conditional Access policies are managed and handled. Continiously testing your policies is the first step toward managing them as policies-as-code. This tool is targeted at IT management, CISOs and security engineers. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "picture_in_picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " OPEN DEMO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "mat-divider", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h4", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Installation & Configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Currently, only the backend is available to host locally. The front-end is available for you on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "https://caps.jbaes.be");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " This front-end has no interaction with the internet, only with the backend service. That backend service comes in a docker container, which consists of a Node JS backend service and MongoDB database. Your browser will communicate directly with this local backend service. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " First, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "install Docker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, ". Then download the following docker image file. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "download");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " DOWNLOAD DOCKER IMAGE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Next, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "download and install MongoDB.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Connect to your localhost (without credentials), and create a new database called \"caps\". In here, all data used by the CAPS service will be stored. This data will be kept locally and remains on the machine. Recommended is to periodically export this data. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h4", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " When Docker is installed and the CAPS docker image is downloaded, you can start the CAPS service by running the following command in your terminal: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "pre", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "docker run -p 3000:3000 -d caps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Now, your backend service should be running on port 3000. Make sure to set your bearer token and the Azure API endpoint URL in the Settings page of the front-end. These values are saved in your browser. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "bearer token");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " is used to authenticate with your Azure environment.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "endpoint url");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " specifies to where the request need to be made. This url is usually the same for everyone, but changed monthly.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h4", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Upcoming changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Over-time view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Weak spots like amount of legacy signins, non-MFA signins, not protected apps, signin-events etc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Please feel free to contact me if you have any suggestions, questions or want to contribute in this project in any way.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDivider"]], styles: [".timeline-title[_ngcontent-%COMP%] {\n  font-family: raleway-bold !important;\n  font-size: 1.5rem;\n}\n\nh2[_ngcontent-%COMP%], .bold[_ngcontent-%COMP%] {\n  font-family: raleway-bold !important;\n  font-size: 2.5rem;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-family: raleway !important;\n  font-size: 1.5rem;\n}\n\nh4[_ngcontent-%COMP%] {\n  font-family: raleway-bold !important;\n  font-size: 1.5rem;\n}\n\n.title-bold[_ngcontent-%COMP%] {\n  font-family: raleway-bold !important;\n  font-size: 1.5rem;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  color: #3D4351;\n  margin-top: 0;\n}\n\np[_ngcontent-%COMP%], li[_ngcontent-%COMP%], code[_ngcontent-%COMP%], mat-list-item[_ngcontent-%COMP%], mat-card-subtitle[_ngcontent-%COMP%], mat-card-title[_ngcontent-%COMP%], mat-card-subtitle[_ngcontent-%COMP%], mat-panel-title[_ngcontent-%COMP%], mat-card[_ngcontent-%COMP%], mat-chip-list[_ngcontent-%COMP%] {\n  font-family: raleway !important;\n  font-size: 1rem;\n}\n\n.img-thumbnail[_ngcontent-%COMP%] {\n  width: 20rem;\n}\n\n.color-caps[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\n  color: #00acbb;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n\n.bg-color-caps[_ngcontent-%COMP%] {\n  background-color: #00acbb;\n}\n\n.border-caps[_ngcontent-%COMP%] {\n  border: 1px solid #00acbb;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2ltdWxhdG9yL0M6XFxVc2Vyc1xcamJhZXNcXERldmVsb3BtZW50XFxibG9nL3NyY1xcYXBwXFxzaW11bGF0b3JcXHNpbXVsYXRvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2ltdWxhdG9yL3NpbXVsYXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFRTs7RUFFRSxvQ0FBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUU7RUFDRSwrQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUU7RUFDRSxvQ0FBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUM7RUFDRyxvQ0FBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUU7RUFDRSxjQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVFOzs7Ozs7Ozs7O0VBVUUsK0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0FDQ0o7O0FERUU7RUFDRSxjQUFBO0FDQ0o7O0FERUU7RUFBSSwwQkFBQTtBQ0VOOztBREFFO0VBQ0UseUJBQUE7QUNHSjs7QURBRTtFQUNFLHlCQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9zaW11bGF0b3Ivc2ltdWxhdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpbWVsaW5lLXRpdGxle1xyXG4gICAgZm9udC1mYW1pbHk6IHJhbGV3YXktYm9sZCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIGgyLFxyXG4gIC5ib2xkIHtcclxuICAgIGZvbnQtZmFtaWx5OiByYWxld2F5LWJvbGQgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gIH1cclxuXHJcbiAgaDMge1xyXG4gICAgZm9udC1mYW1pbHk6IHJhbGV3YXkgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgaDQge1xyXG4gICAgZm9udC1mYW1pbHk6IHJhbGV3YXktYm9sZCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG5cclxuIC50aXRsZS1ib2xkIHtcclxuICAgIGZvbnQtZmFtaWx5OiByYWxld2F5LWJvbGQgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgaDEsaDIsaDMsaDQsaDUsaDYge1xyXG4gICAgY29sb3I6ICMzRDQzNTE7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcbiAgXHJcbiAgcCxcclxuICBsaSxcclxuICBjb2RlLFxyXG4gIG1hdC1saXN0LWl0ZW0sXHJcbiAgbWF0LWNhcmQtc3VidGl0bGUsXHJcbiAgbWF0LWNhcmQtdGl0bGUsXHJcbiAgbWF0LWNhcmQtc3VidGl0bGUsXHJcbiAgbWF0LXBhbmVsLXRpdGxlLFxyXG4gIG1hdC1jYXJkLFxyXG4gIG1hdC1jaGlwLWxpc3Qge1xyXG4gICAgZm9udC1mYW1pbHk6IHJhbGV3YXkgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmltZy10aHVtYm5haWwge1xyXG4gICAgd2lkdGg6IDIwcmVtO1xyXG4gIH1cclxuXHJcbiAgLmNvbG9yLWNhcHMsIGEge1xyXG4gICAgY29sb3I6ICMwMGFjYmI7XHJcbiAgfVxyXG4gIFxyXG4gIGEgeyB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTt9XHJcblxyXG4gIC5iZy1jb2xvci1jYXBzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGFjYmI7XHJcbiAgfVxyXG5cclxuICAuYm9yZGVyLWNhcHMge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwYWNiYjtcclxuICB9XHJcblxyXG4gICIsIi50aW1lbGluZS10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiByYWxld2F5LWJvbGQgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbmgyLFxuLmJvbGQge1xuICBmb250LWZhbWlseTogcmFsZXdheS1ib2xkICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xufVxuXG5oMyB7XG4gIGZvbnQtZmFtaWx5OiByYWxld2F5ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG5oNCB7XG4gIGZvbnQtZmFtaWx5OiByYWxld2F5LWJvbGQgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi50aXRsZS1ib2xkIHtcbiAgZm9udC1mYW1pbHk6IHJhbGV3YXktYm9sZCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gIGNvbG9yOiAjM0Q0MzUxO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG5wLFxubGksXG5jb2RlLFxubWF0LWxpc3QtaXRlbSxcbm1hdC1jYXJkLXN1YnRpdGxlLFxubWF0LWNhcmQtdGl0bGUsXG5tYXQtY2FyZC1zdWJ0aXRsZSxcbm1hdC1wYW5lbC10aXRsZSxcbm1hdC1jYXJkLFxubWF0LWNoaXAtbGlzdCB7XG4gIGZvbnQtZmFtaWx5OiByYWxld2F5ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLmltZy10aHVtYm5haWwge1xuICB3aWR0aDogMjByZW07XG59XG5cbi5jb2xvci1jYXBzLCBhIHtcbiAgY29sb3I6ICMwMGFjYmI7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmJnLWNvbG9yLWNhcHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhY2JiO1xufVxuXG4uYm9yZGVyLWNhcHMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDBhY2JiO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimulatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-simulator',
                templateUrl: './simulator.component.html',
                styleUrls: ['./simulator.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/timeline/timeline.component.ts":
/*!************************************************!*\
  !*** ./src/app/timeline/timeline.component.ts ***!
  \************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");





function TimelineComponent_li_7_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "open_in_new");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const button_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", button_r4.URI, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", button_r4.text, "");
} }
function TimelineComponent_li_7_a_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", image_r5.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r5.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TimelineComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TimelineComponent_li_7_a_8_Template, 5, 2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TimelineComponent_li_7_a_10_Template, 2, 2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", item_r1.text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r1.buttons);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r1.images);
} }
class TimelineComponent {
    constructor() {
        this.post = null;
        this.timeline = [];
        this.postEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        fetch(`/assets/timeline.json`)
            .then((res) => res.json())
            .then((json) => {
            this.timeline = json.timeline;
        });
    }
    clickPost(id) {
        this.post = 'post' + id;
        this.postEvent.emit(this.post);
    }
    // days since september 6th
    daysSince(date) {
        const today = new Date();
        const birthDate = new Date(date);
        let difference = today.getTime() - birthDate.getTime();
        var days = Math.ceil(difference / (1000 * 3600 * 24));
        return days;
    }
}
TimelineComponent.ɵfac = function TimelineComponent_Factory(t) { return new (t || TimelineComponent)(); };
TimelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimelineComponent, selectors: [["app-timeline"]], outputs: { postEvent: "postEvent" }, decls: 8, vars: 1, consts: [["rel", "stylesheet", "type", "text/css", "href", "/assets/css/blog.css"], [1, "mt-3", "card", "p-4"], [1, "bold", "mb-4"], [1, "timeline"], [1, "masonry", "masonry--h", "mt-3", "mb-3"], [1, "target"], ["class", "timeline-item", 4, "ngFor", "ngForOf"], [1, "timeline-item"], [1, "timeline-info"], [1, "timeline-marker"], [1, "timeline-title"], [3, "innerHtml"], ["target", "_blank", 3, "href", 4, "ngFor", "ngForOf"], ["target", "_blank", 3, "href"], ["mat-raised-button", "", "color", "primary", 1, "mb-4", "mr-3"], [1, "mr-2"], ["alt", "...", 1, "img-fluid", "img-thumbnail", "mb-3", 3, "src"]], template: function TimelineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TimelineComponent_li_7_Template, 11, 5, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.timeline);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: [".timeline-title[_ngcontent-%COMP%] {\n  font-family: raleway-bold !important;\n  font-size: 1.5rem;\n}\n\nh2[_ngcontent-%COMP%], .bold[_ngcontent-%COMP%] {\n  font-family: raleway-bold !important;\n  font-size: 2.5rem;\n}\n\np[_ngcontent-%COMP%], mat-list-item[_ngcontent-%COMP%], mat-card-subtitle[_ngcontent-%COMP%], mat-card-title[_ngcontent-%COMP%], mat-card-subtitle[_ngcontent-%COMP%], mat-panel-title[_ngcontent-%COMP%], mat-card[_ngcontent-%COMP%], mat-chip-list[_ngcontent-%COMP%] {\n  font-family: raleway !important;\n  font-size: 1rem;\n}\n\n.img-thumbnail[_ngcontent-%COMP%] {\n  width: 20rem;\n}\n\n\n\nbody[_ngcontent-%COMP%] {\n  color: #768390;\n  background: #FFF;\n  padding: 0;\n  -webkit-font-smoothing: antialiased;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  color: #3D4351;\n  margin-top: 0;\n}\n\na[_ngcontent-%COMP%] {\n  color: #2196F3;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #68b8f7;\n  text-decoration: none;\n}\n\n.example-header[_ngcontent-%COMP%] {\n  background: #3D4351;\n  color: #FFF;\n  font-weight: 300;\n  padding: 3em 1em;\n  text-align: center;\n}\n\n.example-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #FFF;\n  font-weight: 300;\n  margin-bottom: 20px;\n}\n\n.example-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n  font-weight: 700;\n}\n\n.container-fluid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  padding: 0 0 4em 0;\n}\n\n.container-fluid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:nth-child(even) {\n  background: #F1F4F5;\n}\n\n.example-title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 60px;\n  padding: 3em 0;\n  border-bottom: 1px solid #E4EAEC;\n}\n\n.example-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  font-size: 16px;\n  max-width: 400px;\n}\n\n\n\n\n\n.timeline[_ngcontent-%COMP%] {\n  line-height: 1.4em;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\n\n.timeline[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .timeline[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .timeline[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .timeline[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .timeline[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .timeline[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  line-height: inherit;\n}\n\n\n\n.timeline-item[_ngcontent-%COMP%] {\n  padding-left: 40px;\n  position: relative;\n}\n\n.timeline-item[_ngcontent-%COMP%]:last-child {\n  padding-bottom: 0;\n}\n\n\n\n.timeline-info[_ngcontent-%COMP%] {\n  color: gray;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 3px;\n  margin: 0 0 0.5em 0;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n\n\n\n.timeline-marker[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 15px;\n}\n\n.timeline-marker[_ngcontent-%COMP%]:before {\n  background: #2196F3;\n  border: 3px solid transparent;\n  border-radius: 100%;\n  content: \"\";\n  display: block;\n  height: 15px;\n  position: absolute;\n  top: 4px;\n  left: 0;\n  width: 15px;\n  transition: background 0.3s ease-in-out, border 0.3s ease-in-out;\n}\n\n.timeline-marker[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 3px;\n  background: #CCD5DB;\n  display: block;\n  position: absolute;\n  top: 24px;\n  bottom: 0;\n  left: 6px;\n}\n\n.timeline-item[_ngcontent-%COMP%]:last-child   .timeline-marker[_ngcontent-%COMP%]:after {\n  content: none;\n}\n\n.timeline-item[_ngcontent-%COMP%]:not(.period):hover   .timeline-marker[_ngcontent-%COMP%]:before {\n  background: transparent;\n  border: 3px solid #2196F3;\n}\n\n\n\n.timeline-content[_ngcontent-%COMP%] {\n  padding-bottom: 40px;\n}\n\n.timeline-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n\n\n\n.period[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.period[_ngcontent-%COMP%]   .timeline-info[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.period[_ngcontent-%COMP%]   .timeline-marker[_ngcontent-%COMP%]:before {\n  background: transparent;\n  content: \"\";\n  width: 15px;\n  height: auto;\n  border: none;\n  border-radius: 0;\n  top: 0;\n  bottom: 30px;\n  position: absolute;\n  border-top: 3px solid #CCD5DB;\n  border-bottom: 3px solid #CCD5DB;\n}\n\n.period[_ngcontent-%COMP%]   .timeline-marker[_ngcontent-%COMP%]:after {\n  content: \"\";\n  height: 32px;\n  top: auto;\n}\n\n.period[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%] {\n  padding: 40px 0 70px;\n}\n\n.period[_ngcontent-%COMP%]   .timeline-title[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n\n\n@media (min-width: 768px) {\n  .timeline-split[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%], .timeline-centered[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%] {\n    display: table;\n  }\n  .timeline-split[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%], .timeline-centered[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%] {\n    display: table-row;\n    padding: 0;\n  }\n  .timeline-split[_ngcontent-%COMP%]   .timeline-info[_ngcontent-%COMP%], .timeline-centered[_ngcontent-%COMP%]   .timeline-info[_ngcontent-%COMP%], .timeline-split[_ngcontent-%COMP%]   .timeline-marker[_ngcontent-%COMP%], .timeline-centered[_ngcontent-%COMP%]   .timeline-marker[_ngcontent-%COMP%], .timeline-split[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%], .timeline-centered[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%], .timeline-split[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%]   .timeline-info[_ngcontent-%COMP%] {\n    display: table-cell;\n    vertical-align: top;\n  }\n  .timeline-split[_ngcontent-%COMP%]   .timeline-marker[_ngcontent-%COMP%], .timeline-centered[_ngcontent-%COMP%]   .timeline-marker[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .timeline-split[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%], .timeline-centered[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%] {\n    padding-left: 30px;\n  }\n  .timeline-split[_ngcontent-%COMP%]   .timeline-info[_ngcontent-%COMP%], .timeline-centered[_ngcontent-%COMP%]   .timeline-info[_ngcontent-%COMP%] {\n    padding-right: 30px;\n  }\n  .timeline-split[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%]   .timeline-title[_ngcontent-%COMP%], .timeline-centered[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%]   .timeline-title[_ngcontent-%COMP%] {\n    position: relative;\n    left: -45px;\n  }\n}\n\n\n\n@media (min-width: 992px) {\n  .timeline-centered[_ngcontent-%COMP%], .timeline-centered[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%], .timeline-centered[_ngcontent-%COMP%]   .timeline-info[_ngcontent-%COMP%], .timeline-centered[_ngcontent-%COMP%]   .timeline-marker[_ngcontent-%COMP%], .timeline-centered[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%] {\n    display: block;\n    margin: 0;\n    padding: 0;\n  }\n  .timeline-centered[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%] {\n    padding-bottom: 40px;\n    overflow: hidden;\n  }\n  .timeline-centered[_ngcontent-%COMP%]   .timeline-marker[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 50%;\n    margin-left: -7.5px;\n  }\n  .timeline-centered[_ngcontent-%COMP%]   .timeline-info[_ngcontent-%COMP%], .timeline-centered[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n  .timeline-centered[_ngcontent-%COMP%]    > .timeline-item[_ngcontent-%COMP%]:nth-child(odd)   .timeline-info[_ngcontent-%COMP%] {\n    float: left;\n    text-align: right;\n    padding-right: 30px;\n  }\n  .timeline-centered[_ngcontent-%COMP%]    > .timeline-item[_ngcontent-%COMP%]:nth-child(odd)   .timeline-content[_ngcontent-%COMP%] {\n    float: right;\n    text-align: left;\n    padding-left: 30px;\n  }\n  .timeline-centered[_ngcontent-%COMP%]    > .timeline-item[_ngcontent-%COMP%]:nth-child(even)   .timeline-info[_ngcontent-%COMP%] {\n    float: right;\n    text-align: left;\n    padding-left: 30px;\n  }\n  .timeline-centered[_ngcontent-%COMP%]    > .timeline-item[_ngcontent-%COMP%]:nth-child(even)   .timeline-content[_ngcontent-%COMP%] {\n    float: left;\n    text-align: right;\n    padding-right: 30px;\n  }\n  .timeline-centered[_ngcontent-%COMP%]    > .timeline-item.period[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%] {\n    float: none;\n    padding: 0;\n    width: 100%;\n    text-align: center;\n  }\n  .timeline-centered[_ngcontent-%COMP%]   .timeline-item.period[_ngcontent-%COMP%] {\n    padding: 50px 0 90px;\n  }\n  .timeline-centered[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%]   .timeline-marker[_ngcontent-%COMP%]:after {\n    height: 30px;\n    bottom: 0;\n    top: auto;\n  }\n  .timeline-centered[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%]   .timeline-title[_ngcontent-%COMP%] {\n    left: auto;\n  }\n}\n\n\n\n.marker-outline[_ngcontent-%COMP%]   .timeline-marker[_ngcontent-%COMP%]:before {\n  background: transparent;\n  border-color: #2196F3;\n}\n\n.marker-outline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]:hover   .timeline-marker[_ngcontent-%COMP%]:before {\n  background: #2196F3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGltZWxpbmUvQzpcXFVzZXJzXFxqYmFlc1xcRGV2ZWxvcG1lbnRcXGJsb2cvc3JjXFxhcHBcXHRpbWVsaW5lXFx0aW1lbGluZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7O0VBRUUsb0NBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBOzs7Ozs7OztFQVFFLCtCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREdBOzRDQUFBOztBQU1BO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBRUEsVUFBQTtFQUNBLG1DQUFBO0FDTEo7O0FET0E7RUFDSSxjQUFBO0VBQ0EsYUFBQTtBQ0pKOztBRE1BO0VBQ0ksY0FmWTtBQ1loQjs7QURJSTtFQUNJLGNBaEJjO0VBaUJkLHFCQUFBO0FDRlI7O0FES0E7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURHSTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDRFI7O0FER0k7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDRFI7O0FES0k7RUFDSSxrQkFBQTtBQ0ZSOztBREdRO0VBQ0ksbUJBQUE7QUNEWjs7QURNQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7QUNISjs7QURJSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNGUjs7QURNQTs7bUNBQUE7O0FBSUk7K0JBQUE7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDSk47O0FES007RUFDSSxvQkFBQTtBQ0hWOztBRE9FLDRCQUFBOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQ0xOOztBRE1NO0VBQ0ksaUJBQUE7QUNKVjs7QURRRSw0QkFBQTs7QUFFQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ05OOztBRFFFLDhCQUFBOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQVEsU0FBQTtFQUFXLE9BQUE7RUFDbkIsV0FBQTtBQ0pOOztBREtNO0VBQ0ksbUJBekdNO0VBMEdOLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFBVSxPQUFBO0VBQ1YsV0FBQTtFQUNBLGdFQUFBO0FDRlY7O0FES007RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUFXLFNBQUE7RUFBVyxTQUFBO0FDRGhDOztBREdNO0VBQ0ksYUFBQTtBQ0RWOztBRElFO0VBQ0ksdUJBQUE7RUFDQSx5QkFBQTtBQ0ROOztBRElFLCtCQUFBOztBQUVBO0VBQ0ksb0JBQUE7QUNGTjs7QURHTTtFQUNJLGdCQUFBO0FDRFY7O0FES0UsOEJBQUE7O0FBRUE7RUFDSSxVQUFBO0FDSE47O0FESU07RUFDSSxhQUFBO0FDRlY7O0FES1U7RUFDSSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0FDSGQ7O0FES1U7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUNIZDs7QURNTTtFQUNJLG9CQUFBO0FDSlY7O0FETU07RUFDSSxTQUFBO0FDSlY7O0FEUUU7OytDQUFBOztBQUtRO0VBQ0k7SUFDSSxjQUFBO0VDUGhCO0VEU1k7SUFDSSxrQkFBQTtJQUNBLFVBQUE7RUNQaEI7RURTWTs7Ozs7O0lBSUksbUJBQUE7SUFDQSxtQkFBQTtFQ0xoQjtFRE9ZO0lBQ0ksa0JBQUE7RUNMaEI7RURPWTtJQUNJLGtCQUFBO0VDTGhCO0VET1k7SUFDSSxtQkFBQTtFQ0xoQjtFRE9ZO0lBQ0ksa0JBQUE7SUFDQSxXQUFBO0VDTGhCO0FBQ0Y7O0FEU0U7OytDQUFBOztBQU1RO0VBQ0k7Ozs7O0lBS0ksY0FBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0VDVGhCO0VEV1k7SUFDSSxvQkFBQTtJQUNBLGdCQUFBO0VDVGhCO0VEV1k7SUFDSSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxtQkFBQTtFQ1RoQjtFRFdZOztJQUVJLFVBQUE7RUNUaEI7RURXWTtJQUNJLFdBQUE7SUFDQSxpQkFBQTtJQUNBLG1CQUFBO0VDVGhCO0VEV1k7SUFDSSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtFQ1RoQjtFRFdZO0lBQ0ksWUFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7RUNUaEI7RURXWTtJQUNJLFdBQUE7SUFDQSxpQkFBQTtJQUNBLG1CQUFBO0VDVGhCO0VEV1k7SUFDSSxXQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtFQ1RoQjtFRFdZO0lBQ0ksb0JBQUE7RUNUaEI7RURXWTtJQUNJLFlBQUE7SUFDQSxTQUFBO0lBQ0EsU0FBQTtFQ1RoQjtFRFdZO0lBQ0ksVUFBQTtFQ1RoQjtBQUNGOztBRGFFOzsrQ0FBQTs7QUFNWTtFQUNJLHVCQUFBO0VBQ0EscUJBblNGO0FDc1JoQjs7QURnQlU7RUFDSSxtQkF2U0U7QUN5UmhCIiwiZmlsZSI6InNyYy9hcHAvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGltZWxpbmUtdGl0bGV7XHJcbiAgZm9udC1mYW1pbHk6IHJhbGV3YXktYm9sZCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG5oMixcclxuLmJvbGQge1xyXG4gIGZvbnQtZmFtaWx5OiByYWxld2F5LWJvbGQgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDIuNXJlbTtcclxufVxyXG5cclxucCxcclxubWF0LWxpc3QtaXRlbSxcclxubWF0LWNhcmQtc3VidGl0bGUsXHJcbm1hdC1jYXJkLXRpdGxlLFxyXG5tYXQtY2FyZC1zdWJ0aXRsZSxcclxubWF0LXBhbmVsLXRpdGxlLFxyXG5tYXQtY2FyZCxcclxubWF0LWNoaXAtbGlzdCB7XHJcbiAgZm9udC1mYW1pbHk6IHJhbGV3YXkgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi5pbWctdGh1bWJuYWlsIHtcclxuICB3aWR0aDogMjByZW07XHJcbn1cclxuXHJcblxyXG4vKiBUaW1lbGluZVxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbiRwcmltYXJ5LWNvbG9yOiAjMjE5NkYzO1xyXG4kcHJpbWFyeS1jb2xvci1ob3Zlcjogc2NhbGUtY29sb3IoJHByaW1hcnktY29sb3IsICRsaWdodG5lc3M6IDMyJSk7XHJcblxyXG5ib2R5IHtcclxuICAgIGNvbG9yOiAjNzY4MzkwO1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRjtcclxuICAgIC8vIGZvbnQtZmFtaWx5OiBcIkVmZnJhXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxufVxyXG5oMSxoMixoMyxoNCxoNSxoNiB7XHJcbiAgICBjb2xvcjogIzNENDM1MTtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuYSB7XHJcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktY29sb3ItaG92ZXI7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG59XHJcbi5leGFtcGxlLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjM0Q0MzUxO1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgcGFkZGluZzogM2VtIDFlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGgxIHtcclxuICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHhcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIH1cclxufVxyXG4uY29udGFpbmVyLWZsdWlkIHtcclxuICAgIC5yb3cge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMCA0ZW0gMDtcclxuICAgICAgICAmOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGMUY0RjU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZXhhbXBsZS10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG4gICAgcGFkZGluZzogM2VtIDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U0RUFFQztcclxuICAgIHAge1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIFRJTUVMSU5FXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuICAgIC8qLS0gR0VORVJBTCBTVFlMRVNcclxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgICAudGltZWxpbmUge1xyXG4gICAgICBsaW5lLWhlaWdodDogMS40ZW07XHJcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIC8qLS0tLS0gVElNRUxJTkUgSVRFTSAtLS0tLSovXHJcblxyXG4gIC50aW1lbGluZS1pdGVtIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgLyotLS0tLSBUSU1FTElORSBJTkZPIC0tLS0tKi9cclxuXHJcbiAgLnRpbWVsaW5lLWluZm8ge1xyXG4gICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgICBtYXJnaW46IDAgMCAuNWVtIDA7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgfVxyXG4gIC8qLS0tLS0gVElNRUxJTkUgTUFSS0VSIC0tLS0tKi9cclxuXHJcbiAgLnRpbWVsaW5lLW1hcmtlciB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwOyBib3R0b206IDA7IGxlZnQ6IDA7XHJcbiAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogNHB4OyBsZWZ0OiAwO1xyXG4gICAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZS1pbi1vdXQsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlciAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICB9XHJcbiAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgIHdpZHRoOiAzcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjQ0NENURCO1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDI0cHg7IGJvdHRvbTogMDsgbGVmdDogNnB4O1xyXG4gICAgICB9XHJcbiAgICAgIC50aW1lbGluZS1pdGVtOmxhc3QtY2hpbGQgJjphZnRlciB7XHJcbiAgICAgICAgICBjb250ZW50OiBub25lO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIC50aW1lbGluZS1pdGVtOm5vdCgucGVyaW9kKTpob3ZlciAudGltZWxpbmUtbWFya2VyOmJlZm9yZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICBib3JkZXI6IDNweCBzb2xpZCAkcHJpbWFyeS1jb2xvcjtcclxuICB9XHJcblxyXG4gIC8qLS0tLS0gVElNRUxJTkUgQ09OVEVOVCAtLS0tLSovXHJcblxyXG4gIC50aW1lbGluZS1jb250ZW50IHtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgICAgIHA6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICAvKi0tLS0tIFRJTUVMSU5FIFBFUklPRCAtLS0tLSovXHJcblxyXG4gIC5wZXJpb2Qge1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAudGltZWxpbmUtaW5mbyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIC50aW1lbGluZS1tYXJrZXIge1xyXG4gICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICBib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjQ0NENURCO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjQ0NENURCO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgICAgdG9wOiBhdXRvO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC50aW1lbGluZS1jb250ZW50IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDQwcHggMCA3MHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC50aW1lbGluZS10aXRsZSB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICBNT0Q6IFRJTUVMSU5FIFNQTElUXHJcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4gICAgICAudGltZWxpbmUtc3BsaXQge1xyXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgICAgLnRpbWVsaW5lIHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC50aW1lbGluZS1pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGUtcm93O1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAudGltZWxpbmUtaW5mbyxcclxuICAgICAgICAgICAgICAudGltZWxpbmUtbWFya2VyLFxyXG4gICAgICAgICAgICAgIC50aW1lbGluZS1jb250ZW50LFxyXG4gICAgICAgICAgICAgIC5wZXJpb2QgLnRpbWVsaW5lLWluZm8ge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAudGltZWxpbmUtbWFya2VyIHtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAudGltZWxpbmUtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnRpbWVsaW5lLWluZm8ge1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAucGVyaW9kIC50aW1lbGluZS10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgbGVmdDogLTQ1cHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICBNT0Q6IFRJTUVMSU5FIENFTlRFUkVEXHJcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4gICAgICAudGltZWxpbmUtY2VudGVyZWQge1xyXG4gICAgICAgICAgQGV4dGVuZCAudGltZWxpbmUtc3BsaXQ7XHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgICAgICAmLFxyXG4gICAgICAgICAgICAgIC50aW1lbGluZS1pdGVtLFxyXG4gICAgICAgICAgICAgIC50aW1lbGluZS1pbmZvLFxyXG4gICAgICAgICAgICAgIC50aW1lbGluZS1tYXJrZXIsXHJcbiAgICAgICAgICAgICAgLnRpbWVsaW5lLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAudGltZWxpbmUtaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAudGltZWxpbmUtbWFya2VyIHtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNy41cHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC50aW1lbGluZS1pbmZvLFxyXG4gICAgICAgICAgICAgIC50aW1lbGluZS1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPiAudGltZWxpbmUtaXRlbTpudGgtY2hpbGQob2RkKSAudGltZWxpbmUtaW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPiAudGltZWxpbmUtaXRlbTpudGgtY2hpbGQob2RkKSAudGltZWxpbmUtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA+IC50aW1lbGluZS1pdGVtOm50aC1jaGlsZChldmVuKSAudGltZWxpbmUtaW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA+IC50aW1lbGluZS1pdGVtOm50aC1jaGlsZChldmVuKSAudGltZWxpbmUtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPiAudGltZWxpbmUtaXRlbS5wZXJpb2QgLnRpbWVsaW5lLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICBmbG9hdDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnRpbWVsaW5lLWl0ZW0ucGVyaW9kIHtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogNTBweCAwIDkwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5wZXJpb2QgLnRpbWVsaW5lLW1hcmtlcjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICB0b3A6IGF1dG87XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5wZXJpb2QgLnRpbWVsaW5lLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgbGVmdDogYXV0bztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgIE1PRDogTUFSS0VSIE9VVExJTkVcclxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbiAgICAgIC5tYXJrZXItb3V0bGluZSB7XHJcbiAgICAgICAgICAudGltZWxpbmUtbWFya2VyIHtcclxuICAgICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50aW1lbGluZS1pdGVtOmhvdmVyIC50aW1lbGluZS1tYXJrZXI6YmVmb3JlIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4iLCIudGltZWxpbmUtdGl0bGUge1xuICBmb250LWZhbWlseTogcmFsZXdheS1ib2xkICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG5oMixcbi5ib2xkIHtcbiAgZm9udC1mYW1pbHk6IHJhbGV3YXktYm9sZCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDIuNXJlbTtcbn1cblxucCxcbm1hdC1saXN0LWl0ZW0sXG5tYXQtY2FyZC1zdWJ0aXRsZSxcbm1hdC1jYXJkLXRpdGxlLFxubWF0LWNhcmQtc3VidGl0bGUsXG5tYXQtcGFuZWwtdGl0bGUsXG5tYXQtY2FyZCxcbm1hdC1jaGlwLWxpc3Qge1xuICBmb250LWZhbWlseTogcmFsZXdheSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5pbWctdGh1bWJuYWlsIHtcbiAgd2lkdGg6IDIwcmVtO1xufVxuXG4vKiBUaW1lbGluZVxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5ib2R5IHtcbiAgY29sb3I6ICM3NjgzOTA7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIHBhZGRpbmc6IDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgY29sb3I6ICMzRDQzNTE7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbmEge1xuICBjb2xvcjogIzIxOTZGMztcbn1cbmE6aG92ZXIge1xuICBjb2xvcjogIzY4YjhmNztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZXhhbXBsZS1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjM0Q0MzUxO1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgcGFkZGluZzogM2VtIDFlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmV4YW1wbGUtaGVhZGVyIGgxIHtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uZXhhbXBsZS1oZWFkZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmNvbnRhaW5lci1mbHVpZCAucm93IHtcbiAgcGFkZGluZzogMCAwIDRlbSAwO1xufVxuLmNvbnRhaW5lci1mbHVpZCAucm93Om50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQ6ICNGMUY0RjU7XG59XG5cbi5leGFtcGxlLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICBwYWRkaW5nOiAzZW0gMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFNEVBRUM7XG59XG4uZXhhbXBsZS10aXRsZSBwIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbn1cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgVElNRUxJTkVcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyotLSBHRU5FUkFMIFNUWUxFU1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi50aW1lbGluZSB7XG4gIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi50aW1lbGluZSBoMSwgLnRpbWVsaW5lIGgyLCAudGltZWxpbmUgaDMsIC50aW1lbGluZSBoNCwgLnRpbWVsaW5lIGg1LCAudGltZWxpbmUgaDYge1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbn1cblxuLyotLS0tLSBUSU1FTElORSBJVEVNIC0tLS0tKi9cbi50aW1lbGluZS1pdGVtIHtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udGltZWxpbmUtaXRlbTpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi8qLS0tLS0gVElNRUxJTkUgSU5GTyAtLS0tLSovXG4udGltZWxpbmUtaW5mbyB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gIG1hcmdpbjogMCAwIDAuNWVtIDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi8qLS0tLS0gVElNRUxJTkUgTUFSS0VSIC0tLS0tKi9cbi50aW1lbGluZS1tYXJrZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTVweDtcbn1cbi50aW1lbGluZS1tYXJrZXI6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogIzIxOTZGMztcbiAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0cHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxNXB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZS1pbi1vdXQsIGJvcmRlciAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLnRpbWVsaW5lLW1hcmtlcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAzcHg7XG4gIGJhY2tncm91bmQ6ICNDQ0Q1REI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjRweDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA2cHg7XG59XG4udGltZWxpbmUtaXRlbTpsYXN0LWNoaWxkIC50aW1lbGluZS1tYXJrZXI6YWZ0ZXIge1xuICBjb250ZW50OiBub25lO1xufVxuXG4udGltZWxpbmUtaXRlbTpub3QoLnBlcmlvZCk6aG92ZXIgLnRpbWVsaW5lLW1hcmtlcjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAzcHggc29saWQgIzIxOTZGMztcbn1cblxuLyotLS0tLSBUSU1FTElORSBDT05URU5UIC0tLS0tKi9cbi50aW1lbGluZS1jb250ZW50IHtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG59XG4udGltZWxpbmUtY29udGVudCBwOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4vKi0tLS0tIFRJTUVMSU5FIFBFUklPRCAtLS0tLSovXG4ucGVyaW9kIHtcbiAgcGFkZGluZzogMDtcbn1cbi5wZXJpb2QgLnRpbWVsaW5lLWluZm8ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnBlcmlvZCAudGltZWxpbmUtbWFya2VyOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAzMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCAjQ0NENURCO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI0NDRDVEQjtcbn1cbi5wZXJpb2QgLnRpbWVsaW5lLW1hcmtlcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMzJweDtcbiAgdG9wOiBhdXRvO1xufVxuLnBlcmlvZCAudGltZWxpbmUtY29udGVudCB7XG4gIHBhZGRpbmc6IDQwcHggMCA3MHB4O1xufVxuLnBlcmlvZCAudGltZWxpbmUtdGl0bGUge1xuICBtYXJnaW46IDA7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIE1PRDogVElNRUxJTkUgU1BMSVRcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC50aW1lbGluZS1zcGxpdCAudGltZWxpbmUsIC50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUge1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICB9XG4gIC50aW1lbGluZS1zcGxpdCAudGltZWxpbmUtaXRlbSwgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1pdGVtIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3c7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICAudGltZWxpbmUtc3BsaXQgLnRpbWVsaW5lLWluZm8sIC50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtaW5mbyxcbi50aW1lbGluZS1zcGxpdCAudGltZWxpbmUtbWFya2VyLFxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1tYXJrZXIsXG4udGltZWxpbmUtc3BsaXQgLnRpbWVsaW5lLWNvbnRlbnQsXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWNvbnRlbnQsXG4udGltZWxpbmUtc3BsaXQgLnBlcmlvZCAudGltZWxpbmUtaW5mbyB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG4gIC50aW1lbGluZS1zcGxpdCAudGltZWxpbmUtbWFya2VyLCAudGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLW1hcmtlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC50aW1lbGluZS1zcGxpdCAudGltZWxpbmUtY29udGVudCwgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1jb250ZW50IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIH1cbiAgLnRpbWVsaW5lLXNwbGl0IC50aW1lbGluZS1pbmZvLCAudGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWluZm8ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIH1cbiAgLnRpbWVsaW5lLXNwbGl0IC5wZXJpb2QgLnRpbWVsaW5lLXRpdGxlLCAudGltZWxpbmUtY2VudGVyZWQgLnBlcmlvZCAudGltZWxpbmUtdGl0bGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAtNDVweDtcbiAgfVxufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBNT0Q6IFRJTUVMSU5FIENFTlRFUkVEXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAudGltZWxpbmUtY2VudGVyZWQsXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWl0ZW0sXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWluZm8sXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLW1hcmtlcixcbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtY29udGVudCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1pdGVtIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIC50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtbWFya2VyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtNy41cHg7XG4gIH1cbiAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1pbmZvLFxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1jb250ZW50IHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIC50aW1lbGluZS1jZW50ZXJlZCA+IC50aW1lbGluZS1pdGVtOm50aC1jaGlsZChvZGQpIC50aW1lbGluZS1pbmZvIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICB9XG4gIC50aW1lbGluZS1jZW50ZXJlZCA+IC50aW1lbGluZS1pdGVtOm50aC1jaGlsZChvZGQpIC50aW1lbGluZS1jb250ZW50IHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIH1cbiAgLnRpbWVsaW5lLWNlbnRlcmVkID4gLnRpbWVsaW5lLWl0ZW06bnRoLWNoaWxkKGV2ZW4pIC50aW1lbGluZS1pbmZvIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIH1cbiAgLnRpbWVsaW5lLWNlbnRlcmVkID4gLnRpbWVsaW5lLWl0ZW06bnRoLWNoaWxkKGV2ZW4pIC50aW1lbGluZS1jb250ZW50IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICB9XG4gIC50aW1lbGluZS1jZW50ZXJlZCA+IC50aW1lbGluZS1pdGVtLnBlcmlvZCAudGltZWxpbmUtY29udGVudCB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1pdGVtLnBlcmlvZCB7XG4gICAgcGFkZGluZzogNTBweCAwIDkwcHg7XG4gIH1cbiAgLnRpbWVsaW5lLWNlbnRlcmVkIC5wZXJpb2QgLnRpbWVsaW5lLW1hcmtlcjphZnRlciB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvdHRvbTogMDtcbiAgICB0b3A6IGF1dG87XG4gIH1cbiAgLnRpbWVsaW5lLWNlbnRlcmVkIC5wZXJpb2QgLnRpbWVsaW5lLXRpdGxlIHtcbiAgICBsZWZ0OiBhdXRvO1xuICB9XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIE1PRDogTUFSS0VSIE9VVExJTkVcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLm1hcmtlci1vdXRsaW5lIC50aW1lbGluZS1tYXJrZXI6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1jb2xvcjogIzIxOTZGMztcbn1cbi5tYXJrZXItb3V0bGluZSAudGltZWxpbmUtaXRlbTpob3ZlciAudGltZWxpbmUtbWFya2VyOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICMyMTk2RjM7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimelineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-timeline',
                templateUrl: './timeline.component.html',
                styleUrls: ['./timeline.component.scss']
            }]
    }], function () { return []; }, { postEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jbaes\Development\blog\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map