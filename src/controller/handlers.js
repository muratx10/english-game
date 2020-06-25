/* eslint-disable no-unused-vars */
import fetchData from '../utils/fetchData';

const PLAY_BTN = document.querySelector('.play');
const LEVEL_INPUT = document.querySelector('.levels .form-control');
const ROUND_INPUT = document.querySelector('.rounds .form-control');
const quizContainer = document.querySelector('.puzzle-quiz__item');

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

  chooseAnswer(data) {
    console.log(data);
    quizContainer.addEventListener('click', (e) => {
      if (!data.clickAction) {
        const ACTIVE_ROW = document.querySelector('.active-row');
        const node = e.target.classList.contains('word');
        const sentenceLength = data.currentSentenceShuffled;
        let timerID;
        if (node) {
          clearTimeout(timerID);
          const clone = e.target.cloneNode(true);
          e.target.classList.add('moveWord');
          timerID = setTimeout(() => {
            e.target.remove();
            ACTIVE_ROW.appendChild(clone);
            ACTIVE_ROW.querySelectorAll('.word').forEach((item, idx) => {
              if (!item.classList.contains('wrong') || !item.classList.contains('correct')) {
                if (item.textContent.toLowerCase() === data.currentSentenceOriginal[idx]) {
                  item.classList.add('correct');
                } else {
                  item.classList.add('wrong');
                }
              }
            });
            data.clickAction = false;
          }, 300);
          data.clickAction = true;
        }
      }
    });
  }
}

export default new EventHandler();
