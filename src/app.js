import eventHandlers from './controller/handlers';
import './styles/main.scss';
import fetchData from './utils/fetchData';
import { createShuffledArray, generateSelectionList } from './utils/helpers';
import particles from './utils/particles';

class App {
  constructor(levelN, roundN, sentenceN) {
    this.LEVELS_COUNT = levelN;
    this.ROUNDS_COUNT = roundN;
    this.WORDS_COUNT = sentenceN;
    this.LEVEL_SELECT = document.querySelector('.levels select');
    this.ROUND_SELECT = document.querySelector('.rounds select');
    this.PUZZLE_COMPLETE = document.querySelector('.puzzle-complete');
    this.quizContainer = document.querySelector('.puzzle-quiz__item');
    this.currentRoundData = null;
    this.currentWord = 0;
    this.currentSentenceShuffled = null;
    this.currentSentenceOriginal = null;
  }

  async init() {
    particles();
    if (window.navigator.vendor.includes('Apple')) {
      document.body.setAttribute('style', 'animation: none');
    }
    generateSelectionList(
      this.ROUNDS_COUNT,
      'option',
      this.ROUND_SELECT,
      'rounds__item',
      'Round',
    );
    generateSelectionList(
      this.LEVELS_COUNT,
      'option',
      this.LEVEL_SELECT,
      'levels__item',
      'Level',
    );
    generateSelectionList(
      this.WORDS_COUNT,
      'div',
      this.PUZZLE_COMPLETE,
      'puzzle-complete__item col-12 p-0 text-left',
    );
    // fetch first 10 words on start of game
    this.currentRoundData = await fetchData(1, 1, this.WORDS_COUNT)
      .then((res) => res);
    // add event listener to PLAY button
    eventHandlers.startRound(
      this.LEVEL_SELECT,
      this.ROUND_SELECT,
      this.currentRoundData,
      this.WORDS_COUNT,
      this.renderQuiz.bind(this),
      this.currentWord,
    );

    eventHandlers.chooseAnswer(this);

    this.renderQuiz(this.currentRoundData[this.currentWord]);
  }

  renderQuiz(obj) {
    this.currentSentenceShuffled = createShuffledArray(obj.textExample);
    this.currentSentenceOriginal = obj.textExample;
    const quizFrg = document.createDocumentFragment();
    const sentenceLength = obj.textExample.replace(/ /g, '').length;
    // eslint-disable-next-line array-callback-return
    this.currentSentenceShuffled.map((item) => {
      const word = document.createElement('span');
      word.className = 'word';
      word.textContent = item.toUpperCase();
      word.style.width = `${(item.length / sentenceLength) * 100}%`;
      quizFrg.appendChild(word);
    });
    this.quizContainer.innerHTML = null;
    this.quizContainer.appendChild(quizFrg);
    this.activateRow();
  }

  activateRow() {
    const rows = document.querySelectorAll('.puzzle-complete__item');
    rows.forEach((node, idx) => {
      if (this.currentWord === idx) node.classList.add('active-row');
    });
  }
}

const Game = new App(6, 60, 10);

Game.init();
