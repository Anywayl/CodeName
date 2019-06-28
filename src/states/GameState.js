import Map from '../objects/map';
import UI from '../objects/ui';
import Unit from '../objects/unit';

class GameState extends Phaser.State {

	create() {
		this.counter = 0;

		this.view = this.game.add.group();
		this.uiView = this.game.add.group();

		let map = new Map(this.game, this.view);

		let ui = new UI(this.game, this.uiView);

		for (let i = 0 ; i < 10; i++){
			let a = new Unit(this.game, this.view);
		}
	}
}

export default GameState;
