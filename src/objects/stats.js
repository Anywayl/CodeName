export default class Stats {
  constructor(age) {
    this.luck = 0;
    this.trAb = 0;
    this.hero = 0;
    this.combskill = 0;
    this.stealth = 0;

    this.randomize(age);
  }

  randomize(age) {
    let points = 100;
    points *= age / 23;
    
    for (let i = 0; i < points; i++) {
      let randst = Math.round(Math.random() * 3);

      switch(randst){
        case 0: this.trAb++; break;
        case 1: this.hero++; break;
        case 2: this.combskill++;break;
        case 3: this.stealth++; break;
      }
    }

    this.trAb *= 35 / age;
    this.trAb = Math.round(this.trAb);

    this.luck = Math.round(Math.random() * (5 -(-5) ) + (-5));
    if (this.luck < 0){
      this.luck = Math.round(Math.random() * 2);
    }
    else if (this.luck > 0 && this.luck !== 5){
      this.luck = Math.round(Math.random() * (6 - 3) + 3);
    } else {
      this.luck = Math.round(Math.random() * 9);
    }
  }
}