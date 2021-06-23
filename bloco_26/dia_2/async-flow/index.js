function getNumber(a, b, c) {
  return new Promise((resolve, reject) => {
    
    const typeOfParams = [a, b, c].map((param) => typeof(param));

    if (typeOfParams.some((type) => type !== 'number')) {
      reject(new Error('Informe apenas números'))
    }

    const result = (a + b) * c;

    if (result < 50) reject(new Error('Valor muito baixo'));

    resolve(result);
    
  });
}

const paramsArr = [];

for (let index = 0; index < 3; index += 1) {
  paramsArr.push(Math.floor(Math.random() * 100 + 1));
}

// getNumber(...paramsArr)
//   .then((result) => console.log(`Resultado do calculo ${result}.`))
//   .catch((err) => console.log(`Erro: ${err.message}`));

// Async/Await
const getResult = async () => {
  try {
    const result = await getNumber(...paramsArr);
    console.log(`Resultado do calculo ${result}.`);
  } catch (err) {
    console.log(`Erro: ${err.message}`);
  }
};

getResult();