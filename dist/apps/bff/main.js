/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const app_controller_1 = __webpack_require__(5);
const app_service_1 = __webpack_require__(6);
const config_1 = __webpack_require__(8);
const configuration_1 = __webpack_require__(9);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
AppModule.CONFIGURATION = configuration_1.CONFIGURATION;
exports.AppModule = AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot({ isGlobal: true, load: [() => configuration_1.CONFIGURATION] })],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);


/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const app_service_1 = __webpack_require__(6);
const common_constant_1 = __webpack_require__(7);
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        console.log(common_constant_1.PORT);
        return this.appService.getData();
    }
};
exports.AppController = AppController;
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "getData", null);
exports.AppController = AppController = tslib_1.__decorate([
    (0, common_1.Controller)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
let AppService = class AppService {
    getData() {
        return { message: 'Hello API' };
    }
};
exports.AppService = AppService;
exports.AppService = AppService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], AppService);


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PORT = void 0;
exports.PORT = 3000;


/***/ }),
/* 8 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CONFIGURATION = void 0;
const base_config_1 = __webpack_require__(10);
const app_config_1 = __webpack_require__(11);
class Configuration extends base_config_1.BaseConfiguration {
    constructor() {
        super(...arguments);
        this.APP_CONFIG = new app_config_1.AppConfiguration();
    }
}
exports.CONFIGURATION = new Configuration();


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseConfiguration = void 0;
class BaseConfiguration {
    constructor() {
        this.NODE_ENV = process.env['NODE_ENV'] || 'development';
        this.GLOBAL_PREFIX = process.env['GLOBAL_PREFIX'] || 'api';
        this.IS_DEV = process.env['IS_DEV'] === 'false';
    }
}
exports.BaseConfiguration = BaseConfiguration;


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppConfiguration = void 0;
class AppConfiguration {
    constructor() {
        this.PORT = process.env['PORT'] ? parseInt(process.env['PORT'], 10) : 3000;
    }
}
exports.AppConfiguration = AppConfiguration;


/***/ }),
/* 12 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ })
/******/ 	]);
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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(1);
const core_1 = __webpack_require__(2);
const app_module_1 = __webpack_require__(3);
const swagger_1 = __webpack_require__(12);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const globalPrefix = app_module_1.AppModule.CONFIGURATION.GLOBAL_PREFIX || 'api';
    app.setGlobalPrefix(globalPrefix);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('E Bff API')
        .setDescription('The bff API description')
        .setVersion('1.0')
        .addTag('bff')
        .addBearerAuth({
        description: 'JWT Authorization header using the Bearer scheme',
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'Authorization',
        in: 'header',
    })
        .build();
    const documentFactory = () => swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup(`${globalPrefix}/docs`, app, documentFactory);
    const port = app_module_1.AppModule.CONFIGURATION.APP_CONFIG.PORT || 3000;
    await app.listen(port);
    common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}
bootstrap();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map