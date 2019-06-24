import Map from '../objects/map';

class GameState extends Phaser.State {

	create() {
		this.counter = 0;

		this.view = this.game.add.group();
		this.uiView = this.game.add.group();

		let map = new Map(this.game, this.view);

		let scoreText = this.scoreText = this.game.add.text(0,0, "Score: " + this.counter, {
      font: "35pt Arial",
      fill: "0xffffff",
      align: "center"
		});
		
		this.uiView.add(scoreText);
	}

	updateScore() {
		this.game.time.events.add(500,() => {
			this.scoreText.text = "Score: " + this.counter;
			this.counter += 1;
			this.updateScore();
		});
	}



}

export default GameState;
