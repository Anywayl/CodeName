import Button from "./button";

export default class UI extends Phaser.Group{
  constructor(game ,parent){
    super(game, parent);

    this.onUnits = new Phaser.Signal();
    this.unitsBtn = null;

    this._create();
  }

  _create(){
    let unitsBtn = this.unitsBtn = new Button(this.game, this, "UNITS");
    unitsBtn.scale.set(0.7);
    unitsBtn.position.set(unitsBtn.width / 2 + 20, this.game.height - unitsBtn.height / 2 - 20);

    unitsBtn.onClick.add(() => {
      this.onUnits.dispatch();
    });
  }
}