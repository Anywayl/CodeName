class PreloaderState extends Phaser.State {

  preload() {

    this.game.load.atlas('map', 'img/atlasses/atlas.png', 'img/atlasses/atlasses.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
    this.game.load.atlas('ui', 'img/atlasses/ui.png', 'img/atlasses/ui.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);

  }

  create() {

    this.state.start("GameState");
  }

}

export default PreloaderState;
