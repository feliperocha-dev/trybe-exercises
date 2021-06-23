// Crie uma função que lê e escreve vários arquivos ao mesmo tempo.
// Utilize o Promise.all para manipular vários arquivos ao mesmo tempo.
// Dado o seguinte array de strings: ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'] Faça com que sua função crie um arquivo contendo cada string, sendo o nome de cada arquivo igual a file<index + 1>.txt . Por exemplo, para a string "Finalmente", o nome do arquivo é file1.txt .
// Programe sua função para que ela faça a leitura de todos os arquivos criados no item anterior, armazene essa informação e escreva em um arquivo chamado fileAll.txt .

const fs = require('fs').promises;

function createFiles() {
  const arr = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
  
  Promise.all(arr.map((data, index) =>  fs.writeFile(`./file${index + 1}.txt`, data)))
    .then(() => console.log('Arquivos criados'))
    .catch((err) => console.log(err.message));
  
  Promise.all(new Array(5).fill(null).map((_, index) => fs.readFile(`file${index + 1}.txt`, 'utf-8')))
    .then((args) => fs.writeFile('./fileAll.txt', args.reduce((a, b) => a = `${a} ${b}`, '')))
    .catch((err) => console.log(err.message));
}

createFiles();