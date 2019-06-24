import PreloaderState from 'states/PreloaderState';
import GameState from 'states/GameState';

class Game extends Phaser.Game {

	constructor() {
		super(1000,  660, Phaser.AUTO, 'content', null);
		this.state.add('PreloaderState', PreloaderState, false);
		this.state.add('GameState', GameState, false);
		this.state.start('PreloaderState');
	}

}

new Game();
