/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express_promise_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express-promise-router */ \"express-promise-router\");\n/* harmony import */ var express_promise_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express_promise_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @backstage/backend-common */ \"@backstage/backend-common\");\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _backstage_backend_tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @backstage/backend-tasks */ \"@backstage/backend-tasks\");\n/* harmony import */ var _backstage_backend_tasks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_backstage_backend_tasks__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _plugins_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plugins/app */ \"./src/plugins/app.ts\");\n/* harmony import */ var _plugins_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plugins/auth */ \"./src/plugins/auth.ts\");\n/* harmony import */ var _plugins_catalog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plugins/catalog */ \"./src/plugins/catalog.ts\");\n/* harmony import */ var _plugins_scaffolder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plugins/scaffolder */ \"./src/plugins/scaffolder.ts\");\n/* harmony import */ var _plugins_proxy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./plugins/proxy */ \"./src/plugins/proxy.ts\");\n/* harmony import */ var _plugins_techdocs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./plugins/techdocs */ \"./src/plugins/techdocs.ts\");\n/* harmony import */ var _plugins_search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./plugins/search */ \"./src/plugins/search.ts\");\n/* harmony import */ var _plugins_highlights__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./plugins/highlights */ \"./src/plugins/highlights.ts\");\n/* harmony import */ var _backstage_plugin_permission_node__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @backstage/plugin-permission-node */ \"@backstage/plugin-permission-node\");\n/* harmony import */ var _backstage_plugin_permission_node__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_permission_node__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _backstage_plugin_auth_node__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @backstage/plugin-auth-node */ \"@backstage/plugin-auth-node\");\n/* harmony import */ var _backstage_plugin_auth_node__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_auth_node__WEBPACK_IMPORTED_MODULE_12__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n/*\n * Hi!\n *\n * Note that this is an EXAMPLE Backstage backend. Please check the README.\n *\n * Happy hacking!\n */ var _module_hot;\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction makeCreateEnv(config) {\n    const root = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.getRootLogger)();\n    const reader = _backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.UrlReaders.default({\n        logger: root,\n        config\n    });\n    const discovery = _backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.HostDiscovery.fromConfig(config);\n    const cacheManager = _backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.CacheManager.fromConfig(config);\n    const databaseManager = _backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.DatabaseManager.fromConfig(config, {\n        logger: root\n    });\n    const tokenManager = _backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.ServerTokenManager.noop();\n    const taskScheduler = _backstage_backend_tasks__WEBPACK_IMPORTED_MODULE_2__.TaskScheduler.fromConfig(config, {\n        databaseManager\n    });\n    const identity = _backstage_plugin_auth_node__WEBPACK_IMPORTED_MODULE_12__.DefaultIdentityClient.create({\n        discovery\n    });\n    const permissions = _backstage_plugin_permission_node__WEBPACK_IMPORTED_MODULE_11__.ServerPermissionClient.fromConfig(config, {\n        discovery,\n        tokenManager\n    });\n    root.info(`Created UrlReader ${reader}`);\n    return (plugin)=>{\n        const logger = root.child({\n            type: 'plugin',\n            plugin\n        });\n        const database = databaseManager.forPlugin(plugin);\n        const cache = cacheManager.forPlugin(plugin);\n        const scheduler = taskScheduler.forPlugin(plugin);\n        return {\n            logger,\n            database,\n            cache,\n            config,\n            reader,\n            discovery,\n            tokenManager,\n            scheduler,\n            permissions,\n            identity\n        };\n    };\n}\nasync function main() {\n    const config = await (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.loadBackendConfig)({\n        argv: process.argv,\n        logger: (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.getRootLogger)()\n    });\n    const createEnv = makeCreateEnv(config);\n    const catalogEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.useHotMemoize)(module, ()=>createEnv('catalog'));\n    const scaffolderEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.useHotMemoize)(module, ()=>createEnv('scaffolder'));\n    const authEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.useHotMemoize)(module, ()=>createEnv('auth'));\n    const proxyEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.useHotMemoize)(module, ()=>createEnv('proxy'));\n    const techdocsEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.useHotMemoize)(module, ()=>createEnv('techdocs'));\n    const searchEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.useHotMemoize)(module, ()=>createEnv('search'));\n    const appEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.useHotMemoize)(module, ()=>createEnv('app'));\n    const highlightsEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.useHotMemoize)(module, ()=>createEnv('highlights'));\n    const apiRouter = express_promise_router__WEBPACK_IMPORTED_MODULE_0___default()();\n    apiRouter.use('/catalog', await (0,_plugins_catalog__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(catalogEnv));\n    apiRouter.use('/scaffolder', await (0,_plugins_scaffolder__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(scaffolderEnv));\n    apiRouter.use('/auth', await (0,_plugins_auth__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(authEnv));\n    apiRouter.use('/techdocs', await (0,_plugins_techdocs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(techdocsEnv));\n    apiRouter.use('/proxy', await (0,_plugins_proxy__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(proxyEnv));\n    apiRouter.use('/search', await (0,_plugins_search__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(searchEnv));\n    apiRouter.use('/highlights', await (0,_plugins_highlights__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(highlightsEnv));\n    // Add backends ABOVE this line; this 404 handler is the catch-all fallback\n    apiRouter.use((0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.notFoundHandler)());\n    const service = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.createServiceBuilder)(module).loadConfig(config).addRouter('/api', apiRouter).addRouter('', await (0,_plugins_app__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(appEnv));\n    await service.start().catch((err)=>{\n        console.log(err);\n        process.exit(1);\n    });\n}\n(_module_hot = module.hot) === null || _module_hot === void 0 ? void 0 : _module_hot.accept();\nmain().catch((error)=>{\n    console.error('Backend failed to start up', error);\n    process.exit(1);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBTUE7QUFFQTtBQUNBO0FBWUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvc3p5bWtpZXcvYmFja3N0YWdlLWhpZ2hsaWdodHMtcGx1Z2luL3BhY2thZ2VzL2JhY2tlbmQvc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBIaSFcbiAqXG4gKiBOb3RlIHRoYXQgdGhpcyBpcyBhbiBFWEFNUExFIEJhY2tzdGFnZSBiYWNrZW5kLiBQbGVhc2UgY2hlY2sgdGhlIFJFQURNRS5cbiAqXG4gKiBIYXBweSBoYWNraW5nIVxuICovXG5cbmltcG9ydCBSb3V0ZXIgZnJvbSAnZXhwcmVzcy1wcm9taXNlLXJvdXRlcic7XG5pbXBvcnQge1xuICBjcmVhdGVTZXJ2aWNlQnVpbGRlcixcbiAgbG9hZEJhY2tlbmRDb25maWcsXG4gIGdldFJvb3RMb2dnZXIsXG4gIHVzZUhvdE1lbW9pemUsXG4gIG5vdEZvdW5kSGFuZGxlcixcbiAgQ2FjaGVNYW5hZ2VyLFxuICBEYXRhYmFzZU1hbmFnZXIsXG4gIEhvc3REaXNjb3ZlcnksXG4gIFVybFJlYWRlcnMsXG4gIFNlcnZlclRva2VuTWFuYWdlcixcbn0gZnJvbSAnQGJhY2tzdGFnZS9iYWNrZW5kLWNvbW1vbic7XG5pbXBvcnQgeyBUYXNrU2NoZWR1bGVyIH0gZnJvbSAnQGJhY2tzdGFnZS9iYWNrZW5kLXRhc2tzJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJ0BiYWNrc3RhZ2UvY29uZmlnJztcbmltcG9ydCBhcHAgZnJvbSAnLi9wbHVnaW5zL2FwcCc7XG5pbXBvcnQgYXV0aCBmcm9tICcuL3BsdWdpbnMvYXV0aCc7XG5pbXBvcnQgY2F0YWxvZyBmcm9tICcuL3BsdWdpbnMvY2F0YWxvZyc7XG5pbXBvcnQgc2NhZmZvbGRlciBmcm9tICcuL3BsdWdpbnMvc2NhZmZvbGRlcic7XG5pbXBvcnQgcHJveHkgZnJvbSAnLi9wbHVnaW5zL3Byb3h5JztcbmltcG9ydCB0ZWNoZG9jcyBmcm9tICcuL3BsdWdpbnMvdGVjaGRvY3MnO1xuaW1wb3J0IHNlYXJjaCBmcm9tICcuL3BsdWdpbnMvc2VhcmNoJztcbmltcG9ydCBoaWdobGlnaHRzIGZyb20gJy4vcGx1Z2lucy9oaWdobGlnaHRzJztcbmltcG9ydCB7IFBsdWdpbkVudmlyb25tZW50IH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBTZXJ2ZXJQZXJtaXNzaW9uQ2xpZW50IH0gZnJvbSAnQGJhY2tzdGFnZS9wbHVnaW4tcGVybWlzc2lvbi1ub2RlJztcbmltcG9ydCB7IERlZmF1bHRJZGVudGl0eUNsaWVudCB9IGZyb20gJ0BiYWNrc3RhZ2UvcGx1Z2luLWF1dGgtbm9kZSc7XG5cblxuZnVuY3Rpb24gbWFrZUNyZWF0ZUVudihjb25maWc6IENvbmZpZykge1xuICBjb25zdCByb290ID0gZ2V0Um9vdExvZ2dlcigpO1xuICBjb25zdCByZWFkZXIgPSBVcmxSZWFkZXJzLmRlZmF1bHQoeyBsb2dnZXI6IHJvb3QsIGNvbmZpZyB9KTtcbiAgY29uc3QgZGlzY292ZXJ5ID0gSG9zdERpc2NvdmVyeS5mcm9tQ29uZmlnKGNvbmZpZyk7XG4gIGNvbnN0IGNhY2hlTWFuYWdlciA9IENhY2hlTWFuYWdlci5mcm9tQ29uZmlnKGNvbmZpZyk7XG4gIGNvbnN0IGRhdGFiYXNlTWFuYWdlciA9IERhdGFiYXNlTWFuYWdlci5mcm9tQ29uZmlnKGNvbmZpZywgeyBsb2dnZXI6IHJvb3QgfSk7XG4gIGNvbnN0IHRva2VuTWFuYWdlciA9IFNlcnZlclRva2VuTWFuYWdlci5ub29wKCk7XG4gIGNvbnN0IHRhc2tTY2hlZHVsZXIgPSBUYXNrU2NoZWR1bGVyLmZyb21Db25maWcoY29uZmlnLCB7IGRhdGFiYXNlTWFuYWdlciB9KTtcblxuICBjb25zdCBpZGVudGl0eSA9IERlZmF1bHRJZGVudGl0eUNsaWVudC5jcmVhdGUoe1xuICAgIGRpc2NvdmVyeSxcbiAgfSk7XG4gIGNvbnN0IHBlcm1pc3Npb25zID0gU2VydmVyUGVybWlzc2lvbkNsaWVudC5mcm9tQ29uZmlnKGNvbmZpZywge1xuICAgIGRpc2NvdmVyeSxcbiAgICB0b2tlbk1hbmFnZXIsXG4gIH0pO1xuXG4gIHJvb3QuaW5mbyhgQ3JlYXRlZCBVcmxSZWFkZXIgJHtyZWFkZXJ9YCk7XG5cbiAgcmV0dXJuIChwbHVnaW46IHN0cmluZyk6IFBsdWdpbkVudmlyb25tZW50ID0+IHtcbiAgICBjb25zdCBsb2dnZXIgPSByb290LmNoaWxkKHsgdHlwZTogJ3BsdWdpbicsIHBsdWdpbiB9KTtcbiAgICBjb25zdCBkYXRhYmFzZSA9IGRhdGFiYXNlTWFuYWdlci5mb3JQbHVnaW4ocGx1Z2luKTtcbiAgICBjb25zdCBjYWNoZSA9IGNhY2hlTWFuYWdlci5mb3JQbHVnaW4ocGx1Z2luKTtcbiAgICBjb25zdCBzY2hlZHVsZXIgPSB0YXNrU2NoZWR1bGVyLmZvclBsdWdpbihwbHVnaW4pO1xuICAgIHJldHVybiB7XG4gICAgICBsb2dnZXIsXG4gICAgICBkYXRhYmFzZSxcbiAgICAgIGNhY2hlLFxuICAgICAgY29uZmlnLFxuICAgICAgcmVhZGVyLFxuICAgICAgZGlzY292ZXJ5LFxuICAgICAgdG9rZW5NYW5hZ2VyLFxuICAgICAgc2NoZWR1bGVyLFxuICAgICAgcGVybWlzc2lvbnMsXG4gICAgICBpZGVudGl0eSxcbiAgICB9O1xuICB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBtYWluKCkge1xuICBjb25zdCBjb25maWcgPSBhd2FpdCBsb2FkQmFja2VuZENvbmZpZyh7XG4gICAgYXJndjogcHJvY2Vzcy5hcmd2LFxuICAgIGxvZ2dlcjogZ2V0Um9vdExvZ2dlcigpLFxuICB9KTtcbiAgY29uc3QgY3JlYXRlRW52ID0gbWFrZUNyZWF0ZUVudihjb25maWcpO1xuXG4gIGNvbnN0IGNhdGFsb2dFbnYgPSB1c2VIb3RNZW1vaXplKG1vZHVsZSwgKCkgPT4gY3JlYXRlRW52KCdjYXRhbG9nJykpO1xuICBjb25zdCBzY2FmZm9sZGVyRW52ID0gdXNlSG90TWVtb2l6ZShtb2R1bGUsICgpID0+IGNyZWF0ZUVudignc2NhZmZvbGRlcicpKTtcbiAgY29uc3QgYXV0aEVudiA9IHVzZUhvdE1lbW9pemUobW9kdWxlLCAoKSA9PiBjcmVhdGVFbnYoJ2F1dGgnKSk7XG4gIGNvbnN0IHByb3h5RW52ID0gdXNlSG90TWVtb2l6ZShtb2R1bGUsICgpID0+IGNyZWF0ZUVudigncHJveHknKSk7XG4gIGNvbnN0IHRlY2hkb2NzRW52ID0gdXNlSG90TWVtb2l6ZShtb2R1bGUsICgpID0+IGNyZWF0ZUVudigndGVjaGRvY3MnKSk7XG4gIGNvbnN0IHNlYXJjaEVudiA9IHVzZUhvdE1lbW9pemUobW9kdWxlLCAoKSA9PiBjcmVhdGVFbnYoJ3NlYXJjaCcpKTtcbiAgY29uc3QgYXBwRW52ID0gdXNlSG90TWVtb2l6ZShtb2R1bGUsICgpID0+IGNyZWF0ZUVudignYXBwJykpO1xuICBjb25zdCBoaWdobGlnaHRzRW52ID0gdXNlSG90TWVtb2l6ZShtb2R1bGUsICgpID0+IGNyZWF0ZUVudignaGlnaGxpZ2h0cycpKTtcblxuICBjb25zdCBhcGlSb3V0ZXIgPSBSb3V0ZXIoKTtcbiAgYXBpUm91dGVyLnVzZSgnL2NhdGFsb2cnLCBhd2FpdCBjYXRhbG9nKGNhdGFsb2dFbnYpKTtcbiAgYXBpUm91dGVyLnVzZSgnL3NjYWZmb2xkZXInLCBhd2FpdCBzY2FmZm9sZGVyKHNjYWZmb2xkZXJFbnYpKTtcbiAgYXBpUm91dGVyLnVzZSgnL2F1dGgnLCBhd2FpdCBhdXRoKGF1dGhFbnYpKTtcbiAgYXBpUm91dGVyLnVzZSgnL3RlY2hkb2NzJywgYXdhaXQgdGVjaGRvY3ModGVjaGRvY3NFbnYpKTtcbiAgYXBpUm91dGVyLnVzZSgnL3Byb3h5JywgYXdhaXQgcHJveHkocHJveHlFbnYpKTtcbiAgYXBpUm91dGVyLnVzZSgnL3NlYXJjaCcsIGF3YWl0IHNlYXJjaChzZWFyY2hFbnYpKTtcbiAgYXBpUm91dGVyLnVzZSgnL2hpZ2hsaWdodHMnLCBhd2FpdCBoaWdobGlnaHRzKGhpZ2hsaWdodHNFbnYpKTtcblxuICAvLyBBZGQgYmFja2VuZHMgQUJPVkUgdGhpcyBsaW5lOyB0aGlzIDQwNCBoYW5kbGVyIGlzIHRoZSBjYXRjaC1hbGwgZmFsbGJhY2tcbiAgYXBpUm91dGVyLnVzZShub3RGb3VuZEhhbmRsZXIoKSk7XG5cbiAgY29uc3Qgc2VydmljZSA9IGNyZWF0ZVNlcnZpY2VCdWlsZGVyKG1vZHVsZSlcbiAgICAubG9hZENvbmZpZyhjb25maWcpXG4gICAgLmFkZFJvdXRlcignL2FwaScsIGFwaVJvdXRlcilcbiAgICAuYWRkUm91dGVyKCcnLCBhd2FpdCBhcHAoYXBwRW52KSk7XG5cbiAgYXdhaXQgc2VydmljZS5zdGFydCgpLmNhdGNoKGVyciA9PiB7XG4gICAgY29uc29sZS5sb2coZXJyKTtcbiAgICBwcm9jZXNzLmV4aXQoMSk7XG4gIH0pO1xufVxuXG5tb2R1bGUuaG90Py5hY2NlcHQoKTtcbm1haW4oKS5jYXRjaChlcnJvciA9PiB7XG4gIGNvbnNvbGUuZXJyb3IoJ0JhY2tlbmQgZmFpbGVkIHRvIHN0YXJ0IHVwJywgZXJyb3IpO1xuICBwcm9jZXNzLmV4aXQoMSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "./src/plugins/app.ts":
/*!****************************!*\
  !*** ./src/plugins/app.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_plugin_app_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/plugin-app-backend */ \"@backstage/plugin-app-backend\");\n/* harmony import */ var _backstage_plugin_app_backend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_app_backend__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function createPlugin(env) {\n    return await (0,_backstage_plugin_app_backend__WEBPACK_IMPORTED_MODULE_0__.createRouter)({\n        logger: env.logger,\n        config: env.config,\n        database: env.database,\n        appPackageName: 'app'\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9hcHAudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3N6eW1raWV3L2JhY2tzdGFnZS1oaWdobGlnaHRzLXBsdWdpbi9wYWNrYWdlcy9iYWNrZW5kL3NyYy9wbHVnaW5zL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVSb3V0ZXIgfSBmcm9tICdAYmFja3N0YWdlL3BsdWdpbi1hcHAtYmFja2VuZCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IFBsdWdpbkVudmlyb25tZW50IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQbHVnaW4oXG4gIGVudjogUGx1Z2luRW52aXJvbm1lbnQsXG4pOiBQcm9taXNlPFJvdXRlcj4ge1xuICByZXR1cm4gYXdhaXQgY3JlYXRlUm91dGVyKHtcbiAgICBsb2dnZXI6IGVudi5sb2dnZXIsXG4gICAgY29uZmlnOiBlbnYuY29uZmlnLFxuICAgIGRhdGFiYXNlOiBlbnYuZGF0YWJhc2UsXG4gICAgYXBwUGFja2FnZU5hbWU6ICdhcHAnLFxuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/plugins/app.ts\n");

/***/ }),

/***/ "./src/plugins/auth.ts":
/*!*****************************!*\
  !*** ./src/plugins/auth.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_plugin_auth_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/plugin-auth-backend */ \"@backstage/plugin-auth-backend\");\n/* harmony import */ var _backstage_plugin_auth_backend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_auth_backend__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function createPlugin(env) {\n    return await (0,_backstage_plugin_auth_backend__WEBPACK_IMPORTED_MODULE_0__.createRouter)({\n        logger: env.logger,\n        config: env.config,\n        database: env.database,\n        discovery: env.discovery,\n        tokenManager: env.tokenManager,\n        providerFactories: {\n            ..._backstage_plugin_auth_backend__WEBPACK_IMPORTED_MODULE_0__.defaultAuthProviderFactories,\n            // This replaces the default GitHub auth provider with a customized one.\n            // The `signIn` option enables sign-in for this provider, using the\n            // identity resolution logic that's provided in the `resolver` callback.\n            //\n            // This particular resolver makes all users share a single \"guest\" identity.\n            // It should only be used for testing and trying out Backstage.\n            //\n            // If you want to use a production ready resolver you can switch to\n            // the one that is commented out below, it looks up a user entity in the\n            // catalog using the GitHub username of the authenticated user.\n            // That resolver requires you to have user entities populated in the catalog,\n            // for example using https://backstage.io/docs/integrations/github/org\n            //\n            // There are other resolvers to choose from, and you can also create\n            // your own, see the auth documentation for more details:\n            //\n            //   https://backstage.io/docs/auth/identity-resolver\n            github: _backstage_plugin_auth_backend__WEBPACK_IMPORTED_MODULE_0__.providers.github.create({\n                signIn: {\n                    resolver (_, ctx) {\n                        const userRef = 'user:default/guest'; // Must be a full entity reference\n                        return ctx.issueToken({\n                            claims: {\n                                sub: userRef,\n                                ent: [\n                                    userRef\n                                ]\n                            }\n                        });\n                    }\n                }\n            })\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9hdXRoLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBUUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS9zenlta2lldy9iYWNrc3RhZ2UtaGlnaGxpZ2h0cy1wbHVnaW4vcGFja2FnZXMvYmFja2VuZC9zcmMvcGx1Z2lucy9hdXRoLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGNyZWF0ZVJvdXRlcixcbiAgcHJvdmlkZXJzLFxuICBkZWZhdWx0QXV0aFByb3ZpZGVyRmFjdG9yaWVzLFxufSBmcm9tICdAYmFja3N0YWdlL3BsdWdpbi1hdXRoLWJhY2tlbmQnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBQbHVnaW5FbnZpcm9ubWVudCB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUGx1Z2luKFxuICBlbnY6IFBsdWdpbkVudmlyb25tZW50LFxuKTogUHJvbWlzZTxSb3V0ZXI+IHtcbiAgcmV0dXJuIGF3YWl0IGNyZWF0ZVJvdXRlcih7XG4gICAgbG9nZ2VyOiBlbnYubG9nZ2VyLFxuICAgIGNvbmZpZzogZW52LmNvbmZpZyxcbiAgICBkYXRhYmFzZTogZW52LmRhdGFiYXNlLFxuICAgIGRpc2NvdmVyeTogZW52LmRpc2NvdmVyeSxcbiAgICB0b2tlbk1hbmFnZXI6IGVudi50b2tlbk1hbmFnZXIsXG4gICAgcHJvdmlkZXJGYWN0b3JpZXM6IHtcbiAgICAgIC4uLmRlZmF1bHRBdXRoUHJvdmlkZXJGYWN0b3JpZXMsXG5cbiAgICAgIC8vIFRoaXMgcmVwbGFjZXMgdGhlIGRlZmF1bHQgR2l0SHViIGF1dGggcHJvdmlkZXIgd2l0aCBhIGN1c3RvbWl6ZWQgb25lLlxuICAgICAgLy8gVGhlIGBzaWduSW5gIG9wdGlvbiBlbmFibGVzIHNpZ24taW4gZm9yIHRoaXMgcHJvdmlkZXIsIHVzaW5nIHRoZVxuICAgICAgLy8gaWRlbnRpdHkgcmVzb2x1dGlvbiBsb2dpYyB0aGF0J3MgcHJvdmlkZWQgaW4gdGhlIGByZXNvbHZlcmAgY2FsbGJhY2suXG4gICAgICAvL1xuICAgICAgLy8gVGhpcyBwYXJ0aWN1bGFyIHJlc29sdmVyIG1ha2VzIGFsbCB1c2VycyBzaGFyZSBhIHNpbmdsZSBcImd1ZXN0XCIgaWRlbnRpdHkuXG4gICAgICAvLyBJdCBzaG91bGQgb25seSBiZSB1c2VkIGZvciB0ZXN0aW5nIGFuZCB0cnlpbmcgb3V0IEJhY2tzdGFnZS5cbiAgICAgIC8vXG4gICAgICAvLyBJZiB5b3Ugd2FudCB0byB1c2UgYSBwcm9kdWN0aW9uIHJlYWR5IHJlc29sdmVyIHlvdSBjYW4gc3dpdGNoIHRvXG4gICAgICAvLyB0aGUgb25lIHRoYXQgaXMgY29tbWVudGVkIG91dCBiZWxvdywgaXQgbG9va3MgdXAgYSB1c2VyIGVudGl0eSBpbiB0aGVcbiAgICAgIC8vIGNhdGFsb2cgdXNpbmcgdGhlIEdpdEh1YiB1c2VybmFtZSBvZiB0aGUgYXV0aGVudGljYXRlZCB1c2VyLlxuICAgICAgLy8gVGhhdCByZXNvbHZlciByZXF1aXJlcyB5b3UgdG8gaGF2ZSB1c2VyIGVudGl0aWVzIHBvcHVsYXRlZCBpbiB0aGUgY2F0YWxvZyxcbiAgICAgIC8vIGZvciBleGFtcGxlIHVzaW5nIGh0dHBzOi8vYmFja3N0YWdlLmlvL2RvY3MvaW50ZWdyYXRpb25zL2dpdGh1Yi9vcmdcbiAgICAgIC8vXG4gICAgICAvLyBUaGVyZSBhcmUgb3RoZXIgcmVzb2x2ZXJzIHRvIGNob29zZSBmcm9tLCBhbmQgeW91IGNhbiBhbHNvIGNyZWF0ZVxuICAgICAgLy8geW91ciBvd24sIHNlZSB0aGUgYXV0aCBkb2N1bWVudGF0aW9uIGZvciBtb3JlIGRldGFpbHM6XG4gICAgICAvL1xuICAgICAgLy8gICBodHRwczovL2JhY2tzdGFnZS5pby9kb2NzL2F1dGgvaWRlbnRpdHktcmVzb2x2ZXJcbiAgICAgIGdpdGh1YjogcHJvdmlkZXJzLmdpdGh1Yi5jcmVhdGUoe1xuICAgICAgICBzaWduSW46IHtcbiAgICAgICAgICByZXNvbHZlcihfLCBjdHgpIHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJSZWYgPSAndXNlcjpkZWZhdWx0L2d1ZXN0JzsgLy8gTXVzdCBiZSBhIGZ1bGwgZW50aXR5IHJlZmVyZW5jZVxuICAgICAgICAgICAgcmV0dXJuIGN0eC5pc3N1ZVRva2VuKHtcbiAgICAgICAgICAgICAgY2xhaW1zOiB7XG4gICAgICAgICAgICAgICAgc3ViOiB1c2VyUmVmLCAvLyBUaGUgdXNlcidzIG93biBpZGVudGl0eVxuICAgICAgICAgICAgICAgIGVudDogW3VzZXJSZWZdLCAvLyBBIGxpc3Qgb2YgaWRlbnRpdGllcyB0aGF0IHRoZSB1c2VyIGNsYWltcyBvd25lcnNoaXAgdGhyb3VnaFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAvLyByZXNvbHZlcjogcHJvdmlkZXJzLmdpdGh1Yi5yZXNvbHZlcnMudXNlcm5hbWVNYXRjaGluZ1VzZXJFbnRpdHlOYW1lKCksXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICB9LFxuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/plugins/auth.ts\n");

/***/ }),

/***/ "./src/plugins/catalog.ts":
/*!********************************!*\
  !*** ./src/plugins/catalog.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_plugin_catalog_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/plugin-catalog-backend */ \"@backstage/plugin-catalog-backend\");\n/* harmony import */ var _backstage_plugin_catalog_backend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_catalog_backend__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @backstage/plugin-scaffolder-backend */ \"@backstage/plugin-scaffolder-backend\");\n/* harmony import */ var _backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function createPlugin(env) {\n    const builder = await _backstage_plugin_catalog_backend__WEBPACK_IMPORTED_MODULE_0__.CatalogBuilder.create(env);\n    builder.addProcessor(new _backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_1__.ScaffolderEntitiesProcessor());\n    const { processingEngine, router } = await builder.build();\n    await processingEngine.start();\n    return router;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9jYXRhbG9nLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3N6eW1raWV3L2JhY2tzdGFnZS1oaWdobGlnaHRzLXBsdWdpbi9wYWNrYWdlcy9iYWNrZW5kL3NyYy9wbHVnaW5zL2NhdGFsb2cudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2F0YWxvZ0J1aWxkZXIgfSBmcm9tICdAYmFja3N0YWdlL3BsdWdpbi1jYXRhbG9nLWJhY2tlbmQnO1xuaW1wb3J0IHsgU2NhZmZvbGRlckVudGl0aWVzUHJvY2Vzc29yIH0gZnJvbSAnQGJhY2tzdGFnZS9wbHVnaW4tc2NhZmZvbGRlci1iYWNrZW5kJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgUGx1Z2luRW52aXJvbm1lbnQgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBsdWdpbihcbiAgZW52OiBQbHVnaW5FbnZpcm9ubWVudCxcbik6IFByb21pc2U8Um91dGVyPiB7XG4gIGNvbnN0IGJ1aWxkZXIgPSBhd2FpdCBDYXRhbG9nQnVpbGRlci5jcmVhdGUoZW52KTtcbiAgYnVpbGRlci5hZGRQcm9jZXNzb3IobmV3IFNjYWZmb2xkZXJFbnRpdGllc1Byb2Nlc3NvcigpKTtcbiAgY29uc3QgeyBwcm9jZXNzaW5nRW5naW5lLCByb3V0ZXIgfSA9IGF3YWl0IGJ1aWxkZXIuYnVpbGQoKTtcbiAgYXdhaXQgcHJvY2Vzc2luZ0VuZ2luZS5zdGFydCgpO1xuICByZXR1cm4gcm91dGVyO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/plugins/catalog.ts\n");

/***/ }),

/***/ "./src/plugins/highlights.ts":
/*!***********************************!*\
  !*** ./src/plugins/highlights.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _rsc_labs_backstage_highlights_plugin_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rsc-labs/backstage-highlights-plugin-backend */ \"../../plugins/backstage-highlights-plugin-backend/src/index.ts\");\n\nasync function createPlugin(env) {\n    return await (0,_rsc_labs_backstage_highlights_plugin_backend__WEBPACK_IMPORTED_MODULE_0__.createRouter)({\n        discovery: env.discovery,\n        tokenManager: env.tokenManager,\n        logger: env.logger,\n        config: env.config\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9oaWdobGlnaHRzLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFNQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3N6eW1raWV3L2JhY2tzdGFnZS1oaWdobGlnaHRzLXBsdWdpbi9wYWNrYWdlcy9iYWNrZW5kL3NyYy9wbHVnaW5zL2hpZ2hsaWdodHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBjcmVhdGVSb3V0ZXIsXG4gIH0gZnJvbSAnQHJzYy1sYWJzL2JhY2tzdGFnZS1oaWdobGlnaHRzLXBsdWdpbi1iYWNrZW5kJztcbiAgaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XG4gIGltcG9ydCB7IFBsdWdpbkVudmlyb25tZW50IH0gZnJvbSAnLi4vdHlwZXMnO1xuICBcbiAgZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUGx1Z2luKFxuICAgIGVudjogUGx1Z2luRW52aXJvbm1lbnQsXG4gICk6IFByb21pc2U8Um91dGVyPiB7XG4gICAgcmV0dXJuIGF3YWl0IGNyZWF0ZVJvdXRlcih7XG4gICAgICBkaXNjb3Zlcnk6IGVudi5kaXNjb3ZlcnksXG4gICAgICB0b2tlbk1hbmFnZXI6IGVudi50b2tlbk1hbmFnZXIsXG4gICAgICBsb2dnZXI6IGVudi5sb2dnZXIsXG4gICAgICBjb25maWc6IGVudi5jb25maWdcbiAgICB9KTtcbiAgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/plugins/highlights.ts\n");

/***/ }),

/***/ "./src/plugins/proxy.ts":
/*!******************************!*\
  !*** ./src/plugins/proxy.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_plugin_proxy_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/plugin-proxy-backend */ \"@backstage/plugin-proxy-backend\");\n/* harmony import */ var _backstage_plugin_proxy_backend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_proxy_backend__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function createPlugin(env) {\n    return await (0,_backstage_plugin_proxy_backend__WEBPACK_IMPORTED_MODULE_0__.createRouter)({\n        logger: env.logger,\n        config: env.config,\n        discovery: env.discovery\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9wcm94eS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3N6eW1raWV3L2JhY2tzdGFnZS1oaWdobGlnaHRzLXBsdWdpbi9wYWNrYWdlcy9iYWNrZW5kL3NyYy9wbHVnaW5zL3Byb3h5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVJvdXRlciB9IGZyb20gJ0BiYWNrc3RhZ2UvcGx1Z2luLXByb3h5LWJhY2tlbmQnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBQbHVnaW5FbnZpcm9ubWVudCB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUGx1Z2luKFxuICBlbnY6IFBsdWdpbkVudmlyb25tZW50LFxuKTogUHJvbWlzZTxSb3V0ZXI+IHtcbiAgcmV0dXJuIGF3YWl0IGNyZWF0ZVJvdXRlcih7XG4gICAgbG9nZ2VyOiBlbnYubG9nZ2VyLFxuICAgIGNvbmZpZzogZW52LmNvbmZpZyxcbiAgICBkaXNjb3Zlcnk6IGVudi5kaXNjb3ZlcnksXG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/plugins/proxy.ts\n");

/***/ }),

/***/ "./src/plugins/scaffolder.ts":
/*!***********************************!*\
  !*** ./src/plugins/scaffolder.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_catalog_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/catalog-client */ \"@backstage/catalog-client\");\n/* harmony import */ var _backstage_catalog_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_catalog_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @backstage/plugin-scaffolder-backend */ \"@backstage/plugin-scaffolder-backend\");\n/* harmony import */ var _backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function createPlugin(env) {\n    const catalogClient = new _backstage_catalog_client__WEBPACK_IMPORTED_MODULE_0__.CatalogClient({\n        discoveryApi: env.discovery\n    });\n    return await (0,_backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_1__.createRouter)({\n        logger: env.logger,\n        config: env.config,\n        database: env.database,\n        reader: env.reader,\n        catalogClient,\n        identity: env.identity,\n        permissions: env.permissions\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9zY2FmZm9sZGVyLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvc3p5bWtpZXcvYmFja3N0YWdlLWhpZ2hsaWdodHMtcGx1Z2luL3BhY2thZ2VzL2JhY2tlbmQvc3JjL3BsdWdpbnMvc2NhZmZvbGRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXRhbG9nQ2xpZW50IH0gZnJvbSAnQGJhY2tzdGFnZS9jYXRhbG9nLWNsaWVudCc7XG5pbXBvcnQgeyBjcmVhdGVSb3V0ZXIgfSBmcm9tICdAYmFja3N0YWdlL3BsdWdpbi1zY2FmZm9sZGVyLWJhY2tlbmQnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgdHlwZSB7IFBsdWdpbkVudmlyb25tZW50IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQbHVnaW4oXG4gIGVudjogUGx1Z2luRW52aXJvbm1lbnQsXG4pOiBQcm9taXNlPFJvdXRlcj4ge1xuICBjb25zdCBjYXRhbG9nQ2xpZW50ID0gbmV3IENhdGFsb2dDbGllbnQoe1xuICAgIGRpc2NvdmVyeUFwaTogZW52LmRpc2NvdmVyeSxcbiAgfSk7XG5cbiAgcmV0dXJuIGF3YWl0IGNyZWF0ZVJvdXRlcih7XG4gICAgbG9nZ2VyOiBlbnYubG9nZ2VyLFxuICAgIGNvbmZpZzogZW52LmNvbmZpZyxcbiAgICBkYXRhYmFzZTogZW52LmRhdGFiYXNlLFxuICAgIHJlYWRlcjogZW52LnJlYWRlcixcbiAgICBjYXRhbG9nQ2xpZW50LFxuICAgIGlkZW50aXR5OiBlbnYuaWRlbnRpdHksXG4gICAgcGVybWlzc2lvbnM6IGVudi5wZXJtaXNzaW9ucyxcbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/plugins/scaffolder.ts\n");

/***/ }),

/***/ "./src/plugins/search.ts":
/*!*******************************!*\
  !*** ./src/plugins/search.ts ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/backend-common */ \"@backstage/backend-common\");\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _backstage_plugin_search_backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @backstage/plugin-search-backend */ \"@backstage/plugin-search-backend\");\n/* harmony import */ var _backstage_plugin_search_backend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_search_backend__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _backstage_plugin_search_backend_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @backstage/plugin-search-backend-node */ \"@backstage/plugin-search-backend-node\");\n/* harmony import */ var _backstage_plugin_search_backend_node__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_search_backend_node__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _backstage_plugin_catalog_backend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @backstage/plugin-catalog-backend */ \"@backstage/plugin-catalog-backend\");\n/* harmony import */ var _backstage_plugin_catalog_backend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_catalog_backend__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @backstage/plugin-techdocs-backend */ \"@backstage/plugin-techdocs-backend\");\n/* harmony import */ var _backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nasync function createPlugin(env) {\n    // Initialize a connection to a search engine.\n    const searchEngine = new _backstage_plugin_search_backend_node__WEBPACK_IMPORTED_MODULE_2__.LunrSearchEngine({\n        logger: env.logger\n    });\n    const indexBuilder = new _backstage_plugin_search_backend_node__WEBPACK_IMPORTED_MODULE_2__.IndexBuilder({\n        logger: env.logger,\n        searchEngine\n    });\n    const schedule = env.scheduler.createScheduledTaskRunner({\n        frequency: {\n            minutes: 10\n        },\n        timeout: {\n            minutes: 15\n        },\n        // A 3 second delay gives the backend server a chance to initialize before\n        // any collators are executed, which may attempt requests against the API.\n        initialDelay: {\n            seconds: 3\n        }\n    });\n    // Collators are responsible for gathering documents known to plugins. This\n    // collator gathers entities from the software catalog.\n    indexBuilder.addCollator({\n        schedule,\n        factory: _backstage_plugin_catalog_backend__WEBPACK_IMPORTED_MODULE_3__.DefaultCatalogCollatorFactory.fromConfig(env.config, {\n            discovery: env.discovery,\n            tokenManager: env.tokenManager\n        })\n    });\n    // collator gathers entities from techdocs.\n    indexBuilder.addCollator({\n        schedule,\n        factory: _backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_4__.DefaultTechDocsCollatorFactory.fromConfig(env.config, {\n            discovery: env.discovery,\n            logger: env.logger,\n            tokenManager: env.tokenManager\n        })\n    });\n    // The scheduler controls when documents are gathered from collators and sent\n    // to the search engine for indexing.\n    const { scheduler } = await indexBuilder.build();\n    scheduler.start();\n    (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__.useHotCleanup)(module, ()=>scheduler.stop());\n    return await (0,_backstage_plugin_search_backend__WEBPACK_IMPORTED_MODULE_1__.createRouter)({\n        engine: indexBuilder.getSearchEngine(),\n        types: indexBuilder.getDocumentTypes(),\n        permissions: env.permissions,\n        config: env.config,\n        logger: env.logger\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9zZWFyY2gudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvc3p5bWtpZXcvYmFja3N0YWdlLWhpZ2hsaWdodHMtcGx1Z2luL3BhY2thZ2VzL2JhY2tlbmQvc3JjL3BsdWdpbnMvc2VhcmNoLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUhvdENsZWFudXAgfSBmcm9tICdAYmFja3N0YWdlL2JhY2tlbmQtY29tbW9uJztcbmltcG9ydCB7IGNyZWF0ZVJvdXRlciB9IGZyb20gJ0BiYWNrc3RhZ2UvcGx1Z2luLXNlYXJjaC1iYWNrZW5kJztcbmltcG9ydCB7XG4gIEluZGV4QnVpbGRlcixcbiAgTHVuclNlYXJjaEVuZ2luZSxcbn0gZnJvbSAnQGJhY2tzdGFnZS9wbHVnaW4tc2VhcmNoLWJhY2tlbmQtbm9kZSc7XG5pbXBvcnQgeyBQbHVnaW5FbnZpcm9ubWVudCB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IERlZmF1bHRDYXRhbG9nQ29sbGF0b3JGYWN0b3J5IH0gZnJvbSAnQGJhY2tzdGFnZS9wbHVnaW4tY2F0YWxvZy1iYWNrZW5kJztcbmltcG9ydCB7IERlZmF1bHRUZWNoRG9jc0NvbGxhdG9yRmFjdG9yeSB9IGZyb20gJ0BiYWNrc3RhZ2UvcGx1Z2luLXRlY2hkb2NzLWJhY2tlbmQnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBsdWdpbihcbiAgZW52OiBQbHVnaW5FbnZpcm9ubWVudCxcbik6IFByb21pc2U8Um91dGVyPiB7XG4gIC8vIEluaXRpYWxpemUgYSBjb25uZWN0aW9uIHRvIGEgc2VhcmNoIGVuZ2luZS5cbiAgY29uc3Qgc2VhcmNoRW5naW5lID0gbmV3IEx1bnJTZWFyY2hFbmdpbmUoe1xuICAgIGxvZ2dlcjogZW52LmxvZ2dlcixcbiAgfSk7XG4gIGNvbnN0IGluZGV4QnVpbGRlciA9IG5ldyBJbmRleEJ1aWxkZXIoe1xuICAgIGxvZ2dlcjogZW52LmxvZ2dlcixcbiAgICBzZWFyY2hFbmdpbmUsXG4gIH0pO1xuXG4gIGNvbnN0IHNjaGVkdWxlID0gZW52LnNjaGVkdWxlci5jcmVhdGVTY2hlZHVsZWRUYXNrUnVubmVyKHtcbiAgICBmcmVxdWVuY3k6IHsgbWludXRlczogMTAgfSxcbiAgICB0aW1lb3V0OiB7IG1pbnV0ZXM6IDE1IH0sXG4gICAgLy8gQSAzIHNlY29uZCBkZWxheSBnaXZlcyB0aGUgYmFja2VuZCBzZXJ2ZXIgYSBjaGFuY2UgdG8gaW5pdGlhbGl6ZSBiZWZvcmVcbiAgICAvLyBhbnkgY29sbGF0b3JzIGFyZSBleGVjdXRlZCwgd2hpY2ggbWF5IGF0dGVtcHQgcmVxdWVzdHMgYWdhaW5zdCB0aGUgQVBJLlxuICAgIGluaXRpYWxEZWxheTogeyBzZWNvbmRzOiAzIH0sXG4gIH0pO1xuXG4gIC8vIENvbGxhdG9ycyBhcmUgcmVzcG9uc2libGUgZm9yIGdhdGhlcmluZyBkb2N1bWVudHMga25vd24gdG8gcGx1Z2lucy4gVGhpc1xuICAvLyBjb2xsYXRvciBnYXRoZXJzIGVudGl0aWVzIGZyb20gdGhlIHNvZnR3YXJlIGNhdGFsb2cuXG4gIGluZGV4QnVpbGRlci5hZGRDb2xsYXRvcih7XG4gICAgc2NoZWR1bGUsXG4gICAgZmFjdG9yeTogRGVmYXVsdENhdGFsb2dDb2xsYXRvckZhY3RvcnkuZnJvbUNvbmZpZyhlbnYuY29uZmlnLCB7XG4gICAgICBkaXNjb3Zlcnk6IGVudi5kaXNjb3ZlcnksXG4gICAgICB0b2tlbk1hbmFnZXI6IGVudi50b2tlbk1hbmFnZXIsXG4gICAgfSksXG4gIH0pO1xuXG4gIC8vIGNvbGxhdG9yIGdhdGhlcnMgZW50aXRpZXMgZnJvbSB0ZWNoZG9jcy5cbiAgaW5kZXhCdWlsZGVyLmFkZENvbGxhdG9yKHtcbiAgICBzY2hlZHVsZSxcbiAgICBmYWN0b3J5OiBEZWZhdWx0VGVjaERvY3NDb2xsYXRvckZhY3RvcnkuZnJvbUNvbmZpZyhlbnYuY29uZmlnLCB7XG4gICAgICBkaXNjb3Zlcnk6IGVudi5kaXNjb3ZlcnksXG4gICAgICBsb2dnZXI6IGVudi5sb2dnZXIsXG4gICAgICB0b2tlbk1hbmFnZXI6IGVudi50b2tlbk1hbmFnZXIsXG4gICAgfSksXG4gIH0pO1xuXG4gIC8vIFRoZSBzY2hlZHVsZXIgY29udHJvbHMgd2hlbiBkb2N1bWVudHMgYXJlIGdhdGhlcmVkIGZyb20gY29sbGF0b3JzIGFuZCBzZW50XG4gIC8vIHRvIHRoZSBzZWFyY2ggZW5naW5lIGZvciBpbmRleGluZy5cbiAgY29uc3QgeyBzY2hlZHVsZXIgfSA9IGF3YWl0IGluZGV4QnVpbGRlci5idWlsZCgpO1xuICBzY2hlZHVsZXIuc3RhcnQoKTtcblxuICB1c2VIb3RDbGVhbnVwKG1vZHVsZSwgKCkgPT4gc2NoZWR1bGVyLnN0b3AoKSk7XG5cbiAgcmV0dXJuIGF3YWl0IGNyZWF0ZVJvdXRlcih7XG4gICAgZW5naW5lOiBpbmRleEJ1aWxkZXIuZ2V0U2VhcmNoRW5naW5lKCksXG4gICAgdHlwZXM6IGluZGV4QnVpbGRlci5nZXREb2N1bWVudFR5cGVzKCksXG4gICAgcGVybWlzc2lvbnM6IGVudi5wZXJtaXNzaW9ucyxcbiAgICBjb25maWc6IGVudi5jb25maWcsXG4gICAgbG9nZ2VyOiBlbnYubG9nZ2VyLFxuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/plugins/search.ts\n");

/***/ }),

/***/ "./src/plugins/techdocs.ts":
/*!*********************************!*\
  !*** ./src/plugins/techdocs.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/backend-common */ \"@backstage/backend-common\");\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @backstage/plugin-techdocs-backend */ \"@backstage/plugin-techdocs-backend\");\n/* harmony import */ var _backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var dockerode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dockerode */ \"dockerode\");\n/* harmony import */ var dockerode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dockerode__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function createPlugin(env) {\n    // Preparers are responsible for fetching source files for documentation.\n    const preparers = await _backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_1__.Preparers.fromConfig(env.config, {\n        logger: env.logger,\n        reader: env.reader\n    });\n    // Docker client (conditionally) used by the generators, based on techdocs.generators config.\n    const dockerClient = new (dockerode__WEBPACK_IMPORTED_MODULE_2___default())();\n    const containerRunner = new _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__.DockerContainerRunner({\n        dockerClient\n    });\n    // Generators are used for generating documentation sites.\n    const generators = await _backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_1__.Generators.fromConfig(env.config, {\n        logger: env.logger,\n        containerRunner\n    });\n    // Publisher is used for\n    // 1. Publishing generated files to storage\n    // 2. Fetching files from storage and passing them to TechDocs frontend.\n    const publisher = await _backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_1__.Publisher.fromConfig(env.config, {\n        logger: env.logger,\n        discovery: env.discovery\n    });\n    // checks if the publisher is working and logs the result\n    await publisher.getReadiness();\n    return await (0,_backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_1__.createRouter)({\n        preparers,\n        generators,\n        publisher,\n        logger: env.logger,\n        config: env.config,\n        discovery: env.discovery,\n        cache: env.cache\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy90ZWNoZG9jcy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU1BO0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS9zenlta2lldy9iYWNrc3RhZ2UtaGlnaGxpZ2h0cy1wbHVnaW4vcGFja2FnZXMvYmFja2VuZC9zcmMvcGx1Z2lucy90ZWNoZG9jcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb2NrZXJDb250YWluZXJSdW5uZXIgfSBmcm9tICdAYmFja3N0YWdlL2JhY2tlbmQtY29tbW9uJztcbmltcG9ydCB7XG4gIGNyZWF0ZVJvdXRlcixcbiAgR2VuZXJhdG9ycyxcbiAgUHJlcGFyZXJzLFxuICBQdWJsaXNoZXIsXG59IGZyb20gJ0BiYWNrc3RhZ2UvcGx1Z2luLXRlY2hkb2NzLWJhY2tlbmQnO1xuaW1wb3J0IERvY2tlciBmcm9tICdkb2NrZXJvZGUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBQbHVnaW5FbnZpcm9ubWVudCB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUGx1Z2luKFxuICBlbnY6IFBsdWdpbkVudmlyb25tZW50LFxuKTogUHJvbWlzZTxSb3V0ZXI+IHtcbiAgLy8gUHJlcGFyZXJzIGFyZSByZXNwb25zaWJsZSBmb3IgZmV0Y2hpbmcgc291cmNlIGZpbGVzIGZvciBkb2N1bWVudGF0aW9uLlxuICBjb25zdCBwcmVwYXJlcnMgPSBhd2FpdCBQcmVwYXJlcnMuZnJvbUNvbmZpZyhlbnYuY29uZmlnLCB7XG4gICAgbG9nZ2VyOiBlbnYubG9nZ2VyLFxuICAgIHJlYWRlcjogZW52LnJlYWRlcixcbiAgfSk7XG5cbiAgLy8gRG9ja2VyIGNsaWVudCAoY29uZGl0aW9uYWxseSkgdXNlZCBieSB0aGUgZ2VuZXJhdG9ycywgYmFzZWQgb24gdGVjaGRvY3MuZ2VuZXJhdG9ycyBjb25maWcuXG4gIGNvbnN0IGRvY2tlckNsaWVudCA9IG5ldyBEb2NrZXIoKTtcbiAgY29uc3QgY29udGFpbmVyUnVubmVyID0gbmV3IERvY2tlckNvbnRhaW5lclJ1bm5lcih7IGRvY2tlckNsaWVudCB9KTtcblxuICAvLyBHZW5lcmF0b3JzIGFyZSB1c2VkIGZvciBnZW5lcmF0aW5nIGRvY3VtZW50YXRpb24gc2l0ZXMuXG4gIGNvbnN0IGdlbmVyYXRvcnMgPSBhd2FpdCBHZW5lcmF0b3JzLmZyb21Db25maWcoZW52LmNvbmZpZywge1xuICAgIGxvZ2dlcjogZW52LmxvZ2dlcixcbiAgICBjb250YWluZXJSdW5uZXIsXG4gIH0pO1xuXG4gIC8vIFB1Ymxpc2hlciBpcyB1c2VkIGZvclxuICAvLyAxLiBQdWJsaXNoaW5nIGdlbmVyYXRlZCBmaWxlcyB0byBzdG9yYWdlXG4gIC8vIDIuIEZldGNoaW5nIGZpbGVzIGZyb20gc3RvcmFnZSBhbmQgcGFzc2luZyB0aGVtIHRvIFRlY2hEb2NzIGZyb250ZW5kLlxuICBjb25zdCBwdWJsaXNoZXIgPSBhd2FpdCBQdWJsaXNoZXIuZnJvbUNvbmZpZyhlbnYuY29uZmlnLCB7XG4gICAgbG9nZ2VyOiBlbnYubG9nZ2VyLFxuICAgIGRpc2NvdmVyeTogZW52LmRpc2NvdmVyeSxcbiAgfSk7XG5cbiAgLy8gY2hlY2tzIGlmIHRoZSBwdWJsaXNoZXIgaXMgd29ya2luZyBhbmQgbG9ncyB0aGUgcmVzdWx0XG4gIGF3YWl0IHB1Ymxpc2hlci5nZXRSZWFkaW5lc3MoKTtcblxuICByZXR1cm4gYXdhaXQgY3JlYXRlUm91dGVyKHtcbiAgICBwcmVwYXJlcnMsXG4gICAgZ2VuZXJhdG9ycyxcbiAgICBwdWJsaXNoZXIsXG4gICAgbG9nZ2VyOiBlbnYubG9nZ2VyLFxuICAgIGNvbmZpZzogZW52LmNvbmZpZyxcbiAgICBkaXNjb3Zlcnk6IGVudi5kaXNjb3ZlcnksXG4gICAgY2FjaGU6IGVudi5jYWNoZSxcbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/plugins/techdocs.ts\n");

/***/ }),

/***/ "../../plugins/backstage-highlights-plugin-backend/src/index.ts":
/*!**********************************************************************!*\
  !*** ../../plugins/backstage-highlights-plugin-backend/src/index.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createRouter: () => (/* reexport safe */ _service_router__WEBPACK_IMPORTED_MODULE_0__.createRouter),\n/* harmony export */   \"default\": () => (/* reexport safe */ _plugin__WEBPACK_IMPORTED_MODULE_1__.highlightsPlugin)\n/* harmony export */ });\n/* harmony import */ var _service_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/router */ \"../../plugins/backstage-highlights-plugin-backend/src/service/router.ts\");\n/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugin */ \"../../plugins/backstage-highlights-plugin-backend/src/plugin.ts\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ \"../../plugins/backstage-highlights-plugin-backend/src/types.ts\");\n/*\n * Copyright 2023 RSC-Labs, https://rsoftcon.com/\n *\n * Licensed under the Mozilla Public License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     https://www.mozilla.org/en-US/MPL/2.0/\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */ \n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGx1Z2lucy9iYWNrc3RhZ2UtaGlnaGxpZ2h0cy1wbHVnaW4tYmFja2VuZC9zcmMvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQUdBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvc3p5bWtpZXcvYmFja3N0YWdlLWhpZ2hsaWdodHMtcGx1Z2luL3BsdWdpbnMvYmFja3N0YWdlLWhpZ2hsaWdodHMtcGx1Z2luLWJhY2tlbmQvc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAyMyBSU0MtTGFicywgaHR0cHM6Ly9yc29mdGNvbi5jb20vXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1vemlsbGEgUHVibGljIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHBzOi8vd3d3Lm1vemlsbGEub3JnL2VuLVVTL01QTC8yLjAvXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5leHBvcnQgKiBmcm9tICcuL3NlcnZpY2Uvcm91dGVyJztcbmV4cG9ydCB7IGhpZ2hsaWdodHNQbHVnaW4gYXMgZGVmYXVsdCB9IGZyb20gJy4vcGx1Z2luJztcbmV4cG9ydCAqIGZyb20gJy4vdHlwZXMnO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../plugins/backstage-highlights-plugin-backend/src/index.ts\n");

/***/ }),

/***/ "../../plugins/backstage-highlights-plugin-backend/src/lib/fetchBranches.ts":
/*!**********************************************************************************!*\
  !*** ../../plugins/backstage-highlights-plugin-backend/src/lib/fetchBranches.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchGithubBranches: () => (/* binding */ fetchGithubBranches),\n/* harmony export */   fetchGitlabBranches: () => (/* binding */ fetchGitlabBranches)\n/* harmony export */ });\n/* harmony import */ var _octokit_rest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @octokit/rest */ \"@octokit/rest\");\n/* harmony import */ var _octokit_rest__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_octokit_rest__WEBPACK_IMPORTED_MODULE_0__);\n/*\n * Copyright 2023 RSC-Labs, https://rsoftcon.com/\n *\n * Licensed under the Mozilla Public License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     https://www.mozilla.org/en-US/MPL/2.0/\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */ \nasync function fetchGithubBranches(projectSlug, token, baseUrl) {\n    const octokit = new _octokit_rest__WEBPACK_IMPORTED_MODULE_0__.Octokit({\n        auth: token,\n        baseUrl: baseUrl\n    });\n    const slugSplitted = projectSlug.split('/');\n    const result = await octokit.request(`GET /repos/${projectSlug}/branches`, {\n        owner: slugSplitted[0],\n        repo: slugSplitted[1]\n    });\n    const branches = result.data.map((singleData)=>singleData.name);\n    return branches;\n}\nasync function fetchGitlabBranches(projectSlug, token, apiBaseUrl) {\n    const slugSplitted = projectSlug.split('/');\n    const result = await fetch(`${apiBaseUrl}/projects/${slugSplitted[0]}%2F${slugSplitted[1]}/repository/branches?private_token=${token}`);\n    const resultJson = await result.json();\n    const branches = resultJson.map((singleResult)=>singleResult.name);\n    return branches;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGx1Z2lucy9iYWNrc3RhZ2UtaGlnaGxpZ2h0cy1wbHVnaW4tYmFja2VuZC9zcmMvbGliL2ZldGNoQnJhbmNoZXMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7OztBQWNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS9zenlta2lldy9iYWNrc3RhZ2UtaGlnaGxpZ2h0cy1wbHVnaW4vcGx1Z2lucy9iYWNrc3RhZ2UtaGlnaGxpZ2h0cy1wbHVnaW4tYmFja2VuZC9zcmMvbGliL2ZldGNoQnJhbmNoZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDIzIFJTQy1MYWJzLCBodHRwczovL3Jzb2Z0Y29uLmNvbS9cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTW96aWxsYSBQdWJsaWMgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cHM6Ly93d3cubW96aWxsYS5vcmcvZW4tVVMvTVBMLzIuMC9cbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IE9jdG9raXQgfSBmcm9tICdAb2N0b2tpdC9yZXN0JztcbmltcG9ydCB7IEdpdEJyYW5jaCB9IGZyb20gJy4uL3R5cGVzJztcblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hHaXRodWJCcmFuY2hlcyhwcm9qZWN0U2x1Zzogc3RyaW5nLCB0b2tlbjogc3RyaW5nLCBiYXNlVXJsPzogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICAgIGNvbnN0IG9jdG9raXQgPSBuZXcgT2N0b2tpdCh7XG4gICAgICAgIGF1dGg6IHRva2VuLFxuICAgICAgICBiYXNlVXJsOiBiYXNlVXJsXG4gICAgfSlcblxuICAgIGNvbnN0IHNsdWdTcGxpdHRlZCA9IHByb2plY3RTbHVnLnNwbGl0KCcvJyk7XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBvY3Rva2l0LnJlcXVlc3QoYEdFVCAvcmVwb3MvJHtwcm9qZWN0U2x1Z30vYnJhbmNoZXNgLCB7XG4gICAgICAgIG93bmVyOiBzbHVnU3BsaXR0ZWRbMF0sXG4gICAgICAgIHJlcG86IHNsdWdTcGxpdHRlZFsxXSxcbiAgICB9KVxuXG4gICAgY29uc3QgYnJhbmNoZXMgPSByZXN1bHQuZGF0YS5tYXAoKHNpbmdsZURhdGE6IHsgbmFtZTogYW55OyB9KSA9PiBzaW5nbGVEYXRhLm5hbWUpO1xuXG4gICAgcmV0dXJuIGJyYW5jaGVzO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hHaXRsYWJCcmFuY2hlcyhwcm9qZWN0U2x1Zzogc3RyaW5nLCB0b2tlbjogc3RyaW5nLCBhcGlCYXNlVXJsOiBzdHJpbmcpOiBQcm9taXNlPEdpdEJyYW5jaFtdPiB7XG5cbiAgICBjb25zdCBzbHVnU3BsaXR0ZWQgPSBwcm9qZWN0U2x1Zy5zcGxpdCgnLycpO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goYCR7YXBpQmFzZVVybH0vcHJvamVjdHMvJHtzbHVnU3BsaXR0ZWRbMF19JTJGJHtzbHVnU3BsaXR0ZWRbMV19L3JlcG9zaXRvcnkvYnJhbmNoZXM/cHJpdmF0ZV90b2tlbj0ke3Rva2VufWApO1xuXG4gICAgY29uc3QgcmVzdWx0SnNvbiA9IGF3YWl0IHJlc3VsdC5qc29uKCk7XG5cbiAgICBjb25zdCBicmFuY2hlcyA9IHJlc3VsdEpzb24ubWFwKChzaW5nbGVSZXN1bHQ6IHsgbmFtZTogYW55OyB9KSA9PiBzaW5nbGVSZXN1bHQubmFtZSk7XG5cbiAgICByZXR1cm4gYnJhbmNoZXM7XG59XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../plugins/backstage-highlights-plugin-backend/src/lib/fetchBranches.ts\n");

/***/ }),

/***/ "../../plugins/backstage-highlights-plugin-backend/src/lib/fetchCommits.ts":
/*!*********************************************************************************!*\
  !*** ../../plugins/backstage-highlights-plugin-backend/src/lib/fetchCommits.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchGithubCommit: () => (/* binding */ fetchGithubCommit),\n/* harmony export */   fetchGithubCommits: () => (/* binding */ fetchGithubCommits),\n/* harmony export */   fetchGitlabCommits: () => (/* binding */ fetchGitlabCommits)\n/* harmony export */ });\n/* harmony import */ var _octokit_rest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @octokit/rest */ \"@octokit/rest\");\n/* harmony import */ var _octokit_rest__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_octokit_rest__WEBPACK_IMPORTED_MODULE_0__);\n/*\n * Copyright 2023 RSC-Labs, https://rsoftcon.com/\n *\n * Licensed under the Mozilla Public License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     https://www.mozilla.org/en-US/MPL/2.0/\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */ \nasync function fetchGithubCommit(projectSlug, token, id, baseUrl) {\n    const octokit = new _octokit_rest__WEBPACK_IMPORTED_MODULE_0__.Octokit({\n        auth: token,\n        baseUrl: baseUrl\n    });\n    const slugSplitted = projectSlug.split('/');\n    const result = await octokit.request(`GET /repos/${projectSlug}/commits/${id}`, {\n        owner: slugSplitted[0],\n        repo: slugSplitted[1]\n    });\n    return {\n        id: result.data.sha,\n        author: result.data.commit.author.name,\n        authorHtmlUrl: result.data.author.html_url,\n        htmlUrl: result.data.html_url,\n        message: result.data.commit.message,\n        date: result.data.commit.author.date\n    };\n}\nasync function fetchGithubCommits(projectSlug, token, baseUrl) {\n    const octokit = new _octokit_rest__WEBPACK_IMPORTED_MODULE_0__.Octokit({\n        auth: token,\n        baseUrl: baseUrl\n    });\n    const slugSplitted = projectSlug.split('/');\n    const result = await octokit.request(`GET /repos/${projectSlug}/commits`, {\n        owner: slugSplitted[0],\n        repo: slugSplitted[1]\n    });\n    const commits = result.data.map((singleData)=>{\n        return {\n            id: singleData.sha,\n            author: singleData.commit.author.name,\n            authorHtmlUrl: singleData.author.html_url,\n            htmlUrl: singleData.html_url,\n            message: singleData.commit.message,\n            date: singleData.commit.author.date\n        };\n    });\n    return commits;\n}\nasync function fetchGitlabCommits(projectSlug, token, apiBaseUrl) {\n    const slugSplitted = projectSlug.split('/');\n    const result = await fetch(`${apiBaseUrl}/projects/${slugSplitted[0]}%2F${slugSplitted[1]}/repository/commits?private_token=${token}`);\n    const resultJson = await result.json();\n    const commits = resultJson.map((singleResult)=>{\n        return {\n            id: singleResult.id,\n            author: singleResult.author_name,\n            htmlUrl: singleResult.web_url,\n            message: singleResult.message,\n            date: singleResult.committed_date\n        };\n    });\n    return commits;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGx1Z2lucy9iYWNrc3RhZ2UtaGlnaGxpZ2h0cy1wbHVnaW4tYmFja2VuZC9zcmMvbGliL2ZldGNoQ29tbWl0cy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7OztBQWNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS9zenlta2lldy9iYWNrc3RhZ2UtaGlnaGxpZ2h0cy1wbHVnaW4vcGx1Z2lucy9iYWNrc3RhZ2UtaGlnaGxpZ2h0cy1wbHVnaW4tYmFja2VuZC9zcmMvbGliL2ZldGNoQ29tbWl0cy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMjMgUlNDLUxhYnMsIGh0dHBzOi8vcnNvZnRjb24uY29tL1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNb3ppbGxhIFB1YmxpYyBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwczovL3d3dy5tb3ppbGxhLm9yZy9lbi1VUy9NUEwvMi4wL1xuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgT2N0b2tpdCwgIH0gZnJvbSAnQG9jdG9raXQvcmVzdCc7XG5pbXBvcnQgeyBHaXRDb21taXQgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaEdpdGh1YkNvbW1pdChwcm9qZWN0U2x1Zzogc3RyaW5nLCB0b2tlbjogc3RyaW5nLCBpZDogc3RyaW5nLCBiYXNlVXJsPzogc3RyaW5nKTogUHJvbWlzZTxHaXRDb21taXQ+IHtcbiAgICBjb25zdCBvY3Rva2l0ID0gbmV3IE9jdG9raXQoe1xuICAgICAgICBhdXRoOiB0b2tlbixcbiAgICAgICAgYmFzZVVybDogYmFzZVVybFxuICAgIH0pXG5cbiAgICBjb25zdCBzbHVnU3BsaXR0ZWQgPSBwcm9qZWN0U2x1Zy5zcGxpdCgnLycpO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgb2N0b2tpdC5yZXF1ZXN0KGBHRVQgL3JlcG9zLyR7cHJvamVjdFNsdWd9L2NvbW1pdHMvJHtpZH1gLCB7XG4gICAgICAgIG93bmVyOiBzbHVnU3BsaXR0ZWRbMF0sXG4gICAgICAgIHJlcG86IHNsdWdTcGxpdHRlZFsxXSxcbiAgICB9KVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IHJlc3VsdC5kYXRhLnNoYSxcbiAgICAgICAgYXV0aG9yOiByZXN1bHQuZGF0YS5jb21taXQuYXV0aG9yLm5hbWUsXG4gICAgICAgIGF1dGhvckh0bWxVcmw6IHJlc3VsdC5kYXRhLmF1dGhvci5odG1sX3VybCxcbiAgICAgICAgaHRtbFVybDogcmVzdWx0LmRhdGEuaHRtbF91cmwsXG4gICAgICAgIG1lc3NhZ2U6IHJlc3VsdC5kYXRhLmNvbW1pdC5tZXNzYWdlLFxuICAgICAgICBkYXRlOiByZXN1bHQuZGF0YS5jb21taXQuYXV0aG9yLmRhdGVcbiAgICB9XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoR2l0aHViQ29tbWl0cyhwcm9qZWN0U2x1Zzogc3RyaW5nLCB0b2tlbjogc3RyaW5nLCBiYXNlVXJsPzogc3RyaW5nKTogUHJvbWlzZTxHaXRDb21taXRbXT4ge1xuICAgIGNvbnN0IG9jdG9raXQgPSBuZXcgT2N0b2tpdCh7XG4gICAgICAgIGF1dGg6IHRva2VuLFxuICAgICAgICBiYXNlVXJsOiBiYXNlVXJsXG4gICAgfSlcblxuICAgIGNvbnN0IHNsdWdTcGxpdHRlZCA9IHByb2plY3RTbHVnLnNwbGl0KCcvJyk7XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBvY3Rva2l0LnJlcXVlc3QoYEdFVCAvcmVwb3MvJHtwcm9qZWN0U2x1Z30vY29tbWl0c2AsIHtcbiAgICAgICAgb3duZXI6IHNsdWdTcGxpdHRlZFswXSxcbiAgICAgICAgcmVwbzogc2x1Z1NwbGl0dGVkWzFdLFxuICAgIH0pXG5cbiAgICBjb25zdCBjb21taXRzID0gcmVzdWx0LmRhdGEubWFwKChzaW5nbGVEYXRhOiB7XG4gICAgICAgIGh0bWxfdXJsOiBhbnk7XG4gICAgICAgIGF1dGhvcjogYW55OyBzaGE6IGFueTsgY29tbWl0OiB7IGF1dGhvcjogeyBuYW1lOiBhbnk7IGRhdGU6IGFueSwgaHRtbF91cmw6IGFueSB9OyBodG1sVXJsOiBhbnk7IG1lc3NhZ2U6IGFueTsgfTsgXG59KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogc2luZ2xlRGF0YS5zaGEsXG4gICAgICAgICAgICBhdXRob3I6IHNpbmdsZURhdGEuY29tbWl0LmF1dGhvci5uYW1lLFxuICAgICAgICAgICAgYXV0aG9ySHRtbFVybDogc2luZ2xlRGF0YS5hdXRob3IuaHRtbF91cmwsXG4gICAgICAgICAgICBodG1sVXJsOiBzaW5nbGVEYXRhLmh0bWxfdXJsLFxuICAgICAgICAgICAgbWVzc2FnZTogc2luZ2xlRGF0YS5jb21taXQubWVzc2FnZSxcbiAgICAgICAgICAgIGRhdGU6IHNpbmdsZURhdGEuY29tbWl0LmF1dGhvci5kYXRlXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBjb21taXRzO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hHaXRsYWJDb21taXRzKHByb2plY3RTbHVnOiBzdHJpbmcsIHRva2VuOiBzdHJpbmcsIGFwaUJhc2VVcmw6IHN0cmluZyk6IFByb21pc2U8R2l0Q29tbWl0W10+IHtcblxuICAgIGNvbnN0IHNsdWdTcGxpdHRlZCA9IHByb2plY3RTbHVnLnNwbGl0KCcvJyk7XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChgJHthcGlCYXNlVXJsfS9wcm9qZWN0cy8ke3NsdWdTcGxpdHRlZFswXX0lMkYke3NsdWdTcGxpdHRlZFsxXX0vcmVwb3NpdG9yeS9jb21taXRzP3ByaXZhdGVfdG9rZW49JHt0b2tlbn1gKTtcbiAgICBcbiAgICBjb25zdCByZXN1bHRKc29uID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcblxuICAgIGNvbnN0IGNvbW1pdHMgPSByZXN1bHRKc29uLm1hcCgoKHNpbmdsZVJlc3VsdDogeyBpZDogYW55OyBhdXRob3JfbmFtZTogYW55OyB3ZWJfdXJsOiBhbnk7IG1lc3NhZ2U6IGFueTsgY29tbWl0dGVkX2RhdGU6IGFueTsgY29tbWl0dGVyX25hbWU6IGFueTsgfSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IHNpbmdsZVJlc3VsdC5pZCxcbiAgICAgICAgICAgIGF1dGhvcjogc2luZ2xlUmVzdWx0LmF1dGhvcl9uYW1lLFxuICAgICAgICAgICAgaHRtbFVybDogc2luZ2xlUmVzdWx0LndlYl91cmwsXG4gICAgICAgICAgICBtZXNzYWdlOiBzaW5nbGVSZXN1bHQubWVzc2FnZSxcbiAgICAgICAgICAgIGRhdGU6IHNpbmdsZVJlc3VsdC5jb21taXR0ZWRfZGF0ZVxuICAgICAgICB9XG4gICAgfSkpO1xuXG4gICAgcmV0dXJuIGNvbW1pdHM7XG59XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../plugins/backstage-highlights-plugin-backend/src/lib/fetchCommits.ts\n");

/***/ }),

/***/ "../../plugins/backstage-highlights-plugin-backend/src/lib/fetchTags.ts":
/*!******************************************************************************!*\
  !*** ../../plugins/backstage-highlights-plugin-backend/src/lib/fetchTags.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchGithubTags: () => (/* binding */ fetchGithubTags),\n/* harmony export */   fetchGitlabTags: () => (/* binding */ fetchGitlabTags)\n/* harmony export */ });\n/* harmony import */ var _octokit_rest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @octokit/rest */ \"@octokit/rest\");\n/* harmony import */ var _octokit_rest__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_octokit_rest__WEBPACK_IMPORTED_MODULE_0__);\n/*\n * Copyright 2023 RSC-Labs, https://rsoftcon.com/\n *\n * Licensed under the Mozilla Public License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     https://www.mozilla.org/en-US/MPL/2.0/\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */ \nasync function fetchGithubTags(projectSlug, token, baseUrl) {\n    const octokit = new _octokit_rest__WEBPACK_IMPORTED_MODULE_0__.Octokit({\n        auth: token,\n        baseUrl: baseUrl\n    });\n    const slugSplitted = projectSlug.split('/');\n    const githubTags = await octokit.request(`GET /repos/${projectSlug}/tags`, {\n        owner: slugSplitted[0],\n        repo: slugSplitted[1]\n    });\n    const repoInfo = await octokit.request(`GET /repos/${projectSlug}`, {\n        owner: slugSplitted[0],\n        repo: slugSplitted[1]\n    });\n    const tags = githubTags.data.map((singleData)=>{\n        return {\n            name: singleData.name,\n            tagUrl: `${repoInfo.data.html_url} + '/releases/tag/' + ${singleData.name}`,\n            commitId: singleData.commit.sha,\n            commitUrl: `${repoInfo.data.html_url} + '/commits/' + ${singleData.commit.sha}`,\n            commitApiUrl: singleData.commit.url\n        };\n    });\n    return tags;\n}\nasync function fetchGitlabTags(projectSlug, token, apiBaseUrl) {\n    const slugSplitted = projectSlug.split('/');\n    const result = await fetch(`${apiBaseUrl}/projects/${slugSplitted[0]}%2F${slugSplitted[1]}/repository/tags?private_token=${token}`);\n    const resultJson = await result.json();\n    const projectResult = await fetch(`${apiBaseUrl}/projects/${slugSplitted[0]}%2F${slugSplitted[1]}?private_token=${token}`);\n    const projectResultJson = await projectResult.json();\n    const tags = resultJson.map((singleResult)=>{\n        return {\n            name: singleResult.name,\n            tagUrl: `${projectResultJson.web_url}/-/releases/${singleResult.name}`,\n            commitId: singleResult.commit.id,\n            commitUrl: `${projectResultJson.web_url}/-/commit/${singleResult.commit.id}`,\n            commitMessage: singleResult.commit.message\n        };\n    });\n    return tags;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGx1Z2lucy9iYWNrc3RhZ2UtaGlnaGxpZ2h0cy1wbHVnaW4tYmFja2VuZC9zcmMvbGliL2ZldGNoVGFncy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FBY0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvc3p5bWtpZXcvYmFja3N0YWdlLWhpZ2hsaWdodHMtcGx1Z2luL3BsdWdpbnMvYmFja3N0YWdlLWhpZ2hsaWdodHMtcGx1Z2luLWJhY2tlbmQvc3JjL2xpYi9mZXRjaFRhZ3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDIzIFJTQy1MYWJzLCBodHRwczovL3Jzb2Z0Y29uLmNvbS9cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTW96aWxsYSBQdWJsaWMgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cHM6Ly93d3cubW96aWxsYS5vcmcvZW4tVVMvTVBMLzIuMC9cbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IE9jdG9raXQgfSBmcm9tICdAb2N0b2tpdC9yZXN0JztcbmltcG9ydCB7IEdpdFRhZyB9IGZyb20gJy4uL3R5cGVzJztcblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hHaXRodWJUYWdzKHByb2plY3RTbHVnOiBzdHJpbmcsIHRva2VuOiBzdHJpbmcsIGJhc2VVcmw/OiBzdHJpbmcpOiBQcm9taXNlPEdpdFRhZ1tdPiB7XG4gICAgY29uc3Qgb2N0b2tpdCA9IG5ldyBPY3Rva2l0KHtcbiAgICAgICAgYXV0aDogdG9rZW4sXG4gICAgICAgIGJhc2VVcmw6IGJhc2VVcmxcbiAgICB9KVxuXG4gICAgY29uc3Qgc2x1Z1NwbGl0dGVkID0gcHJvamVjdFNsdWcuc3BsaXQoJy8nKTtcblxuICAgIGNvbnN0IGdpdGh1YlRhZ3MgPSBhd2FpdCBvY3Rva2l0LnJlcXVlc3QoYEdFVCAvcmVwb3MvJHtwcm9qZWN0U2x1Z30vdGFnc2AsIHtcbiAgICAgICAgb3duZXI6IHNsdWdTcGxpdHRlZFswXSxcbiAgICAgICAgcmVwbzogc2x1Z1NwbGl0dGVkWzFdLFxuICAgIH0pXG4gICAgXG4gICAgY29uc3QgcmVwb0luZm8gPSBhd2FpdCBvY3Rva2l0LnJlcXVlc3QoYEdFVCAvcmVwb3MvJHtwcm9qZWN0U2x1Z31gLCB7XG4gICAgICAgIG93bmVyOiBzbHVnU3BsaXR0ZWRbMF0sXG4gICAgICAgIHJlcG86IHNsdWdTcGxpdHRlZFsxXSxcbiAgICB9KVxuXG4gICAgY29uc3QgdGFnczogR2l0VGFnW10gPSBnaXRodWJUYWdzLmRhdGEubWFwKCgoc2luZ2xlRGF0YTogeyBuYW1lOiBhbnksIGNvbW1pdDogYW55OyB9KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiBzaW5nbGVEYXRhLm5hbWUsXG4gICAgICAgICAgICB0YWdVcmw6IGAke3JlcG9JbmZvLmRhdGEuaHRtbF91cmx9ICsgJy9yZWxlYXNlcy90YWcvJyArICR7c2luZ2xlRGF0YS5uYW1lfWAsXG4gICAgICAgICAgICBjb21taXRJZDogc2luZ2xlRGF0YS5jb21taXQuc2hhLFxuICAgICAgICAgICAgY29tbWl0VXJsOiBgJHtyZXBvSW5mby5kYXRhLmh0bWxfdXJsfSArICcvY29tbWl0cy8nICsgJHtzaW5nbGVEYXRhLmNvbW1pdC5zaGF9YCxcbiAgICAgICAgICAgIGNvbW1pdEFwaVVybDogc2luZ2xlRGF0YS5jb21taXQudXJsXG4gICAgICAgIH1cbiAgICB9KSk7XG5cbiAgICByZXR1cm4gdGFncztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoR2l0bGFiVGFncyhwcm9qZWN0U2x1Zzogc3RyaW5nLCB0b2tlbjogc3RyaW5nLCBhcGlCYXNlVXJsOiBzdHJpbmcpOiBQcm9taXNlPEdpdFRhZ1tdPiB7XG5cbiAgICBjb25zdCBzbHVnU3BsaXR0ZWQgPSBwcm9qZWN0U2x1Zy5zcGxpdCgnLycpO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goYCR7YXBpQmFzZVVybH0vcHJvamVjdHMvJHtzbHVnU3BsaXR0ZWRbMF19JTJGJHtzbHVnU3BsaXR0ZWRbMV19L3JlcG9zaXRvcnkvdGFncz9wcml2YXRlX3Rva2VuPSR7dG9rZW59YCk7XG5cbiAgICBjb25zdCByZXN1bHRKc29uID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcblxuICAgIGNvbnN0IHByb2plY3RSZXN1bHQgPSBhd2FpdCBmZXRjaChgJHthcGlCYXNlVXJsfS9wcm9qZWN0cy8ke3NsdWdTcGxpdHRlZFswXX0lMkYke3NsdWdTcGxpdHRlZFsxXX0/cHJpdmF0ZV90b2tlbj0ke3Rva2VufWApO1xuXG4gICAgY29uc3QgcHJvamVjdFJlc3VsdEpzb24gPSBhd2FpdCBwcm9qZWN0UmVzdWx0Lmpzb24oKTtcblxuICAgIGNvbnN0IHRhZ3MgPSByZXN1bHRKc29uLm1hcCgoc2luZ2xlUmVzdWx0OiB7IG5hbWU6IGFueTsgY29tbWl0OiB7IGlkOiBhbnk7IG1lc3NhZ2U6IGFueTsgfTsgfSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogc2luZ2xlUmVzdWx0Lm5hbWUsXG4gICAgICAgICAgICB0YWdVcmw6IGAke3Byb2plY3RSZXN1bHRKc29uLndlYl91cmx9Ly0vcmVsZWFzZXMvJHtzaW5nbGVSZXN1bHQubmFtZX1gLFxuICAgICAgICAgICAgY29tbWl0SWQ6IHNpbmdsZVJlc3VsdC5jb21taXQuaWQsXG4gICAgICAgICAgICBjb21taXRVcmw6IGAke3Byb2plY3RSZXN1bHRKc29uLndlYl91cmx9Ly0vY29tbWl0LyR7c2luZ2xlUmVzdWx0LmNvbW1pdC5pZH1gLFxuICAgICAgICAgICAgY29tbWl0TWVzc2FnZTogc2luZ2xlUmVzdWx0LmNvbW1pdC5tZXNzYWdlXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHRhZ3M7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../plugins/backstage-highlights-plugin-backend/src/lib/fetchTags.ts\n");

/***/ }),

/***/ "../../plugins/backstage-highlights-plugin-backend/src/plugin.ts":
/*!***********************************************************************!*\
  !*** ../../plugins/backstage-highlights-plugin-backend/src/plugin.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   highlightsPlugin: () => (/* binding */ highlightsPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/backend-common */ \"@backstage/backend-common\");\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _backstage_backend_plugin_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @backstage/backend-plugin-api */ \"@backstage/backend-plugin-api\");\n/* harmony import */ var _backstage_backend_plugin_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_backstage_backend_plugin_api__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _service_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/router */ \"../../plugins/backstage-highlights-plugin-backend/src/service/router.ts\");\n/*\n * Copyright 2023 RSC-Labs, https://rsoftcon.com/\n *\n * Licensed under the Mozilla Public License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     https://www.mozilla.org/en-US/MPL/2.0/\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */ \n\n\n/**\n * Highlights backend plugin\n *\n * @public\n */ const highlightsPlugin = (0,_backstage_backend_plugin_api__WEBPACK_IMPORTED_MODULE_1__.createBackendPlugin)({\n    pluginId: 'highlights',\n    register (env) {\n        env.registerInit({\n            deps: {\n                logger: _backstage_backend_plugin_api__WEBPACK_IMPORTED_MODULE_1__.coreServices.logger,\n                httpRouter: _backstage_backend_plugin_api__WEBPACK_IMPORTED_MODULE_1__.coreServices.httpRouter,\n                tokenManager: _backstage_backend_plugin_api__WEBPACK_IMPORTED_MODULE_1__.coreServices.tokenManager,\n                discovery: _backstage_backend_plugin_api__WEBPACK_IMPORTED_MODULE_1__.coreServices.discovery,\n                config: _backstage_backend_plugin_api__WEBPACK_IMPORTED_MODULE_1__.coreServices.rootConfig\n            },\n            async init ({ logger, httpRouter, tokenManager, discovery, config }) {\n                httpRouter.use(await (0,_service_router__WEBPACK_IMPORTED_MODULE_2__.createRouter)({\n                    logger: (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__.loggerToWinstonLogger)(logger),\n                    tokenManager: tokenManager,\n                    discovery: discovery,\n                    config: config\n                }));\n            }\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGx1Z2lucy9iYWNrc3RhZ2UtaGlnaGxpZ2h0cy1wbHVnaW4tYmFja2VuZC9zcmMvcGx1Z2luLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7OztBQWNBO0FBR0E7QUFJQTtBQUVBOzs7O0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvc3p5bWtpZXcvYmFja3N0YWdlLWhpZ2hsaWdodHMtcGx1Z2luL3BsdWdpbnMvYmFja3N0YWdlLWhpZ2hsaWdodHMtcGx1Z2luLWJhY2tlbmQvc3JjL3BsdWdpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMjMgUlNDLUxhYnMsIGh0dHBzOi8vcnNvZnRjb24uY29tL1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNb3ppbGxhIFB1YmxpYyBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwczovL3d3dy5tb3ppbGxhLm9yZy9lbi1VUy9NUEwvMi4wL1xuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgbG9nZ2VyVG9XaW5zdG9uTG9nZ2VyIH0gZnJvbSAnQGJhY2tzdGFnZS9iYWNrZW5kLWNvbW1vbic7XG5pbXBvcnQge1xuICBjb3JlU2VydmljZXMsXG4gIGNyZWF0ZUJhY2tlbmRQbHVnaW4sXG59IGZyb20gJ0BiYWNrc3RhZ2UvYmFja2VuZC1wbHVnaW4tYXBpJztcbmltcG9ydCB7IGNyZWF0ZVJvdXRlciB9IGZyb20gJy4vc2VydmljZS9yb3V0ZXInO1xuXG4vKipcbiAqIEhpZ2hsaWdodHMgYmFja2VuZCBwbHVnaW5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBoaWdobGlnaHRzUGx1Z2luID0gY3JlYXRlQmFja2VuZFBsdWdpbih7XG4gIHBsdWdpbklkOiAnaGlnaGxpZ2h0cycsXG4gIHJlZ2lzdGVyKGVudikge1xuICAgIGVudi5yZWdpc3RlckluaXQoe1xuICAgICAgZGVwczoge1xuICAgICAgICBsb2dnZXI6IGNvcmVTZXJ2aWNlcy5sb2dnZXIsXG4gICAgICAgIGh0dHBSb3V0ZXI6IGNvcmVTZXJ2aWNlcy5odHRwUm91dGVyLFxuICAgICAgICB0b2tlbk1hbmFnZXI6IGNvcmVTZXJ2aWNlcy50b2tlbk1hbmFnZXIsXG4gICAgICAgIGRpc2NvdmVyeTogY29yZVNlcnZpY2VzLmRpc2NvdmVyeSxcbiAgICAgICAgY29uZmlnOiBjb3JlU2VydmljZXMucm9vdENvbmZpZyxcbiAgICAgIH0sXG4gICAgICBhc3luYyBpbml0KHsgbG9nZ2VyLCBodHRwUm91dGVyLCB0b2tlbk1hbmFnZXIsIGRpc2NvdmVyeSwgY29uZmlnIH0pIHtcbiAgICAgICAgaHR0cFJvdXRlci51c2UoXG4gICAgICAgICAgYXdhaXQgY3JlYXRlUm91dGVyKHtcbiAgICAgICAgICAgIGxvZ2dlcjogbG9nZ2VyVG9XaW5zdG9uTG9nZ2VyKGxvZ2dlciksXG4gICAgICAgICAgICB0b2tlbk1hbmFnZXI6IHRva2VuTWFuYWdlcixcbiAgICAgICAgICAgIGRpc2NvdmVyeTogZGlzY292ZXJ5LFxuICAgICAgICAgICAgY29uZmlnOiBjb25maWdcbiAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0sXG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../plugins/backstage-highlights-plugin-backend/src/plugin.ts\n");

/***/ }),

/***/ "../../plugins/backstage-highlights-plugin-backend/src/service/router.ts":
/*!*******************************************************************************!*\
  !*** ../../plugins/backstage-highlights-plugin-backend/src/service/router.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createRouter: () => (/* binding */ createRouter)\n/* harmony export */ });\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/backend-common */ \"@backstage/backend-common\");\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _backstage_integration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @backstage/integration */ \"@backstage/integration\");\n/* harmony import */ var _backstage_integration__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_backstage_integration__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _backstage_catalog_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @backstage/catalog-client */ \"@backstage/catalog-client\");\n/* harmony import */ var _backstage_catalog_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_backstage_catalog_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _backstage_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @backstage/errors */ \"@backstage/errors\");\n/* harmony import */ var _backstage_errors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_backstage_errors__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var express_promise_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! express-promise-router */ \"express-promise-router\");\n/* harmony import */ var express_promise_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(express_promise_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _lib_fetchBranches__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/fetchBranches */ \"../../plugins/backstage-highlights-plugin-backend/src/lib/fetchBranches.ts\");\n/* harmony import */ var _lib_fetchTags__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/fetchTags */ \"../../plugins/backstage-highlights-plugin-backend/src/lib/fetchTags.ts\");\n/* harmony import */ var _lib_fetchCommits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/fetchCommits */ \"../../plugins/backstage-highlights-plugin-backend/src/lib/fetchCommits.ts\");\n/*\n * Copyright 2023 RSC-Labs, https://rsoftcon.com/\n *\n * Licensed under the Mozilla Public License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     https://www.mozilla.org/en-US/MPL/2.0/\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */ \n\n\n\n\n\n\n\n\nfunction getGithubConfigFromHighlights(config) {\n    const githubConfig = config.getOptionalConfig('highlights.github');\n    if (githubConfig) {\n        return {\n            token: githubConfig.getOptionalString('token'),\n            apiBaseUrl: githubConfig.getOptionalString('apiBaseUrl')\n        };\n    }\n    return undefined;\n}\nfunction getGitlabConfigFromHighlights(config) {\n    const gitlabConfig = config.getOptionalConfig('highlights.gitlab');\n    if (gitlabConfig) {\n        return {\n            token: gitlabConfig.getOptionalString('token'),\n            apiBaseUrl: gitlabConfig.getOptionalString('apiBaseUrl')\n        };\n    }\n    return undefined;\n}\nfunction getGithubConfig(config) {\n    if (getGithubConfigFromHighlights(config)) {\n        return getGithubConfigFromHighlights(config);\n    }\n    const githubConfigArray = config.getOptionalConfigArray('integrations.github');\n    if (githubConfigArray && githubConfigArray.length) {\n        const integrationConfig = (0,_backstage_integration__WEBPACK_IMPORTED_MODULE_1__.readGithubIntegrationConfig)(githubConfigArray[0]);\n        return {\n            token: integrationConfig.token,\n            apiBaseUrl: integrationConfig.apiBaseUrl\n        };\n    }\n    return undefined;\n}\nfunction getGitlabConfig(config) {\n    if (getGitlabConfigFromHighlights(config)) {\n        return getGitlabConfigFromHighlights(config);\n    }\n    const gitlabConfigArray = config.getOptionalConfigArray('integrations.gitlab');\n    if (gitlabConfigArray && gitlabConfigArray.length) {\n        const integrationConfig = (0,_backstage_integration__WEBPACK_IMPORTED_MODULE_1__.readGitLabIntegrationConfig)(gitlabConfigArray[0]);\n        return {\n            token: integrationConfig.token,\n            apiBaseUrl: integrationConfig.apiBaseUrl\n        };\n    }\n    return undefined;\n}\nasync function createRouter(options) {\n    const { logger, tokenManager, discovery, config } = options;\n    var _options_catalogApi;\n    const catalogApi = (_options_catalogApi = options.catalogApi) !== null && _options_catalogApi !== void 0 ? _options_catalogApi : new _backstage_catalog_client__WEBPACK_IMPORTED_MODULE_2__.CatalogClient({\n        discoveryApi: discovery\n    });\n    const router = express_promise_router__WEBPACK_IMPORTED_MODULE_5___default()();\n    router.use(express__WEBPACK_IMPORTED_MODULE_4__.json());\n    router.get('/health', async ()=>{\n        logger.info('PONG!');\n    });\n    router.get('/entity/:namespace/:kind/:name/fetchBranches', async (req, res)=>{\n        var _entity_metadata_annotations, _entity_metadata_annotations1;\n        const token = await tokenManager.getToken();\n        const { namespace, kind, name } = req.params;\n        const entity = await catalogApi.getEntityByRef({\n            namespace,\n            kind,\n            name\n        }, token);\n        if (!entity) {\n            throw new _backstage_errors__WEBPACK_IMPORTED_MODULE_3__.NotFoundError(`No ${kind} entity in ${namespace} named \"${name}\"`);\n        }\n        const githubProject = entity === null || entity === void 0 ? void 0 : (_entity_metadata_annotations = entity.metadata.annotations) === null || _entity_metadata_annotations === void 0 ? void 0 : _entity_metadata_annotations['github.com/project-slug'];\n        if (githubProject) {\n            const githubConfig = getGithubConfig(config);\n            if (githubConfig && githubConfig.token) {\n                const result = await (0,_lib_fetchBranches__WEBPACK_IMPORTED_MODULE_6__.fetchGithubBranches)(githubProject, githubConfig.token, githubConfig.apiBaseUrl);\n                return res.status(200).json({\n                    branches: result\n                });\n            }\n        }\n        const gitlabProject = entity === null || entity === void 0 ? void 0 : (_entity_metadata_annotations1 = entity.metadata.annotations) === null || _entity_metadata_annotations1 === void 0 ? void 0 : _entity_metadata_annotations1['gitlab.com/project-slug'];\n        if (gitlabProject) {\n            const gitlabConfig = getGitlabConfig(config);\n            if (gitlabConfig && gitlabConfig.token && gitlabConfig.apiBaseUrl) {\n                const result = await (0,_lib_fetchBranches__WEBPACK_IMPORTED_MODULE_6__.fetchGitlabBranches)(gitlabProject, gitlabConfig.token, gitlabConfig.apiBaseUrl);\n                return res.status(200).json({\n                    branches: result\n                });\n            }\n        }\n        return res.status(500).json();\n    });\n    router.get('/entity/:namespace/:kind/:name/fetchTags', async (req, res)=>{\n        var _entity_metadata_annotations, _entity_metadata_annotations1;\n        const token = await tokenManager.getToken();\n        const { namespace, kind, name } = req.params;\n        const entity = await catalogApi.getEntityByRef({\n            namespace,\n            kind,\n            name\n        }, token);\n        if (!entity) {\n            throw new _backstage_errors__WEBPACK_IMPORTED_MODULE_3__.NotFoundError(`No ${kind} entity in ${namespace} named \"${name}\"`);\n        }\n        const githubProject = entity === null || entity === void 0 ? void 0 : (_entity_metadata_annotations = entity.metadata.annotations) === null || _entity_metadata_annotations === void 0 ? void 0 : _entity_metadata_annotations['github.com/project-slug'];\n        if (githubProject) {\n            const githubConfig = getGithubConfig(config);\n            if (githubConfig && githubConfig.token) {\n                const result = await (0,_lib_fetchTags__WEBPACK_IMPORTED_MODULE_7__.fetchGithubTags)(githubProject, githubConfig.token, githubConfig.apiBaseUrl);\n                return res.status(200).json({\n                    tags: result\n                });\n            }\n        }\n        const gitlabProject = entity === null || entity === void 0 ? void 0 : (_entity_metadata_annotations1 = entity.metadata.annotations) === null || _entity_metadata_annotations1 === void 0 ? void 0 : _entity_metadata_annotations1['gitlab.com/project-slug'];\n        if (gitlabProject) {\n            const gitlabConfig = getGitlabConfig(config);\n            if (gitlabConfig && gitlabConfig.token && gitlabConfig.apiBaseUrl) {\n                const result = await (0,_lib_fetchTags__WEBPACK_IMPORTED_MODULE_7__.fetchGitlabTags)(gitlabProject, gitlabConfig.token, gitlabConfig.apiBaseUrl);\n                return res.status(200).json({\n                    tags: result\n                });\n            }\n        }\n        return res.status(500).json();\n    });\n    router.get('/entity/:namespace/:kind/:name/fetchCommits', async (req, res)=>{\n        var _entity_metadata_annotations, _entity_metadata_annotations1;\n        console.log('fetchComimits-----------------------------------');\n        const token = await tokenManager.getToken();\n        const { namespace, kind, name } = req.params;\n        const entity = await catalogApi.getEntityByRef({\n            namespace,\n            kind,\n            name\n        }, token);\n        if (!entity) {\n            throw new _backstage_errors__WEBPACK_IMPORTED_MODULE_3__.NotFoundError(`No ${kind} entity in ${namespace} named \"${name}\"`);\n        }\n        const githubProject = entity === null || entity === void 0 ? void 0 : (_entity_metadata_annotations = entity.metadata.annotations) === null || _entity_metadata_annotations === void 0 ? void 0 : _entity_metadata_annotations['github.com/project-slug'];\n        if (githubProject) {\n            const githubConfig = getGithubConfig(config);\n            if (githubConfig && githubConfig.token) {\n                const result = await (0,_lib_fetchCommits__WEBPACK_IMPORTED_MODULE_8__.fetchGithubCommits)(githubProject, githubConfig.token, githubConfig.apiBaseUrl);\n                return res.status(200).json({\n                    commits: result\n                });\n            }\n        }\n        const gitlabProject = entity === null || entity === void 0 ? void 0 : (_entity_metadata_annotations1 = entity.metadata.annotations) === null || _entity_metadata_annotations1 === void 0 ? void 0 : _entity_metadata_annotations1['gitlab.com/project-slug'];\n        if (gitlabProject) {\n            const gitlabConfig = getGitlabConfig(config);\n            if (gitlabConfig && gitlabConfig.token && gitlabConfig.apiBaseUrl) {\n                const result = await (0,_lib_fetchCommits__WEBPACK_IMPORTED_MODULE_8__.fetchGitlabCommits)(gitlabProject, gitlabConfig.token, gitlabConfig.apiBaseUrl);\n                return res.status(200).json({\n                    commits: result\n                });\n            }\n        }\n        return res.status(500).json();\n    });\n    router.get('/entity/:namespace/:kind/:name/fetchCommits/:id', async (req, res)=>{\n        const token = await tokenManager.getToken();\n        const { namespace, kind, name, id } = req.params;\n        const entity = await catalogApi.getEntityByRef({\n            namespace,\n            kind,\n            name\n        }, token);\n        if (!entity) {\n            throw new _backstage_errors__WEBPACK_IMPORTED_MODULE_3__.NotFoundError(`No ${kind} entity in ${namespace} named \"${name}\"`);\n        }\n        if (id) {\n            var _entity_metadata_annotations;\n            const githubProject = entity === null || entity === void 0 ? void 0 : (_entity_metadata_annotations = entity.metadata.annotations) === null || _entity_metadata_annotations === void 0 ? void 0 : _entity_metadata_annotations['github.com/project-slug'];\n            if (githubProject) {\n                const githubConfig = getGithubConfig(config);\n                if (githubConfig && githubConfig.token) {\n                    const result = await (0,_lib_fetchCommits__WEBPACK_IMPORTED_MODULE_8__.fetchGithubCommit)(githubProject, githubConfig.token, id, githubConfig.apiBaseUrl);\n                    return res.status(200).json({\n                        commits: result\n                    });\n                }\n            }\n        }\n        return res.status(500).json();\n    });\n    router.use((0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__.errorHandler)());\n    return router;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGx1Z2lucy9iYWNrc3RhZ2UtaGlnaGxpZ2h0cy1wbHVnaW4tYmFja2VuZC9zcmMvc2VydmljZS9yb3V0ZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7OztBQWNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVVBO0FBR0E7QUFHQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQWFBO0FBWkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBR0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBYUE7QUFaQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFnQkE7QUFkQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUdBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3N6eW1raWV3L2JhY2tzdGFnZS1oaWdobGlnaHRzLXBsdWdpbi9wbHVnaW5zL2JhY2tzdGFnZS1oaWdobGlnaHRzLXBsdWdpbi1iYWNrZW5kL3NyYy9zZXJ2aWNlL3JvdXRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMjMgUlNDLUxhYnMsIGh0dHBzOi8vcnNvZnRjb24uY29tL1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNb3ppbGxhIFB1YmxpYyBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwczovL3d3dy5tb3ppbGxhLm9yZy9lbi1VUy9NUEwvMi4wL1xuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgZXJyb3JIYW5kbGVyLCBUb2tlbk1hbmFnZXIsIFBsdWdpbkVuZHBvaW50RGlzY292ZXJ5IH0gZnJvbSAnQGJhY2tzdGFnZS9iYWNrZW5kLWNvbW1vbic7XG5pbXBvcnQgeyByZWFkR2l0aHViSW50ZWdyYXRpb25Db25maWcsIHJlYWRHaXRMYWJJbnRlZ3JhdGlvbkNvbmZpZyB9IGZyb20gJ0BiYWNrc3RhZ2UvaW50ZWdyYXRpb24nO1xuaW1wb3J0IHsgQ2F0YWxvZ0NsaWVudCwgQ2F0YWxvZ0FwaSB9IGZyb20gJ0BiYWNrc3RhZ2UvY2F0YWxvZy1jbGllbnQnO1xuaW1wb3J0IHsgTm90Rm91bmRFcnJvciB9IGZyb20gJ0BiYWNrc3RhZ2UvZXJyb3JzJztcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSAnZXhwcmVzcy1wcm9taXNlLXJvdXRlcic7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICd3aW5zdG9uJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJ0BiYWNrc3RhZ2UvY29uZmlnJztcbmltcG9ydCB7IGZldGNoR2l0aHViQnJhbmNoZXMsIGZldGNoR2l0bGFiQnJhbmNoZXMgfSBmcm9tICcuLi9saWIvZmV0Y2hCcmFuY2hlcyc7XG5pbXBvcnQgeyBmZXRjaEdpdGh1YlRhZ3MsIGZldGNoR2l0bGFiVGFncyB9IGZyb20gJy4uL2xpYi9mZXRjaFRhZ3MnO1xuaW1wb3J0IHsgZmV0Y2hHaXRodWJDb21taXRzLCBmZXRjaEdpdGh1YkNvbW1pdCwgZmV0Y2hHaXRsYWJDb21taXRzIH0gZnJvbSAnLi4vbGliL2ZldGNoQ29tbWl0cyc7XG5cbnR5cGUgR2l0aHViQ29uZmlnID0ge1xuICB0b2tlbj86IHN0cmluZyxcbiAgYXBpQmFzZVVybD86IHN0cmluZ1xufVxuXG50eXBlIEdpdGxhYkNvbmZpZyA9IHtcbiAgdG9rZW4/OiBzdHJpbmcsXG4gIGFwaUJhc2VVcmw/OiBzdHJpbmdcbn1cblxuZnVuY3Rpb24gZ2V0R2l0aHViQ29uZmlnRnJvbUhpZ2hsaWdodHMoY29uZmlnOiBDb25maWcpOiBHaXRodWJDb25maWcgfCB1bmRlZmluZWQge1xuICBjb25zdCBnaXRodWJDb25maWcgPSBjb25maWcuZ2V0T3B0aW9uYWxDb25maWcoJ2hpZ2hsaWdodHMuZ2l0aHViJyk7XG4gIGlmIChnaXRodWJDb25maWcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdG9rZW46IGdpdGh1YkNvbmZpZy5nZXRPcHRpb25hbFN0cmluZygndG9rZW4nKSxcbiAgICAgIGFwaUJhc2VVcmw6IGdpdGh1YkNvbmZpZy5nZXRPcHRpb25hbFN0cmluZygnYXBpQmFzZVVybCcpXG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGdldEdpdGxhYkNvbmZpZ0Zyb21IaWdobGlnaHRzKGNvbmZpZzogQ29uZmlnKTogR2l0bGFiQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgY29uc3QgZ2l0bGFiQ29uZmlnID0gY29uZmlnLmdldE9wdGlvbmFsQ29uZmlnKCdoaWdobGlnaHRzLmdpdGxhYicpO1xuICBpZiAoZ2l0bGFiQ29uZmlnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRva2VuOiBnaXRsYWJDb25maWcuZ2V0T3B0aW9uYWxTdHJpbmcoJ3Rva2VuJyksXG4gICAgICBhcGlCYXNlVXJsOiBnaXRsYWJDb25maWcuZ2V0T3B0aW9uYWxTdHJpbmcoJ2FwaUJhc2VVcmwnKVxuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBnZXRHaXRodWJDb25maWcoY29uZmlnOiBDb25maWcpOiBHaXRodWJDb25maWcgfCB1bmRlZmluZWQge1xuICBpZiAoZ2V0R2l0aHViQ29uZmlnRnJvbUhpZ2hsaWdodHMoY29uZmlnKSkge1xuICAgIHJldHVybiBnZXRHaXRodWJDb25maWdGcm9tSGlnaGxpZ2h0cyhjb25maWcpO1xuICB9XG4gIGNvbnN0IGdpdGh1YkNvbmZpZ0FycmF5ID0gY29uZmlnLmdldE9wdGlvbmFsQ29uZmlnQXJyYXkoJ2ludGVncmF0aW9ucy5naXRodWInKTtcbiAgaWYgKGdpdGh1YkNvbmZpZ0FycmF5ICYmIGdpdGh1YkNvbmZpZ0FycmF5Lmxlbmd0aCkge1xuICAgIGNvbnN0IGludGVncmF0aW9uQ29uZmlnID0gcmVhZEdpdGh1YkludGVncmF0aW9uQ29uZmlnKGdpdGh1YkNvbmZpZ0FycmF5WzBdKTtcbiAgICByZXR1cm4ge1xuICAgICAgdG9rZW46IGludGVncmF0aW9uQ29uZmlnLnRva2VuLFxuICAgICAgYXBpQmFzZVVybDogaW50ZWdyYXRpb25Db25maWcuYXBpQmFzZVVybFxuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBnZXRHaXRsYWJDb25maWcoY29uZmlnOiBDb25maWcpOiBHaXRsYWJDb25maWcgfCB1bmRlZmluZWQge1xuICBpZiAoZ2V0R2l0bGFiQ29uZmlnRnJvbUhpZ2hsaWdodHMoY29uZmlnKSkge1xuICAgIHJldHVybiBnZXRHaXRsYWJDb25maWdGcm9tSGlnaGxpZ2h0cyhjb25maWcpO1xuICB9XG4gIGNvbnN0IGdpdGxhYkNvbmZpZ0FycmF5ID0gY29uZmlnLmdldE9wdGlvbmFsQ29uZmlnQXJyYXkoJ2ludGVncmF0aW9ucy5naXRsYWInKTtcbiAgaWYgKGdpdGxhYkNvbmZpZ0FycmF5ICYmIGdpdGxhYkNvbmZpZ0FycmF5Lmxlbmd0aCkge1xuICAgIGNvbnN0IGludGVncmF0aW9uQ29uZmlnID0gcmVhZEdpdExhYkludGVncmF0aW9uQ29uZmlnKGdpdGxhYkNvbmZpZ0FycmF5WzBdKTtcbiAgICByZXR1cm4ge1xuICAgICAgdG9rZW46IGludGVncmF0aW9uQ29uZmlnLnRva2VuLFxuICAgICAgYXBpQmFzZVVybDogaW50ZWdyYXRpb25Db25maWcuYXBpQmFzZVVybFxuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlck9wdGlvbnMge1xuICBsb2dnZXI6IExvZ2dlcjtcbiAgdG9rZW5NYW5hZ2VyOiBUb2tlbk1hbmFnZXI7XG4gIGRpc2NvdmVyeTogUGx1Z2luRW5kcG9pbnREaXNjb3ZlcnksXG4gIGNvbmZpZzogQ29uZmlnO1xuICBjYXRhbG9nQXBpPzogQ2F0YWxvZ0FwaVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUm91dGVyKFxuICBvcHRpb25zOiBSb3V0ZXJPcHRpb25zLFxuKTogUHJvbWlzZTxleHByZXNzLlJvdXRlcj4ge1xuICBjb25zdCB7IGxvZ2dlciwgdG9rZW5NYW5hZ2VyLCBkaXNjb3ZlcnksIGNvbmZpZyB9ID0gb3B0aW9ucztcblxuICBjb25zdCBjYXRhbG9nQXBpID1cbiAgICBvcHRpb25zLmNhdGFsb2dBcGkgPz8gbmV3IENhdGFsb2dDbGllbnQoeyBkaXNjb3ZlcnlBcGk6IGRpc2NvdmVyeSB9KTtcblxuICBjb25zdCByb3V0ZXIgPSBSb3V0ZXIoKTtcbiAgcm91dGVyLnVzZShleHByZXNzLmpzb24oKSk7XG5cbiAgcm91dGVyLmdldCgnL2hlYWx0aCcsIGFzeW5jICgpID0+IHtcbiAgICBsb2dnZXIuaW5mbygnUE9ORyEnKTtcbiAgfSk7XG5cbiAgcm91dGVyLmdldCgnL2VudGl0eS86bmFtZXNwYWNlLzpraW5kLzpuYW1lL2ZldGNoQnJhbmNoZXMnLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCB0b2tlbiA9IGF3YWl0IHRva2VuTWFuYWdlci5nZXRUb2tlbigpO1xuICAgIGNvbnN0IHsgbmFtZXNwYWNlLCBraW5kLCBuYW1lIH0gPSByZXEucGFyYW1zO1xuICAgIGNvbnN0IGVudGl0eSA9IGF3YWl0IGNhdGFsb2dBcGkuZ2V0RW50aXR5QnlSZWYoXG4gICAgICB7IG5hbWVzcGFjZSwga2luZCwgbmFtZSB9LFxuICAgICAgdG9rZW4sXG4gICAgKTtcbiAgICBpZiAoIWVudGl0eSkge1xuICAgICAgdGhyb3cgbmV3IE5vdEZvdW5kRXJyb3IoXG4gICAgICAgIGBObyAke2tpbmR9IGVudGl0eSBpbiAke25hbWVzcGFjZX0gbmFtZWQgXCIke25hbWV9XCJgLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBnaXRodWJQcm9qZWN0ID0gZW50aXR5Py5tZXRhZGF0YS5hbm5vdGF0aW9ucz8uWydnaXRodWIuY29tL3Byb2plY3Qtc2x1ZyddO1xuXG4gICAgaWYgKGdpdGh1YlByb2plY3QpIHtcbiAgICAgICAgY29uc3QgZ2l0aHViQ29uZmlnID0gZ2V0R2l0aHViQ29uZmlnKGNvbmZpZyk7XG4gICAgICAgIGlmIChnaXRodWJDb25maWcgJiYgZ2l0aHViQ29uZmlnLnRva2VuKSB7XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2hHaXRodWJCcmFuY2hlcyhnaXRodWJQcm9qZWN0LCBnaXRodWJDb25maWcudG9rZW4sIGdpdGh1YkNvbmZpZy5hcGlCYXNlVXJsKTtcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe2JyYW5jaGVzOiByZXN1bHR9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdpdGxhYlByb2plY3QgPSBlbnRpdHk/Lm1ldGFkYXRhLmFubm90YXRpb25zPy5bJ2dpdGxhYi5jb20vcHJvamVjdC1zbHVnJ107XG5cbiAgICBpZiAoZ2l0bGFiUHJvamVjdCkge1xuICAgICAgY29uc3QgZ2l0bGFiQ29uZmlnID0gZ2V0R2l0bGFiQ29uZmlnKGNvbmZpZyk7XG4gICAgICBpZiAoZ2l0bGFiQ29uZmlnICYmIGdpdGxhYkNvbmZpZy50b2tlbiAmJiBnaXRsYWJDb25maWcuYXBpQmFzZVVybCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaEdpdGxhYkJyYW5jaGVzKGdpdGxhYlByb2plY3QsIGdpdGxhYkNvbmZpZy50b2tlbiwgZ2l0bGFiQ29uZmlnLmFwaUJhc2VVcmwpO1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe2JyYW5jaGVzOiByZXN1bHR9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oKVxuICB9KTtcblxuICByb3V0ZXIuZ2V0KCcvZW50aXR5LzpuYW1lc3BhY2UvOmtpbmQvOm5hbWUvZmV0Y2hUYWdzJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCB0b2tlbk1hbmFnZXIuZ2V0VG9rZW4oKTtcbiAgICBjb25zdCB7IG5hbWVzcGFjZSwga2luZCwgbmFtZSB9ID0gcmVxLnBhcmFtcztcbiAgICBjb25zdCBlbnRpdHkgPSBhd2FpdCBjYXRhbG9nQXBpLmdldEVudGl0eUJ5UmVmKFxuICAgICAgeyBuYW1lc3BhY2UsIGtpbmQsIG5hbWUgfSxcbiAgICAgIHRva2VuLFxuICAgICk7XG4gICAgaWYgKCFlbnRpdHkpIHtcbiAgICAgIHRocm93IG5ldyBOb3RGb3VuZEVycm9yKFxuICAgICAgICBgTm8gJHtraW5kfSBlbnRpdHkgaW4gJHtuYW1lc3BhY2V9IG5hbWVkIFwiJHtuYW1lfVwiYCxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2l0aHViUHJvamVjdCA9IGVudGl0eT8ubWV0YWRhdGEuYW5ub3RhdGlvbnM/LlsnZ2l0aHViLmNvbS9wcm9qZWN0LXNsdWcnXTtcblxuICAgIGlmIChnaXRodWJQcm9qZWN0KSB7XG4gICAgICBjb25zdCBnaXRodWJDb25maWcgPSBnZXRHaXRodWJDb25maWcoY29uZmlnKTtcbiAgICAgIGlmIChnaXRodWJDb25maWcgJiYgZ2l0aHViQ29uZmlnLnRva2VuKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoR2l0aHViVGFncyhnaXRodWJQcm9qZWN0LCBnaXRodWJDb25maWcudG9rZW4sIGdpdGh1YkNvbmZpZy5hcGlCYXNlVXJsKTtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHt0YWdzOiByZXN1bHR9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnaXRsYWJQcm9qZWN0ID0gZW50aXR5Py5tZXRhZGF0YS5hbm5vdGF0aW9ucz8uWydnaXRsYWIuY29tL3Byb2plY3Qtc2x1ZyddO1xuXG4gICAgaWYgKGdpdGxhYlByb2plY3QpIHtcbiAgICAgIGNvbnN0IGdpdGxhYkNvbmZpZyA9IGdldEdpdGxhYkNvbmZpZyhjb25maWcpO1xuICAgICAgaWYgKGdpdGxhYkNvbmZpZyAmJiBnaXRsYWJDb25maWcudG9rZW4gJiYgZ2l0bGFiQ29uZmlnLmFwaUJhc2VVcmwpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2hHaXRsYWJUYWdzKGdpdGxhYlByb2plY3QsIGdpdGxhYkNvbmZpZy50b2tlbiwgZ2l0bGFiQ29uZmlnLmFwaUJhc2VVcmwpO1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe3RhZ3M6IHJlc3VsdH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbigpXG4gIH0pO1xuXG4gIHJvdXRlci5nZXQoJy9lbnRpdHkvOm5hbWVzcGFjZS86a2luZC86bmFtZS9mZXRjaENvbW1pdHMnLCBhc3luYyAocmVxLCByZXMpID0+IHtcblxuICAgIGNvbnNvbGUubG9nKCdmZXRjaENvbWltaXRzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKVxuXG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCB0b2tlbk1hbmFnZXIuZ2V0VG9rZW4oKTtcbiAgICBjb25zdCB7IG5hbWVzcGFjZSwga2luZCwgbmFtZSB9ID0gcmVxLnBhcmFtcztcbiAgICBjb25zdCBlbnRpdHkgPSBhd2FpdCBjYXRhbG9nQXBpLmdldEVudGl0eUJ5UmVmKFxuICAgICAgeyBuYW1lc3BhY2UsIGtpbmQsIG5hbWUgfSxcbiAgICAgIHRva2VuLFxuICAgICk7XG4gICAgaWYgKCFlbnRpdHkpIHtcbiAgICAgIHRocm93IG5ldyBOb3RGb3VuZEVycm9yKFxuICAgICAgICBgTm8gJHtraW5kfSBlbnRpdHkgaW4gJHtuYW1lc3BhY2V9IG5hbWVkIFwiJHtuYW1lfVwiYCxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2l0aHViUHJvamVjdCA9IGVudGl0eT8ubWV0YWRhdGEuYW5ub3RhdGlvbnM/LlsnZ2l0aHViLmNvbS9wcm9qZWN0LXNsdWcnXTtcblxuICAgIGlmIChnaXRodWJQcm9qZWN0KSB7XG4gICAgICBjb25zdCBnaXRodWJDb25maWcgPSBnZXRHaXRodWJDb25maWcoY29uZmlnKTtcbiAgICAgIGlmIChnaXRodWJDb25maWcgJiYgZ2l0aHViQ29uZmlnLnRva2VuKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoR2l0aHViQ29tbWl0cyhnaXRodWJQcm9qZWN0LCBnaXRodWJDb25maWcudG9rZW4sIGdpdGh1YkNvbmZpZy5hcGlCYXNlVXJsKTtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtjb21taXRzOiByZXN1bHR9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnaXRsYWJQcm9qZWN0ID0gZW50aXR5Py5tZXRhZGF0YS5hbm5vdGF0aW9ucz8uWydnaXRsYWIuY29tL3Byb2plY3Qtc2x1ZyddO1xuXG4gICAgaWYgKGdpdGxhYlByb2plY3QpIHtcbiAgICAgIGNvbnN0IGdpdGxhYkNvbmZpZyA9IGdldEdpdGxhYkNvbmZpZyhjb25maWcpO1xuICAgICAgaWYgKGdpdGxhYkNvbmZpZyAmJiBnaXRsYWJDb25maWcudG9rZW4gJiYgZ2l0bGFiQ29uZmlnLmFwaUJhc2VVcmwpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2hHaXRsYWJDb21taXRzKGdpdGxhYlByb2plY3QsIGdpdGxhYkNvbmZpZy50b2tlbiwgZ2l0bGFiQ29uZmlnLmFwaUJhc2VVcmwpO1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe2NvbW1pdHM6IHJlc3VsdH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbigpXG4gIH0pO1xuXG4gIHJvdXRlci5nZXQoJy9lbnRpdHkvOm5hbWVzcGFjZS86a2luZC86bmFtZS9mZXRjaENvbW1pdHMvOmlkJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG5cbiAgICBjb25zdCB0b2tlbiA9IGF3YWl0IHRva2VuTWFuYWdlci5nZXRUb2tlbigpO1xuICAgIGNvbnN0IHsgbmFtZXNwYWNlLCBraW5kLCBuYW1lLCBpZCB9ID0gcmVxLnBhcmFtcztcbiAgICBjb25zdCBlbnRpdHkgPSBhd2FpdCBjYXRhbG9nQXBpLmdldEVudGl0eUJ5UmVmKFxuICAgICAgeyBuYW1lc3BhY2UsIGtpbmQsIG5hbWUgfSxcbiAgICAgIHRva2VuLFxuICAgICk7XG4gICAgaWYgKCFlbnRpdHkpIHtcbiAgICAgIHRocm93IG5ldyBOb3RGb3VuZEVycm9yKFxuICAgICAgICBgTm8gJHtraW5kfSBlbnRpdHkgaW4gJHtuYW1lc3BhY2V9IG5hbWVkIFwiJHtuYW1lfVwiYCxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGlkKSB7XG4gICAgICBjb25zdCBnaXRodWJQcm9qZWN0ID0gZW50aXR5Py5tZXRhZGF0YS5hbm5vdGF0aW9ucz8uWydnaXRodWIuY29tL3Byb2plY3Qtc2x1ZyddO1xuXG4gICAgICBpZiAoZ2l0aHViUHJvamVjdCkge1xuICAgICAgICBjb25zdCBnaXRodWJDb25maWcgPSBnZXRHaXRodWJDb25maWcoY29uZmlnKTtcbiAgICAgICAgaWYgKGdpdGh1YkNvbmZpZyAmJiBnaXRodWJDb25maWcudG9rZW4pIHtcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaEdpdGh1YkNvbW1pdChnaXRodWJQcm9qZWN0LCBnaXRodWJDb25maWcudG9rZW4sIGlkLCBnaXRodWJDb25maWcuYXBpQmFzZVVybCk7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtjb21taXRzOiByZXN1bHR9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbigpXG4gIH0pO1xuXG4gIHJvdXRlci51c2UoZXJyb3JIYW5kbGVyKCkpO1xuICByZXR1cm4gcm91dGVyO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../plugins/backstage-highlights-plugin-backend/src/service/router.ts\n");

/***/ }),

/***/ "../../plugins/backstage-highlights-plugin-backend/src/types.ts":
/*!**********************************************************************!*\
  !*** ../../plugins/backstage-highlights-plugin-backend/src/types.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** @public */ /** @public */ \n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGx1Z2lucy9iYWNrc3RhZ2UtaGlnaGxpZ2h0cy1wbHVnaW4tYmFja2VuZC9zcmMvdHlwZXMudHMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3N6eW1raWV3L2JhY2tzdGFnZS1oaWdobGlnaHRzLXBsdWdpbi9wbHVnaW5zL2JhY2tzdGFnZS1oaWdobGlnaHRzLXBsdWdpbi1iYWNrZW5kL3NyYy90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQHB1YmxpYyAqL1xuZXhwb3J0IHR5cGUgR2l0VGFnID0ge1xuICAgIG5hbWU6IHN0cmluZyxcbiAgICB0YWdVcmw6IHN0cmluZyxcbiAgICBjb21taXRVcmw6IHN0cmluZyxcbiAgICBjb21taXRJZDogc3RyaW5nLFxuICAgIGNvbW1pdEFwaVVybD86IHN0cmluZyxcbiAgICBjb21taXRNZXNzYWdlPzogc3RyaW5nXG59XG5cbi8qKiBAcHVibGljICovXG5leHBvcnQgdHlwZSBHaXRCcmFuY2ggPSBzdHJpbmc7XG5cbi8qKiBAcHVibGljICovXG5leHBvcnQgdHlwZSBHaXRDb21taXQgPSB7XG4gICAgaWQ6IHN0cmluZyxcbiAgICBodG1sVXJsOiBzdHJpbmcsXG4gICAgYXV0aG9yOiBzdHJpbmcsXG4gICAgYXV0aG9ySHRtbFVybD86IHN0cmluZyxcbiAgICBtZXNzYWdlOiBzdHJpbmcsXG4gICAgZGF0ZTogRGF0ZVxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../plugins/backstage-highlights-plugin-backend/src/types.ts\n");

/***/ }),

/***/ "../../node_modules/webpack/hot/log-apply-result.js":
/*!**********************************************************!*\
  !*** ../../node_modules/webpack/hot/log-apply-result.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\n/**\n * @param {(string | number)[]} updatedModules updated modules\n * @param {(string | number)[] | null} renewedModules renewed modules\n */\nmodule.exports = function (updatedModules, renewedModules) {\n\tvar unacceptedModules = updatedModules.filter(function (moduleId) {\n\t\treturn renewedModules && renewedModules.indexOf(moduleId) < 0;\n\t});\n\tvar log = __webpack_require__(/*! ./log */ \"../../node_modules/webpack/hot/log.js\");\n\n\tif (unacceptedModules.length > 0) {\n\t\tlog(\n\t\t\t\"warning\",\n\t\t\t\"[HMR] The following modules couldn't be hot updated: (They would need a full reload!)\"\n\t\t);\n\t\tunacceptedModules.forEach(function (moduleId) {\n\t\t\tlog(\"warning\", \"[HMR]  - \" + moduleId);\n\t\t});\n\t}\n\n\tif (!renewedModules || renewedModules.length === 0) {\n\t\tlog(\"info\", \"[HMR] Nothing hot updated.\");\n\t} else {\n\t\tlog(\"info\", \"[HMR] Updated modules:\");\n\t\trenewedModules.forEach(function (moduleId) {\n\t\t\tif (typeof moduleId === \"string\" && moduleId.indexOf(\"!\") !== -1) {\n\t\t\t\tvar parts = moduleId.split(\"!\");\n\t\t\t\tlog.groupCollapsed(\"info\", \"[HMR]  - \" + parts.pop());\n\t\t\t\tlog(\"info\", \"[HMR]  - \" + moduleId);\n\t\t\t\tlog.groupEnd(\"info\");\n\t\t\t} else {\n\t\t\t\tlog(\"info\", \"[HMR]  - \" + moduleId);\n\t\t\t}\n\t\t});\n\t\tvar numberIds = renewedModules.every(function (moduleId) {\n\t\t\treturn typeof moduleId === \"number\";\n\t\t});\n\t\tif (numberIds)\n\t\t\tlog(\n\t\t\t\t\"info\",\n\t\t\t\t'[HMR] Consider using the optimization.moduleIds: \"named\" for module names.'\n\t\t\t);\n\t}\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L2xvZy1hcHBseS1yZXN1bHQuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvc3p5bWtpZXcvYmFja3N0YWdlLWhpZ2hsaWdodHMtcGx1Z2luL25vZGVfbW9kdWxlcy93ZWJwYWNrL2hvdC9sb2ctYXBwbHktcmVzdWx0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbi8qKlxuICogQHBhcmFtIHsoc3RyaW5nIHwgbnVtYmVyKVtdfSB1cGRhdGVkTW9kdWxlcyB1cGRhdGVkIG1vZHVsZXNcbiAqIEBwYXJhbSB7KHN0cmluZyB8IG51bWJlcilbXSB8IG51bGx9IHJlbmV3ZWRNb2R1bGVzIHJlbmV3ZWQgbW9kdWxlc1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cGRhdGVkTW9kdWxlcywgcmVuZXdlZE1vZHVsZXMpIHtcblx0dmFyIHVuYWNjZXB0ZWRNb2R1bGVzID0gdXBkYXRlZE1vZHVsZXMuZmlsdGVyKGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuXHRcdHJldHVybiByZW5ld2VkTW9kdWxlcyAmJiByZW5ld2VkTW9kdWxlcy5pbmRleE9mKG1vZHVsZUlkKSA8IDA7XG5cdH0pO1xuXHR2YXIgbG9nID0gcmVxdWlyZShcIi4vbG9nXCIpO1xuXG5cdGlmICh1bmFjY2VwdGVkTW9kdWxlcy5sZW5ndGggPiAwKSB7XG5cdFx0bG9nKFxuXHRcdFx0XCJ3YXJuaW5nXCIsXG5cdFx0XHRcIltITVJdIFRoZSBmb2xsb3dpbmcgbW9kdWxlcyBjb3VsZG4ndCBiZSBob3QgdXBkYXRlZDogKFRoZXkgd291bGQgbmVlZCBhIGZ1bGwgcmVsb2FkISlcIlxuXHRcdCk7XG5cdFx0dW5hY2NlcHRlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlSWQpIHtcblx0XHRcdGxvZyhcIndhcm5pbmdcIiwgXCJbSE1SXSAgLSBcIiArIG1vZHVsZUlkKTtcblx0XHR9KTtcblx0fVxuXG5cdGlmICghcmVuZXdlZE1vZHVsZXMgfHwgcmVuZXdlZE1vZHVsZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0bG9nKFwiaW5mb1wiLCBcIltITVJdIE5vdGhpbmcgaG90IHVwZGF0ZWQuXCIpO1xuXHR9IGVsc2Uge1xuXHRcdGxvZyhcImluZm9cIiwgXCJbSE1SXSBVcGRhdGVkIG1vZHVsZXM6XCIpO1xuXHRcdHJlbmV3ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0XHRpZiAodHlwZW9mIG1vZHVsZUlkID09PSBcInN0cmluZ1wiICYmIG1vZHVsZUlkLmluZGV4T2YoXCIhXCIpICE9PSAtMSkge1xuXHRcdFx0XHR2YXIgcGFydHMgPSBtb2R1bGVJZC5zcGxpdChcIiFcIik7XG5cdFx0XHRcdGxvZy5ncm91cENvbGxhcHNlZChcImluZm9cIiwgXCJbSE1SXSAgLSBcIiArIHBhcnRzLnBvcCgpKTtcblx0XHRcdFx0bG9nKFwiaW5mb1wiLCBcIltITVJdICAtIFwiICsgbW9kdWxlSWQpO1xuXHRcdFx0XHRsb2cuZ3JvdXBFbmQoXCJpbmZvXCIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bG9nKFwiaW5mb1wiLCBcIltITVJdICAtIFwiICsgbW9kdWxlSWQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHZhciBudW1iZXJJZHMgPSByZW5ld2VkTW9kdWxlcy5ldmVyeShmdW5jdGlvbiAobW9kdWxlSWQpIHtcblx0XHRcdHJldHVybiB0eXBlb2YgbW9kdWxlSWQgPT09IFwibnVtYmVyXCI7XG5cdFx0fSk7XG5cdFx0aWYgKG51bWJlcklkcylcblx0XHRcdGxvZyhcblx0XHRcdFx0XCJpbmZvXCIsXG5cdFx0XHRcdCdbSE1SXSBDb25zaWRlciB1c2luZyB0aGUgb3B0aW1pemF0aW9uLm1vZHVsZUlkczogXCJuYW1lZFwiIGZvciBtb2R1bGUgbmFtZXMuJ1xuXHRcdFx0KTtcblx0fVxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../node_modules/webpack/hot/log-apply-result.js\n");

/***/ }),

/***/ "../../node_modules/webpack/hot/log.js":
/*!*********************************************!*\
  !*** ../../node_modules/webpack/hot/log.js ***!
  \*********************************************/
/***/ ((module) => {

eval("/** @typedef {\"info\" | \"warning\" | \"error\"} LogLevel */\n\n/** @type {LogLevel} */\nvar logLevel = \"info\";\n\nfunction dummy() {}\n\n/**\n * @param {LogLevel} level log level\n * @returns {boolean} true, if should log\n */\nfunction shouldLog(level) {\n\tvar shouldLog =\n\t\t(logLevel === \"info\" && level === \"info\") ||\n\t\t([\"info\", \"warning\"].indexOf(logLevel) >= 0 && level === \"warning\") ||\n\t\t([\"info\", \"warning\", \"error\"].indexOf(logLevel) >= 0 && level === \"error\");\n\treturn shouldLog;\n}\n\n/**\n * @param {(msg?: string) => void} logFn log function\n * @returns {(level: LogLevel, msg?: string) => void} function that logs when log level is sufficient\n */\nfunction logGroup(logFn) {\n\treturn function (level, msg) {\n\t\tif (shouldLog(level)) {\n\t\t\tlogFn(msg);\n\t\t}\n\t};\n}\n\n/**\n * @param {LogLevel} level log level\n * @param {string|Error} msg message\n */\nmodule.exports = function (level, msg) {\n\tif (shouldLog(level)) {\n\t\tif (level === \"info\") {\n\t\t\tconsole.log(msg);\n\t\t} else if (level === \"warning\") {\n\t\t\tconsole.warn(msg);\n\t\t} else if (level === \"error\") {\n\t\t\tconsole.error(msg);\n\t\t}\n\t}\n};\n\n/* eslint-disable node/no-unsupported-features/node-builtins */\nvar group = console.group || dummy;\nvar groupCollapsed = console.groupCollapsed || dummy;\nvar groupEnd = console.groupEnd || dummy;\n/* eslint-enable node/no-unsupported-features/node-builtins */\n\nmodule.exports.group = logGroup(group);\n\nmodule.exports.groupCollapsed = logGroup(groupCollapsed);\n\nmodule.exports.groupEnd = logGroup(groupEnd);\n\n/**\n * @param {LogLevel} level log level\n */\nmodule.exports.setLogLevel = function (level) {\n\tlogLevel = level;\n};\n\n/**\n * @param {Error} err error\n * @returns {string} formatted error\n */\nmodule.exports.formatError = function (err) {\n\tvar message = err.message;\n\tvar stack = err.stack;\n\tif (!stack) {\n\t\treturn message;\n\t} else if (stack.indexOf(message) < 0) {\n\t\treturn message + \"\\n\" + stack;\n\t} else {\n\t\treturn stack;\n\t}\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L2xvZy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvc3p5bWtpZXcvYmFja3N0YWdlLWhpZ2hsaWdodHMtcGx1Z2luL25vZGVfbW9kdWxlcy93ZWJwYWNrL2hvdC9sb2cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEB0eXBlZGVmIHtcImluZm9cIiB8IFwid2FybmluZ1wiIHwgXCJlcnJvclwifSBMb2dMZXZlbCAqL1xuXG4vKiogQHR5cGUge0xvZ0xldmVsfSAqL1xudmFyIGxvZ0xldmVsID0gXCJpbmZvXCI7XG5cbmZ1bmN0aW9uIGR1bW15KCkge31cblxuLyoqXG4gKiBAcGFyYW0ge0xvZ0xldmVsfSBsZXZlbCBsb2cgbGV2ZWxcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlLCBpZiBzaG91bGQgbG9nXG4gKi9cbmZ1bmN0aW9uIHNob3VsZExvZyhsZXZlbCkge1xuXHR2YXIgc2hvdWxkTG9nID1cblx0XHQobG9nTGV2ZWwgPT09IFwiaW5mb1wiICYmIGxldmVsID09PSBcImluZm9cIikgfHxcblx0XHQoW1wiaW5mb1wiLCBcIndhcm5pbmdcIl0uaW5kZXhPZihsb2dMZXZlbCkgPj0gMCAmJiBsZXZlbCA9PT0gXCJ3YXJuaW5nXCIpIHx8XG5cdFx0KFtcImluZm9cIiwgXCJ3YXJuaW5nXCIsIFwiZXJyb3JcIl0uaW5kZXhPZihsb2dMZXZlbCkgPj0gMCAmJiBsZXZlbCA9PT0gXCJlcnJvclwiKTtcblx0cmV0dXJuIHNob3VsZExvZztcbn1cblxuLyoqXG4gKiBAcGFyYW0geyhtc2c/OiBzdHJpbmcpID0+IHZvaWR9IGxvZ0ZuIGxvZyBmdW5jdGlvblxuICogQHJldHVybnMgeyhsZXZlbDogTG9nTGV2ZWwsIG1zZz86IHN0cmluZykgPT4gdm9pZH0gZnVuY3Rpb24gdGhhdCBsb2dzIHdoZW4gbG9nIGxldmVsIGlzIHN1ZmZpY2llbnRcbiAqL1xuZnVuY3Rpb24gbG9nR3JvdXAobG9nRm4pIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChsZXZlbCwgbXNnKSB7XG5cdFx0aWYgKHNob3VsZExvZyhsZXZlbCkpIHtcblx0XHRcdGxvZ0ZuKG1zZyk7XG5cdFx0fVxuXHR9O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7TG9nTGV2ZWx9IGxldmVsIGxvZyBsZXZlbFxuICogQHBhcmFtIHtzdHJpbmd8RXJyb3J9IG1zZyBtZXNzYWdlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxldmVsLCBtc2cpIHtcblx0aWYgKHNob3VsZExvZyhsZXZlbCkpIHtcblx0XHRpZiAobGV2ZWwgPT09IFwiaW5mb1wiKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhtc2cpO1xuXHRcdH0gZWxzZSBpZiAobGV2ZWwgPT09IFwid2FybmluZ1wiKSB7XG5cdFx0XHRjb25zb2xlLndhcm4obXNnKTtcblx0XHR9IGVsc2UgaWYgKGxldmVsID09PSBcImVycm9yXCIpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IobXNnKTtcblx0XHR9XG5cdH1cbn07XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vZGUvbm8tdW5zdXBwb3J0ZWQtZmVhdHVyZXMvbm9kZS1idWlsdGlucyAqL1xudmFyIGdyb3VwID0gY29uc29sZS5ncm91cCB8fCBkdW1teTtcbnZhciBncm91cENvbGxhcHNlZCA9IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQgfHwgZHVtbXk7XG52YXIgZ3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kIHx8IGR1bW15O1xuLyogZXNsaW50LWVuYWJsZSBub2RlL25vLXVuc3VwcG9ydGVkLWZlYXR1cmVzL25vZGUtYnVpbHRpbnMgKi9cblxubW9kdWxlLmV4cG9ydHMuZ3JvdXAgPSBsb2dHcm91cChncm91cCk7XG5cbm1vZHVsZS5leHBvcnRzLmdyb3VwQ29sbGFwc2VkID0gbG9nR3JvdXAoZ3JvdXBDb2xsYXBzZWQpO1xuXG5tb2R1bGUuZXhwb3J0cy5ncm91cEVuZCA9IGxvZ0dyb3VwKGdyb3VwRW5kKTtcblxuLyoqXG4gKiBAcGFyYW0ge0xvZ0xldmVsfSBsZXZlbCBsb2cgbGV2ZWxcbiAqL1xubW9kdWxlLmV4cG9ydHMuc2V0TG9nTGV2ZWwgPSBmdW5jdGlvbiAobGV2ZWwpIHtcblx0bG9nTGV2ZWwgPSBsZXZlbDtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyIGVycm9yXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBmb3JtYXR0ZWQgZXJyb3JcbiAqL1xubW9kdWxlLmV4cG9ydHMuZm9ybWF0RXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG5cdHZhciBtZXNzYWdlID0gZXJyLm1lc3NhZ2U7XG5cdHZhciBzdGFjayA9IGVyci5zdGFjaztcblx0aWYgKCFzdGFjaykge1xuXHRcdHJldHVybiBtZXNzYWdlO1xuXHR9IGVsc2UgaWYgKHN0YWNrLmluZGV4T2YobWVzc2FnZSkgPCAwKSB7XG5cdFx0cmV0dXJuIG1lc3NhZ2UgKyBcIlxcblwiICsgc3RhY2s7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIHN0YWNrO1xuXHR9XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../node_modules/webpack/hot/log.js\n");

/***/ }),

/***/ "../../node_modules/webpack/hot/poll.js?100":
/*!**************************************************!*\
  !*** ../../node_modules/webpack/hot/poll.js?100 ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var __resourceQuery = \"?100\";\n/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n/*globals __resourceQuery */\nif (true) {\n\tvar hotPollInterval = +__resourceQuery.slice(1) || 0;\n\tvar log = __webpack_require__(/*! ./log */ \"../../node_modules/webpack/hot/log.js\");\n\n\t/**\n\t * @param {boolean=} fromUpdate true when called from update\n\t */\n\tvar checkForUpdate = function checkForUpdate(fromUpdate) {\n\t\tif (module.hot.status() === \"idle\") {\n\t\t\tmodule.hot\n\t\t\t\t.check(true)\n\t\t\t\t.then(function (updatedModules) {\n\t\t\t\t\tif (!updatedModules) {\n\t\t\t\t\t\tif (fromUpdate) log(\"info\", \"[HMR] Update applied.\");\n\t\t\t\t\t\treturn;\n\t\t\t\t\t}\n\t\t\t\t\t__webpack_require__(/*! ./log-apply-result */ \"../../node_modules/webpack/hot/log-apply-result.js\")(updatedModules, updatedModules);\n\t\t\t\t\tcheckForUpdate(true);\n\t\t\t\t})\n\t\t\t\t.catch(function (err) {\n\t\t\t\t\tvar status = module.hot.status();\n\t\t\t\t\tif ([\"abort\", \"fail\"].indexOf(status) >= 0) {\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] Cannot apply update.\");\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] \" + log.formatError(err));\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] You need to restart the application!\");\n\t\t\t\t\t} else {\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] Update failed: \" + log.formatError(err));\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t}\n\t};\n\tsetInterval(checkForUpdate, hotPollInterval);\n} else {}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L3BvbGwuanM/MTAwIiwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3N6eW1raWV3L2JhY2tzdGFnZS1oaWdobGlnaHRzLXBsdWdpbi9ub2RlX21vZHVsZXMvd2VicGFjay9ob3QvcG9sbC5qcz8xMDAiXSwic291cmNlc0NvbnRlbnQiOlsiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8qZ2xvYmFscyBfX3Jlc291cmNlUXVlcnkgKi9cbmlmIChtb2R1bGUuaG90KSB7XG5cdHZhciBob3RQb2xsSW50ZXJ2YWwgPSArX19yZXNvdXJjZVF1ZXJ5LnNsaWNlKDEpIHx8IDEwICogNjAgKiAxMDAwO1xuXHR2YXIgbG9nID0gcmVxdWlyZShcIi4vbG9nXCIpO1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge2Jvb2xlYW49fSBmcm9tVXBkYXRlIHRydWUgd2hlbiBjYWxsZWQgZnJvbSB1cGRhdGVcblx0ICovXG5cdHZhciBjaGVja0ZvclVwZGF0ZSA9IGZ1bmN0aW9uIGNoZWNrRm9yVXBkYXRlKGZyb21VcGRhdGUpIHtcblx0XHRpZiAobW9kdWxlLmhvdC5zdGF0dXMoKSA9PT0gXCJpZGxlXCIpIHtcblx0XHRcdG1vZHVsZS5ob3Rcblx0XHRcdFx0LmNoZWNrKHRydWUpXG5cdFx0XHRcdC50aGVuKGZ1bmN0aW9uICh1cGRhdGVkTW9kdWxlcykge1xuXHRcdFx0XHRcdGlmICghdXBkYXRlZE1vZHVsZXMpIHtcblx0XHRcdFx0XHRcdGlmIChmcm9tVXBkYXRlKSBsb2coXCJpbmZvXCIsIFwiW0hNUl0gVXBkYXRlIGFwcGxpZWQuXCIpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXF1aXJlKFwiLi9sb2ctYXBwbHktcmVzdWx0XCIpKHVwZGF0ZWRNb2R1bGVzLCB1cGRhdGVkTW9kdWxlcyk7XG5cdFx0XHRcdFx0Y2hlY2tGb3JVcGRhdGUodHJ1ZSk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG5cdFx0XHRcdFx0dmFyIHN0YXR1cyA9IG1vZHVsZS5ob3Quc3RhdHVzKCk7XG5cdFx0XHRcdFx0aWYgKFtcImFib3J0XCIsIFwiZmFpbFwiXS5pbmRleE9mKHN0YXR1cykgPj0gMCkge1xuXHRcdFx0XHRcdFx0bG9nKFwid2FybmluZ1wiLCBcIltITVJdIENhbm5vdCBhcHBseSB1cGRhdGUuXCIpO1xuXHRcdFx0XHRcdFx0bG9nKFwid2FybmluZ1wiLCBcIltITVJdIFwiICsgbG9nLmZvcm1hdEVycm9yKGVycikpO1xuXHRcdFx0XHRcdFx0bG9nKFwid2FybmluZ1wiLCBcIltITVJdIFlvdSBuZWVkIHRvIHJlc3RhcnQgdGhlIGFwcGxpY2F0aW9uIVwiKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bG9nKFwid2FybmluZ1wiLCBcIltITVJdIFVwZGF0ZSBmYWlsZWQ6IFwiICsgbG9nLmZvcm1hdEVycm9yKGVycikpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXHRzZXRJbnRlcnZhbChjaGVja0ZvclVwZGF0ZSwgaG90UG9sbEludGVydmFsKTtcbn0gZWxzZSB7XG5cdHRocm93IG5ldyBFcnJvcihcIltITVJdIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnQgaXMgZGlzYWJsZWQuXCIpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../node_modules/webpack/hot/poll.js?100\n");

/***/ }),

/***/ "@backstage/backend-common":
/*!**********************************************************************************************************************!*\
  !*** external "/home/szymkiew/backstage-highlights-plugin/node_modules/@backstage/backend-common/dist/index.cjs.js" ***!
  \**********************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/home/szymkiew/backstage-highlights-plugin/node_modules/@backstage/backend-common/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/backend-plugin-api":
/*!**************************************************************************************************************************!*\
  !*** external "/home/szymkiew/backstage-highlights-plugin/node_modules/@backstage/backend-plugin-api/dist/index.cjs.js" ***!
  \**************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/home/szymkiew/backstage-highlights-plugin/node_modules/@backstage/backend-plugin-api/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/backend-tasks":
/*!*********************************************************************************************************************!*\
  !*** external "/home/szymkiew/backstage-highlights-plugin/node_modules/@backstage/backend-tasks/dist/index.cjs.js" ***!
  \*********************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/home/szymkiew/backstage-highlights-plugin/node_modules/@backstage/backend-tasks/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/catalog-client":
/*!**********************************************************************************************************************!*\
  !*** external "/home/szymkiew/backstage-highlights-plugin/node_modules/@backstage/catalog-client/dist/index.cjs.js" ***!
  \**********************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/home/szymkiew/backstage-highlights-plugin/node_modules/@backstage/catalog-client/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/errors":
/*!**************************************************************************************************************!*\
  !*** external "/home/szymkiew/backstage-highlights-plugin/node_modules/@backstage/errors/dist/index.cjs.js" ***!
  \**************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/home/szymkiew/backstage-highlights-plugin/node_modules/@backstage/errors/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-app-backend":
/*!**************************************************************************************************************************!*\
  !*** external "/home/szymkiew/backstage-highlights-plugin/node_modules/@backstage/plugin-app-backend/dist/index.cjs.js" ***!
  \**************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/home/szymkiew/backstage-highlights-plugin/node_modules/@backstage/plugin-app-backend/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-auth-backend":
/*!***************************************************************************************************************************!*\
  !*** external "/home/szymkiew/backstage-highlights-plugin/node_modules/@backstage/plugin-auth-backend/dist/index.cjs.js" ***!
  \***************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/home/szymkiew/backstage-highlights-plugin/node_modules/@backstage/plugin-auth-backend/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-catalog-backend":
/*!******************************************************************************************************************************!*\
  !*** external "/home/szymkiew/backstage-highlights-plugin/node_modules/@backstage/plugin-catalog-backend/dist/index.cjs.js" ***!
  \******************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/home/szymkiew/backstage-highlights-plugin/node_modules/@backstage/plugin-catalog-backend/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-permission-node":
/*!******************************************************************************************************************************!*\
  !*** external "/home/szymkiew/backstage-highlights-plugin/node_modules/@backstage/plugin-permission-node/dist/index.cjs.js" ***!
  \******************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/home/szymkiew/backstage-highlights-plugin/node_modules/@backstage/plugin-permission-node/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-proxy-backend":
/*!****************************************************************************************************************************!*\
  !*** external "/home/szymkiew/backstage-highlights-plugin/node_modules/@backstage/plugin-proxy-backend/dist/index.cjs.js" ***!
  \****************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/home/szymkiew/backstage-highlights-plugin/node_modules/@backstage/plugin-proxy-backend/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-scaffolder-backend":
/*!*********************************************************************************************************************************!*\
  !*** external "/home/szymkiew/backstage-highlights-plugin/node_modules/@backstage/plugin-scaffolder-backend/dist/index.cjs.js" ***!
  \*********************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/home/szymkiew/backstage-highlights-plugin/node_modules/@backstage/plugin-scaffolder-backend/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-search-backend-node":
/*!**********************************************************************************************************************************!*\
  !*** external "/home/szymkiew/backstage-highlights-plugin/node_modules/@backstage/plugin-search-backend-node/dist/index.cjs.js" ***!
  \**********************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/home/szymkiew/backstage-highlights-plugin/node_modules/@backstage/plugin-search-backend-node/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-search-backend":
/*!*****************************************************************************************************************************!*\
  !*** external "/home/szymkiew/backstage-highlights-plugin/node_modules/@backstage/plugin-search-backend/dist/index.cjs.js" ***!
  \*****************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/home/szymkiew/backstage-highlights-plugin/node_modules/@backstage/plugin-search-backend/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-techdocs-backend":
/*!*******************************************************************************************************************************!*\
  !*** external "/home/szymkiew/backstage-highlights-plugin/node_modules/@backstage/plugin-techdocs-backend/dist/index.cjs.js" ***!
  \*******************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/home/szymkiew/backstage-highlights-plugin/node_modules/@backstage/plugin-techdocs-backend/dist/index.cjs.js");

/***/ }),

/***/ "dockerode":
/*!**************************************************************************************************!*\
  !*** external "/home/szymkiew/backstage-highlights-plugin/node_modules/dockerode/lib/docker.js" ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/home/szymkiew/backstage-highlights-plugin/node_modules/dockerode/lib/docker.js");

/***/ }),

/***/ "express-promise-router":
/*!*******************************************************************************************************************************!*\
  !*** external "/home/szymkiew/backstage-highlights-plugin/node_modules/express-promise-router/lib/express-promise-router.js" ***!
  \*******************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/home/szymkiew/backstage-highlights-plugin/node_modules/express-promise-router/lib/express-promise-router.js");

/***/ }),

/***/ "express":
/*!*******************************************************************************************!*\
  !*** external "/home/szymkiew/backstage-highlights-plugin/node_modules/express/index.js" ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/home/szymkiew/backstage-highlights-plugin/node_modules/express/index.js");

/***/ }),

/***/ "@backstage/plugin-auth-node":
/*!*****************************************************************************************************************************************!*\
  !*** external "/home/szymkiew/backstage-highlights-plugin/packages/backend/node_modules/@backstage/plugin-auth-node/dist/index.cjs.js" ***!
  \*****************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/home/szymkiew/backstage-highlights-plugin/packages/backend/node_modules/@backstage/plugin-auth-node/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/integration":
/*!***************************************************************************************************************************************************************!*\
  !*** external "/home/szymkiew/backstage-highlights-plugin/plugins/backstage-highlights-plugin-backend/node_modules/@backstage/integration/dist/index.cjs.js" ***!
  \***************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/home/szymkiew/backstage-highlights-plugin/plugins/backstage-highlights-plugin-backend/node_modules/@backstage/integration/dist/index.cjs.js");

/***/ }),

/***/ "@octokit/rest":
/*!*******************************************************************************************************************************************************!*\
  !*** external "/home/szymkiew/backstage-highlights-plugin/plugins/backstage-highlights-plugin-backend/node_modules/@octokit/rest/dist-node/index.js" ***!
  \*******************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/home/szymkiew/backstage-highlights-plugin/plugins/backstage-highlights-plugin-backend/node_modules/@octokit/rest/dist-node/index.js");

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
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
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
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("452458215b7e1c46e530")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
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
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = __webpack_require__.hmrS_require = __webpack_require__.hmrS_require || {
/******/ 			"main": 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no chunk install function needed
/******/ 		
/******/ 		// no chunk loading
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			var update = require("./" + __webpack_require__.hu(chunkId));
/******/ 			var updatedModules = update.modules;
/******/ 			var runtime = update.runtime;
/******/ 			for(var moduleId in updatedModules) {
/******/ 				if(__webpack_require__.o(updatedModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = updatedModules[moduleId];
/******/ 					if(updatedModulesList) updatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 		}
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.requireHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.require = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.require = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.requireHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			return Promise.resolve().then(function() {
/******/ 				return require("./" + __webpack_require__.hmrF());
/******/ 			})['catch'](function(err) { if(err.code !== 'MODULE_NOT_FOUND') throw err; });
/******/ 		}
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("../../node_modules/webpack/hot/poll.js?100");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;