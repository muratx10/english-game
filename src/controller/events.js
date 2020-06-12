import fetchData from '../utils/fetchData';
const PLAY_BTN = document.querySelector('.play');

class eventHandlers {
  startRound(lvl = 1, data) {
    PLAY_BTN.addEventListener('click', () => {
      fetchData(lvl)
        .then(res => data = res);
    })
  }
}

export default new eventHandlers();