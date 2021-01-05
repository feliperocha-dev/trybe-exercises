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
  const mainContainer = document.querySelector('.main-container');
  const inputForm = document.querySelectorAll('.input');
  const curriculum = createDiv(mainContainer);
  curriculum.className = 'curriculum-container;'
  for (let index = 0; index < inputForm.length; index += 1) {
    const text = createParagraph(curriculum);
    text.innerText = inputForm[index].value;
  }
}

window.onload = function () {
  const sendButton = document.querySelector('#send-button');
  addStates();
  sendButton.addEventListener('click', addCurriculum);
};
