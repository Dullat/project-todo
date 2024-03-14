/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/createBox.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/createBox.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.box {
  position: absolute;
  inset: 50% 0 0 0;
  display: grid;
  width: auto;
  grid-template-rows: min-content;
  background-color: aliceblue; }
  .box .box-header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 4rem;
    font-weight: 600;
    font-size: 1.2rem;
    background: white; }
  .box .box[active] {
    background-color: aquamarine; }

.close-box {
  position: absolute;
  top: 1rem; }

@media screen and (max-width: 1000px) {
  .box {
    position: fixed; } }
`, "",{"version":3,"sources":["webpack://./src/css/createBox.scss"],"names":[],"mappings":"AAAA;EACI,kBAAkB;EAClB,gBAAgB;EAEhB,aAAa;EACb,WAAW;EACX,+BAA+B;EAC/B,2BAA2B,EAAA;EAP/B;IAUQ,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB,EAAA;EAhBzB;IAoBQ,4BAA4B,EAAA;;AAIpC;EACI,kBAAkB;EAClB,SAAS,EAAA;;AAGb;EACI;IACI,eAAe,EAAA,EAClB","sourcesContent":[".box {\n    position: absolute;\n    inset: 50% 0 0 0;\n\n    display: grid;\n    width: auto;\n    grid-template-rows: min-content;\n    background-color: aliceblue;\n\n    .box-header{\n        display: flex;\n        align-items: center;\n        justify-content: space-around;\n        height: 4rem;\n        font-weight: 600;\n        font-size: 1.2rem;\n        background: white;\n    }\n\n    .box[active]{\n        background-color: aquamarine;\n    }\n}\n\n.close-box {\n    position: absolute;\n    top: 1rem;\n}\n\n@media screen and (max-width: 1000px) {\n    .box {\n        position: fixed;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/createNote.scss":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/createNote.scss ***!
  \**************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.create-note {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  height: 100%; }
  .create-note button {
    margin-top: auto; }

.note-layout {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem; }
  .note-layout .note-card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    border-radius: .7rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.26); }
`, "",{"version":3,"sources":["webpack://./src/css/createNote.scss"],"names":[],"mappings":"AAAA;EACI,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,aAAa;EACb,YAAY,EAAA;EALhB;IAQQ,gBAAgB,EAAA;;AAIxB;EACI,aAAa;EACb,2DAA2D;EAC3D,SAAS;EACT,aAAa,EAAA;EAJjB;IAOQ,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,aAAa;IAEb,oBAAoB;IACpB,wCAAwC,EAAA","sourcesContent":[".create-note {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    padding: 1rem;\n    height: 100%;\n\n    button{\n        margin-top: auto;\n    }\n}\n\n.note-layout {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n    gap: 1rem;\n    padding: 1rem;\n\n    .note-card{\n        display: flex;\n        flex-direction: column;\n        gap: 1rem;\n        padding: 1rem;\n\n        border-radius: .7rem;\n        box-shadow: 0 0 10px rgba(0, 0, 0, 0.26);\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/createTodo.scss":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/createTodo.scss ***!
  \**************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.todoCreationForm {
  display: flex;
  flex-direction: column;
  gap: .7rem;
  height: 100%;
  padding: 1rem;
  background-color: bisque; }
  .todoCreationForm .checklists-container {
    display: flex;
    flex-direction: column;
    gap: .5rem; }
    .todoCreationForm .checklists-container .check-list-box {
      width: 100%;
      display: flex;
      gap: 1rem; }
      .todoCreationForm .checklists-container .check-list-box .checkList {
        flex-grow: 1; }
  .todoCreationForm .bottom {
    margin-top: auto;
    display: flex;
    align-items: center; }
    .todoCreationForm .bottom button {
      margin-left: auto; }
`, "",{"version":3,"sources":["webpack://./src/css/createTodo.scss"],"names":[],"mappings":"AAAA;EACI,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,YAAY;EACZ,aAAa;EACb,wBAAwB,EAAA;EAN5B;IASQ,aAAa;IACb,sBAAsB;IACtB,UAAU,EAAA;IAXlB;MAcY,WAAW;MAEX,aAAa;MACb,SAAS,EAAA;MAjBrB;QAoBgB,YAAY,EAAA;EApB5B;IA0BQ,gBAAgB;IAEhB,aAAa;IACb,mBAAmB,EAAA;IA7B3B;MAgCY,iBAAiB,EAAA","sourcesContent":[".todoCreationForm {\n    display: flex;\n    flex-direction: column;\n    gap: .7rem;\n    height: 100%;\n    padding: 1rem;\n    background-color: bisque;\n\n    .checklists-container {\n        display: flex;\n        flex-direction: column;\n        gap: .5rem;\n\n        .check-list-box {\n            width: 100%;\n\n            display: flex;\n            gap: 1rem;\n\n            .checkList {\n                flex-grow: 1;\n            }\n        }\n    }\n\n    .bottom{\n        margin-top: auto;\n\n        display: flex;\n        align-items: center;\n\n        button {\n            margin-left: auto;\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/inbox.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/inbox.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.inbox-layout {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem; }

.task {
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.322);
  display: flex;
  flex-direction: column;
  border-radius: 1rem; }
  .task .top {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr .3fr;
    align-items: center;
    padding: .5rem; }
    .task .top .priority {
      width: fit-content;
      border: 1px solid; }
    .task .top .open-close {
      display: flex;
      justify-content: end;
      cursor: pointer; }
  .task .hidden {
    display: none;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem; }
    .task .hidden .check-lists {
      display: flex;
      flex-direction: column;
      gap: .5rem; }
      .task .hidden .check-lists .list {
        display: flex;
        align-items: center;
        background-color: #dededf;
        border-radius: 1rem; }
        .task .hidden .check-lists .list div {
          flex-grow: 1; }
    .task .hidden .note {
      border-radius: .4rem;
      background-color: aquamarine;
      min-height: 4rem;
      padding: .5rem;
      font-size: .8rem; }

.hidden.active {
  display: flex; }
`, "",{"version":3,"sources":["webpack://./src/css/inbox.scss"],"names":[],"mappings":"AAAA;EACI,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,aAAa,EAAA;;AAGjB;EACI,iBAA8B;EAC9B,yCAAyC;EACzC,aAAa;EACb,sBAAsB;EACtB,mBAAmB,EAAA;EALvB;IASQ,aAAa;IACb,uCAAuC;IACvC,mBAAmB;IACnB,cAAc,EAAA;IAZtB;MAeY,kBAAkB;MAClB,iBAAiB,EAAA;IAhB7B;MAoBY,aAAa;MACb,oBAAoB;MACpB,eAAe,EAAA;EAtB3B;IA2BQ,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,aAAa,EAAA;IA9BrB;MAiCY,aAAa;MACb,sBAAsB;MACtB,UAAU,EAAA;MAnCtB;QAsCgB,aAAa;QACb,mBAAmB;QACnB,yBAAoC;QACpC,mBAAmB,EAAA;QAzCnC;UA4CoB,YAAY,EAAA;IA5ChC;MAkDY,oBAAoB;MACpB,4BAA4B;MAC5B,gBAAgB;MAChB,cAAc;MACd,gBAAgB,EAAA;;AAK5B;EACI,aAAa,EAAA","sourcesContent":[".inbox-layout {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    padding: 1rem;\n}\n\n.task {\n    background: rgb(255, 255, 255);\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.322);\n    display: flex;\n    flex-direction: column;\n    border-radius: 1rem;\n\n\n    .top {\n        display: grid;\n        grid-template-columns: 1fr 1fr 1fr .3fr;\n        align-items: center;\n        padding: .5rem;\n\n        .priority {\n            width: fit-content;\n            border: 1px solid;\n        }\n\n        .open-close {\n            display: flex;\n            justify-content: end;\n            cursor: pointer;\n        }\n    }\n\n    .hidden {\n        display: none;\n        flex-direction: column;\n        gap: 1rem;\n        padding: 1rem;\n\n        .check-lists {\n            display: flex;\n            flex-direction: column;\n            gap: .5rem;\n\n            .list {\n                display: flex;\n                align-items: center;\n                background-color: rgb(222, 222, 223);\n                border-radius: 1rem;\n\n                div {\n                    flex-grow: 1;\n                }\n            }\n        }\n\n        .note {\n            border-radius: .4rem;\n            background-color: aquamarine;\n            min-height: 4rem;\n            padding: .5rem;\n            font-size: .8rem;\n        }\n    }\n}\n\n.hidden.active{\n    display: flex;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/index.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/index.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/icons8-menu-50.png */ "./src/imgs/icons8-menu-50.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  min-height: 100dvh; }

.wrapper {
  position: relative;
  background-color: aliceblue;
  display: grid;
  grid-template-columns: 1fr 3fr; }

.main {
  background-color: #fdfdfd; }

.add-new {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  cursor: pointer; }

.burger {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  position: fixed;
  display: none;
  top: 1rem;
  right: 1rem;
  height: 30px;
  aspect-ratio: 1;
  cursor: pointer; }

svg {
  width: 35px;
  aspect-ratio: 1; }

.side-bar {
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  font-weight: 600;
  min-height: 100vh;
  background-color: #ebebeb; }
  .side-bar .profile {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background-color: #00ffaa; }
    .side-bar .profile .profile-picture {
      width: 50px;
      aspect-ratio: 1;
      background-color: beige;
      border-radius: 100vh; }
    .side-bar .profile .profile-name {
      font-size: 1.3rem;
      font-weight: 600; }
  .side-bar ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 1rem; }
    .side-bar ul li {
      display: flex;
      align-items: center;
      gap: .5rem;
      cursor: pointer; }
  .side-bar .projects {
    padding: 1rem; }
    .side-bar .projects p {
      font-size: 1.2rem;
      opacity: .5; }

.inbox-header {
  padding: .5rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: green; }

@media screen and (min-width: 1200px) {
  .wrapper {
    grid-template-columns: 1fr 5fr; }
  .add-new {
    bottom: 2rem;
    right: 2rem; } }

@media screen and (max-width: 1000px) {
  .wrapper {
    grid-template-columns: 1fr; }
  .side-bar {
    position: fixed;
    inset: 0 60% 0 0;
    transform: translateX(-100%);
    transition: all .5s; }
  .side-bar.active {
    transform: translateX(0%); }
  .add-new {
    position: fixed; }
  .burger {
    display: unset; } }

@media screen and (max-width: 600px) {
  .side-bar {
    inset: 0 40% 0 0; } }
`, "",{"version":3,"sources":["webpack://./src/css/index.scss"],"names":[],"mappings":"AAAA;EACI,kBAAkB,EAAA;;AAGtB;EACI,kBAAkB;EAClB,2BAA2B;EAE3B,aAAa;EACb,8BAA8B,EAAA;;AAGlC;EACI,yBAAoC,EAAA;;AAGxC;EACI,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,eAAe,EAAA;;AAGnB;EACI,mDAA2C;EAC3C,sBAAsB;EACtB,eAAe;EACf,aAAa;EACb,SAAS;EACT,WAAW;EACX,YAAY;EACZ,eAAe;EACf,eAAe,EAAA;;AAGnB;EACI,WAAW;EACX,eAAe,EAAA;;AAInB;EACI,aAAa;EACb,sBAAsB;EAEtB,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,yBAAoC,EAAA;EAPxC;IAUQ,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,aAAa;IACb,yBAAkC,EAAA;IAd1C;MAiBY,WAAW;MACX,eAAe;MACf,uBAAuB;MACvB,oBAAoB,EAAA;IApBhC;MAwBY,iBAAiB;MACjB,gBAAgB,EAAA;EAzB5B;IA8BQ,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,kBAAkB,EAAA;IAjC1B;MAoCY,aAAa;MACb,mBAAmB;MACnB,UAAU;MACV,eAAe,EAAA;EAvC3B;IA4CQ,aAAa,EAAA;IA5CrB;MA+CY,iBAAiB;MACjB,WAAW,EAAA;;AAKvB;EACI,cAAc;EACd,iBAAiB;EACjB,gBAAgB;EAChB,YAAY,EAAA;;AAGhB;EACI;IACI,8BAA8B,EAAA;EAGlC;IACI,YAAY;IACZ,WAAW,EAAA,EACd;;AAGL;EAEI;IACI,0BAA0B,EAAA;EAG9B;IACI,eAAe;IACf,gBAAgB;IAChB,4BAA4B;IAC5B,mBAAmB,EAAA;EAGvB;IACI,yBAAyB,EAAA;EAG7B;IACI,eAAe,EAAA;EAGnB;IACI,cAAc,EAAA,EACjB;;AAGL;EACI;IACI,gBAAgB,EAAA,EACnB","sourcesContent":["body {\n    min-height: 100dvh;\n}\n\n.wrapper {\n    position: relative;\n    background-color: aliceblue;\n\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n}\n\n.main {\n    background-color: rgb(253, 253, 253);\n}\n\n.add-new {\n    position: absolute;\n    bottom: 1rem;\n    right: 1rem;\n    cursor: pointer;\n}\n\n.burger {\n    background: url(../imgs/icons8-menu-50.png);\n    background-size: cover;\n    position: fixed;\n    display: none;\n    top: 1rem;\n    right: 1rem;\n    height: 30px;\n    aspect-ratio: 1;\n    cursor: pointer;\n}\n\nsvg {\n    width: 35px;\n    aspect-ratio: 1;\n}\n\n\n.side-bar {\n    display: flex;\n    flex-direction: column;\n\n    font-size: 1rem;\n    font-weight: 600;\n    min-height: 100vh;\n    background-color: rgb(235, 235, 235);\n\n    .profile {\n        display: flex;\n        align-items: center;\n        gap: 1rem;\n        padding: 1rem;\n        background-color: rgb(0, 255, 170);\n\n        .profile-picture{\n            width: 50px;\n            aspect-ratio: 1;\n            background-color: beige;\n            border-radius: 100vh;\n        }\n\n        .profile-name{\n            font-size: 1.3rem;\n            font-weight: 600;\n        }\n    }\n\n    ul {\n        display: flex;\n        flex-direction: column;\n        gap: 1rem;\n        padding: 1rem 1rem;\n\n        li {\n            display: flex;\n            align-items: center;\n            gap: .5rem;\n            cursor: pointer;\n        }\n    }\n\n    .projects {\n        padding: 1rem;\n\n        p {\n            font-size: 1.2rem;\n            opacity: .5;\n        }\n    }\n}\n\n.inbox-header {\n    padding: .5rem;\n    font-size: 1.2rem;\n    font-weight: 600;\n    color: green;\n}\n\n@media screen and (min-width: 1200px){\n    .wrapper {\n        grid-template-columns: 1fr 5fr;\n    }\n\n    .add-new{\n        bottom: 2rem;\n        right: 2rem;\n    }\n}\n\n@media screen and (max-width: 1000px){\n\n    .wrapper {\n        grid-template-columns: 1fr;\n    }\n\n    .side-bar {\n        position: fixed;\n        inset: 0 60% 0 0;\n        transform: translateX(-100%);\n        transition: all .5s;\n    }\n\n    .side-bar.active {\n        transform: translateX(0%);\n    }\n\n    .add-new {\n        position: fixed;\n    }\n\n    .burger{\n        display: unset;\n    }\n}\n\n@media screen and (max-width: 600px){\n    .side-bar{\n        inset: 0 40% 0 0;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/reset.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/reset.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Reset CSS */
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
  /* Include padding and border in element's total width and height */ }

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block; }

body {
  line-height: 1;
  font-family: sans-serif; }

ol,
ul {
  list-style: none; }

blockquote,
q {
  quotes: none; }

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none; }

table {
  border-collapse: collapse;
  border-spacing: 0; }

/* Additional Resets */
input,
textarea,
select {
  font-family: inherit;
  /* Use parent font */
  font-size: inherit;
  /* Use parent font size */ }

button,
input,
optgroup,
select,
textarea {
  margin: 0;
  /* Remove margins */
  padding: 0;
  /* Remove padding */
  color: inherit;
  /* Use parent color */
  font: inherit;
  /* Use parent font */
  line-height: normal;
  /* Reset line-height */ }

button,
input {
  overflow: visible;
  /* Show overflow */ }

button,
select {
  text-transform: none;
  /* Reset text-transform */ }

/* Set cursor for interactive elements */
button,
input,
select,
textarea {
  cursor: pointer; }

/* fonts */
html {
  font-family: poppins; }

:root {
  /* Font Sizes */
  --font-xs: 0.75rem;
  /* 12px */
  --font-sm: 0.875rem;
  /* 14px */
  --font-md: 1rem;
  /* 16px */
  --font-lg: 1.125rem;
  /* 18px */
  --font-xl: 1.25rem;
  /* 20px */
  --font-head: 3rem;
  /* Gap Values */
  --gap-xs: 0.25rem;
  /* 4px */
  --gap-sm: 0.5rem;
  /* 8px */
  --gap-md: 1rem;
  /* 16px */
  --gap-lg: 1.5rem;
  /* 24px */
  --gap-xl: 2rem;
  /* 32px */ }
`, "",{"version":3,"sources":["webpack://./src/css/reset.scss"],"names":[],"mappings":"AAAA,cAAA;AACA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFI,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB;EACxB,sBAAsB;EACtB,mEAAA,EAAoE;;AAGxE,gDAAA;AACA;;;;;;;;;;;EAWI,cAAc,EAAA;;AAGlB;EACI,cAAc;EACd,uBAAuB,EAAA;;AAG3B;;EAEI,gBAAgB,EAAA;;AAGpB;;EAEI,YAAY,EAAA;;AAGhB;;;;EAII,WAAW;EACX,aAAa,EAAA;;AAGjB;EACI,yBAAyB;EACzB,iBAAiB,EAAA;;AAGrB,sBAAA;AACA;;;EAGI,oBAAoB;EACpB,oBAAA;EACA,kBAAkB;EAClB,yBAAA,EAA0B;;AAG9B;;;;;EAKI,SAAS;EACT,mBAAA;EACA,UAAU;EACV,mBAAA;EACA,cAAc;EACd,qBAAA;EACA,aAAa;EACb,oBAAA;EACA,mBAAmB;EACnB,sBAAA,EAAuB;;AAG3B;;EAEI,iBAAiB;EACjB,kBAAA,EAAmB;;AAGvB;;EAEI,oBAAoB;EACpB,yBAAA,EAA0B;;AAG9B,wCAAA;AACA;;;;EAII,eAAe,EAAA;;AAInB,UAAA;AAEA;EACI,oBAAoB,EAAA;;AAGxB;EACI,eAAA;EACA,kBAAU;EACV,SAAA;EACA,mBAAU;EACV,SAAA;EACA,eAAU;EACV,SAAA;EACA,mBAAU;EACV,SAAA;EACA,kBAAU;EACV,SAAA;EACA,iBAAY;EAEZ,eAAA;EACA,iBAAS;EACT,QAAA;EACA,gBAAS;EACT,QAAA;EACA,cAAS;EACT,SAAA;EACA,gBAAS;EACT,SAAA;EACA,cAAS;EACT,SAAA,EAAU","sourcesContent":["/* Reset CSS */\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n    box-sizing: border-box;\n    /* Include padding and border in element's total width and height */\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n    display: block;\n}\n\nbody {\n    line-height: 1;\n    font-family: sans-serif;\n}\n\nol,\nul {\n    list-style: none;\n}\n\nblockquote,\nq {\n    quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n    content: '';\n    content: none;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\n/* Additional Resets */\ninput,\ntextarea,\nselect {\n    font-family: inherit;\n    /* Use parent font */\n    font-size: inherit;\n    /* Use parent font size */\n}\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n    margin: 0;\n    /* Remove margins */\n    padding: 0;\n    /* Remove padding */\n    color: inherit;\n    /* Use parent color */\n    font: inherit;\n    /* Use parent font */\n    line-height: normal;\n    /* Reset line-height */\n}\n\nbutton,\ninput {\n    overflow: visible;\n    /* Show overflow */\n}\n\nbutton,\nselect {\n    text-transform: none;\n    /* Reset text-transform */\n}\n\n/* Set cursor for interactive elements */\nbutton,\ninput,\nselect,\ntextarea {\n    cursor: pointer;\n}\n\n\n/* fonts */\n\nhtml {\n    font-family: poppins;\n}\n\n:root {\n    /* Font Sizes */\n    --font-xs: 0.75rem;\n    /* 12px */\n    --font-sm: 0.875rem;\n    /* 14px */\n    --font-md: 1rem;\n    /* 16px */\n    --font-lg: 1.125rem;\n    /* 18px */\n    --font-xl: 1.25rem;\n    /* 20px */\n    --font-head: 3rem;\n\n    /* Gap Values */\n    --gap-xs: 0.25rem;\n    /* 4px */\n    --gap-sm: 0.5rem;\n    /* 8px */\n    --gap-md: 1rem;\n    /* 16px */\n    --gap-lg: 1.5rem;\n    /* 24px */\n    --gap-xl: 2rem;\n    /* 32px */\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/createBox.scss":
/*!********************************!*\
  !*** ./src/css/createBox.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_createBox_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./createBox.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/createBox.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_createBox_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_createBox_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_createBox_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_createBox_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/createNote.scss":
/*!*********************************!*\
  !*** ./src/css/createNote.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_createNote_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./createNote.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/createNote.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_createNote_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_createNote_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_createNote_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_createNote_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/createTodo.scss":
/*!*********************************!*\
  !*** ./src/css/createTodo.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_createTodo_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./createTodo.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/createTodo.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_createTodo_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_createTodo_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_createTodo_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_createTodo_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/inbox.scss":
/*!****************************!*\
  !*** ./src/css/inbox.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_inbox_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./inbox.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/inbox.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_inbox_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_inbox_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_inbox_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_inbox_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/index.scss":
/*!****************************!*\
  !*** ./src/css/index.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/reset.scss":
/*!****************************!*\
  !*** ./src/css/reset.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./reset.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/reset.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/coming.js":
/*!**************************!*\
  !*** ./src/js/coming.js ***!
  \**************************/
/***/ ((module) => {

function createComingUi(todoArray, main) {
    if (main.firstElementChild) {
        main.removeChild(main.firstElementChild);
    }

    // Create a new inboxLayout div for each call
    let inboxLayout = document.createElement('div');
    inboxLayout.classList.add('inbox-layout');

    let today = new Date();

    let todayArray;

    todoArray.forEach(element => {
        let dueDate = new Date(element.dueDate);

        if (today.getDate() < dueDate.getDate()) {
            let taskDiv = document.createElement('div');
            taskDiv.classList.add('task');

            taskDiv.innerHTML = `
            <div class="top">
                <p class="title">${element.title}</p>
                <p class="date">${element.dueDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}</p>
                <p class="priority">${element.priority}</p>
            </div>
            <div class="hidden">
                <button class="delete-task">del</button>
                <div class="check-lists"></div>
                <div class="note">${element.note}</div>
            </div>
            `;

            inboxLayout.appendChild(taskDiv);

            element.checkList.forEach((el, i) => {
                let bar = document.createElement('div');
                bar.classList.add('list');
                bar.innerHTML = `
                <div>${el}</div>
                <del index="${i}" class="remove-box">x</del>
                `;
                taskDiv.querySelector('.check-lists').appendChild(bar);
            });
        };
    });

    main.appendChild(inboxLayout);

    // Event delegation for button clicks
    inboxLayout.addEventListener("click", (event) => {
        if (event.target.tagName === 'BUTTON') {
            // Find the index of the clicked element in the DOM
            let index = Array.from(inboxLayout.querySelectorAll('.task')).indexOf(event.target.closest('.task'));
            if (index !== -1) {
                todoArray.splice(index, 1);
                createComingUi(todoArray, main);
            }
        }

        if (event.target.tagName === 'DEL') {
            // Find the index of the clicked element in the DOM
            let taskDiv = event.target.closest('.task');
            if (taskDiv) {
                let index = Array.from(taskDiv.parentNode.children).indexOf(taskDiv);
                let taskIndex = Array.from(taskDiv.querySelectorAll('del')).indexOf(event.target);
                if (index !== -1 && taskIndex !== -1) {
                    todoArray[index].checkList.splice(taskIndex, 1);
                    createComingUi(todoArray, main);
                }
            }
        }


        if (event.target.closest('.task')) {
            event.target.classList.toggle('active');
        }
    });
}


module.exports = { createComingUi };

/***/ }),

/***/ "./src/js/create.js":
/*!**************************!*\
  !*** ./src/js/create.js ***!
  \**************************/
/***/ ((module) => {

function CreateTodo(title, description, dueDate, priority, note, checkList, index) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.note = note;
    this.checkList = checkList;
    this.index = index;
}

CreateTodo.prototype.al = function (p) {
    console.log(p);
};

module.exports = {CreateTodo}

/***/ }),

/***/ "./src/js/createNote.js":
/*!******************************!*\
  !*** ./src/js/createNote.js ***!
  \******************************/
/***/ ((module) => {

function createNote(title, note) {
    this.title = title;
    this.note = note;
}

module.exports = {createNote};

/***/ }),

/***/ "./src/js/inbox.js":
/*!*************************!*\
  !*** ./src/js/inbox.js ***!
  \*************************/
/***/ ((module) => {

function createTaskUi(todoArray, main) {
    if (main.firstElementChild) {
        main.removeChild(main.firstElementChild);
    }

    // Create a new inboxLayout div for each call
    let inboxLayout = document.createElement('div');
    inboxLayout.classList.add('inbox-layout');

    let inboxHeader = document.createElement('div');
    inboxHeader.classList.add('inbox-header');

    inboxHeader.innerHTML = `<p>INBOX</p>`;

    inboxLayout.appendChild(inboxHeader);

    todoArray.forEach(todo => {
        todo.dueDate = new Date(todo.dueDate);
    });

    let sortedArray = todoArray.slice().sort((a, b) => a.dueDate - b.dueDate);
    const options = { day: 'numeric', month: 'short' };

    sortedArray.forEach((element, index) => {
        let taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        taskDiv.innerHTML = `
        <div class="top">
            <p class="title">${element.title}</p>
            <p class="date">${element.dueDate.toLocaleDateString('en-US', options)}</p>
            <p class="priority">${element.priority}</p>
            <div class="open-close" style="position: relative">
                <svg xmlns="http://www.w3.org/2000/svg" class="ssvg" height="30px" viewBox="0 0 24 24"><title>arrow-down-drop-circle-outline</title><path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M7,10L12,15L17,10H7Z" /></svg>
                <div class="ssvg" style="position: absolute; height: 100%; width: 100%;"></div>
            </div>
        </div>
        <div class="hidden">
            <button class="delete-task">del</button>
            <div class="check-lists"></div>
            <div class="note">${element.note}</div>
        </div>
        `;

        inboxLayout.appendChild(taskDiv);

        element.checkList.forEach((el, i) => {
            let bar = document.createElement('div');
            bar.classList.add('list');
            bar.innerHTML = `
            <div>${el}</div>
            <del index="${i}" class="remove-box">x</del>
            `;
            taskDiv.querySelector('.check-lists').appendChild(bar);
        });
    });

    main.appendChild(inboxLayout);

    // Event delegation for button clicks
    inboxLayout.addEventListener("click", (event) => {
        if (event.target.tagName === 'BUTTON') {
            // Find the index of the clicked element in the DOM
            let index = Array.from(inboxLayout.querySelectorAll('.task')).indexOf(event.target.closest('.task'));
            if (index !== -1) {
                todoArray.splice(index, 1);
                createTaskUi(todoArray, main);
            }
        }

        if (event.target.tagName === 'DEL') {
            // Find the index of the clicked element in the DOM
            let taskDiv = event.target.closest('.task');
            if (taskDiv) {
                let index = Array.from(taskDiv.parentNode.children).indexOf(taskDiv);
                let taskIndex = Array.from(taskDiv.querySelectorAll('del')).indexOf(event.target);
                if (index !== -1 && taskIndex !== -1) {
                    todoArray[index].checkList.splice(taskIndex, 1);
                    createTaskUi(todoArray, main);
                }
            }
        }


        if (event.target.classList.contains('ssvg')) {
            event.target.closest('.task').querySelector('.hidden').classList.toggle('active');
        }        
    });
}

module.exports = { createTaskUi };


/***/ }),

/***/ "./src/js/notes.js":
/*!*************************!*\
  !*** ./src/js/notes.js ***!
  \*************************/
/***/ ((module) => {

function createNoteUi(noteArray, main) {
    if (main.firstElementChild) {
        main.removeChild(main.firstElementChild);
    }

    let noteLayout = document.createElement('div');
    noteLayout.classList.add('note-layout');

    noteArray.forEach(element => {
        let noteCard = document.createElement('div');
        noteCard.classList.add('note-card');

        noteCard.innerHTML = `
        <div class="title"><span style="opacity: .5">title: </span><span>${element.title}</span></div>
        <div class="note">${element.note}</div>
        `;

        noteLayout.appendChild(noteCard);
    });

    main.appendChild(noteLayout);
}

module.exports = { createNoteUi };

/***/ }),

/***/ "./src/js/today.js":
/*!*************************!*\
  !*** ./src/js/today.js ***!
  \*************************/
/***/ ((module) => {

function createTodayUi(todoArray, main) {
    if (main.firstElementChild) {
        main.removeChild(main.firstElementChild);
    }

    // Create a new inboxLayout div for each call
    let inboxLayout = document.createElement('div');
    inboxLayout.classList.add('inbox-layout');

    let today = new Date();

    let todayArray;

    todoArray.forEach(element => {
        let dueDate = new Date(element.dueDate);

        if (today.getDate() === dueDate.getDate()) {
            let taskDiv = document.createElement('div');
            taskDiv.classList.add('task');

            taskDiv.innerHTML = `
            <div class="top">
                <p class="title">${element.title}</p>
                <p class="date">${element.dueDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}</p>
                <p class="priority">${element.priority}</p>
            </div>
            <div class="hidden">
                <button class="delete-task">del</button>
                <div class="check-lists"></div>
                <div class="note">${element.note}</div>
            </div>
            `;

            inboxLayout.appendChild(taskDiv);

            element.checkList.forEach((el, i) => {
                let bar = document.createElement('div');
                bar.classList.add('list');
                bar.innerHTML = `
                <div>${el}</div>
                <del index="${i}" class="remove-box">x</del>
                `;
                taskDiv.querySelector('.check-lists').appendChild(bar);
            });
        };
    });

    main.appendChild(inboxLayout);

    // Event delegation for button clicks
    inboxLayout.addEventListener("click", (event) => {
        if (event.target.tagName === 'BUTTON') {
            // Find the index of the clicked element in the DOM
            let index = Array.from(inboxLayout.querySelectorAll('.task')).indexOf(event.target.closest('.task'));
            if (index !== -1) {
                todoArray.splice(index, 1);
                createTodayUi(todoArray, main);
            }
        }

        if (event.target.tagName === 'DEL') {
            // Find the index of the clicked element in the DOM
            let taskDiv = event.target.closest('.task');
            if (taskDiv) {
                let index = Array.from(taskDiv.parentNode.children).indexOf(taskDiv);
                let taskIndex = Array.from(taskDiv.querySelectorAll('del')).indexOf(event.target);
                if (index !== -1 && taskIndex !== -1) {
                    todoArray[index].checkList.splice(taskIndex, 1);
                    createTodayUi(todoArray, main);
                }
            }
        }


        if (event.target.closest('.task')) {
            event.target.classList.toggle('active');
        }
    });
}


module.exports = { createTodayUi };

/***/ }),

/***/ "./src/js/uiCreateBox.js":
/*!*******************************!*\
  !*** ./src/js/uiCreateBox.js ***!
  \*******************************/
/***/ ((module) => {

let box = document.createElement('div');
box.classList.add('box');

box.innerHTML = `
<div class="close-box">
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
        <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
    </svg>
</div>
<ul class="box-header">
    <li class="todo-creation">ToDo</li>
    <li class="project-creation">Project</li>
    <li class="note-creation">Note</li>
</ul>
<div class="box-menu"></div>
`;

module.exports = { box };

/***/ }),

/***/ "./src/js/uiCreateNote.js":
/*!********************************!*\
  !*** ./src/js/uiCreateNote.js ***!
  \********************************/
/***/ ((module) => {

let createNoteForm = document.createElement('form');

createNoteForm.classList.add('create-note');

createNoteForm.innerHTML = `
<input type="text" class="title" placeholder="title">
<textarea></textarea>
<button type="submit">Create</button>
`;

module.exports = {createNoteForm};

/***/ }),

/***/ "./src/js/uiCreateTodo.js":
/*!********************************!*\
  !*** ./src/js/uiCreateTodo.js ***!
  \********************************/
/***/ ((module) => {

let todoCreationForm = document.createElement('form');
let checkList = document.createElement('div');
let clicked;

todoCreationForm.classList.add('todoCreationForm');
checkList.classList.add('check-list-box');

todoCreationForm.innerHTML = `
<input type="text" id="title" class="title" placeholder="title: payBills">
<input type="text" class="description" placeholder="description">
<textarea></textarea>
<div class="checklists-container"></div>
<div class="priority">
    <div class="low prio" data-value="low">Low</div>
    <div class="med prio" data-value="med">Med</div>
    <div class="high prio" data-value="high">High</div>
</div>

<div class="bottom">
    <div class="date">
        <label for="dateInput">Select a date:</label>
        <input type="date" id="dateInput" name="dateInput">
    </div>
    <div class="create-check-list" onclick="addListBox()">create-check-list</div>
    <button type="submit">create</button>
</div>
`;

checkList.innerHTML = `
<input type="text" class="checkList" placeholder="addCheckList">
<button onclick="this.parentElement.remove()" class="remove-box">x</button>
`;

function addListBox() {
    document.querySelector('.checklists-container').appendChild(checkList.cloneNode(true));
}

function checkPrio() {
    let prios = document.querySelectorAll('.prio');
    prios.forEach(e => {
        e.addEventListener('click', () => {
            prios.forEach(l => {
                l.removeAttribute('active');
                l.style.background = 'white';
            })
            e.setAttribute('active','')
            e.style.background = 'red';
            clicked = e;
        })
    })
}

function sendPrio(){
    return clicked.getAttribute("data-value");
}

module.exports = { todoCreationForm, addListBox, checkPrio, sendPrio };

/***/ }),

/***/ "./src/imgs/icons8-menu-50.png":
/*!*************************************!*\
  !*** ./src/imgs/icons8-menu-50.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "197d1e7c6c6b4a24ab54.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_reset_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/reset.scss */ "./src/css/reset.scss");
/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/index.scss */ "./src/css/index.scss");
/* harmony import */ var _css_createBox_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/createBox.scss */ "./src/css/createBox.scss");
/* harmony import */ var _css_createTodo_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/createTodo.scss */ "./src/css/createTodo.scss");
/* harmony import */ var _css_inbox_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/inbox.scss */ "./src/css/inbox.scss");
/* harmony import */ var _css_createNote_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/createNote.scss */ "./src/css/createNote.scss");
/* harmony import */ var _js_create_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/create.js */ "./src/js/create.js");
/* harmony import */ var _js_create_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_create_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _js_uiCreateTodo_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/uiCreateTodo.js */ "./src/js/uiCreateTodo.js");
/* harmony import */ var _js_uiCreateTodo_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_js_uiCreateTodo_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _js_uiCreateBox_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/uiCreateBox.js */ "./src/js/uiCreateBox.js");
/* harmony import */ var _js_uiCreateBox_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_js_uiCreateBox_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _js_inbox_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./js/inbox.js */ "./src/js/inbox.js");
/* harmony import */ var _js_inbox_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_js_inbox_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _js_today_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./js/today.js */ "./src/js/today.js");
/* harmony import */ var _js_today_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_js_today_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _js_coming_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./js/coming.js */ "./src/js/coming.js");
/* harmony import */ var _js_coming_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_js_coming_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _js_uiCreateNote_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./js/uiCreateNote.js */ "./src/js/uiCreateNote.js");
/* harmony import */ var _js_uiCreateNote_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_js_uiCreateNote_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _js_createNote_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./js/createNote.js */ "./src/js/createNote.js");
/* harmony import */ var _js_createNote_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_js_createNote_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _js_notes_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./js/notes.js */ "./src/js/notes.js");
/* harmony import */ var _js_notes_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_js_notes_js__WEBPACK_IMPORTED_MODULE_14__);
















window.addListBox = _js_uiCreateTodo_js__WEBPACK_IMPORTED_MODULE_7__.addListBox;

let addBtn = document.querySelector('.add-new');
let createToDo = document.querySelector('.todoCreationForm');
let wrapper = document.querySelector('.wrapper');
let main = document.querySelector('.main');
let todoArray = [];
let noteArray = [];
let todoIndex = 0;
let noteIndex = 0;
let inbox = document.querySelector('.inbox');
let today = document.querySelector('.today');
let coming = document.querySelector('.upcoming');
let notes = document.querySelector('.notes');
let primaryNav = document.querySelector('.primary-nav');


addBtn.addEventListener('click', () => {
    wrapper.appendChild(_js_uiCreateBox_js__WEBPACK_IMPORTED_MODULE_8__.box);
    document.querySelector('.box-menu').appendChild(_js_uiCreateTodo_js__WEBPACK_IMPORTED_MODULE_7__.todoCreationForm);
    document.querySelector('.close-box').addEventListener('click', () => {
        if (_js_uiCreateBox_js__WEBPACK_IMPORTED_MODULE_8__.box.parentElement === wrapper) {
            wrapper.removeChild(_js_uiCreateBox_js__WEBPACK_IMPORTED_MODULE_8__.box);
        }
    });
    document.querySelectorAll('.prio').forEach(e => {
        (0,_js_uiCreateTodo_js__WEBPACK_IMPORTED_MODULE_7__.checkPrio)();
    })

    _js_uiCreateBox_js__WEBPACK_IMPORTED_MODULE_8__.box.querySelector('.todo-creation').addEventListener('click', () => {
        _js_uiCreateBox_js__WEBPACK_IMPORTED_MODULE_8__.box.querySelector('.todo-creation').style.color = 'green';
        _js_uiCreateBox_js__WEBPACK_IMPORTED_MODULE_8__.box.querySelector('.note-creation').style.color = 'black';
        const boxMenu = document.querySelector('.box-menu');
        boxMenu.removeChild(boxMenu.firstElementChild);
        document.querySelector('.box-menu').appendChild(_js_uiCreateTodo_js__WEBPACK_IMPORTED_MODULE_7__.todoCreationForm);
    })

    _js_uiCreateBox_js__WEBPACK_IMPORTED_MODULE_8__.box.querySelector('.note-creation').addEventListener('click', () => {
        _js_uiCreateBox_js__WEBPACK_IMPORTED_MODULE_8__.box.querySelector('.note-creation').style.color = 'green';
        _js_uiCreateBox_js__WEBPACK_IMPORTED_MODULE_8__.box.querySelector('.todo-creation').style.color = 'black';
        const boxMenu = document.querySelector('.box-menu');
        boxMenu.removeChild(boxMenu.firstElementChild)
        document.querySelector('.box-menu').appendChild(_js_uiCreateNote_js__WEBPACK_IMPORTED_MODULE_12__.createNoteForm);
    });
})

//create todo

_js_uiCreateTodo_js__WEBPACK_IMPORTED_MODULE_7__.todoCreationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let checkListArray = document.querySelectorAll('.checkList');

    let sendChecklist = [];

    checkListArray.forEach(e => {
        sendChecklist.push(e.value);
    })

    console.log(sendChecklist);

    todoArray[todoIndex] = new _js_create_js__WEBPACK_IMPORTED_MODULE_6__.CreateTodo(document.querySelector('#title').value,
        document.querySelector('.description').value,
        document.querySelector('#dateInput').value,
        (0,_js_uiCreateTodo_js__WEBPACK_IMPORTED_MODULE_7__.sendPrio)(),
        document.querySelector('textarea').value,
        sendChecklist,
        todoIndex
    );

    console.log(todoArray[todoIndex]);

    if (_js_uiCreateBox_js__WEBPACK_IMPORTED_MODULE_8__.box.parentElement === wrapper) {
        wrapper.removeChild(_js_uiCreateBox_js__WEBPACK_IMPORTED_MODULE_8__.box);
    }

    (0,_js_inbox_js__WEBPACK_IMPORTED_MODULE_9__.createTaskUi)(todoArray, main);

    navStyle();
    primaryNav.querySelector('.inbox').style.color = 'green';
    primaryNav.querySelector('.inbox').children[0].style.fill = 'green';

    todoIndex++;
});

window.onload = function () {
    (0,_js_inbox_js__WEBPACK_IMPORTED_MODULE_9__.createTaskUi)(todoArray, main);
    inbox.style.color = 'green';
    inbox.children[0].style.fill = 'green';
}

//create Note

_js_uiCreateNote_js__WEBPACK_IMPORTED_MODULE_12__.createNoteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    noteArray[noteIndex] = new _js_createNote_js__WEBPACK_IMPORTED_MODULE_13__.createNote(_js_uiCreateNote_js__WEBPACK_IMPORTED_MODULE_12__.createNoteForm.querySelector('.title').value, _js_uiCreateNote_js__WEBPACK_IMPORTED_MODULE_12__.createNoteForm.querySelector('textarea').value);
    noteIndex++;

    if (_js_uiCreateBox_js__WEBPACK_IMPORTED_MODULE_8__.box.parentElement === wrapper) {
        wrapper.removeChild(_js_uiCreateBox_js__WEBPACK_IMPORTED_MODULE_8__.box);
    }

    (0,_js_notes_js__WEBPACK_IMPORTED_MODULE_14__.createNoteUi)(noteArray, main);

    navStyle();
    primaryNav.querySelector('.notes').style.color = 'green';
    primaryNav.querySelector('.notes').children[0].style.fill = 'green';

    console.log(noteArray);
})

//
inbox.addEventListener('click', () => {
    ;(0,_js_inbox_js__WEBPACK_IMPORTED_MODULE_9__.createTaskUi)(todoArray, main);
})

today.addEventListener('click', () => {
    ;(0,_js_today_js__WEBPACK_IMPORTED_MODULE_10__.createTodayUi)(todoArray, main);
})

coming.addEventListener('click', () => {
    ;(0,_js_coming_js__WEBPACK_IMPORTED_MODULE_11__.createComingUi)(todoArray, main);
})

notes.addEventListener('click', () => {
    ;(0,_js_notes_js__WEBPACK_IMPORTED_MODULE_14__.createNoteUi)(noteArray, main);
})

primaryNav.querySelectorAll('li').forEach(e => {
    e.addEventListener('click', () => {
        primaryNav.querySelectorAll('li').forEach(e => {
            e.style.color = 'black';
            e.children[0].style.fill = 'black';
        });
        e.style.color = 'green';
        e.children[0].style.fill = 'green';
    })
})

function navStyle() {
    primaryNav.querySelectorAll('li').forEach(e => {
        e.style.color = 'black';
        e.children[0].style.fill = 'black';
    })
}


document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.side-bar').classList.toggle('active');
})
})();

/******/ })()
;
//# sourceMappingURL=main94fa2a0b541775112bb7.bundle.js.map