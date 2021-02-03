
const generateRandomNumber = () => Math.floor(Math.random() * 51);

const checkSuccessesOrFailures = () => {  
    const arrayNumbers = [];
    while (arrayNumbers.length <= 10) {
      arrayNumbers.push(generateRandomNumber());
    }
    return arrayNumbers.reduce(((acc, curr) => acc = curr * curr), 0);
  };

  const promise = new Promise((resolve, rejected) => {
    const number = generateRandomNumber();
    if(number < 8000) {
      return resolve(number);
    } rejected(new Error('É mais de oito mil! Essa promise deve estar quebrada!'));
  })
  .then(response => console.log(`Deu certo! O número foi ${response}`))
  .catch(error => console.log(error));