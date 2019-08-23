module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/command.ts":
/*!*******************************!*\
  !*** ./src/server/command.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url */ "url");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_0__);
const localhost=host=>process.getuid()===0&&(host==='localhost'||host==='0.0.0.0'||host==='127.0.0.1');const urlArgs=(referer,def)=>Object.assign(def,url__WEBPACK_IMPORTED_MODULE_0__["parse"](referer,true).query);const getRemoteAddress=remoteAddress=>remoteAddress.split(':')[3]===undefined?'localhost':remoteAddress.split(':')[3];/* harmony default export */ __webpack_exports__["default"] = (({request:{headers:{referer}},client:{conn:{remoteAddress}}},{user,host,port,auth,pass,key},command)=>({args:localhost(host)?loginOptions(command,remoteAddress):sshOptions(urlArgs(referer,{host:address(referer,user,host),port:`${port}`,pass,command,auth}),key),user:localhost(host)||user!==''||user.includes('@')||address(referer,user,host).includes('@')}));function parseCommand(command,path){if(command==='login'&&path===undefined)return'';return path!==undefined?`$SHELL -c "cd ${path};${command==='login'?'$SHELL':command}"`:command;}function sshOptions({pass,path,command,host,port,auth},key){const cmd=parseCommand(command,path);const sshRemoteOptsBase=['ssh',host,'-t','-p',port,'-o',`PreferredAuthentications=${auth}`];if(key){return sshRemoteOptsBase.concat(['-i',key,cmd]);}if(pass){return['sshpass','-p',pass].concat(sshRemoteOptsBase,[cmd]);}if(cmd===''){return sshRemoteOptsBase;}return sshRemoteOptsBase.concat([cmd]);}function loginOptions(command,remoteAddress){return command==='login'?[command,'-h',getRemoteAddress(remoteAddress)]:[command];}function address(referer,user,host){const match=referer.match('.+/ssh/([^/]+)$');const fallback=user?`${user}@${host}`:host;return match?`${match[1]}@${host}`:fallback;}

/***/ }),

/***/ "./src/server/emitter.ts":
/*!*******************************!*\
  !*** ./src/server/emitter.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wetty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wetty */ "./src/server/wetty.ts");
/* harmony default export */ __webpack_exports__["default"] = (new _wetty__WEBPACK_IMPORTED_MODULE_0__["default"]());

/***/ }),

/***/ "./src/server/index.ts":
/*!*****************************!*\
  !*** ./src/server/index.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Server; });
/* harmony import */ var yargs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yargs */ "yargs");
/* harmony import */ var yargs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yargs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger */ "./src/server/logger.ts");
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emitter */ "./src/server/emitter.ts");
class Server{static start({sshuser,sshhost,sshauth,sshport,sshkey,sshpass,base,host,port,title,command,sslkey,sslcert,bypasshelmet}){_emitter__WEBPACK_IMPORTED_MODULE_2__["default"].on('exit',({code,msg})=>{_logger__WEBPACK_IMPORTED_MODULE_1__["default"].info(`Exit with code: ${code} ${msg}`);}).on('disconnect',()=>{_logger__WEBPACK_IMPORTED_MODULE_1__["default"].info('disconnect');}).on('spawn',({msg})=>_logger__WEBPACK_IMPORTED_MODULE_1__["default"].info(msg)).on('connection',({msg,date})=>_logger__WEBPACK_IMPORTED_MODULE_1__["default"].info(`${date} ${msg}`)).on('server',({msg})=>_logger__WEBPACK_IMPORTED_MODULE_1__["default"].info(msg)).on('debug',msg=>_logger__WEBPACK_IMPORTED_MODULE_1__["default"].debug(msg));return _emitter__WEBPACK_IMPORTED_MODULE_2__["default"].start({user:sshuser,host:sshhost,auth:sshauth,port:sshport,title,pass:sshpass,key:sshkey},{base,host,port,title,bypasshelmet},command,{key:sslkey,cert:sslcert});}static get wetty(){return _emitter__WEBPACK_IMPORTED_MODULE_2__["default"];}static init(opts){if(!opts.help){this.start(opts).catch(err=>{_logger__WEBPACK_IMPORTED_MODULE_1__["default"].error(err);process.exitCode=1;});}else{yargs__WEBPACK_IMPORTED_MODULE_0__["showHelp"]();process.exitCode=0;}}}

/***/ }),

/***/ "./src/server/logger.ts":
/*!******************************!*\
  !*** ./src/server/logger.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! winston */ "winston");
/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(winston__WEBPACK_IMPORTED_MODULE_0__);
const{combine,timestamp,label,printf,colorize}=winston__WEBPACK_IMPORTED_MODULE_0__["format"];const logger=Object(winston__WEBPACK_IMPORTED_MODULE_0__["createLogger"])({format: true?combine(colorize({all:true}),label({label:'Wetty'}),timestamp(),printf(info=>`${info.timestamp} [${info.label}] ${info.level}: ${info.message}`)):undefined,transports:[new winston__WEBPACK_IMPORTED_MODULE_0__["transports"].Console({level: true?'debug':undefined,handleExceptions:true})]});logger.stream={write(message){logger.info(message);}};/* harmony default export */ __webpack_exports__["default"] = (logger);

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createServer; });
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isUndefined */ "lodash/isUndefined");
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! compression */ "compression");
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var serve_favicon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! serve-favicon */ "serve-favicon");
/* harmony import */ var serve_favicon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(serve_favicon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! helmet */ "helmet");
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! https */ "https");
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(https__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! socket.io */ "socket.io");
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! morgan */ "morgan");
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./logger */ "./src/server/logger.ts");
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./emitter */ "./src/server/emitter.ts");
const distDir=path__WEBPACK_IMPORTED_MODULE_7__["join"](__dirname,'client');const trim=str=>str.replace(/\/*$/,'');function createServer({base,port,host,title,bypasshelmet},{key,cert}){const basePath=trim(base);_emitter__WEBPACK_IMPORTED_MODULE_11__["default"].emit('debug',`key: ${key}, cert: ${cert}, port: ${port}, base: ${base}, title: ${title}`);const html=(req,res)=>{const resourcePath=/^\/ssh\//.test(req.url)?'../':'';res.send(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>${title}</title>
    <link rel="stylesheet" href="${resourcePath}public/index.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
  </head>
  <body>
    <div id="overlay">
      <div class="error">
        <div id="msg"></div>
        <input type="button" onclick="location.reload();" value="reconnect" />
      </div>
    </div>
    <div id="options">
      <a class="toggler"
         href="#"
         alt="Toggle options"><i class="fas fa-cogs"></i></a>
      <textarea class="editor"></textarea>
    </div>
    <div id="terminal"></div>
    <script src="${resourcePath}public/index.js"></script>
  </body>
</html>`);};const app=express__WEBPACK_IMPORTED_MODULE_2__();app.use(morgan__WEBPACK_IMPORTED_MODULE_9__('combined',{stream:_logger__WEBPACK_IMPORTED_MODULE_10__["default"].stream})).use(compression__WEBPACK_IMPORTED_MODULE_1__()).use(serve_favicon__WEBPACK_IMPORTED_MODULE_3__(path__WEBPACK_IMPORTED_MODULE_7__["join"](distDir,'favicon.ico'))).use(`${basePath}/public`,express__WEBPACK_IMPORTED_MODULE_2__["static"](distDir)).use((req,res,next)=>{if(req.url===basePath)res.redirect(301,req.url+'/');else next();});// Allow helmet to be bypassed.
// Unfortunately, order matters with middleware
// which is why this is thrown in the middle
if(!bypasshelmet){app.use(helmet__WEBPACK_IMPORTED_MODULE_4__());}app.get(basePath,html).get(`${basePath}/ssh/:user`,html);return socket_io__WEBPACK_IMPORTED_MODULE_8__(!lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default()(key)&&!lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default()(cert)?https__WEBPACK_IMPORTED_MODULE_6__["createServer"]({key,cert},app).listen(port,host,()=>{_emitter__WEBPACK_IMPORTED_MODULE_11__["default"].server(port,'https');}):http__WEBPACK_IMPORTED_MODULE_5__["createServer"](app).listen(port,host,()=>{_emitter__WEBPACK_IMPORTED_MODULE_11__["default"].server(port,'http');}),{path:`${basePath}/socket.io`});}

/***/ }),

/***/ "./src/server/ssl.ts":
/*!***************************!*\
  !*** ./src/server/ssl.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loadSSL; });
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isUndefined */ "lodash/isUndefined");
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs-extra */ "fs-extra");
/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs_extra__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
async function loadSSL(ssl){if(lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default()(ssl.key)||lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default()(ssl.cert))return{};const files=[Object(fs_extra__WEBPACK_IMPORTED_MODULE_1__["readFile"])(Object(path__WEBPACK_IMPORTED_MODULE_2__["resolve"])(ssl.key)),Object(fs_extra__WEBPACK_IMPORTED_MODULE_1__["readFile"])(Object(path__WEBPACK_IMPORTED_MODULE_2__["resolve"])(ssl.cert))];const[key,cert]=await Promise.all(files);return{key,cert};}

/***/ }),

/***/ "./src/server/term.ts":
/*!****************************!*\
  !*** ./src/server/term.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Term; });
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isUndefined */ "lodash/isUndefined");
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var node_pty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-pty */ "node-pty");
/* harmony import */ var node_pty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_pty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emitter */ "./src/server/emitter.ts");
const xterm={name:'xterm-256color',cols:80,rows:30,cwd:process.cwd(),env:process.env};class Term{static spawn(socket,args){const term=Object(node_pty__WEBPACK_IMPORTED_MODULE_1__["spawn"])('/usr/bin/env',args,xterm);const address=args[0]==='ssh'?args[1]:'localhost';_emitter__WEBPACK_IMPORTED_MODULE_2__["default"].spawned(term.pid,address);socket.emit('login');term.on('exit',code=>{_emitter__WEBPACK_IMPORTED_MODULE_2__["default"].exited(code,term.pid);socket.emit('logout');socket.removeAllListeners('disconnect').removeAllListeners('resize').removeAllListeners('input');});term.on('data',data=>{socket.emit('data',data);});socket.on('resize',({cols,rows})=>{term.resize(cols,rows);}).on('input',input=>{if(!lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default()(term))term.write(input);}).on('disconnect',()=>{const{pid}=term;term.kill();_emitter__WEBPACK_IMPORTED_MODULE_2__["default"].exited(0,pid);});}static login(socket){// Check request-header for username
let remoteUser=socket.request.headers['remote-user'];if(remoteUser){return new Promise((resolve,reject)=>{resolve(remoteUser);});}// Request carries no username information
// Create terminal and ask user for username
const term=Object(node_pty__WEBPACK_IMPORTED_MODULE_1__["spawn"])('/usr/bin/env',['node',`${__dirname}/buffer.js`],xterm);let buf='';return new Promise((resolve,reject)=>{term.on('exit',()=>{resolve(buf);});term.on('data',data=>{socket.emit('data',data);});socket.on('input',input=>{term.write(input);buf=/\177/.exec(input)?buf.slice(0,-1):buf+input;}).on('disconnect',()=>{term.kill();reject();});});}}

/***/ }),

/***/ "./src/server/wetty.ts":
/*!*****************************!*\
  !*** ./src/server/wetty.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WeTTy; });
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "events");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./server */ "./src/server/server.ts");
/* harmony import */ var _command__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./command */ "./src/server/command.ts");
/* harmony import */ var _term__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./term */ "./src/server/term.ts");
/* harmony import */ var _ssl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ssl */ "./src/server/ssl.ts");
/**
 * Create WeTTY server
 * @module WeTTy
 */class WeTTy extends events__WEBPACK_IMPORTED_MODULE_0__{/**
   * Starts WeTTy Server
   * @name start
   */start(ssh={user:'',host:'localhost',auth:'password',port:22},serverConf={base:'/wetty/',port:3000,host:'0.0.0.0'},command='',ssl){return Object(_ssl__WEBPACK_IMPORTED_MODULE_4__["default"])(ssl).then(sslBuffer=>{if(ssh.key){this.emit('warn',`!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
! Password-less auth enabled using private key from ${ssh.key}.
! This is dangerous, anything that reaches the wetty server
! will be able to run remote operations without authentication.
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`);}const io=Object(_server__WEBPACK_IMPORTED_MODULE_1__["default"])(serverConf,sslBuffer);/**
       * Wetty server connected too
       * @fires WeTTy#connnection
       */io.on('connection',socket=>{/**
         * @event wetty#connection
         * @name connection
         */this.emit('connection',{msg:`Connection accepted.`,date:new Date()});const{args,user:sshUser}=Object(_command__WEBPACK_IMPORTED_MODULE_2__["default"])(socket,ssh,command);this.emit('debug',`sshUser: ${sshUser}, cmd: ${args.join(' ')}`);if(sshUser){_term__WEBPACK_IMPORTED_MODULE_3__["default"].spawn(socket,args);}else{_term__WEBPACK_IMPORTED_MODULE_3__["default"].login(socket).then(username=>{this.emit('debug',`username: ${username.trim()}`);args[1]=`${username.trim()}@${args[1]}`;this.emit('debug',`cmd : ${args.join(' ')}`);return _term__WEBPACK_IMPORTED_MODULE_3__["default"].spawn(socket,args);}).catch(()=>this.disconnected());}});});}/**
   * terminal spawned
   *
   * @fires module:WeTTy#spawn
   */spawned(pid,address){/**
     * Terminal process spawned
     * @event WeTTy#spawn
     * @name spawn
     * @type {object}
     */this.emit('spawn',{msg:`PID=${pid} STARTED on behalf of ${address}`,pid,address});}/**
   * terminal exited
   *
   * @fires WeTTy#exit
   */exited(code,pid){/**
     * Terminal process exits
     * @event WeTTy#exit
     * @name exit
     */this.emit('exit',{code,msg:`PID=${pid} ENDED`});}/**
   * Disconnect from WeTTY
   *
   * @fires WeTTy#disconnet
   */disconnected(){/**
     * @event WeTTY#disconnect
     * @name disconnect
     */this.emit('disconnect');}/**
   * Wetty server started
   * @fires WeTTy#server
   */server(port,connection){/**
     * @event WeTTy#server
     * @type {object}
     * @name server
     */this.emit('server',{msg:`${connection} on port ${port}`,port,connection});}}

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs-extra":
/*!***************************!*\
  !*** external "fs-extra" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs-extra");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),

/***/ "lodash/isUndefined":
/*!*************************************!*\
  !*** external "lodash/isUndefined" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/isUndefined");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),

/***/ "node-pty":
/*!***************************!*\
  !*** external "node-pty" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-pty");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "serve-favicon":
/*!********************************!*\
  !*** external "serve-favicon" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ }),

/***/ "yargs":
/*!************************!*\
  !*** external "yargs" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("yargs");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map