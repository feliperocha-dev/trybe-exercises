import React  from 'react';

class CreateTasks extends React.Component {
  render() {
    const task = (value) => {
      return (
        <li className='task'>{value}</li>
      );
    }
    const tasksArr = ['Estudar React', 'Atualizar portfolio GitHub', 'Criar perfil em inglês no linkedin', 'Realizar testes de Competenci no Linkedin'];
    return tasksArr.map((taskItem) => task(taskItem));
  }
}

export default CreateTasks;