createHolidayButton();

createDaysOfTheWeek();

createDaysOfMonth();

createFridayButton();

createTask('cozinhar');

createSubtitle('yellow');

createTask(' estudar');

createSubtitle('blue');

function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};
  
function createDaysOfMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const monthDaysList = document.querySelector('#days');
    for (let index = 0; index < dezDaysList.length; index += 1){
        const days = dezDaysList[index];
        const daysOfMonth = document.createElement('li');
        daysOfMonth.innerHTML = days;
        daysOfMonth.className = 'day';
        if ((days === 24) || (days === 31)){
            daysOfMonth.className += ' holiday';
        } else if ((days === 4) || (days === 11) || (days === 18)){
            daysOfMonth.className += ' friday';
        } else if (days === 25) {
            daysOfMonth.className += ' friday';
            daysOfMonth.className += ' holiday';
        }

        monthDaysList.appendChild(daysOfMonth);
    }
};

function createHolidayButton() {
    const holidayContainer = document.querySelector('.buttons-container');
    const holidayButton = document.createElement('button');
    holidayButton.id = 'btn-holiday';
    holidayButton.type = 'button';
    holidayButton.innerText = 'Feriados';
    holidayContainer.appendChild(holidayButton);

};

function changeHolidayColor() {
    const holidays = document.querySelectorAll('.holiday');
    for(let index = 0; index < holidays.length; index += 1){
        if (holidays[index].style.backgroundColor === 'rgb(100, 238, 100)'){
            holidays[index].style.backgroundColor = 'rgb(238,238,238)';
        } else {
            holidays[index].style.backgroundColor = 'rgb(100, 238, 100)';
        }
    }
};

function createFridayButton() {
    const fridayContainer = document.querySelector('.buttons-container');
    const fridayButton = document.createElement('button');
    fridayButton.id = 'btn-friday';
    fridayButton.type = 'button';
    fridayButton.innerText = 'Sexta-Feira';
    fridayContainer.appendChild(fridayButton);

};

function changeFridayText() {
    const fridays = document.querySelectorAll('.friday');
    for(let index = 0; index < fridays.length; index += 1){
        if (fridays[index].innerText === 'SEXTOU'){
            fridayDay = parseInt(fridays[index].previousSibling.innerText);
            fridays[index].innerText = fridayDay + 1;
        } else {
            fridays[index].innerText = 'SEXTOU';
        }
    }
};

function increaseFontSize(event) {
    event.target.style.fontSize = '30px';
};

function decreaseFontSize(event) {
    event.target.style.fontSize = '20px';
};

function createTask(task) {
    const taskContainer = document.querySelector('.my-tasks');
    const taskSpan = document.createElement('span');
    taskSpan.innerText = task;
    taskContainer.appendChild(taskSpan);

};

function createSubtitle(color) {
    const subtitleContainer = document.querySelector('.my-tasks');
    const subtitle = document.createElement('div');
    subtitle.className = 'task';
    subtitle.style.backgroundColor = color;
    subtitleContainer.appendChild(subtitle);
};

function selectTask(event) {
    if (event.target.className === 'task selected') {
        event.target.className = 'task';
    } else {
        event.target.className = 'task selected';
    }
};

function addColor(event) {
    let colorTask = document.querySelector('.selected').style.backgroundColor;
    let target = event.target.style.color;
    if (target === colorTask) {
        event.target.style.color = '#777';
    } else {   
        event.target.style.color = colorTask;
    }
};

function addCommitment() {
    let inputText = document.querySelector('#task-input');
    let commitmentList = document.querySelector('.task-list');
    let commitment = document.createElement('li');
    let empty = '';
    if (inputText.value !== empty) {
        commitment.innerHTML =  inputText.value;
        commitmentList.appendChild(commitment);
    } else {
        alert('Erro! Campo de texto vazio!');
    }
};

let holidayButton = document.querySelector('#btn-holiday');
let fridayButton = document.querySelector('#btn-friday');
let daysCalendar = document.querySelector('.days-container');
let tasksSubtitle = document.querySelector('.my-tasks');
let tasksButton = document.querySelector('#btn-add');
let inputTextKey = document.querySelector('#task-input');

holidayButton.addEventListener('click', changeHolidayColor);

fridayButton.addEventListener('click', changeFridayText);

fridayButton.addEventListener('click', changeFridayText);

daysCalendar.addEventListener('mouseover', increaseFontSize);

daysCalendar.addEventListener('mouseout', decreaseFontSize);

tasksSubtitle.addEventListener('click', selectTask);

daysCalendar.addEventListener('click', addColor);

tasksButton.addEventListener('click', addCommitment);

inputTextKey.addEventListener('keypress', addCommitment);