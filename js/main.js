let config = {
  type: Phaser.AUTO,
  width: 360,
  heigth: 768,
  scene: new GameScene(),
  backgroundColor: "#dedede",
};

let game = new Phaser.Game(config);
