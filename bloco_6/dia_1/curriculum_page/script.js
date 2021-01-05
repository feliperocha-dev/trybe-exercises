function createOption(container) {
  const option = document.createElement('option');
  container.appendChild(option);
  return option
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

window.onload = function () {
  addStates()
};
