const handleRandomNumbersBtn = document.querySelector('.generate_numbers--btn');

let randomNumbers = [];
let evenNumbers = [];
let oddNumbers = [];

const numbersQty = 20;
const min = 1;
const max = 100;

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generateRandomNumbers = () => {
	randomNumbers = [];
	
	for(let i = 0; i < numbersQty; i++) {
		randomNumbers.push(getRandomIntInclusive(min, max));
	}
};

const splitToEvenOddNumbers = () => {
	evenNumbers = [];
	oddNumbers = [];
	
	evenNumbers = randomNumbers.filter((number) => number % 2 === 0);
	oddNumbers = randomNumbers.filter((number) => number % 2 !== 0);
}

const sortNumbers = (direction) => {
	evenNumbers.sort((a, b) => direction === 'asc' ? a - b : b - a);
	oddNumbers.sort((a, b) => direction === 'asc' ? a - b : b - a);
}

const generateView = (evenNumbers, oddNumbers) => {
	const evenNumbersContainer = document.querySelector('.even__numbers .numbers__container');
	const oddNumbersContainer = document.querySelector('.odd__numbers .numbers__container');
	
	evenNumbersContainer.innerHTML = '';
	oddNumbersContainer.innerHTML = '';
	
	evenNumbers.forEach((number) => {
		evenNumbersContainer.innerHTML += `<p class="number">${number}</p>`;
	});
	
	oddNumbers.forEach((number) => {
		oddNumbersContainer.innerHTML += `<p class="number">${number}</p>`;
	});
}

handleRandomNumbersBtn.addEventListener('click', () => {
	generateRandomNumbers();
	splitToEvenOddNumbers();
	sortNumbers('asc'); // asc or desc
	generateView(evenNumbers, oddNumbers);
});