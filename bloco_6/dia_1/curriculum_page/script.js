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

function createHeader(container) {
  const header = document.createElement('h3');
  container.appendChild(header);
  return header;
}

function addStates() {
  const selectContainer = document.querySelector('#state-input');
  const statesAcronyms = ['', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  for (let index = 0; index < statesAcronyms.length; index += 1) {
    const state = createOption(selectContainer);
    if (index === 0) {
      state.style.display = 'none';
      state.hidden;
    }
    state.innerText = statesAcronyms[index];
    state.name = 'state';
    state.value = statesAcronyms[index];
  }
}

function addCurriculum(event) {
  event.preventDefault();
  if (document.querySelector('#curriculum-container') === null) {
    const mainContainer = document.querySelector('.main-container');
    const inputForm = document.querySelectorAll('.input');
    const labelForm = document.querySelectorAll('label');
    const curriculum = createDiv(mainContainer);
    curriculum.id = 'curriculum-container';
    curriculum.className = 'row border border-2 rounded-3 my-4 py-4 px-3 bg-white';
    const title = createHeader(curriculum);
    title.innerText = 'Curriculo';
    title.className = 'text-center';
    for (let index = 0; index < inputForm.length; index += 1) {
      if (inputForm[index].type !== 'radio'){
        const text = createParagraph(curriculum);
        text.innerText = `${labelForm[index].innerText}: ${inputForm[index].value}`;
      } else if (inputForm[index].checked) {
        const text = createParagraph(curriculum);
        text.innerText = `Residencia: ${inputForm[index].value}`;
      } 
    }
  }
}

function clearCurriculum(event) {
  event.preventDefault();
  const mainContainer = document.querySelector('.main-container');
  const curriculumContainer = document.querySelector('#curriculum-container'); 
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
  const picker = new Pikaday(
    {
      field: document.getElementById('start-date-input'),
      firstDay: 1,
      format: 'DD/MM/YYYY',
      minDate: new Date(),
      maxDate: new Date(2020, 01, 31),
      yearRange: [2000,2020],
      toString(date, format) {
        // you should do formatting based on the passed format,
        // but we will just return 'D/M/YYYY' for simplicity
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
      },
      parse(dateString, format) {
          // dateString is the result of `toString` method
          const parts = dateString.split('/');
          const day = parseInt(parts[0], 10);
          const month = parseInt(parts[1], 10) - 1;
          const year = parseInt(parts[2], 10);
          return new Date(year, month, day);
      }
    });    
};
