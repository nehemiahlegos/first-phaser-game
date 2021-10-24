import Phaser from "phaser";
let bird = null
let totalDelta = 0
const VELOCITY = 400
const WIDTH = 800
const HEIGHT = 600

const tuna = {
  type: Phaser.AUTO,
  width: WIDTH,
  height: HEIGHT,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
      gravity: {
        y: 50
      }
    },
  },

  scene: {
    preload,
    create,
    update
  }
}

function preload() {
  this.load.image('dingdong', 'assets/sky.png')
  this.load.image('bird', 'assets/bird.png')
} 

function create() {
  this.add.image(0,0, 'dingdong').setOrigin(0)
  bird = this.physics.add.sprite(tuna.width / 10,0, 'bird').setOrigin(0)
  bird.body.velocity.x = VELOCITY
}

function update(time, delta) {
  totalDelta += delta
  if (bird.body.position.x >= WIDTH - bird.width) {
    bird.body.velocity.x = -VELOCITY
  }

  if (bird.body.position.x <= 0) {
    bird.body.velocity.x = VELOCITY
  }

  if (bird.body.position.y >= HEIGHT) {
    bird.body.velocity.y = -190
  }

  if (totalDelta >= 1000) {
    console.log({gravity: bird.body.gravity.y, velocity: bird.body.velocity.y})
    
    totalDelta = 0
  }
  
}

new Phaser.Game(tuna);











