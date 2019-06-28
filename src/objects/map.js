import Continent from '../objects/continent';

export default class Map extends Phaser.Group {
  constructor(game, parent) {
    super(game, parent);

    this.bg = null;
    this.europe = null;
    this.greenland = null;
    this.northAmerica = null;
    this.southAmerica = null;
    this.africa = null;
    this.antarctica = null;
    this.asia = null;
    this.australia = null;

    this.createBg();
    this.createContinents();
    // this.configureControls();

  }

  createBg() {
    let bg = this.bg = this.game.add.graphics();
    bg.beginFill(0x4488AA);
    bg.drawRect(0, 0, this.game.width, this.game.height);
    this.add(bg);
  }

  createContinents() {
    let bg = this.bg;


    let an = this.antarctica = new Continent(this.game, this, 'an', "Antarctica");
    an.position.set(bg.width / 2, bg.height - an.height / 2);

    let af = this.africa = new Continent(this.game, this, 'af', "Africa");
    af.position.set(bg.width / 2 + 65, bg.height / 2 - 60);

    let as = this.asia = new Continent(this.game, this, 'as', "Asia");
    as.position.set(bg.width - as.width / 2, as.height / 1.5);

    let au = this.australia = new Continent(this.game, this, 'au', "Australia");
    au.position.set(bg.width - au.width, bg.height - au.height * 2.5);

    let eu = this.europe = new Continent(this.game, this, 'eu', "Europe");
    eu.position.set(bg.width / 2 + eu.width / 2 - 10, eu.height / 1.12);

    let na = this.northAmerica = new Continent(this.game, this, 'na', "North America");
    na.position.set(na.width / 2, na.height / 1.2);

    let gr = this.greenland = new Continent(this.game, this, 'gr', "Greenland");
    gr.position.set(na.x + na.width / 2 + gr.width / 2.3, na.height / 1.6);

    let sa = this.southAmerica = new Continent(this.game, this, 'sa', "South America");
    sa.position.set(na.x + sa.width / 1, na.y + na.height / 2 + sa.height / 2);
  }
}