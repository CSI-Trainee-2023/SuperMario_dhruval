const canvas = document.querySelector("canvas");

const c = canvas.getContext("2d");
// console.log(c);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const gravity = 0.5;

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
      y: 1,
    };
    this.width = 30;
    this.height = 30;
  }
  draw() {
    c.fillStyle = "red";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  //creating gravity
  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.position.y + this.height + this.velocity.y <= canvas.height)
      this.velocity.y += gravity;
    else this.velocity.y = 0;
  }
}

class Platform {
  constructor({x, y}) {
    this.position = {
      x,
      y
    };
    this.width = 200;
    this.height = 20;
  }
  draw() {
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

const player = new Player();
//to create multiple platforms
const platforms = [new Platform({
    x:200, y:100
}), new Platform({
    x:600, y:100
})];

const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};

let scrollOffset = 0;

//to loop the gravity
function animate() {
  requestAnimationFrame(animate);
  //to clear the previos position of player
  c.clearRect(0, 0, canvas.width, canvas.height);
  player.update();
  platforms.forEach((platform) => {
    platform.draw();
  });

  //for smooth movement
  if (keys.right.pressed && player.position.x < 800) {
    player.velocity.x = 5;
  } else if (keys.left.pressed && player.position.x > 100) {
    player.velocity.x = -5;
  } else {
    player.velocity.x = 0;
  }

  if (keys.right.pressed) {
    scrollOffset += 5;
    platforms.forEach((platform) => {
      platform.position.x -= 5;
    });
  } else if (keys.left.pressed) {
    scrollOffset -= 5; 
    platforms.forEach((platform) => {
      platform.position.x += 5;
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
    }
  })

  //to create win scenerio
  if(scrollOffset == 2000){
    console.log("you win");
  }
}
animate();

//to check which key is pressed
addEventListener("keydown", (event) => {
  // console.log(event);
  event.preventDefault();
  switch (event.keyCode) {
    case 39:
      console.log("right");
      keys.right.pressed = true;
      break;

    case 37:
      console.log("left");
      keys.left.pressed = true;
      break;

    case 38:
      console.log("up");
      //to create jump effect
      player.velocity.y -= 20;
      break;

    case 40:
      console.log("down");
      break;
  }
});

addEventListener("keyup", (event) => {
  // console.log(event);
  event.preventDefault();
  switch (event.keyCode) {
    case 39:
      console.log("right");
      keys.right.pressed = false;
      break;

    case 37:
      console.log("left");
      keys.left.pressed = false;
      break;

    case 38:
      console.log("up");
      //to create jump effect
      player.velocity.y = 0;
      break;

    case 40:
      console.log("down");
      break;
  }
});
