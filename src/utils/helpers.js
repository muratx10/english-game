const generateSelectionList = (
  quantity,
  tagName,
  parentNode,
  className = '',
  textNode = false,
) => {
  const fragment = document.createDocumentFragment();
  for (let i = 1; i <= quantity; i += 1) {
    const optionElem = document.createElement(tagName);
    optionElem.className = className;
    if (tagName === 'option') optionElem.value = `${i}`;
    if (textNode) {
      optionElem.textContent = `${textNode} ${i}`;
    } else {
      optionElem.textContent = ' ';
    }
    fragment.appendChild(optionElem);
  }
  parentNode.appendChild(fragment);
};

function createShuffledArray(str) {
  const array = str ? str.split(' ') : [];
  let currentIndex = array.length; let temporaryValue; let
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export { generateSelectionList, createShuffledArray };
