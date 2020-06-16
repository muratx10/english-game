import fetchData from '../utils/fetchData';

const PLAY_BTN = document.querySelector('.play');

class eventHandlers {
  startRound(lvl, round, data) {
    PLAY_BTN.addEventListener('click', () => {
      fetchData(lvl.value)
        .then((res) => data = res);
    });
  }
}

export default new eventHandlers();
