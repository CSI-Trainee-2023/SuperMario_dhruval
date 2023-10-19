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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/background.jpg":
/*!*******************************!*\
  !*** ./assets/background.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "253c1ef4569f0b19aaabb6fcb27c6781.jpg");

/***/ }),

/***/ "./assets/jumpingPlatform.png":
/*!************************************!*\
  !*** ./assets/jumpingPlatform.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c6256f39bc867245069a55dd6e756bd1.png");

/***/ }),

/***/ "./assets/mariorunLeft.png":
/*!*********************************!*\
  !*** ./assets/mariorunLeft.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c67ea51444aafa9bdcd5bdfd4f4a55bb.png");

/***/ }),

/***/ "./assets/mariorunRight.png":
/*!**********************************!*\
  !*** ./assets/mariorunRight.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a2f75989924952a7e49ce0405d487c93.png");

/***/ }),

/***/ "./assets/mariostandingLeft.png":
/*!**************************************!*\
  !*** ./assets/mariostandingLeft.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "11514f48f22f6d8e3cf748e45e3e1ffb.png");

/***/ }),

/***/ "./assets/mariostandingRight.png":
/*!***************************************!*\
  !*** ./assets/mariostandingRight.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "01e8f15e899155c68950c40e0a6b8df0.png");

/***/ }),

/***/ "./assets/rocket.png":
/*!***************************!*\
  !*** ./assets/rocket.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8b5e914322d63079ed1e7d725abb0749.png");

/***/ }),

/***/ "./assets/runningPlatform.png":
/*!************************************!*\
  !*** ./assets/runningPlatform.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "13c11cd2bce3530fd568a1a1b80eb6de.png");

/***/ }),

/***/ "./assets/star.png":
/*!*************************!*\
  !*** ./assets/star.png ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c6eac4416cde604fe4786128fe0d8016.png");

/***/ }),

/***/ "./assets/tree.png":
/*!*************************!*\
  !*** ./assets/tree.png ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4e4323671eb01f74cb740bd26aad737f.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_runningPlatform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/runningPlatform.png */ "./assets/runningPlatform.png");
/* harmony import */ var _assets_jumpingPlatform_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/jumpingPlatform.png */ "./assets/jumpingPlatform.png");
/* harmony import */ var _assets_background_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/background.jpg */ "./assets/background.jpg");
/* harmony import */ var _assets_tree_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/tree.png */ "./assets/tree.png");
/* harmony import */ var _assets_star_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/star.png */ "./assets/star.png");
/* harmony import */ var _assets_rocket_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/rocket.png */ "./assets/rocket.png");
/* harmony import */ var _assets_mariorunRight_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/mariorunRight.png */ "./assets/mariorunRight.png");
/* harmony import */ var _assets_mariorunLeft_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/mariorunLeft.png */ "./assets/mariorunLeft.png");
/* harmony import */ var _assets_mariostandingRight_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/mariostandingRight.png */ "./assets/mariostandingRight.png");
/* harmony import */ var _assets_mariostandingLeft_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/mariostandingLeft.png */ "./assets/mariostandingLeft.png");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }










var canvas = document.querySelector("canvas");
var backgroundImg = createImage(_assets_background_jpg__WEBPACK_IMPORTED_MODULE_2__["default"]);
var c = canvas.getContext("2d");
var gravity = 0.98;
var youWinSection = document.getElementById("you-win-container");
var bgAudio = document.getElementById("bgAudio");
var gameOver = document.getElementById("gameOver");
var starWin = document.getElementById("starWin");
var Jump = document.getElementById("Jump");
var Rocket = document.getElementById("rocket");
var Win = document.getElementById("Win");
function stop() {
  bgAudio.pause();
  gameOver.pause();
  bgAudio.currentTime = 0;
}
function play() {
  bgAudio.play();
}

// document.getElementById("play-again-button").addEventListener("click", () => {
//   stop();
// });

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    play();
  }
  if (event.key === "m") {
    stop();
  }
});
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Creating Player
var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);
    this.position = {
      x: 100,
      y: 100
    };
    //sets the velocity of gravity
    this.velocity = {
      x: 0,
      y: 1
    };
    this.width = 66;
    this.height = 150;
    this.isJumping = false;
    this.image = createImage(_assets_mariostandingRight_png__WEBPACK_IMPORTED_MODULE_8__["default"]);
    this.frames = 0;
    this.sprites = {
      stand: {
        right: createImage(_assets_mariostandingRight_png__WEBPACK_IMPORTED_MODULE_8__["default"]),
        left: createImage(_assets_mariostandingLeft_png__WEBPACK_IMPORTED_MODULE_9__["default"]),
        cropWidth: 177,
        width: 66
      },
      run: {
        right: createImage(_assets_mariorunRight_png__WEBPACK_IMPORTED_MODULE_6__["default"]),
        left: createImage(_assets_mariorunLeft_png__WEBPACK_IMPORTED_MODULE_7__["default"]),
        cropWidth: 340,
        width: 127.875
      }
    };
    this.currentSprite = this.sprites.stand.right;
    this.currentCropWidth = 177;
  }
  _createClass(Player, [{
    key: "jump",
    value: function jump() {
      if (!this.isJumping) {
        this.velocity.y = -24;
        this.isJumping = true;
        // audio.play();
      }
    }
  }, {
    key: "resetJumpInitiation",
    value: function resetJumpInitiation() {
      this.isJumpInitiated = false;
    }
  }, {
    key: "draw",
    value: function draw() {
      c.drawImage(this.currentSprite, this.currentCropWidth * this.frames, 0, this.currentCropWidth, 400, this.position.x, this.position.y, this.width, this.height);
    }
    //creating gravity
  }, {
    key: "update",
    value: function update() {
      var _this = this;
      this.frames++;
      if (this.frames > 59 && this.currentSprite === this.sprites.stand.right) {
        this.frames = 0;
      } else if (this.frames > 29 && this.currentSprite === this.sprites.run.right) {
        this.frames = 0;
      } else if (this.frames > 59 && this.currentSprite === this.sprites.stand.left) {
        this.frames = 0;
      } else if (this.frames > 29 && this.currentSprite === this.sprites.run.left) {
        this.frames = 0;
      }
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      if (this.position.y + this.height + this.velocity.y <= canvas.height - 10) this.velocity.y += gravity;
      platforms.forEach(function (platform) {
        if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
          player.velocity.y = 0;
          _this.isJumping = false;
        }
      });
    }
  }]);
  return Player;
}();
var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
      y = _ref.y,
      image = _ref.image,
      width = _ref.width;
    _classCallCheck(this, Platform);
    this.position = {
      x: x,
      y: y,
      image: image
    };
    this.width = width;
    this.height = 100;
    this.image = image;
  }
  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
  }]);
  return Platform;
}();
var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref2) {
    var x = _ref2.x,
      y = _ref2.y,
      image = _ref2.image,
      width = _ref2.width,
      height = _ref2.height;
    _classCallCheck(this, GenericObject);
    this.position = {
      x: x,
      y: y
    };
    this.width = width;
    this.height = height;
    this.image = image;
  }
  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
  }]);
  return GenericObject;
}();
var Star = /*#__PURE__*/function () {
  function Star(_ref3) {
    var x = _ref3.x,
      y = _ref3.y,
      image = _ref3.image,
      width = _ref3.width,
      height = _ref3.height;
    _classCallCheck(this, Star);
    this.position = {
      x: x,
      y: y
    };
    this.width = width;
    this.height = height;
    this.image = image;
  }
  _createClass(Star, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x - scrollOffset, this.position.y, this.width, this.height);
    }
  }]);
  return Star;
}();
function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}
var player = new Player();
//to create multiple platforms
var platforms = [new Platform({
  x: 0,
  y: 700,
  image: createImage(_assets_runningPlatform_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
  width: 1000
}), new Platform({
  x: 1300,
  y: 700,
  image: createImage(_assets_runningPlatform_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
  width: 1000
}), new Platform({
  x: 3200,
  y: 700,
  image: createImage(_assets_runningPlatform_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
  width: 2100
}), new Platform({
  x: 5700,
  y: 700,
  image: createImage(_assets_runningPlatform_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
  width: 2100
}), new Platform({
  x: 1000,
  y: 400,
  image: createImage(_assets_jumpingPlatform_png__WEBPACK_IMPORTED_MODULE_1__["default"]),
  width: 300
}), new Platform({
  x: 2350,
  y: 400,
  image: createImage(_assets_jumpingPlatform_png__WEBPACK_IMPORTED_MODULE_1__["default"]),
  width: 300
}), new Platform({
  x: 2950,
  y: 400,
  image: createImage(_assets_jumpingPlatform_png__WEBPACK_IMPORTED_MODULE_1__["default"]),
  width: 300
}), new Platform({
  x: 2650,
  y: 250,
  image: createImage(_assets_jumpingPlatform_png__WEBPACK_IMPORTED_MODULE_1__["default"]),
  width: 300
}), new Platform({
  x: 5000,
  y: 400,
  image: createImage(_assets_jumpingPlatform_png__WEBPACK_IMPORTED_MODULE_1__["default"]),
  width: 300
})];
var genericObjects = [new GenericObject({
  x: 0,
  y: 0,
  width: 1600,
  height: 750,
  image: createImage(_assets_tree_png__WEBPACK_IMPORTED_MODULE_3__["default"])
}), new GenericObject({
  x: 1800,
  y: 0,
  width: 1600,
  height: 750,
  image: createImage(_assets_tree_png__WEBPACK_IMPORTED_MODULE_3__["default"])
})];
var stars = [new Star({
  x: 700,
  y: 580,
  width: 30,
  height: 30,
  image: createImage(_assets_star_png__WEBPACK_IMPORTED_MODULE_4__["default"])
}), new Star({
  x: 750,
  y: 580,
  width: 30,
  height: 30,
  image: createImage(_assets_star_png__WEBPACK_IMPORTED_MODULE_4__["default"])
}), new Star({
  x: 800,
  y: 580,
  width: 30,
  height: 30,
  image: createImage(_assets_star_png__WEBPACK_IMPORTED_MODULE_4__["default"])
}), new Star({
  x: 1150,
  y: 330,
  width: 30,
  height: 30,
  image: createImage(_assets_star_png__WEBPACK_IMPORTED_MODULE_4__["default"])
}), new Star({
  x: 2250,
  y: 580,
  width: 30,
  height: 30,
  image: createImage(_assets_star_png__WEBPACK_IMPORTED_MODULE_4__["default"])
}), new Star({
  x: 2450,
  y: 330,
  width: 30,
  height: 30,
  image: createImage(_assets_star_png__WEBPACK_IMPORTED_MODULE_4__["default"])
}), new Star({
  x: 2750,
  y: 130,
  width: 30,
  height: 30,
  image: createImage(_assets_star_png__WEBPACK_IMPORTED_MODULE_4__["default"])
}), new Star({
  x: 3000,
  y: 330,
  width: 30,
  height: 30,
  image: createImage(_assets_star_png__WEBPACK_IMPORTED_MODULE_4__["default"])
}), new Star({
  x: 3220,
  y: 580,
  width: 30,
  height: 30,
  image: createImage(_assets_star_png__WEBPACK_IMPORTED_MODULE_4__["default"])
}), new Star({
  x: 3850,
  y: 580,
  width: 30,
  height: 30,
  image: createImage(_assets_star_png__WEBPACK_IMPORTED_MODULE_4__["default"])
}), new Star({
  x: 4000,
  y: 330,
  width: 30,
  height: 30,
  image: createImage(_assets_star_png__WEBPACK_IMPORTED_MODULE_4__["default"])
}), new Star({
  x: 4250,
  y: 580,
  width: 30,
  height: 30,
  image: createImage(_assets_star_png__WEBPACK_IMPORTED_MODULE_4__["default"])
}), new Star({
  x: 5100,
  y: 330,
  width: 30,
  height: 30,
  image: createImage(_assets_star_png__WEBPACK_IMPORTED_MODULE_4__["default"])
}), new Star({
  x: 5300,
  y: 580,
  width: 30,
  height: 30,
  image: createImage(_assets_star_png__WEBPACK_IMPORTED_MODULE_4__["default"])
}), new Star({
  x: 6450,
  y: 330,
  width: 30,
  height: 30,
  image: createImage(_assets_star_png__WEBPACK_IMPORTED_MODULE_4__["default"])
}), new Star({
  x: 6650,
  y: 330,
  width: 30,
  height: 30,
  image: createImage(_assets_star_png__WEBPACK_IMPORTED_MODULE_4__["default"])
}), new Star({
  x: 6850,
  y: 330,
  width: 30,
  height: 30,
  image: createImage(_assets_star_png__WEBPACK_IMPORTED_MODULE_4__["default"])
}), new Star({
  x: 7350,
  y: 300,
  width: 320,
  height: 400,
  image: createImage(_assets_rocket_png__WEBPACK_IMPORTED_MODULE_5__["default"])
})];
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  },
  top: {
    pressed: false
  }
};
var scrollOffset = 0;
var score = 0;
var playerCanMove = true;
var winMusicPlayed = false;
function displayHighScore() {
  var highScore = getHighScore();
  var highScoreElement = document.getElementById("high-score");
  if (highScoreElement) {
    highScoreElement.textContent = "High Score: " + highScore;
  }
}
function init() {
  player = new Player();
  //to create multiple platforms
  platforms = [new Platform({
    x: 0,
    y: 700,
    image: createImage(_assets_runningPlatform_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
    width: 1000
  }), new Platform({
    x: 1300,
    y: 700,
    image: createImage(_assets_runningPlatform_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
    width: 1000
  }), new Platform({
    x: 3200,
    y: 700,
    image: createImage(_assets_runningPlatform_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
    width: 2100
  }), new Platform({
    x: 5700,
    y: 700,
    image: createImage(_assets_runningPlatform_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
    width: 2100
  }), new Platform({
    x: 1000,
    y: 400,
    image: createImage(_assets_jumpingPlatform_png__WEBPACK_IMPORTED_MODULE_1__["default"]),
    width: 300
  }), new Platform({
    x: 2350,
    y: 400,
    image: createImage(_assets_jumpingPlatform_png__WEBPACK_IMPORTED_MODULE_1__["default"]),
    width: 300
  }), new Platform({
    x: 2950,
    y: 400,
    image: createImage(_assets_jumpingPlatform_png__WEBPACK_IMPORTED_MODULE_1__["default"]),
    width: 300
  }), new Platform({
    x: 2650,
    y: 250,
    image: createImage(_assets_jumpingPlatform_png__WEBPACK_IMPORTED_MODULE_1__["default"]),
    width: 300
  }), new Platform({
    x: 5000,
    y: 400,
    image: createImage(_assets_jumpingPlatform_png__WEBPACK_IMPORTED_MODULE_1__["default"]),
    width: 300
  })];
  genericObjects = [new GenericObject({
    x: 0,
    y: 0,
    width: 1600,
    height: 700,
    image: createImage(_assets_tree_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new GenericObject({
    x: 1800,
    y: 0,
    width: 1600,
    height: 700,
    image: createImage(_assets_tree_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new GenericObject({
    x: 7000,
    y: 580,
    width: 320,
    height: 400,
    image: createImage(_assets_rocket_png__WEBPACK_IMPORTED_MODULE_5__["default"])
  })];
  stars = [new Star({
    x: 700,
    y: 580,
    width: 30,
    height: 30,
    image: createImage(_assets_star_png__WEBPACK_IMPORTED_MODULE_4__["default"])
  }), new Star({
    x: 750,
    y: 580,
    width: 30,
    height: 30,
    image: createImage(_assets_star_png__WEBPACK_IMPORTED_MODULE_4__["default"])
  }), new Star({
    x: 800,
    y: 580,
    width: 30,
    height: 30,
    image: createImage(_assets_star_png__WEBPACK_IMPORTED_MODULE_4__["default"])
  }), new Star({
    x: 1150,
    y: 330,
    width: 30,
    height: 30,
    image: createImage(_assets_star_png__WEBPACK_IMPORTED_MODULE_4__["default"])
  }), new Star({
    x: 2250,
    y: 580,
    width: 30,
    height: 30,
    image: createImage(_assets_star_png__WEBPACK_IMPORTED_MODULE_4__["default"])
  }), new Star({
    x: 2450,
    y: 330,
    width: 30,
    height: 30,
    image: createImage(_assets_star_png__WEBPACK_IMPORTED_MODULE_4__["default"])
  }), new Star({
    x: 2750,
    y: 130,
    width: 30,
    height: 30,
    image: createImage(_assets_star_png__WEBPACK_IMPORTED_MODULE_4__["default"])
  }), new Star({
    x: 3000,
    y: 330,
    width: 30,
    height: 30,
    image: createImage(_assets_star_png__WEBPACK_IMPORTED_MODULE_4__["default"])
  }), new Star({
    x: 3220,
    y: 580,
    width: 30,
    height: 30,
    image: createImage(_assets_star_png__WEBPACK_IMPORTED_MODULE_4__["default"])
  }), new Star({
    x: 3850,
    y: 580,
    width: 30,
    height: 30,
    image: createImage(_assets_star_png__WEBPACK_IMPORTED_MODULE_4__["default"])
  }), new Star({
    x: 4000,
    y: 330,
    width: 30,
    height: 30,
    image: createImage(_assets_star_png__WEBPACK_IMPORTED_MODULE_4__["default"])
  }), new Star({
    x: 4250,
    y: 580,
    width: 30,
    height: 30,
    image: createImage(_assets_star_png__WEBPACK_IMPORTED_MODULE_4__["default"])
  }), new Star({
    x: 5100,
    y: 330,
    width: 30,
    height: 30,
    image: createImage(_assets_star_png__WEBPACK_IMPORTED_MODULE_4__["default"])
  }), new Star({
    x: 5300,
    y: 580,
    width: 30,
    height: 30,
    image: createImage(_assets_star_png__WEBPACK_IMPORTED_MODULE_4__["default"])
  }), new Star({
    x: 6450,
    y: 330,
    width: 30,
    height: 30,
    image: createImage(_assets_star_png__WEBPACK_IMPORTED_MODULE_4__["default"])
  }), new Star({
    x: 6750,
    y: 330,
    width: 30,
    height: 30,
    image: createImage(_assets_star_png__WEBPACK_IMPORTED_MODULE_4__["default"])
  }), new Star({
    x: 7050,
    y: 330,
    width: 30,
    height: 30,
    image: createImage(_assets_star_png__WEBPACK_IMPORTED_MODULE_4__["default"])
  }), new Star({
    x: 7350,
    y: 300,
    width: 320,
    height: 400,
    image: createImage(_assets_rocket_png__WEBPACK_IMPORTED_MODULE_5__["default"])
  })];
  var highScore = getHighScore();
  document.getElementById("high-score").textContent = "High Score: " + highScore;
  displayHighScore(); // Call displayHighScore here to ensure it's displayed at the start of the game

  backgroundImg.onload = function () {
    canvas.width = backgroundImg.width;
    canvas.height = backgroundImg.height;
    animate();
  };
  var keys = {
    right: {
      pressed: false
    },
    left: {
      pressed: false
    },
    top: {
      pressed: false
    }
  };
  scrollOffset = 0;
  score = 0;
  playerCanMove = true;
  winMusicPlayed = false;
}
function getHighScore() {
  var highScore = localStorage.getItem("highScore");
  return highScore ? parseInt(highScore) : 0;
}
function playerWinsGame(score) {
  saveHighScore(score);
  displayHighScore(); // Call displayHighScore after setting a new high score
}

function saveHighScore(score) {
  var highScore = getHighScore();
  if (score > highScore) {
    localStorage.setItem("highScore", score.toString());
  }
}

//to loop the gravity
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "white";
  //to clear the previos position of player
  c.fillRect(0, 0, canvas.width, canvas.height);
  c.drawImage(backgroundImg, 0, 0, 2000, canvas.height);

  // Create a variable to keep track of stars to be removed
  var starsToRemove = [];
  genericObjects.forEach(function (genericObject) {
    genericObject.draw();
  });
  stars.forEach(function (star) {
    var playerX = player.position.x + scrollOffset; // Adjust for scroll offset
    if (playerX < star.position.x + star.width && playerX + player.width > star.position.x && player.position.y < star.position.y + star.height && player.position.y + player.height > star.position.y) {
      starWin.play();
      // Player has touched a star
      starsToRemove.push(star);
      score++; // Increment the score
    } else {
      star.draw(); // Draw the star if it's not touched
    }
  });

  // Remove stars that were touched by the player
  stars = stars.filter(function (star) {
    return !starsToRemove.includes(star);
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  player.update();

  // Draw the score on the canvas
  c.fillStyle = "white";
  c.font = "24px Arial";
  c.fillText("Score: " + score, 20, 40);

  //for smooth movement
  if (playerCanMove && scrollOffset < 6800) {
    if (keys.right.pressed && player.position.x < 400) {
      player.velocity.x = 5;
    } else if (keys.left.pressed && player.position.x > 100 || keys.left.pressed && scrollOffset === 0 && player.position.x > 0) {
      player.velocity.x = -5;
    } else {
      player.velocity.x = 0;
    }
    if (keys.right.pressed) {
      scrollOffset += 5;
      platforms.forEach(function (platform) {
        platform.position.x -= 5;
      });
      genericObjects.forEach(function (genericObject) {
        genericObject.position.x -= 3;
      });
    } else if (keys.left.pressed && scrollOffset > 0) {
      scrollOffset -= 5;
      platforms.forEach(function (platform) {
        platform.position.x += 5;
      });
      genericObjects.forEach(function (genericObject) {
        genericObject.position.x += 3;
      });
    }
  }

  //to stop the falling of player on the platform
  //platform collision detection
  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
    }
  });

  //to create win scenerio
  if (scrollOffset == 6800 && !winMusicPlayed) {
    playerCanMove = false;
    playerWinsGame(score);
    youWinSection.style.display = "block";
    stop();
    Win.play();
    winMusicPlayed = true;

    // Display the current and highest scores
    var currentScoreElement = document.getElementById("current-score");
    currentScoreElement.textContent = score;
    var highestScoreElement = document.getElementById("highest-score");
    var highScore = getHighScore();
    highestScoreElement.textContent = highScore;
  }

  // to create lose scenerio
  if (player.position.y > canvas.height) {
    gameOver.play();
    init();
  }
}
animate();

//to check which key is pressed
addEventListener("keydown", function (event) {
  event.preventDefault();
  switch (event.keyCode) {
    case 39:
      //right
      keys.right.pressed = true;
      player.currentSprite = player.sprites.run.right;
      player.currentCropWidth = player.sprites.run.cropWidth;
      player.width = player.sprites.run.width;
      break;
    case 37:
      //left
      keys.left.pressed = true;
      player.currentSprite = player.sprites.run.left;
      player.currentCropWidth = player.sprites.run.cropWidth;
      player.width = player.sprites.run.width;
      break;
    case 38:
      //up
      if (!player.isJumping) {
        // Call the jump method if not currently jumping
        player.jump();
        Jump.play();
      }
      break;
    case 40:
      //down
      break;
  }
});
addEventListener("keyup", function (event) {
  event.preventDefault();
  switch (event.keyCode) {
    case 39:
      //right
      keys.right.pressed = false;
      player.currentSprite = player.sprites.stand.right;
      player.currentCropWidth = player.sprites.stand.cropWidth;
      player.width = player.sprites.stand.width;
      break;
    case 37:
      //left
      keys.left.pressed = false;
      player.currentSprite = player.sprites.stand.left;
      player.currentCropWidth = player.sprites.stand.cropWidth;
      player.width = player.sprites.stand.width;
      break;
    case 38:
      //up
      break;
    case 40:
      //down
      break;
  }
});
var playAgainButton = document.getElementById("play-again-button");
playAgainButton.addEventListener("click", function () {
  // Reset the game when the "Play Again" button is clicked
  youWinSection.style.display = "none"; // Hide the "You Win" section
  playerCanMove = true; // Allow player movement again
  alert("playagain");
  init(); // Reset the game
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map