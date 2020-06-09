const Particles = require('particlesjs');
import './styles/main.scss';
import generateSelectionList from './utils/helper';

const ROUND_COUNT = 60;
const LEVEL_COUNT = 6;
const ANSWERS_COUNT = 10;
const LEVELS = document.querySelector('.levels select');
const roundsSelection = document.querySelector('.rounds select');
const PUZZLE_ANSWERS = document.querySelector('.puzzle-answers');

document.addEventListener('DOMContentLoaded', () => generateLists());
window.onload = function () {
  Particles.init({
    selector: '.background',
    maxParticles: 250,
    color: '#007BFF',
    responsive: [
      {
        breakpoint: 768,
        options: {
          maxParticles: 200,
          color: '#48F2E3',
          connectParticles: false
        }
      }, 
      {
        breakpoint: 425,
        options: {
          maxParticles: 100,
          connectParticles: true
        }
      }, 
      {
        breakpoint: 320,
        options: {
          maxParticles: 0
        }
      }
    ]
  });
};

function generateLists() {
  generateSelectionList(
    ROUND_COUNT,
    'option',
    roundsSelection,
    'rounds__item',
    'Round'
  );
  generateSelectionList(
    LEVEL_COUNT,
    'option',
    LEVELS,
    'levels__item',
    'Level'
  );
  generateSelectionList(
    ANSWERS_COUNT,
    'div',
    PUZZLE_ANSWERS,
    'puzzle-answers__item col-12',
    'HELLO'
  );
}