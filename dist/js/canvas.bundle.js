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
/* harmony import */ var _assets_mariorunRight_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/mariorunRight.png */ "./assets/mariorunRight.png");
/* harmony import */ var _assets_mariorunLeft_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/mariorunLeft.png */ "./assets/mariorunLeft.png");
/* harmony import */ var _assets_mariostandingRight_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/mariostandingRight.png */ "./assets/mariostandingRight.png");
/* harmony import */ var _assets_mariostandingLeft_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/mariostandingLeft.png */ "./assets/mariostandingLeft.png");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }








var canvas = document.querySelector("canvas");
var backgroundImg = createImage(_assets_background_jpg__WEBPACK_IMPORTED_MODULE_2__["default"]);
// window.addEventListener('scroll', () => {
//   window.scrollTo(0, 0); // Scroll back to the top of the page
// });

var c = canvas.getContext("2d");
// console.log(c);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var gravity = 0.98;

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
      y: 0
    };
    this.width = 66;
    this.height = 150;
    this.isJumping = false;
    this.image = createImage(_assets_mariostandingRight_png__WEBPACK_IMPORTED_MODULE_6__["default"]);
    this.frames = 0;
    this.sprites = {
      stand: {
        right: createImage(_assets_mariostandingRight_png__WEBPACK_IMPORTED_MODULE_6__["default"]),
        left: createImage(_assets_mariostandingLeft_png__WEBPACK_IMPORTED_MODULE_7__["default"]),
        cropWidth: 177,
        width: 66
      },
      run: {
        right: createImage(_assets_mariorunRight_png__WEBPACK_IMPORTED_MODULE_4__["default"]),
        left: createImage(_assets_mariorunLeft_png__WEBPACK_IMPORTED_MODULE_5__["default"]),
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
        this.velocity.y = -23;
        this.isJumping = true;
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
      // else this.velocity.y =0;

      // if (keys.top.pressed && !this.isJumping) {
      //   this.velocity.y = -10;
      //   this.isJumping = true;
      // }

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
      width = _ref2.width;
    _classCallCheck(this, GenericObject);
    this.position = {
      x: x,
      y: y
    };
    this.width = width;
    this.height = window.innerHeight;
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
function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}
var player = new Player();
//to create multiple platforms
var platforms = [new Platform({
  x: 0,
  y: 680,
  image: createImage(_assets_runningPlatform_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
  width: 1000
}), new Platform({
  x: 1300,
  y: 680,
  image: createImage(_assets_runningPlatform_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
  width: 1000
}), new Platform({
  x: 3200,
  y: 680,
  image: createImage(_assets_runningPlatform_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
  width: 1100
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
})];
var genericObjects = [
// new GenericObject({
//   x: 0,
//   y: 0,
//   width: 2600,
//   image: createImage(background),
// }),
new GenericObject({
  x: 0,
  y: 0,
  width: 1600,
  image: createImage(_assets_tree_png__WEBPACK_IMPORTED_MODULE_3__["default"])
}), new GenericObject({
  x: 1800,
  y: 0,
  width: 1600,
  image: createImage(_assets_tree_png__WEBPACK_IMPORTED_MODULE_3__["default"])
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
function init() {
  player = new Player();
  //to create multiple platforms
  platforms = [new Platform({
    x: 0,
    y: 680,
    image: createImage(_assets_runningPlatform_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
    width: 1000
  }), new Platform({
    x: 1300,
    y: 680,
    image: createImage(_assets_runningPlatform_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
    width: 1000
  }), new Platform({
    x: 3200,
    y: 680,
    image: createImage(_assets_runningPlatform_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
    width: 1100
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
  })];
  genericObjects = [new GenericObject({
    x: 0,
    y: 0,
    width: 1600,
    image: createImage(_assets_tree_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new GenericObject({
    x: 1800,
    y: 0,
    width: 1600,
    image: createImage(_assets_tree_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  })];
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
}

//to loop the gravity
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "white";
  //to clear the previos position of player
  c.fillRect(0, 0, canvas.width, canvas.height);
  c.drawImage(backgroundImg, 0, 0, 2000, canvas.height);
  genericObjects.forEach(function (genericObject) {
    genericObject.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  player.update();

  //for smooth movement
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
      genericObject.position.x -= 3.3;
    });
  } else if (keys.left.pressed && scrollOffset > 0) {
    scrollOffset -= 5;
    platforms.forEach(function (platform) {
      platform.position.x += 5;
    });
    genericObjects.forEach(function (genericObject) {
      genericObject.position.x += 3.3;
    });
  }

  //to stop the falling of player on the platform
  //platform collision detection
  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
      // this.position.y = platform.position.y - this.height;
    }
  });

  //to create win scenerio
  if (scrollOffset == 3500) {
    console.log("you win");
  }

  // to craete lose scenerio
  if (player.position.y > canvas.height) {
    init();
  }
}
animate();

//to check which key is pressed
addEventListener("keydown", function (event) {
  // console.log(event);
  // event.preventDefault();
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
      // keys.top.pressed = true;
      //to create jump effect
      if (!player.isJumping) {
        player.jump(); // Call the jump method if not currently jumping
      }

      break;
    case 40:
      //down
      break;
  }
});
addEventListener("keyup", function (event) {
  // console.log(event);
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
      // keys.top.pressed = false;
      //to create jump effect
      // player.velocity.y = 0;
      break;
    case 40:
      //down
      break;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map