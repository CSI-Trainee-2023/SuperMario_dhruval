import platform from "../../assets/runningPlatform.png";
import jumpingPlatform from "../../assets/jumpingPlatform.png";
import background from "../../assets/background.jpg";
import trees from "../../assets/tree.png";
import star from "../../assets/star.png";

import mariorunRight from "../../assets/mariorunRight.png";
import mariorunLeft from "../../assets/mariorunLeft.png";
import mariostandingRight from "../../assets/mariostandingRight.png";
import mariostandingLeft from "../../assets/mariostandingLeft.png";
const canvas = document.querySelector("canvas");
const backgroundImg = createImage(background);
// window.addEventListener('scroll', () => {
//   window.scrollTo(0, 0); // Scroll back to the top of the page
// });

const c = canvas.getContext("2d");
// console.log(c);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const gravity = 0.98;

//Creating Player
class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100,
    };
    //sets the velocity of gravity
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.width = 66;
    this.height = 150;
    this.isJumping = false

    this.image = createImage(mariostandingRight);
    this.frames = 0;
    this.sprites = {
      stand: {
        right: createImage(mariostandingRight),
        left: createImage(mariostandingLeft),
        cropWidth: 177,
        width: 66,
      },
      run: {
        right: createImage(mariorunRight),
        left: createImage(mariorunLeft),
        cropWidth: 340,
        width: 127.875,
      },
    };

    this.currentSprite = this.sprites.stand.right;
    this.currentCropWidth = 177;
  }
  jump(){
    if(!this.isJumping){
      this.velocity.y = -23
      this.isJumping = true

    }
  }

  resetJumpInitiation(){
    this.isJumpInitiated = false
  }

  draw() {
    c.drawImage(
      this.currentSprite,
      this.currentCropWidth * this.frames,
      0,
      this.currentCropWidth,
      400,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
  //creating gravity
  update() {
    this.frames++;
    if (this.frames > 59 && this.currentSprite === this.sprites.stand.right) {
      this.frames = 0;
    } else if (
      this.frames > 29 &&
      this.currentSprite === this.sprites.run.right
    ) {
      this.frames = 0;
    } else if (
      this.frames > 59 &&
      this.currentSprite === this.sprites.stand.left
    ) {
      this.frames = 0;
    } else if (
      this.frames > 29 &&
      this.currentSprite === this.sprites.run.left
    ) {
      this.frames = 0;
    }
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.position.y + this.height + this.velocity.y <= canvas.height - 10)
      this.velocity.y += gravity;

    platforms.forEach((platform) => {
      if (
        player.position.y + player.height <= platform.position.y &&
        player.position.y + player.height + player.velocity.y >=
          platform.position.y &&
        player.position.x + player.width >= platform.position.x &&
        player.position.x <= platform.position.x + platform.width
      ) {
        player.velocity.y = 0;
        this.isJumping = false;
      }
    }); 
  }
}

class Platform {
  constructor({ x, y, image, width }) {
    this.position = {
      x,
      y,
      image,
    };
    this.width = width;
    this.height = 100;
    this.image = image;
  }
  draw() {
    c.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}

class GenericObject {
  constructor({ x, y, image, width, height }) {
    this.position = {
      x,
      y,
    };
    this.width = width;
    this.height = height;
    this.image = image;
  }
  draw() {
    c.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}

class Star {
  constructor({ x, y, image, width, height }) {
    this.position = {
      x,
      y,
    };
    this.width = width;
    this.height = height;
    this.image = image;
  }
  draw() {
    c.drawImage(
      this.image,
      this.position.x - scrollOffset,
      this.position.y,
      this.width,
      this.height
    );
  }
}

function createImage(imageSrc) {
  const image = new Image();
  image.src = imageSrc;
  return image;
}

let player = new Player();
//to create multiple platforms
let platforms = [
  new Platform({
    x: 0,
    y: 680,
    image: createImage(platform),
    width: 1000,
  }),
  new Platform({
    x: 1300,
    y: 680,
    image: createImage(platform),
    width: 1000,
  }),
  new Platform({
    x: 3200,
    y: 680,
    image: createImage(platform),
    width: 2100,
  }),
  new Platform({
    x: 6000,
    y: 680,
    image: createImage(platform),
    width: 2100,
  }),
  new Platform({
    x: 1000,
    y: 400,
    image: createImage(jumpingPlatform),
    width: 300,
  }),
  new Platform({
    x: 2350,
    y: 400,
    image: createImage(jumpingPlatform),
    width: 300,
  }),
  new Platform({
    x: 2950,
    y: 400,
    image: createImage(jumpingPlatform),
    width: 300,
  }),
  new Platform({
    x: 2650,
    y: 250,
    image: createImage(jumpingPlatform),
    width: 300,
  }),
  new Platform({
    x: 5000,
    y: 400,
    image: createImage(jumpingPlatform),
    width: 300,
  }),
];

let genericObjects = [
  new GenericObject({
    x: 0,
    y: 0,
    width: 1600,
    height: 700,
    image: createImage(trees),
  }),
  new GenericObject({
    x: 1800,
    y: 0,
    width: 1600,
    height: 700,
    image: createImage(trees),
  }),
];

let stars = [
  new Star({
    x:700,
    y:580,
    width: 30,
    height: 30,
    image: createImage(star)
  }),
  new Star({
    x:750,
    y:580,
    width: 30,
    height: 30,
    image: createImage(star)
  }),
  new Star({
    x:800,
    y:580,
    width: 30,
    height: 30,
    image: createImage(star)
  }),
  new Star({
    x:1150,
    y:330,
    width: 30,
    height: 30,
    image: createImage(star)
  }),
  new Star({
    x:2250,
    y:580,
    width: 30,
    height: 30,
    image: createImage(star)
  }),
  new Star({
    x:2450,
    y:330,
    width: 30,
    height: 30,
    image: createImage(star)
  }),
  new Star({
    x:2750,
    y:130,
    width: 30,
    height: 30,
    image: createImage(star)
  }),
  new Star({
    x:3000,
    y:330,
    width: 30,
    height: 30,
    image: createImage(star)
  }),
  new Star({
    x:3220,
    y:580,
    width: 30,
    height: 30,
    image: createImage(star)
  }),
  new Star({
    x:3750,
    y:580,
    width: 30,
    height: 30,
    image: createImage(star)
  }),
  new Star({
    x:3800,
    y:580,
    width: 30,
    height: 30,
    image: createImage(star)
  }),
  new Star({
    x:3850,
    y:580,
    width: 30,
    height: 30,
    image: createImage(star)
  }),
  new Star({
    x:5100,
    y:330,
    width: 30,
    height: 30,
    image: createImage(star)
  }),
  new Star({
    x:5300,
    y:580,
    width: 30,
    height: 30,
    image: createImage(star)
  }),
  new Star({
    x:6550,
    y:580,
    width: 30,
    height: 30,
    image: createImage(star)
  }),
  new Star({
    x:6600,
    y:580,
    width: 30,
    height: 30,
    image: createImage(star)
  }),
  new Star({
    x:6650,
    y:580,
    width: 30,
    height: 30,
    image: createImage(star)
  }),
]

const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
  top: {
    pressed: false,
  },
};

let scrollOffset = 0;
let score = 0;

function init() {
  player = new Player();
  //to create multiple platforms
  platforms = [
    new Platform({
      x: 0,
      y: 680,
      image: createImage(platform),
      width: 1000,
    }),
    new Platform({
      x: 1300,
      y: 680,
      image: createImage(platform),
      width: 1000,
    }),
    new Platform({
      x: 3200,
      y: 680,
      image: createImage(platform),
      width: 2100,
    }),
    new Platform({
      x: 6000,
      y: 680,
      image: createImage(platform),
      width: 2100,
    }),
    new Platform({
      x: 1000,
      y: 400,
      image: createImage(jumpingPlatform),
      width: 300,
    }),
    new Platform({
      x: 2350,
      y: 400,
      image: createImage(jumpingPlatform),
      width: 300,
    }),
    new Platform({
      x: 2950,
      y: 400,
      image: createImage(jumpingPlatform),
      width: 300,
    }),
    new Platform({
      x: 2650,
      y: 250,
      image: createImage(jumpingPlatform),
      width: 300,
    }),
    new Platform({
      x: 5000,
      y: 400,
      image: createImage(jumpingPlatform),
      width: 300,
    }),
  ];

  genericObjects = [
    new GenericObject({
      x: 0,
      y: 0,
      width: 1600,
      image: createImage(trees),
    }),
    new GenericObject({
      x: 1800,
      y: 0,
      width: 1600,
      image: createImage(trees),
    }),
  ];

  stars = [
    new Star({
      x:700,
      y:580,
      width: 30,
      height: 30,
      image: createImage(star)
    }),
    new Star({
      x:750,
      y:580,
      width: 30,
      height: 30,
      image: createImage(star)
    }),
    new Star({
      x:800,
      y:580,
      width: 30,
      height: 30,
      image: createImage(star)
    }),
    new Star({
      x:1150,
      y:330,
      width: 30,
      height: 30,
      image: createImage(star)
    }),
    new Star({
      x:2250,
      y:580,
      width: 30,
      height: 30,
      image: createImage(star)
    }),
    new Star({
      x:2450,
      y:330,
      width: 30,
      height: 30,
      image: createImage(star)
    }),
    new Star({
      x:2750,
      y:130,
      width: 30,
      height: 30,
      image: createImage(star)
    }),
    new Star({
      x:3000,
      y:330,
      width: 30,
      height: 30,
      image: createImage(star)
    }),
    new Star({
      x:3220,
      y:580,
      width: 30,
      height: 30,
      image: createImage(star)
    }),
    new Star({
      x:3750,
      y:580,
      width: 30,
      height: 30,
      image: createImage(star)
    }),
    new Star({
      x:3800,
      y:580,
      width: 30,
      height: 30,
      image: createImage(star)
    }),
    new Star({
      x:3850,
      y:580,
      width: 30,
      height: 30,
      image: createImage(star)
    }),
    new Star({
      x:5100,
      y:330,
      width: 30,
      height: 30,
      image: createImage(star)
    }),
    new Star({
      x:5300,
      y:580,
      width: 30,
      height: 30,
      image: createImage(star)
    }),
    new Star({
      x:6550,
      y:580,
      width: 30,
      height: 30,
      image: createImage(star)
    }),
    new Star({
      x:6600,
      y:580,
      width: 30,
      height: 30,
      image: createImage(star)
    }),
    new Star({
      x:6650,
      y:580,
      width: 30,
      height: 30,
      image: createImage(star)
    }),
  ];

  backgroundImg.onload = function () {
    canvas.width = backgroundImg.width;
    canvas.height = backgroundImg.height;
    animate();
  };

  const keys = {
    right: {
      pressed: false,
    },
    left: {
      pressed: false,
    },
    top: {
      pressed: false,
    },
  };

  scrollOffset = 0;
  score = 0;
}

//to loop the gravity
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "white";
  //to clear the previos position of player
  c.fillRect(0, 0, canvas.width, canvas.height);

  c.drawImage(backgroundImg, 0, 0, 2000, canvas.height);

  // Create a variable to keep track of stars to be removed
  let starsToRemove = [];
  console.log(player.position.x);

  genericObjects.forEach((genericObject) => {
    genericObject.draw();
  });

  stars.forEach((star) => {
    // Check for star collisions
    if (
      player.position.x*2 -10 < star.position.x + star.width &&
      player.position.x*2 -10 + player.width > star.position.x &&
      player.position.y*2 < star.position.y + star.height &&
      player.position.y*2 + player.height > star.position.y
    ) {
      // Player has touched a star
      starsToRemove.push(star);
      score++; // Increment the score
    } else {
      star.draw(); // Draw the star if it's not touched
    }
  });

  // Remove stars that were touched by the player
  stars = stars.filter((star) => !starsToRemove.includes(star));

  platforms.forEach((platform) => {
    platform.draw();
  });

  player.update();

  // Draw the score on the canvas
  c.fillStyle = "black";
  c.font = "24px Arial";
  c.fillText("Score: " + score, 20, 40);
  console.log

  //for smooth movement
  if (keys.right.pressed && player.position.x < 4000) {
    player.velocity.x = 5;
  } else if (
    (keys.left.pressed && player.position.x > 100) ||
    (keys.left.pressed && scrollOffset === 0 && player.position.x > 0)
  ) {
    player.velocity.x = -5;
  } else {
    player.velocity.x = 0;
  }

  if (keys.right.pressed) {
    scrollOffset += 10;
    platforms.forEach((platform) => {
      platform.position.x -= 10;
    });

    genericObjects.forEach((genericObject) => {
      genericObject.position.x -= 6.6;
    });
  } else if (keys.left.pressed && scrollOffset > 0) {
    scrollOffset -= 10;

    platforms.forEach((platform) => {
      platform.position.x += 10;
    });
    genericObjects.forEach((genericObject) => {
      genericObject.position.x += 6.6;
    });
  }

  //to stop the falling of player on the platform
  //platform collision detection
  platforms.forEach((platform) => {
    if (
      player.position.y + player.height <= platform.position.y &&
      player.position.y + player.height + player.velocity.y >=
        platform.position.y &&
      player.position.x + player.width >= platform.position.x &&
      player.position.x <= platform.position.x + platform.width
    ) {
      player.velocity.y = 0;
      // this.position.y = platform.position.y - this.height;
    }
  });

  //to create win scenerio
  if (scrollOffset == 6500) {
    console.log("you win");
  }

  // to craete lose scenerio
  if (player.position.y > canvas.height) {
    init();
  }
}
animate();

//to check which key is pressed
addEventListener("keydown", (event) => {
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

addEventListener("keyup", (event) => {
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
