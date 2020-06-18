/* eslint-disable no-unused-vars */
import fetchData from '../utils/fetchData';

const PLAY_BTN = document.querySelector('.play');
const LEVEL_INPUT = document.querySelector('.levels .form-control');
const ROUND_INPUT = document.querySelector('.rounds .form-control');

LEVEL_INPUT.addEventListener('change', () => ROUND_INPUT.value = 1);

class EventHandler {
  startRound(lvl, round, data, wordsCount, callback, idx) {
    PLAY_BTN.addEventListener('click', async () => {
      data = await fetchData(lvl.value, round.value, wordsCount)
        // eslint-disable-next-line no-return-assign
        .then((res) => res);
      callback(data[idx]);
    });
  }
}

export default new EventHandler();
