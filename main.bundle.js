webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_lottery_lottery_component__ = __webpack_require__("../../../../../src/app/components/lottery/lottery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__components_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'lottery/:address', component: __WEBPACK_IMPORTED_MODULE_2__components_lottery_lottery_component__["a" /* LotteryComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-body app-body--background\">\n\n    <div [hidden]=\"isAppLoaded\"\n         class=\"app-loading\">\n        <div class=\"logo\"></div>\n        <h1 class=\"color-loop\">loading</h1>\n\n        <span [ngClass]=\"{'show': retryConnect > 0}\">\n            {{retryConnect}}<br>\n            attempts to connect\n        </span>\n        <span [ngClass]=\"{'show': retryConnect > 5}\">\n            Please check if META MASK is working or your GETH node was started with these options:<br>\n            <i>./geth --testnet --fast --rpc --rpcapi db,eth,net,web3,personal --rpccorsdomain=\"*\"</i>\n        </span>\n        <span [ngClass]=\"{'show': retryConnect > 10}\">\n            You may refresh this page and check again GETH and METAMASK\n        </span>\n        <span [ngClass]=\"{'show': retryConnect > 15}\">\n            Don't dive up.. this will connect :D\n        </span>\n    </div>\n\n    <div [ngClass]=\"{'is-loaded': isWeb3Connected}\"\n         class=\"app-content\">\n\n        <header>\n            <h1 class=\"logo-pic\">\n                E-LOTHERY <i>alpha</i>\n            </h1>\n            <app-connection-status></app-connection-status>\n        </header>\n\n        <router-outlet></router-outlet>\n    </div>\n\n</div>\n\n\n<!--<button (click)=\"getAccounts()\">bet contracts</button>-->\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".color-loop, .app-loading span .loading {\n  -webkit-animation: color-loop 1s infinite;\n          animation: color-loop 1s infinite; }\n\n.bg-loop {\n  -webkit-animation: bg-loop 1s infinite;\n          animation: bg-loop 1s infinite; }\n\n@-webkit-keyframes color-loop {\n  0% {\n    color: red; }\n  25% {\n    color: yellow; }\n  50% {\n    color: blue; }\n  75% {\n    color: green; }\n  100% {\n    color: red; } }\n\n@keyframes color-loop {\n  0% {\n    color: red; }\n  25% {\n    color: yellow; }\n  50% {\n    color: blue; }\n  75% {\n    color: green; }\n  100% {\n    color: red; } }\n\n@-webkit-keyframes bg-loop {\n  0% {\n    background: red !important; }\n  25% {\n    background: yellow !important; }\n  50% {\n    background: blue !important; }\n  75% {\n    background: green !important; }\n  100% {\n    background: red !important; } }\n\n@keyframes bg-loop {\n  0% {\n    background: red !important; }\n  25% {\n    background: yellow !important; }\n  50% {\n    background: blue !important; }\n  75% {\n    background: green !important; }\n  100% {\n    background: red !important; } }\n\n.app-body {\n  overflow-x: hidden;\n  font-family: \"FilsonProMedium\"; }\n  .app-body--background {\n    height: 100%;\n    position: relative;\n    color: aliceblue;\n    z-index: 0; }\n    .app-body--background:after, .app-body--background:before {\n      left: 0;\n      right: 0;\n      top: 0;\n      bottom: 0;\n      z-index: -1;\n      content: '';\n      position: absolute;\n      opacity: 0.7; }\n    .app-body--background:before {\n      background: url(" + __webpack_require__("../../../../../src/assets/images/backgrounds/bg-top.jpg") + ") top center no-repeat;\n      background-size: 110%; }\n    .app-body--background:after {\n      background: url(" + __webpack_require__("../../../../../src/assets/images/backgrounds/bg-bottom.jpg") + ") bottom center no-repeat;\n      background-size: 150%; }\n    @media (max-width: 768px) {\n      .app-body--background:after, .app-body--background:before {\n        background-size: 800px; } }\n  @media (min-width: 768px) {\n    .app-body {\n      box-shadow: 0 20px 500px rgba(255, 255, 255, 0.1);\n      max-width: 600px;\n      margin: auto; } }\n\n.app-loading {\n  position: absolute;\n  right: 0;\n  left: 0;\n  text-align: center; }\n  .app-loading .logo {\n    width: 200px;\n    display: block;\n    height: 200px;\n    margin: 100px auto 0; }\n  .app-loading span {\n    line-height: 20px;\n    font-size: 12px;\n    opacity: 0.6;\n    display: none;\n    margin: 20px; }\n    .app-loading span.show {\n      display: block !important; }\n\n.app-content {\n  opacity: 0;\n  -webkit-transform: translate3d(0px, -50px, 0px);\n          transform: translate3d(0px, -50px, 0px);\n  padding: 20px; }\n  .app-content.is-loaded {\n    transition: all .4s ease;\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; }\n\nheader {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  header h1 {\n    font-size: 18px;\n    padding: 10px 0 10px 40px; }\n  header i {\n    font-size: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_geth_connect_geth_connect_service__ = __webpack_require__("../../../../../src/app/services/geth-connect/geth-connect.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_state_api_state_service__ = __webpack_require__("../../../../../src/app/services/api-state/api-state.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    /**
     *
     * @param {GethConnectService} connectService
     * @param {ApiStateService} apiStateService
     */
    function AppComponent(connectService, apiStateService) {
        this.connectService = connectService;
        this.apiStateService = apiStateService;
        this.isAppLoaded = false;
        this.retryConnect = 0;
    }
    AppComponent.prototype.loadApp = function (data) {
        this.currentNodeConnection = data;
    };
    AppComponent.prototype.keepAlive = function () {
        var _this = this;
        setInterval(function () {
            _this.isWeb3Connected = _this.connectService.isConnected();
            _this.connectService.setConnected(_this.isWeb3Connected);
        }, 2000);
    };
    AppComponent.prototype.tryReconnect = function () {
        var _this = this;
        setTimeout(function () {
            _this.retryConnect++;
            _this.connectService.startConnection().then(function (data) { return _this.updateConnectionStatus(data); });
        }, 2000);
    };
    AppComponent.prototype.updateConnectionStatus = function (data) {
        if (data.isConnected) {
            this.loadApp(data);
            this.keepAlive();
        }
        else {
            this.tryReconnect();
        }
    };
    AppComponent.prototype.onApiServiceWasChanged = function (apiState) {
        this.isAppLoaded = apiState.isLoaded;
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.connectService.startConnection().then(function (data) { return _this.updateConnectionStatus(data); });
        this.apiStateService.setIsApiLoaded({ isLoaded: false });
        this.apiStateService.getIsApiLoaded().subscribe(function (apiState) {
            _this.onApiServiceWasChanged(apiState);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_geth_connect_geth_connect_service__["a" /* GethConnectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_geth_connect_geth_connect_service__["a" /* GethConnectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_state_api_state_service__["a" /* ApiStateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_api_state_api_state_service__["a" /* ApiStateService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_lottery_lottery_component__ = __webpack_require__("../../../../../src/app/components/lottery/lottery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_geth_connect_geth_connect_service__ = __webpack_require__("../../../../../src/app/services/geth-connect/geth-connect.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_geth_contract_geth_contract_service__ = __webpack_require__("../../../../../src/app/services/geth-contract/geth-contract.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_geth_contract_manager_geth_contract_manager_service__ = __webpack_require__("../../../../../src/app/services/geth-contract-manager/geth-contract-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_connection_status_connection_status_component__ = __webpack_require__("../../../../../src/app/components/connection-status/connection-status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_storage_storage_service__ = __webpack_require__("../../../../../src/app/services/storage/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_api_state_api_state_service__ = __webpack_require__("../../../../../src/app/services/api-state/api-state.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_lottery_lottery_component__["a" /* LotteryComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_connection_status_connection_status_component__["a" /* ConnectionStatusComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_http__["b" /* JsonpModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__services_geth_connect_geth_connect_service__["a" /* GethConnectService */],
            __WEBPACK_IMPORTED_MODULE_8__services_geth_contract_geth_contract_service__["a" /* GethContractService */],
            __WEBPACK_IMPORTED_MODULE_9__services_geth_contract_manager_geth_contract_manager_service__["a" /* GethContractManagerService */],
            __WEBPACK_IMPORTED_MODULE_11__services_storage_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_13__services_api_state_api_state_service__["a" /* ApiStateService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/connection-status/connection-status.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"connection-status\">\n    Status <span [ngClass]=\"{'is-connected': isWeb3Connected}\"></span>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/connection-status/connection-status.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".color-loop {\n  -webkit-animation: color-loop 1s infinite;\n          animation: color-loop 1s infinite; }\n\n.bg-loop {\n  -webkit-animation: bg-loop 1s infinite;\n          animation: bg-loop 1s infinite; }\n\n@-webkit-keyframes color-loop {\n  0% {\n    color: red; }\n  25% {\n    color: yellow; }\n  50% {\n    color: blue; }\n  75% {\n    color: green; }\n  100% {\n    color: red; } }\n\n@keyframes color-loop {\n  0% {\n    color: red; }\n  25% {\n    color: yellow; }\n  50% {\n    color: blue; }\n  75% {\n    color: green; }\n  100% {\n    color: red; } }\n\n@-webkit-keyframes bg-loop {\n  0% {\n    background: red !important; }\n  25% {\n    background: yellow !important; }\n  50% {\n    background: blue !important; }\n  75% {\n    background: green !important; }\n  100% {\n    background: red !important; } }\n\n@keyframes bg-loop {\n  0% {\n    background: red !important; }\n  25% {\n    background: yellow !important; }\n  50% {\n    background: blue !important; }\n  75% {\n    background: green !important; }\n  100% {\n    background: red !important; } }\n\n.connection-status {\n  font-size: 12px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 10px 0; }\n  .connection-status span {\n    background: red;\n    border-radius: 100%;\n    width: 14px;\n    height: 14px;\n    display: inline-block;\n    margin: -2px 0 0 7px; }\n    .connection-status span.is-connected {\n      background: greenyellow; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/connection-status/connection-status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_geth_connect_geth_connect_service__ = __webpack_require__("../../../../../src/app/services/geth-connect/geth-connect.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionStatusComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConnectionStatusComponent = (function () {
    function ConnectionStatusComponent(connectService) {
        this.connectService = connectService;
    }
    ConnectionStatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.connectService.getConnected().subscribe(function (connected) {
            _this.isWeb3Connected = connected;
        });
    };
    return ConnectionStatusComponent;
}());
ConnectionStatusComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-connection-status',
        template: __webpack_require__("../../../../../src/app/components/connection-status/connection-status.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/connection-status/connection-status.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_geth_connect_geth_connect_service__["a" /* GethConnectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_geth_connect_geth_connect_service__["a" /* GethConnectService */]) === "function" && _a || Object])
], ConnectionStatusComponent);

var _a;
//# sourceMappingURL=connection-status.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard\">\n    <h1>\n        Pick a lottery to play <a (click)=\"refreshList()\">refresh list</a>\n    </h1>\n\n    <ul [ngClass]=\"{'is-loaded': !isLoading}\"\n        class=\"lottery-list\">\n        <li *ngFor=\"let contract of contracts\">\n            <a routerLink=\"/lottery/{{contract.address}}\" [ngClass]=\"{'open': contract?.open}\">\n                <h1>Jackpot: <span\n                        [innerHtml]=\"(contract?.total - (contract?.total*(contract?.ownerFee/100)))/1000000000000000000\"></span>\n                    ETH\n                </h1>\n                <h1>Total: <span [innerHtml]=\"contract?.total/1000000000000000000\"></span> / <span\n                        [innerHtml]=\"contract?.jackpot/1000000000000000000\"></span>ETH</h1>\n                <h1>Fee: <span [innerHtml]=\"contract?.fee/1000000000000000000\"></span> ETH</h1>\n                <h1>Owner fee: <span [innerHtml]=\"contract?.ownerFee\"></span> %</h1>\n                <h1>Result: <span [innerHtml]=\"contract?.result\"></span></h1>\n                <h1>Open: <span [innerHtml]=\"contract?.open\"></span></h1>\n            </a>\n        </li>\n    </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".color-loop {\n  -webkit-animation: color-loop 1s infinite;\n          animation: color-loop 1s infinite; }\n\n.bg-loop {\n  -webkit-animation: bg-loop 1s infinite;\n          animation: bg-loop 1s infinite; }\n\n@-webkit-keyframes color-loop {\n  0% {\n    color: red; }\n  25% {\n    color: yellow; }\n  50% {\n    color: blue; }\n  75% {\n    color: green; }\n  100% {\n    color: red; } }\n\n@keyframes color-loop {\n  0% {\n    color: red; }\n  25% {\n    color: yellow; }\n  50% {\n    color: blue; }\n  75% {\n    color: green; }\n  100% {\n    color: red; } }\n\n@-webkit-keyframes bg-loop {\n  0% {\n    background: red !important; }\n  25% {\n    background: yellow !important; }\n  50% {\n    background: blue !important; }\n  75% {\n    background: green !important; }\n  100% {\n    background: red !important; } }\n\n@keyframes bg-loop {\n  0% {\n    background: red !important; }\n  25% {\n    background: yellow !important; }\n  50% {\n    background: blue !important; }\n  75% {\n    background: green !important; }\n  100% {\n    background: red !important; } }\n\n.dashboard {\n  margin-top: 20px; }\n  .dashboard h1 {\n    font-size: 16px;\n    margin: 5px 0; }\n  .dashboard ul {\n    margin-top: 80px;\n    opacity: 0;\n    transition: all 0.4s ease; }\n    .dashboard ul.is-loaded {\n      opacity: 1;\n      margin-top: 30px; }\n    .dashboard ul li a {\n      display: block;\n      color: #ffffff;\n      text-decoration: none;\n      margin: 25px 0;\n      font-size: 16px;\n      border: 1px solid rgba(187, 57, 204, 0.43);\n      padding: 20px;\n      background: rgba(187, 57, 204, 0.13); }\n      .dashboard ul li a.open {\n        border: 1px solid rgba(104, 214, 2, 0.43);\n        background: rgba(104, 214, 2, 0.13); }\n  .dashboard a {\n    color: #fff;\n    padding: 10px 0;\n    display: block;\n    text-decoration: none; }\n    .dashboard a:hover {\n      text-decoration: underline;\n      color: lightgreen; }\n\nheader {\n  margin-left: -100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_geth_contract_geth_contract_service__ = __webpack_require__("../../../../../src/app/services/geth-contract/geth-contract.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_geth_contract_manager_geth_contract_manager_service__ = __webpack_require__("../../../../../src/app/services/geth-contract-manager/geth-contract-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_geth_connect_geth_connect_service__ = __webpack_require__("../../../../../src/app/services/geth-connect/geth-connect.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_api_state_api_state_service__ = __webpack_require__("../../../../../src/app/services/api-state/api-state.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = (function () {
    /**
     * @param {GethContractService} contractService
     * @param {GethContractManagerService} contractManagerService
     * @param {GethConnectService} connectService
     * @param {ApiStateService} apiStateService
     */
    function DashboardComponent(contractService, contractManagerService, connectService, apiStateService) {
        this.contractService = contractService;
        this.contractManagerService = contractManagerService;
        this.connectService = connectService;
        this.apiStateService = apiStateService;
        this.contracts = [];
        this.isLoading = true;
    }
    DashboardComponent.prototype._loadContractData = function (contracts) {
        var _this = this;
        var contractsPromise = [];
        contracts.forEach(function (contract) {
            contractsPromise.push(_this.contractService.getContractData(contract));
        });
        Promise.all(contractsPromise).then(function (data) {
            _this.contracts = data;
            _this.isLoading = false;
            _this.apiStateService.setIsApiLoaded({ isLoaded: true });
        });
    };
    DashboardComponent.prototype._getContracts = function () {
        // const currentContracts = this.contractManagerService.getCurrentContract();
        var _this = this;
        return new Promise(function (resolve) {
            var currentContracts = _this.contractManagerService.getCurrentContract();
            currentContracts.forEach(function (contractAddress) {
                var _contract = _this.contractService.getContract(contractAddress);
                _contract.address = contractAddress;
                _this.contracts.push(_contract);
            });
            resolve(_this.contracts);
            // this.contractManagerService.getCurrentContract()
            //     .map(res => res.json())
            //     .subscribe(currentContracts => {
            //         currentContracts.forEach(contractAddress => {
            //             const _contract = this.contractService.getContract(contractAddress);
            //             _contract.address = contractAddress;
            //             this.contracts.push(_contract);
            //         });
            //         resolve(this.contracts);
            //     });
        });
    };
    DashboardComponent.prototype.refreshList = function () {
        this.contracts = [];
        this.isLoading = true;
        this.bootstrap();
    };
    DashboardComponent.prototype.bootstrap = function () {
        var _this = this;
        this._getContracts().then(function (contracts) {
            _this._loadContractData(contracts);
        });
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiStateService.setIsApiLoaded({ isLoaded: false });
        var isContractLoaded = false;
        this.getConnectedListener = this.connectService.getConnected().subscribe(function (connected) {
            _this.isConnected = connected;
            if (connected && !isContractLoaded) {
                _this.bootstrap();
                isContractLoaded = !isContractLoaded;
            }
        });
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.getConnectedListener.unsubscribe();
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_geth_contract_geth_contract_service__["a" /* GethContractService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_geth_contract_geth_contract_service__["a" /* GethContractService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_geth_contract_manager_geth_contract_manager_service__["a" /* GethContractManagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_geth_contract_manager_geth_contract_manager_service__["a" /* GethContractManagerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_geth_connect_geth_connect_service__["a" /* GethConnectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_geth_connect_geth_connect_service__["a" /* GethConnectService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_api_state_api_state_service__["a" /* ApiStateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_api_state_api_state_service__["a" /* ApiStateService */]) === "function" && _d || Object])
], DashboardComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/lottery/lottery.component.html":
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/\">< back</a>\n\n<div [ngClass]=\"{'show': isContractLoaded}\" class=\"content\">\n\n    <div>\n        <h3>Open: <span [innerHtml]=\"lotteryData?.open\"></span></h3>\n        <h3>Result: <span [innerHtml]=\"lotteryData?.result\"></span></h3>\n        <h3>Jackpot: <span\n                [innerHtml]=\"(lotteryData?.total - (lotteryData?.total*lotteryData?.ownerFee))/1000000000000000000\"> ETH</span>\n        </h3>\n        <h3>Total: <span [innerHtml]=\"lotteryData?.total/1000000000000000000\"></span>/<span\n                [innerHtml]=\"lotteryData?.jackpot/1000000000000000000\"></span> ETH</h3>\n        <h3>Fee: <span [innerHtml]=\"lotteryData?.fee/1000000000000000000\"></span>ETH</h3>\n        <h3>Owner fee: <span [innerHtml]=\"lotteryData?.ownerFee\"></span> %</h3>\n    </div>\n\n    <div class=\"is-lottery-sync color-loop\" [hidden]=\"isLotterySync\">\n        receiving update\n    </div>\n\n    <div class=\"alerts alert-result\"\n         [ngClass]=\"{'waiting': !lotteryData?.open && !hasResult && (lotteryData?.result === '0x00')}\">\n        <div>\n            Waiting result any moment\n        </div>\n        Closed on block{{blockNumber}} <br>\n        Current Block {{currentBlock}}<br>\n        Remaining blocks {{currentBlock - blockNumber}}\n    </div>\n\n    <!--<button (click)=\"lottery()\">-->\n    <!--lottery-->\n    <!--</button>-->\n\n    <div class=\"play\" [ngClass]=\"{'is-open': lotteryData?.open}\">\n        <h1>Play</h1>\n        <label for=\"accounts\">\n            Choose an account:\n        </label>\n        <div [hidden]=\"accounts?.length > 0\" disabled>Loading...</div>\n        <select #account id=\"accounts\" [hidden]=\"accounts?.length === 0\">\n            <option *ngFor=\"let acount of accounts\">{{acount}}</option>\n        </select>\n\n        <!--<input type=\"password\" #password placeholder=\"password\">-->\n        <div>\n            GAS: <input #gas size=\"10\"\n                        value=\"140000\"\n                        type=\"range\"\n                        min=\"11000\"\n                        max=\"500000\"\n                        step=\"500\">{{gas.value}}\n        </div>\n        <div>\n            <h1>Your bet:</h1>\n            0xD1498F1c4AAafcd1eAA1b6e3594a\n            <select #bet1>\n                <option disabled>$</option>\n                <option *ngFor=\"let bet of bets\" [value]=\"bet\">{{bet}}</option>\n            </select>\n            <select #bet2>\n                <option disabled>$</option>\n                <option *ngFor=\"let bet of bets\" [value]=\"bet\">{{bet}}</option>\n            </select>\n\n            <div [hidden]=\"!isBetValid\"\n                 class=\"alerts\">\n                <div>\n                    Please choose your bet.\n                </div>\n            </div>\n        </div>\n        <button (click)=\"play(account.value, gas.value, bet1.value, bet2.value)\">\n            GO lucky byte, do your magic...\n        </button>\n\n        <div class=\"alerts\">\n            <div class=\"error\" [innerHtml]=\"playErrorMessage\"\n                 *ngIf=\"playErrorMessage\"></div>\n            <div class=\"success\" [innerHtml]=\"playSuccessMessage\"\n                 *ngIf=\"playSuccessMessage\"></div>\n        </div>\n    </div>\n\n    <!--<a (click)=\"checkResult('0xbe')\">result checker</a>-->\n\n    <div class=\"you-win\" [ngClass]=\"{'is-winner' : isWinner}\">\n        YOU WIN!\n    </div>\n\n    <div *ngIf=\"isWinner\">\n        Withdraw\n        <div>\n            <select #accountWithdraw id=\"accounts\">\n                <option *ngFor=\"let acount of accounts\">{{acount}}</option>\n            </select>\n        </div>\n        GAS: <input #gasWithdraw size=\"10\" value=\"140000\">\n        <button (click)=\"withdraw(accountWithdraw.value, gasWithdraw.value)\">withdraw</button>\n        {{withdrawMessage}}\n    </div>\n\n    <div>\n        Lottery:\n        <a href=\"https://ropsten.etherscan.io/address/{{lotteryAddress}}\"\n           target=\"_blank\">\n            {{lotteryAddress}}\n        </a>\n    </div>\n\n\n    <div *ngFor=\"let event of lotteryAllEvents\">\n        {{event.address}}\n        {{event.blockHash}}\n        {{event.blockNumber}}\n        {{event.event}}\n        {{event.transactionHash}}\n    </div>\n\n    <div class=\"bets\" [hidden]=\"lotteryBets.length < 1\">\n        <h2>\n            Your bets [<span [innerHtml]=\"lotteryBets.length\"></span>]\n        </h2>\n        <ul>\n            <li *ngFor=\"let lotteryBet of lotteryBets\" [ngClass]=\"{'is-confirmed' : lotteryBet?.isConfirmed}\">\n                <div>bet 0x{{lotteryBet?.bet}}</div>\n                <p>{{lotteryBet?.timestamp}}</p>\n                <a href=\"https://ropsten.etherscan.io/tx/{{lotteryBet?.newHash}}\" target=\"_blank\">\n                    {{lotteryBet?.newHash}}\n                </a>\n                <i>Transaction confirmed: {{lotteryBet?.isConfirmed}}</i>\n            </li>\n        </ul>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/lottery/lottery.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\n  color: #fff;\n  padding: 10px 0;\n  display: block;\n  text-decoration: none;\n  word-break: break-all; }\n  a:hover {\n    text-decoration: underline;\n    color: lightgreen; }\n\nbutton {\n  margin: 20px 0;\n  cursor: pointer;\n  font-size: 20px;\n  padding: 10px; }\n  button:hover {\n    -webkit-animation: color-loop 1s infinite;\n            animation: color-loop 1s infinite; }\n\ninput {\n  padding: 4px;\n  font-size: 12px; }\n\nselect {\n  color: white; }\n\ndiv {\n  margin: 10px 0; }\n\nh3 {\n  margin: 10px 0; }\n\n.content {\n  opacity: 0;\n  margin-top: 50px;\n  transition: all 0.4s ease; }\n  .content.show {\n    opacity: 1;\n    margin-top: 20px; }\n\n.play {\n  margin: 20px 0;\n  display: none; }\n  .play.is-open {\n    display: block; }\n\n.you-win {\n  text-align: center;\n  background: red;\n  padding: 20px;\n  left: 0;\n  right: 0;\n  display: none; }\n  .you-win.is-winner {\n    display: block; }\n\n.bets span {\n  font-size: 14px; }\n\n.bets li {\n  margin: 20px 0;\n  padding: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  background: rgba(255, 255, 255, 0.1); }\n  .bets li.is-confirmed {\n    border: 1px solid rgba(104, 214, 2, 0.3);\n    background: rgba(104, 214, 2, 0.1); }\n  .bets li i {\n    -webkit-animation: color-loop 1s infinite;\n            animation: color-loop 1s infinite; }\n  .bets li.is-confirmed i {\n    -webkit-animation: none;\n            animation: none; }\n\n.alert-result {\n  display: none; }\n  .alert-result.waiting {\n    display: block;\n    -webkit-animation: color-loop 1s infinite;\n            animation: color-loop 1s infinite; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/lottery/lottery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_geth_contract_geth_contract_service__ = __webpack_require__("../../../../../src/app/services/geth-contract/geth-contract.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_geth_connect_geth_connect_service__ = __webpack_require__("../../../../../src/app/services/geth-connect/geth-connect.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_storage_storage_service__ = __webpack_require__("../../../../../src/app/services/storage/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_api_state_api_state_service__ = __webpack_require__("../../../../../src/app/services/api-state/api-state.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LotteryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LotteryComponent = (function () {
    /**
     *
     * @param activatedRoute
     * @param {GethContractService} contractService
     * @param {GethConnectService} connectService
     * @param {StorageService} storage
     * @param {ApiStateService} apiStateService
     */
    function LotteryComponent(activatedRoute, contractService, connectService, storage, apiStateService) {
        this.activatedRoute = activatedRoute;
        this.contractService = contractService;
        this.connectService = connectService;
        this.storage = storage;
        this.apiStateService = apiStateService;
        this.lotteryAllEvents = [];
        this.isContractLoaded = false;
        this.isBetValid = false;
        this.bets = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.lotteryBets = [];
        this.hasResult = false;
        this._constants = {
            STORAGE_KEY_BETS: '_bets',
            STORAGE_KEY_TOTAL: '_totalEvents'
        };
    }
    LotteryComponent.prototype.withdraw = function (account, gas) {
        var _this = this;
        this._lottery.withdraw(({ from: account, gas: gas }), function (error, withdraw) {
            if (!error) {
                _this.withdrawMessage = withdraw;
            }
            else {
                _this.withdrawMessage = error;
            }
        });
    };
    LotteryComponent.prototype.lottery = function () {
        var _this = this;
        this._lottery.lottery({ from: this.currentAccount, gas: 200000 }, function (error, lottery) {
            if (!error) {
                _this.lotteryMessage = lottery;
            }
            else {
                _this.lotteryMessage = error;
            }
        });
    };
    LotteryComponent.prototype.checkResult = function (result) {
        var _this = this;
        this.storage.get(this.makeStorageName(this._constants.STORAGE_KEY_BETS)).then(function (bets) {
            if (!bets)
                return false;
            bets.forEach(function (bet) {
                var checkResult = (result.args.result === '0x' + bet.bet);
                if (!_this.isWinner && checkResult) {
                    _this.isWinner = true;
                }
            });
        });
    };
    LotteryComponent.prototype.onPlaySuccess = function (result, _bet) {
        this.playErrorMessage = '';
        var timestamp = Date();
        this.lotteryBets.unshift({
            blockNumber: null,
            blockHash: null,
            newHash: result,
            bet: _bet,
            timestamp: timestamp,
            isConfirmed: false
        });
        this.storage.set(this.makeStorageName(this._constants.STORAGE_KEY_BETS), this.lotteryBets);
        this.playSuccessMessage = 'Your bet is made: ' + _bet;
    };
    LotteryComponent.prototype.onPlayError = function (errorMessage) {
        var userDenied = errorMessage.message.indexOf('User denied transaction signature');
        var unknownAddress = errorMessage.message.indexOf('Unknown address');
        if (userDenied > 0) {
            return String('You need to ACCEPT the payment request on MetaMask to continue');
        }
        else if (unknownAddress > 0) {
            return String('Unknown address, please unlock your account on MetaMask');
        }
        else {
            return ('Error message: ' + errorMessage);
        }
    };
    LotteryComponent.prototype.play = function (account, gas, bet1, bet2) {
        var _this = this;
        if (bet1 === '$' || bet2 === '$') {
            this.isBetValid = true;
            return;
        }
        var _bet = bet1 + bet2;
        this.isBetValid = false;
        this._lottery.play(_bet, { from: account, value: this.lotteryData.fee, gas: gas }, function (error, result) {
            if (error) {
                _this.playErrorMessage = _this.onPlayError(error);
            }
            else {
                _this.onPlaySuccess(result, _bet);
            }
        });
    };
    LotteryComponent.prototype.makeStorageName = function (name) {
        return this.lotteryAddress + name;
    };
    LotteryComponent.prototype.updateLotteryBets = function (total) {
        if (this.lotteryBets.length > 0) {
            this.lotteryBets.forEach(function (bet) {
                if (!bet.isConfirmed) {
                    bet.isConfirmed = total.transactionHash === bet.newHash;
                }
            });
            this.storage.set(this.makeStorageName(this._constants.STORAGE_KEY_BETS), this.lotteryBets);
        }
    };
    LotteryComponent.prototype.updateContractTotal = function (total) {
        if (!this._totalEvents) {
            this._totalEvents = [];
        }
        this.lotteryData.total = total.args.total;
        this._totalEvents.push(total);
        this.storage.set(this.makeStorageName(this._constants.STORAGE_KEY_TOTAL), this._totalEvents);
        this.updateLotteryBets(total);
    };
    LotteryComponent.prototype.updateContractResult = function (result) {
        this.lotteryData.result = result.args.result;
        this.checkResult(result);
    };
    LotteryComponent.prototype.updateContractOpen = function (open) {
        this.lotteryData.open = open.args.open;
        if (!open.args.open) {
            this.blockNumber = open.blockNumber;
        }
    };
    LotteryComponent.prototype.updateContractAllEvents = function (event) {
        this.lotteryAllEvents.push(event);
        if (event.event === 'Open') {
            this.updateContractOpen(event);
        }
        if (event.event === 'Total') {
            this.updateContractTotal(event);
        }
        if (event.event === 'Result') {
            this.hasResult = true;
            this.checkResult(event);
        }
        this.isLotterySync = true;
    };
    LotteryComponent.prototype.setListeners = function () {
        var _this = this;
        var that = this;
        window.web3.eth.getBlockNumber(function (e, result) {
            var block = result - 100000;
            var allEvents = that._lottery.allEvents({ fromBlock: block, toBlock: 'latest' });
            allEvents.watch(function (error, event) {
                that.updateContractAllEvents(event);
            });
        });
        this._lottery.Total(function (error, total) {
            if (!error) {
                _this.updateContractTotal(total);
            }
        });
        this._lottery.Result(function (error, result) {
            if (!error) {
                _this.updateContractResult(result);
            }
        });
        this._lottery.Open(function (error, open) {
            if (!error) {
                _this.updateContractOpen(open);
            }
        });
    };
    LotteryComponent.prototype.getAccounts = function () {
        var _this = this;
        return window.web3.eth.getAccounts(function (error, accounts) {
            if (!error) {
                _this.accounts = accounts;
                _this.currentAccount = accounts[0];
                if (accounts.length === 0) {
                    alert('Please unlock your account and refresh this page');
                }
            }
        });
    };
    // TODO Move this method to lottery service
    LotteryComponent.prototype.loadLotteryBets = function () {
        var _this = this;
        this.storage.get(this.makeStorageName(this._constants.STORAGE_KEY_BETS)).then(function (bets) {
            _this.lotteryBets = bets;
            if (!bets) {
                _this.lotteryBets = [];
            }
        });
    };
    LotteryComponent.prototype.loadLottery = function () {
        var _this = this;
        this.apiStateService.setIsApiLoaded({ isLoaded: true });
        this._lottery = this.contractService.getContract(this.lotteryAddress);
        this.contractService.getContractData(this._lottery).then(function (data) {
            _this.lotteryData = data;
            _this.setListeners();
            _this.getAccounts();
            _this.loadLotteryBets();
        });
    };
    LotteryComponent.prototype.updateBlockNumber = function () {
        var _this = this;
        window.web3.eth.getBlockNumber(function (error, block) {
            if (error) {
                return false;
            }
            _this.currentBlock = block;
            _this.remaimingBlocks = _this.currentBlock - _this.blockNumber;
        });
    };
    LotteryComponent.prototype.bootstrap = function () {
        var _this = this;
        this.isContractLoaded = false;
        this.isLotterySync = false;
        // This listener will be updated every 2 seconds.
        this._getConnectedListener = this.connectService.getConnected().subscribe(function (connected) {
            _this.isConnected = connected;
            if (connected) {
                _this.updateBlockNumber();
            }
            if (connected && !_this.isContractLoaded) {
                _this.loadLottery();
                _this.isContractLoaded = !_this.isContractLoaded;
            }
        });
    };
    LotteryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.lotteryAddress = params['address'];
            _this.bootstrap();
        });
        this.apiStateService.setIsApiLoaded({ isLoaded: false });
    };
    LotteryComponent.prototype.ngOnDestroy = function () {
        this._getConnectedListener.unsubscribe();
    };
    return LotteryComponent;
}());
LotteryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-lottery',
        template: __webpack_require__("../../../../../src/app/components/lottery/lottery.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/lottery/lottery.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_geth_contract_geth_contract_service__["a" /* GethContractService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_geth_contract_geth_contract_service__["a" /* GethContractService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_geth_connect_geth_connect_service__["a" /* GethConnectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_geth_connect_geth_connect_service__["a" /* GethConnectService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_storage_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_storage_storage_service__["a" /* StorageService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_api_state_api_state_service__["a" /* ApiStateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_api_state_api_state_service__["a" /* ApiStateService */]) === "function" && _e || Object])
], LotteryComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=lottery.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/api-state/api-state.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiStateService; });

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiStateService = (function () {
    function ApiStateService() {
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    ApiStateService.prototype.setIsApiLoaded = function (apiState) {
        this.apiState = apiState;
        this.subject.next(apiState);
    };
    ApiStateService.prototype.getIsApiLoaded = function () {
        return this.subject.asObservable();
    };
    return ApiStateService;
}());
ApiStateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ApiStateService);

//# sourceMappingURL=api-state.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/geth-connect/geth-connect.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_web3__ = __webpack_require__("../../../../web3/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_web3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GethConnectService; });

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GethConnectService = (function () {
    function GethConnectService() {
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    GethConnectService.prototype.setConnected = function (connected) {
        this.connected = connected;
        this.subject.next(connected);
    };
    GethConnectService.prototype.getConnected = function () {
        return this.subject.asObservable();
    };
    GethConnectService.prototype.isConnected = function () {
        return window.web3.isConnected();
    };
    GethConnectService.prototype.startConnection = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (typeof window.web3 !== 'undefined' && window.web3.currentProvider.host !== 'http://localhost:8545') {
                window.web3 = new window.Web3(window.web3.currentProvider);
                console.warn('You are connected to MetaMask');
                resolve({ server: 'MetaMask', isConnected: true });
            }
            else {
                window.web3 = new __WEBPACK_IMPORTED_MODULE_1_web3___default.a(new __WEBPACK_IMPORTED_MODULE_1_web3___default.a.providers.HttpProvider('http://localhost:8545'));
                if (window.web3 && _this.isConnected()) {
                    resolve({ server: 'localhost', isConnected: true });
                    console.warn('You are connected to localhost');
                }
                else {
                    resolve({ server: 'localhost', isConnected: false });
                }
            }
        });
    };
    return GethConnectService;
}());
GethConnectService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], GethConnectService);

//# sourceMappingURL=geth-connect.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/geth-contract-manager/contracts.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return contracts; });
var contracts = {
    apiData: [
        '0xb7953cf6475d1094517934bf94b2F4442C0224f7',
        '0x77566235f72025cbdeCe35CAec98C6983492056c',
        '0x5d454F71354a5A84D03Fd8d0DADFAe320c25CCA4',
        '0x3b79664E14B4Da79fb58B9Ca4BCFd6905f53f67C',
    ]
};
//# sourceMappingURL=contracts.js.map

/***/ }),

/***/ "../../../../../src/app/services/geth-contract-manager/geth-contract-manager.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contracts__ = __webpack_require__("../../../../../src/app/services/geth-contract-manager/contracts.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GethContractManagerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GethContractManagerService = (function () {
    function GethContractManagerService(http) {
        this.http = http;
        this.contractsUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl;
    }
    GethContractManagerService.prototype.getCurrentContract = function () {
        return __WEBPACK_IMPORTED_MODULE_4__contracts__["a" /* contracts */].apiData;
        // return this.http.get(this.contractsUrl);
    };
    return GethContractManagerService;
}());
GethContractManagerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], GethContractManagerService);

var _a;
//# sourceMappingURL=geth-contract-manager.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/geth-contract/abi.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var abi = [{
        'constant': true,
        'inputs': [],
        'name': 'owner_fee',
        'outputs': [{ 'name': '', 'type': 'uint256' }],
        'payable': false,
        'type': 'function'
    }, {
        'constant': false,
        'inputs': [],
        'name': 'destruct',
        'outputs': [],
        'payable': false,
        'type': 'function'
    }, {
        'constant': true,
        'inputs': [],
        'name': 'total',
        'outputs': [{ 'name': '', 'type': 'uint256' }],
        'payable': false,
        'type': 'function'
    }, {
        'constant': false,
        'inputs': [],
        'name': 'withdraw',
        'outputs': [],
        'payable': false,
        'type': 'function'
    }, {
        'constant': false,
        'inputs': [{ 'name': '_char', 'type': 'bytes1' }],
        'name': 'lottery',
        'outputs': [],
        'payable': false,
        'type': 'function'
    }, {
        'constant': true,
        'inputs': [],
        'name': 'result',
        'outputs': [{ 'name': '', 'type': 'bytes1' }],
        'payable': false,
        'type': 'function'
    }, {
        'constant': true,
        'inputs': [],
        'name': 'jackpot',
        'outputs': [{ 'name': '', 'type': 'uint256' }],
        'payable': false,
        'type': 'function'
    }, {
        'constant': true,
        'inputs': [],
        'name': 'owner',
        'outputs': [{ 'name': '', 'type': 'address' }],
        'payable': false,
        'type': 'function'
    }, {
        'constant': false,
        'inputs': [{ 'name': '_char', 'type': 'bytes1' }],
        'name': 'play',
        'outputs': [],
        'payable': true,
        'type': 'function'
    }, {
        'constant': true,
        'inputs': [],
        'name': 'fee',
        'outputs': [{ 'name': '', 'type': 'uint256' }],
        'payable': false,
        'type': 'function'
    }, {
        'constant': true,
        'inputs': [],
        'name': 'open',
        'outputs': [{ 'name': '', 'type': 'bool' }],
        'payable': false,
        'type': 'function'
    }, {
        'inputs': [{ 'name': '_fee', 'type': 'uint256' }, { 'name': '_jackpot', 'type': 'uint256' }, {
                'name': '_owner_fee',
                'type': 'uint256'
            }], 'payable': false, 'type': 'constructor'
    }, {
        'anonymous': false,
        'inputs': [{ 'indexed': false, 'name': 'total', 'type': 'uint256' }],
        'name': 'Total',
        'type': 'event'
    }, {
        'anonymous': false,
        'inputs': [{ 'indexed': false, 'name': 'result', 'type': 'bytes1' }],
        'name': 'Result',
        'type': 'event'
    }, {
        'anonymous': false,
        'inputs': [{ 'indexed': false, 'name': 'open', 'type': 'bool' }],
        'name': 'Open',
        'type': 'event'
    }];
/* harmony default export */ __webpack_exports__["a"] = (abi);
//# sourceMappingURL=abi.js.map

/***/ }),

/***/ "../../../../../src/app/services/geth-contract/geth-contract.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abi__ = __webpack_require__("../../../../../src/app/services/geth-contract/abi.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GethContractService; });

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GethContractService = (function () {
    function GethContractService() {
    }
    GethContractService.prototype.getResult = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._contract.result(function (error, result) {
                if (error) {
                    reject(error);
                }
                resolve(result);
            });
        });
    };
    GethContractService.prototype.getTotal = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._contract.total(function (error, total) {
                if (error) {
                    reject(error);
                }
                resolve(total);
            });
        });
    };
    GethContractService.prototype.getOwnerFee = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._contract.owner_fee(function (error, owner_fee) {
                if (error) {
                    reject(error);
                }
                resolve(owner_fee);
            });
        });
    };
    GethContractService.prototype.getFee = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._contract.fee(function (error, fee) {
                if (error) {
                    reject(error);
                }
                resolve(fee);
            });
        });
    };
    GethContractService.prototype.getIsOpen = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._contract.open(function (error, isOpen) {
                if (error) {
                    reject(error);
                }
                resolve(isOpen);
            });
        });
    };
    GethContractService.prototype.getJackpot = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._contract.jackpot(function (error, jackpot) {
                if (error) {
                    reject(error);
                }
                resolve(jackpot);
            });
        });
    };
    GethContractService.prototype.getName = function () {
        return new Promise(function (resolve, reject) {
            // this._contract.name((error, name) => {
            //     if (error) {
            //         reject(error);
            //     }
            //     resolve(name);
            // });
            setTimeout(function () {
                resolve('');
            }, 100);
        });
    };
    GethContractService.prototype.getContractData = function (contract) {
        var _this = this;
        this._contract = contract;
        return Promise.all([this.getIsOpen(),
            this.getFee(),
            this.getOwnerFee(),
            this.getTotal(),
            this.getResult(),
            this.getName(),
            this.getJackpot()
        ]).then(function (values) {
            return _this._contractData = {
                open: values[0],
                fee: values[1],
                ownerFee: values[2],
                total: values[3],
                result: values[4],
                name: values[5],
                jackpot: values[6],
                address: contract.address
            };
        });
    };
    /**
     *
     * @param {String} contractAddress
     */
    GethContractService.prototype.getContract = function (contractAddress) {
        return window.web3.eth.contract(__WEBPACK_IMPORTED_MODULE_1__abi__["a" /* default */]).at(contractAddress);
    };
    return GethContractService;
}());
GethContractService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], GethContractService);

//# sourceMappingURL=geth-contract.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/storage/storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StorageService = (function () {
    function StorageService() {
    }
    StorageService.prototype.get = function (key) {
        return new Promise(function (resolve, reject) {
            resolve(JSON.parse(localStorage.getItem(key)));
        });
    };
    StorageService.prototype.set = function (key, value) {
        return new Promise(function (resolve, reject) {
            localStorage.setItem(key, JSON.stringify(value));
            resolve(true);
        });
    };
    StorageService.prototype.remove = function (key) {
        return new Promise(function (resolve, reject) {
            localStorage.removeItem(key);
            resolve(true);
        });
    };
    StorageService.prototype.isEmpty = function (key) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            return _this.get(key).then((function (data) {
                resolve(data === null);
            }));
        });
    };
    return StorageService;
}());
StorageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], StorageService);

//# sourceMappingURL=storage.service.js.map

/***/ }),

/***/ "../../../../../src/assets/images/backgrounds/bg-bottom.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bg-bottom.6145a1ec1a5c5fb5590d.jpg";

/***/ }),

/***/ "../../../../../src/assets/images/backgrounds/bg-top.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bg-top.caa1e72643ea1f1ce32c.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    apiUrl: 'http://www.mocky.io/v2/5963e85d260000bd013d727b'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map