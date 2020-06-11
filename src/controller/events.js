import getCurrentLevelData from '../utils/fetchData';
const PLAY_BTN = document.querySelector('.play');

class eventHandlers {
  startRound(lvl = 1) {
    PLAY_BTN.addEventListener('click', () => {
      getCurrentLevelData(lvl);
    })
  }
}

export default new eventHandlers();