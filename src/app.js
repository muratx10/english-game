import particles from './utils/particles';
import generateSelectionList from './utils/helper';
import eventHandlers from './controller/events';
import './styles/main.scss';

class App {
  constructor(
    levelN, roundN, sentenceN 
  ) {
    this.LEVELS_COUNT = levelN;
    this.ROUNDS_COUNT = roundN;
    this.SENTENCE_COUNT = sentenceN;
    this.LEVEL_SELECT = document.querySelector('.levels select');
    this.ROUND_SELECT = document.querySelector('.rounds select');
    this.PUZZLE_COMPLETE = document.querySelector('.puzzle-complete');
    
  }
  
  async init() {
    particles();
    generateSelectionList(
      this.ROUNDS_COUNT,
      'option',
      this.ROUND_SELECT,
      'rounds__item',
      'Round'
    );
    generateSelectionList(this.LEVELS_COUNT, 'option', this.LEVEL_SELECT, 'levels__item', 'Level');
    generateSelectionList(
      this.SENTENCE_COUNT,
      'div',
      this.PUZZLE_COMPLETE,
      'puzzle-complete__item col-12',
      'HELLO'
    );
    eventHandlers.startRound(this.LEVEL_SELECT, this.ROUND_SELECT);
  }
}

const Game = new App(6, 60, 10);

Game.init();
