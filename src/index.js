import Phaser from "phaser";
let bird = null
let totalDelta = 0
let totalBounces = 0
let velocity = 400
let gravity = 400
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
        y: gravity
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
  bird.body.velocity.x = velocity
}

function update(time, delta) {

  if (bird.body.position.x >= WIDTH - bird.width) {
    bird.body.velocity.x = -velocity
  }

  if (bird.body.position.x <= 0) {
    bird.body.velocity.x = velocity
  }

  if (bird.body.position.y >= HEIGHT - bird.height && bird.body.velocity.y > 0) {
    bird.body.velocity.y = bird.body.velocity.y * -0.8
    if (Math.abs(bird.body.velocity.y) < 2) { this.scene.pause(); }
  }
}

new Phaser.Game(tuna);
