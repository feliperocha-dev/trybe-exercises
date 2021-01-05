function createOption(container) {
  const option = document.createElement('option');
  container.appendChild(option);
  return option;
}

function createDiv(container) {
  const div = document.createElement('div');
  container.appendChild(div);
  return div;
}

function createParagraph(container) {
  const paragraph = document.createElement('p');
  container.appendChild(paragraph);
  return paragraph;
}

function addStates() {
  const selectContainer = document.querySelector('#state-input');
  const statesAcronyms = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  for (let index = 0; index < statesAcronyms.length; index += 1) {
    const state = createOption(selectContainer);
    state.innerText = statesAcronyms[index];
    state.name = 'state';
    state.value = statesAcronyms[index];
  }
}

function addCurriculum(event) {
  event.preventDefault();
  if (document.querySelector('.curriculum-container') === null) {
    const mainContainer = document.querySelector('.main-container');
    const inputForm = document.querySelectorAll('.input');
    const labelForm = document.querySelectorAll('label');
    const curriculum = createDiv(mainContainer);
    curriculum.className = 'curriculum-container';
    for (let index = 0; index < inputForm.length; index += 1) {
      const text = createParagraph(curriculum);
      text.innerText = `${labelForm[index].innerText}: ${inputForm[index].value}`;
    }
  }
}

function clearCurriculum(event) {
  event.preventDefault();
  const mainContainer = document.querySelector('.main-container');
  const curriculumContainer = document.querySelector('.curriculum-container'); 
  mainContainer.removeChild(curriculumContainer);
  const inputForm = document.querySelectorAll('.input');
  for (let index = 0; index < inputForm.length; index += 1) {
    inputForm[index].value = null;
  }
}

window.onload = function () {
  const sendButton = document.querySelector('#send-button');
  const clearButton = document.querySelector('#clear-button');
  addStates();
  sendButton.addEventListener('click', addCurriculum);
  clearButton.addEventListener('click', clearCurriculum);
};
