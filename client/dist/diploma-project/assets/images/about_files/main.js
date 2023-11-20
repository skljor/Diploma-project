"use strict";
(self["webpackChunkdiploma_project"] = self["webpackChunkdiploma_project"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _page_about_page_about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-about/page-about.component */ 7421);
/* harmony import */ var _page_structura_page_structura_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-structura/page-structura.component */ 4990);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;





const routes = [{
  path: '',
  redirectTo: 'about',
  pathMatch: 'full'
}, {
  title: 'about',
  path: 'about',
  component: _page_about_page_about_component__WEBPACK_IMPORTED_MODULE_0__.PageAboutComponent
}, {
  title: 'structura',
  path: 'structura',
  component: _page_structura_page_structura_component__WEBPACK_IMPORTED_MODULE_1__.PageStructuraComponent
}];
class AppRoutingModule {}
_class = AppRoutingModule;
_class.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./top-bar/top-bar.component */ 5725);
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ 8401);
/* harmony import */ var _top_header_top_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./top-header/top-header.component */ 2688);
var _class;





class AppComponent {
  constructor() {
    this.title = 'diploma-project';
  }
}
_class = AppComponent;
_class.ɵfac = function AppComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-root"]],
  decls: 6,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "header");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-top-bar")(2, "app-top-header")(3, "app-nav-bar");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "main");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_0__.TopBarComponent, _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__.NavBarComponent, _top_header_top_header_component__WEBPACK_IMPORTED_MODULE_2__.TopHeaderComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./top-bar/top-bar.component */ 5725);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ 8401);
/* harmony import */ var _top_header_top_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./top-header/top-header.component */ 2688);
/* harmony import */ var _page_about_page_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-about/page-about.component */ 7421);
/* harmony import */ var _page_structura_page_structura_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-structura/page-structura.component */ 4990);
/* harmony import */ var _nav_bar_item_nav_bar_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav-bar-item/nav-bar-item.component */ 9211);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;











class AppModule {}
_class = AppModule;
_class.ɵfac = function AppModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: _class,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FontAwesomeModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_2__.TopBarComponent, _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__.NavBarComponent, _top_header_top_header_component__WEBPACK_IMPORTED_MODULE_4__.TopHeaderComponent, _page_about_page_about_component__WEBPACK_IMPORTED_MODULE_5__.PageAboutComponent, _page_structura_page_structura_component__WEBPACK_IMPORTED_MODULE_6__.PageStructuraComponent, _nav_bar_item_nav_bar_item_component__WEBPACK_IMPORTED_MODULE_7__.NavBarItemComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FontAwesomeModule]
  });
})();

/***/ }),

/***/ 9211:
/*!********************************************************!*\
  !*** ./src/app/nav-bar-item/nav-bar-item.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavBarItemComponent: () => (/* binding */ NavBarItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
var _class;


class NavBarItemComponent {
  constructor() {
    this.className = 'nav-bar__item';
  }
}
_class = NavBarItemComponent;
_class.ɵfac = function NavBarItemComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-nav-bar-item"]],
  inputs: {
    data: "data",
    selected: "selected"
  },
  decls: 2,
  vars: 4,
  consts: [[3, "routerLink"]],
  template: function NavBarItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.selected ? ctx.className + " selected" : ctx.className);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx.data == null ? null : ctx.data.route);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data == null ? null : ctx.data.label, "\n");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: [".nav-bar__item[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #3C3C3C;\n  padding: 4px 8px;\n}\n.nav-bar__item.selected[_ngcontent-%COMP%] {\n  color: #5578EF;\n  border: solid 1px #5578EF;\n  border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbmF2LWJhci1pdGVtL25hdi1iYXItaXRlbS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zYXNzL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UscUJBQUE7RUFDQSxjQ0RRO0VERVIsZ0JBQUE7QUFERjtBQUVFO0VBQ0UsY0NOUztFRE9ULHlCQUFBO0VBQ0Esa0JBQUE7QUFBSiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3Nhc3MvY29sb3JzLnNjc3MnO1xuXG4ubmF2LWJhcl9faXRlbSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICRibGFjay1zO1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICAmLnNlbGVjdGVkIHtcbiAgICBjb2xvcjogJGJsdWUtbGlnaHQ7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggJGJsdWUtbGlnaHQ7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB9XG59XG4iLCIkZGFyay1ibHVlOiAjMTAxRDQ5O1xuJGJsdWUtbGlnaHQ6ICM1NTc4RUY7XG4kd2hpdGUtczogcmdiKDIyNiwgMjI2LCAyMjgpO1xuJGJsYWNrLXM6ICMzQzNDM0M7XG4kd2hpdGUtcy10cmFuc3BhcmVudDogcmdiYSgyMjYsIDIyNiwgMjI4LCAwLjEpIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8401:
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavBarComponent: () => (/* binding */ NavBarComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 1713);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);
/* harmony import */ var _nav_bar_item_nav_bar_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../nav-bar-item/nav-bar-item.component */ 9211);
var _class;







function NavBarComponent_app_nav_bar_item_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-nav-bar-item", 13);
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", item_r2)("selected", item_r2 === ctx_r1.selectedItem);
  }
}
class NavBarComponent {
  constructor(router) {
    this.router = router;
    this.iconPrev = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faAngleLeft;
    this.iconNext = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faAngleRight;
    this.navItems = [{
      label: 'О министерстве',
      route: 'about'
    }, {
      label: 'Структура',
      route: 'structura'
    }, {
      label: 'Подведомственные организации',
      route: 'pv-organizations'
    }, {
      label: 'Образовательные учереждения',
      route: 'ed-establisments'
    }, {
      label: 'Информационные системы',
      route: 'it-systems'
    }, {
      label: 'Вакансии',
      route: 'jobs'
    }];
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd) {
        // уж лучше так, чем бегать по DOM через квериселектор
        this.selectedItem = this.navItems.find(item => item.route === event.url.split('/')[1]);
      }
    });
  }
}
_class = NavBarComponent;
_class.ɵfac = function NavBarComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-nav-bar"]],
  decls: 15,
  vars: 3,
  consts: [[1, "nav-bar__wrapper"], [1, "nav-bar__top"], [1, "nav-bar__left"], ["type", "button", 1, "nav-bar__prev-btn", "nav-bar__slider-btn"], [1, "nav-bar__icon", 3, "icon"], [1, "nav-bar__middle"], [1, "nav-bar__list"], ["navListELem", ""], [3, "data", "selected", 4, "ngFor", "ngForOf"], [1, "nav-bar__right"], ["type", "button", 1, "nav-bar__next-btn", "nav-bar__slider-btn", "active-btn"], [1, "nav-bar__bottom"], ["type", "button", 1, "nav-bar__expand-btn"], [3, "data", "selected"]],
  template: function NavBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "fa-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5)(6, "div", 6, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, NavBarComponent_app_nav_bar_item_8_Template, 1, 2, "app-nav-bar-item", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9)(10, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "fa-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11)(13, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441e");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.iconPrev);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.navItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.iconNext);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FaIconComponent, _nav_bar_item_nav_bar_item_component__WEBPACK_IMPORTED_MODULE_0__.NavBarItemComponent],
  styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.nav-bar__wrapper[_ngcontent-%COMP%] {\n  color: #3C3C3C;\n}\n\n.nav-bar__top[_ngcontent-%COMP%] {\n  display: flex;\n  box-sizing: border-box;\n  height: 70px;\n  align-items: center;\n  background-color: rgb(226, 226, 228);\n  padding: 0px 25px;\n  position: relative;\n  z-index: 1;\n  justify-content: center;\n}\n\n.nav-bar__middle[_ngcontent-%COMP%] {\n  overflow: hidden;\n  width: 84%;\n}\n.nav-bar__middle[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 20px;\n  right: 9%;\n  background: linear-gradient(to right, rgba(226, 226, 228, 0.1), rgb(226, 226, 228));\n  height: 30px;\n  width: 15px;\n  opacity: 0.5;\n}\n\n.nav-bar__bottom[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  position: relative;\n  z-index: 0;\n}\n\n.nav-bar__left[_ngcontent-%COMP%], .nav-bar__right[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.nav-bar__slider-btn[_ngcontent-%COMP%], .nav-bar__expand-btn[_ngcontent-%COMP%] {\n  transition: background-color 200ms;\n}\n\n.nav-bar__slider-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  border: solid 2px #3C3C3C;\n  box-sizing: border-box;\n  height: 30px;\n  width: 30px;\n  background-color: rgb(226, 226, 228);\n  opacity: 0.5;\n}\n.nav-bar__slider-btn.active-btn[_ngcontent-%COMP%] {\n  border-color: #5578EF;\n  color: #5578EF;\n  opacity: 1;\n}\n.nav-bar__slider-btn.active-btn[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: white;\n  background-color: #5578EF;\n}\n\n.nav-bar__icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.nav-bar__list[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  width: max-content;\n}\n\n.nav-bar__expand-btn[_ngcontent-%COMP%] {\n  position: relative;\n  border: none;\n  background-color: rgb(226, 226, 228);\n  color: #5578EF;\n  font-size: 12px;\n  font-weight: 500;\n  padding: 2px 10px;\n  border-radius: 4px;\n  bottom: 5px;\n}\n.nav-bar__expand-btn[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: white;\n  background-color: #5578EF;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3Nhc3MvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxzQkFBQTtBQURGOztBQUdBO0VBQ0UsY0NIUTtBREdWOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NDWlE7RURhUixpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLFVBQUE7QUFBRjtBQUNFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxtRkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQUY7O0FBR0E7O0VBRUUsa0JBQUE7QUFBRjs7QUFHQTs7RUFFRSxrQ0FBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQzVEUTtFRDZEUixZQUFBO0FBQUY7QUFFRTtFQUNFLHFCQ2pFUztFRGtFVCxjQ2xFUztFRG1FVCxVQUFBO0FBQUo7QUFFSTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJDeEVPO0FEd0ViOztBQUtBO0VBQ0UsZUFBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0NDekZRO0VEMEZSLGNDM0ZXO0VENEZYLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBRkY7QUFHRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJDcEdTO0FEbUdiIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vc2Fzcy9jb2xvcnMuc2Nzcyc7XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLm5hdi1iYXJfX3dyYXBwZXIge1xuICBjb2xvcjogJGJsYWNrLXM7XG59XG5cbi5uYXYtYmFyX190b3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IDcwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZS1zO1xuICBwYWRkaW5nOiAwcHggMjVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm5hdi1iYXJfX21pZGRsZSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiA4NCU7XG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIwcHg7XG4gICAgcmlnaHQ6IDklO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHdoaXRlLXMtdHJhbnNwYXJlbnQsICR3aGl0ZS1zKTtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG59XG5cbi5uYXYtYmFyX19ib3R0b20ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAwO1xufVxuXG4ubmF2LWJhcl9fbGVmdCxcbi5uYXYtYmFyX19yaWdodCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm5hdi1iYXJfX3NsaWRlci1idG4sXG4ubmF2LWJhcl9fZXhwYW5kLWJ0biB7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXM7XG59XG5cbi5uYXYtYmFyX19zbGlkZXItYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiBzb2xpZCAycHggJGJsYWNrLXM7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZS1zO1xuICBvcGFjaXR5OiAwLjU7XG5cbiAgJi5hY3RpdmUtYnRuIHtcbiAgICBib3JkZXItY29sb3I6ICRibHVlLWxpZ2h0O1xuICAgIGNvbG9yOiAkYmx1ZS1saWdodDtcbiAgICBvcGFjaXR5OiAxO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZS1saWdodDtcbiAgICB9XG4gIH1cbn1cblxuLm5hdi1iYXJfX2ljb24ge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5uYXYtYmFyX19saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyMHB4O1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG59XG5cbi5uYXYtYmFyX19leHBhbmQtYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZS1zO1xuICBjb2xvcjogJGJsdWUtbGlnaHQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogMnB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm90dG9tOiA1cHg7XG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWUtbGlnaHQ7XG4gIH1cbn0iLCIkZGFyay1ibHVlOiAjMTAxRDQ5O1xuJGJsdWUtbGlnaHQ6ICM1NTc4RUY7XG4kd2hpdGUtczogcmdiKDIyNiwgMjI2LCAyMjgpO1xuJGJsYWNrLXM6ICMzQzNDM0M7XG4kd2hpdGUtcy10cmFuc3BhcmVudDogcmdiYSgyMjYsIDIyNiwgMjI4LCAwLjEpIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7421:
/*!****************************************************!*\
  !*** ./src/app/page-about/page-about.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageAboutComponent: () => (/* binding */ PageAboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class PageAboutComponent {}
_class = PageAboutComponent;
_class.ɵfac = function PageAboutComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-page-about"]],
  decls: 2,
  vars: 0,
  template: function PageAboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "page-about works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4990:
/*!************************************************************!*\
  !*** ./src/app/page-structura/page-structura.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageStructuraComponent: () => (/* binding */ PageStructuraComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class PageStructuraComponent {}
_class = PageStructuraComponent;
_class.ɵfac = function PageStructuraComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-page-structura"]],
  decls: 2,
  vars: 0,
  template: function PageStructuraComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "page-structura works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5725:
/*!**********************************************!*\
  !*** ./src/app/top-bar/top-bar.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TopBarComponent: () => (/* binding */ TopBarComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 1713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);
var _class;



class TopBarComponent {
  constructor() {
    this.signInIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faSignInAlt;
    this.mailIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faEnvelope;
    this.accessabilityIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faGlasses;
    this.mapIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faMap;
  }
}
_class = TopBarComponent;
_class.ɵfac = function TopBarComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-top-bar"]],
  decls: 13,
  vars: 4,
  consts: [[1, "top-bar-wrapper"], [1, "top-bar__left"], ["type", "button", 1, "top-bar__login-btn"], [3, "icon"], [1, "top-bar__right"], ["href", "", "title", "\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043D\u0430\u043C", 1, "top-bar__mail-btn"], [1, "top-bar__right-icon", 3, "icon"], ["href", "", "title", "\u041A\u0430\u0440\u0442\u0430 \u0441\u0430\u0439\u0442\u0430", 1, "top-bar__map-btn"], ["title", "\u0414\u043B\u044F \u0441\u043B\u0430\u0431\u043E\u0432\u0438\u0434\u044F\u0449\u0438\u0445", 1, "top-bar__accessblt-btn"]],
  template: function TopBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " \u0414\u0438\u043F\u043B\u043E\u043C\u043D\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "fa-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " \u0412\u043E\u0439\u0442\u0438 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4)(7, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "fa-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "fa-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "fa-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.signInIcon);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.mailIcon);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.mapIcon);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.accessabilityIcon);
    }
  },
  dependencies: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FaIconComponent],
  styles: [".top-bar-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  height: 50px;\n  align-items: center;\n  background-color: #101D49;\n  padding: 0 15px;\n  box-sizing: border-box;\n}\n\n.top-bar__left[_ngcontent-%COMP%] {\n  color: rgb(226, 226, 228);\n  font-style: italic;\n}\n\n.top-bar__left[_ngcontent-%COMP%], .top-bar__right[_ngcontent-%COMP%] {\n  width: 30vw;\n}\n\n.top-bar__login-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  outline: none;\n  border: none;\n  color: white;\n  background-color: #5578EF;\n  padding: 4px 8px;\n  font-size: 19px;\n  font-weight: 300;\n}\n\n.top-bar__right[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  align-items: center;\n  color: rgb(226, 226, 228);\n  justify-content: flex-end;\n}\n\n.top-bar__right-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: rgb(226, 226, 228);\n}\n\n.top-bar__accessblt-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  outline: none;\n  padding: 0px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdG9wLWJhci90b3AtYmFyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3Nhc3MvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkNQVTtFRFFWLGVBQUE7RUFDQSxzQkFBQTtBQURGOztBQUlBO0VBQ0UseUJDWFE7RURZUixrQkFBQTtBQURGOztBQUlBOztFQUVFLFdBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQzdCVztFRDhCWCxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQ3RDUTtFRHVDUix5QkFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLHlCQzVDUTtBRDJDVjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQURGIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vc2Fzcy9jb2xvcnMuc2Nzcyc7XG5cbi50b3AtYmFyLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGhlaWdodDogNTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmstYmx1ZTtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4udG9wLWJhcl9fbGVmdCB7XG4gIGNvbG9yOiAkd2hpdGUtcztcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4udG9wLWJhcl9fbGVmdCxcbi50b3AtYmFyX19yaWdodCB7XG4gIHdpZHRoOiAzMHZ3O1xufVxuXG4udG9wLWJhcl9fbG9naW4tYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogNXB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWUtbGlnaHQ7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLnRvcC1iYXJfX3JpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxNXB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogJHdoaXRlLXM7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi50b3AtYmFyX19yaWdodC1pY29uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogJHdoaXRlLXM7XG59XG5cbi50b3AtYmFyX19hY2Nlc3NibHQtYnRuIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iLCIkZGFyay1ibHVlOiAjMTAxRDQ5O1xuJGJsdWUtbGlnaHQ6ICM1NTc4RUY7XG4kd2hpdGUtczogcmdiKDIyNiwgMjI2LCAyMjgpO1xuJGJsYWNrLXM6ICMzQzNDM0M7XG4kd2hpdGUtcy10cmFuc3BhcmVudDogcmdiYSgyMjYsIDIyNiwgMjI4LCAwLjEpIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2688:
/*!****************************************************!*\
  !*** ./src/app/top-header/top-header.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TopHeaderComponent: () => (/* binding */ TopHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class TopHeaderComponent {}
_class = TopHeaderComponent;
_class.ɵfac = function TopHeaderComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-top-header"]],
  decls: 5,
  vars: 0,
  consts: [[1, "top-header__wrapper"], ["src", "../../assets/images/gerb.png", "alt", "gerb"], ["href", ""]],
  template: function TopHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2)(3, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u041C\u0438\u043D\u0438\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u043E \u0442\u0440\u0443\u0434\u0430 \u0438 \u0437\u0430\u043D\u044F\u0442\u043E\u0441\u0442\u0438 \u043D\u0430\u0441\u0435\u043B\u0435\u043D\u0438\u044F \u041E\u0440\u0435\u043D\u0431\u0443\u0440\u0433\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  styles: [".top-header__wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  height: 100px;\n  box-sizing: border-box;\n  align-items: center;\n  gap: 25px;\n}\n.top-header__wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n}\n.top-header__wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #101D49;\n}\n.top-header__wrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdG9wLWhlYWRlci90b3AtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3Nhc3MvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFERjtBQUVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFBSjtBQUVFO0VBQ0UscUJBQUE7RUFDQSxjQ2ZRO0FEZVo7QUFFRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQUFKIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vc2Fzcy9jb2xvcnMuc2Nzcyc7XG5cbi50b3AtaGVhZGVyX193cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjVweDtcbiAgaW1nIHtcbiAgICB3aWR0aDogNTJweDtcbiAgICBoZWlnaHQ6IDUycHg7XG4gIH1cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAkZGFyay1ibHVlO1xuICB9XG4gIGgxIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufSIsIiRkYXJrLWJsdWU6ICMxMDFENDk7XG4kYmx1ZS1saWdodDogIzU1NzhFRjtcbiR3aGl0ZS1zOiByZ2IoMjI2LCAyMjYsIDIyOCk7XG4kYmxhY2stczogIzNDM0MzQztcbiR3aGl0ZS1zLXRyYW5zcGFyZW50OiByZ2JhKDIyNiwgMjI2LCAyMjgsIDAuMSkiXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(6576), __webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map