import names from './data/names';
import Stats from './stats';

export default class Unit extends Phaser.Group {
  constructor(game, parent) {
    super(game, parent);

    this.gender = null;
    this.name = null;
    this.age = null;
    this.stats = null;

    this._create();
  }

  _create() {
    this.randGender();
    this.randName();
    this.randAge();
    this.randStats();
  }

  randGender() {
    let randGender = Math.round(Math.random());
    if (randGender === 0) {
      this.gender = "Female";
    } else {
      this.gender = "Male";
    }
  }

  randName() {
    let rand = Math.round(Math.random() * names.namesF.length);

    if (this.gender === "Female") {
      this.name = names.namesF[rand];
    } else {
      this.name = names.namesM[rand];
    }
  }

  randAge() {
    let rand = Math.round(Math.random() * (55 - 18) + 18);

    this.age = rand;
  }

  randStats() {
    this.stats = new Stats(this.age);
  }
}