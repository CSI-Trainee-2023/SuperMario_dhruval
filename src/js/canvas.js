import platform from '../../assets/runningPlatform.png'
import jumpingPlatform from '../../assets/jumpingPlatform.png'
import background from '../../assets/background.jpg'
import trees from '../../assets/tree.png'
const canvas = document.querySelector("canvas");

// window.addEventListener('scroll', () => {
//   window.scrollTo(0, 0); // Scroll back to the top of the page
// });

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

    if (this.position.y + this.height + this.velocity.y <= canvas.height -10)
      this.velocity.y += gravity;
    else this.velocity.y = 0;
  }
}

class Platform {
  constructor({x, y, image}) {
    this.position = {
      x,
      y,
      image
    };
    this.width = 500;
    this.height = 100;
    this.image = image
  }
  draw() {
    c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
  }
}

class GenericObject {
  constructor({x, y, image}) {
    this.position = {
      x,
      y 
    };
    this.width = 1600;
    this.height = window.innerHeight;
    this.image = image
  }
  draw() {
    c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
  }
}

function createImage(imageSrc){
  const image = new Image()
  image.src = imageSrc
  return image
}

const player = new Player();
//to create multiple platforms
const platforms = [new Platform({
    x:0, y:680, image:createImage(platform)
}), new Platform({
    x: 700, y:680, image: createImage(platform)
})];

const genericObjects = [
  new GenericObject({
    x: 0,
    y: 0,
    image: createImage(background)
  }),
  new GenericObject({
    x: 0,
    y: 0,
    image: createImage(trees)
  })
]

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
  c.fillStyle = 'white'
  //to clear the previos position of player
  c.fillRect(0, 0, canvas.width, canvas.height);
  
  genericObjects.forEach((genericObject) => {
    genericObject.draw()
  })
  
  platforms.forEach((platform) => {
    platform.draw();
  });

  player.update();

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

    genericObjects.forEach((GenericObject) => {
      GenericObject.position.x -=3;
    })

  } else if (keys.left.pressed) {
    scrollOffset -= 5; 
    platforms.forEach((platform) => {
      platform.position.x += 5;
    });
    genericObjects.forEach((GenericObject) => {
      GenericObject.position.x +=3;
    })
  }

  //to stop the falling of player on the platform
  //platform collision detection
  platforms.forEach((platform) => {
    if (
      player.position.y + player.height <= platform.position.y &&
      player.position.y + player.height + player.velocity.y >=
        platform.position.y  &&
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
