export default class Continent extends Phaser.Group{
  constructor(game,parent, frame, name){
    super(game, parent);

    this.onClicked = new Phaser.Signal();

    this.name = name;

    let view = this.view = this.game.add.sprite(0, 0, 'map', frame);
    view.anchor.set(0.5);
    
    let nameText = this.nameText = this.game.add.text(0,0, name, {
      font: "15pt Arial",
      fill: "0xffffff",
      align: "center"
    });
    nameText.anchor.set(0.5);
    // nameText.scale.set(view.width / nameText.width / 2);
    
    this.add(view);
    this.add(nameText);

    this._create();
  }

  _create() {
    this.view.inputEnabled = true;
    this.view.input.pixelPerfectClick = true;
    this.view.events.onInputDown.add(this.clicked, this);
  }

  clicked(){
    console.log(this.name, "clicked!");
    this.onClicked.dispatch();
  }

  get height() {
    return this.view.height;
  }

  get width() {
    return this.view.width;
  }
}