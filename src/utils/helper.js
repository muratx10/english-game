const generateSelectionList = (
  quantity,
  tagName,
  parentNode,
  className = '',
  textNode = false
) => {
  const fragment = document.createDocumentFragment();
  for (let i = 1; i <= quantity; i += 1) {
    const optionElem = document.createElement(tagName);
    optionElem.className = className;
    tagName === 'option' ? (optionElem.value = `${i}`) : null;
    textNode ? (optionElem.textContent = `${textNode} ${i}`) : null;
    fragment.appendChild(optionElem);
  }
  parentNode.appendChild(fragment);
};

export default generateSelectionList;
