export default class Button extends Phaser.Group {
  constructor(game, parent, text){
    super(game, parent);

    this.onClick = new Phaser.Signal();

    this._create(text);
  }

  _create(text) {
    let view = this.view = this.game.add.sprite(0, 0, 'ui', 'uiBtn');
    view.anchor.set(0.5);
    this.add(view);

    let textOnBtn =  this.game.add.text(0,0, text, {
      font: "30pt Arial",
      fill: "#ffffff",
      align: "center",
    });
    textOnBtn.anchor.set(0.5);
    textOnBtn.scale.set(view.width / textOnBtn.width / 1.6);

    view.addChild(textOnBtn);

    view.inputEnabled = true;
    view.events.onInputDown.add(() => {
      
      this.onClick.dispatch();
    });
  }
}