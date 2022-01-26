// элементы в DOM можно получить при помощи функции querySelector
const fruitsList = document.querySelector('.fruits__list'); // список карточек
const shuffleButton = document.querySelector('.shuffle__btn'); // кнопка перемешивания
const filterButton = document.querySelector('.filter__btn'); // кнопка фильтрации
const sortKindLabel = document.querySelector('.sort__kind'); // поле с названием сортировки
const sortTimeLabel = document.querySelector('.sort__time'); // поле с временем сортировки
const sortChangeButton = document.querySelector('.sort__change__btn'); // кнопка смены сортировки
const sortActionButton = document.querySelector('.sort__action__btn'); // кнопка сортировки
const kindInput = document.querySelector('.kind__input'); // поле с названием вида
const colorInput = document.querySelector('.color__input'); // поле с названием цвета
const weightInput = document.querySelector('.weight__input'); // поле с весом
const addActionButton = document.querySelector('.add__action__btn'); // кнопка добавления
const minWeightInptut = document.querySelector('.minweight__input')// поле для минимально веса
const maxWeightInput = document.querySelector('.maxweight__input)')//поля для максимально веса


// список фруктов в JSON формате
let fruitsJSON = `[
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35},
  {"kind": "Личи", "color": "розово-красный", "weight": 17},
  {"kind": "Карамбола", "color": "желтый", "weight": 28},
  {"kind": "Тамаринд", "color": "светло-коричневый", "weight": 22}
]`;

// преобразование JSON в объект JavaScript
let fruits = JSON.parse(fruitsJSON);



/*** ОТОБРАЖЕНИЕ ***/

// отрисовка карточек



//function startList() {
  //const startFruit = document.createElement('div');
  //startFruit.className = 'fruit__info';
//}

//function fruitProperty() {
  //const property = document.createTextNode();
//}

function fruitCard(fruit) {
  var newLi = document.createElement('li');
  newLi.className = 'fruit__item fruit_default';
  var newDiv = document.createElement('div');
  newDiv.className = 'fruit__info';
  newLi.appendChild(newDiv);
  document.querySelector('.fruits__list').appendChild(newLi);
  const arr =[];
  Object.entries(fruit).forEach(([key, value]) => {
   arr.push(`${key}:${value}`);
  }); 
  for ( var i = 0; i < arr.length; i++) {
  const newContent = document.createElement('div');
  var textContent = document.createTextNode(arr[i]);
  newContent.appendChild(textContent);
  newDiv.appendChild(newContent);
  };
  };

const display = () => {
    for ( var i = 0; i < fruits.length; i++) {
      fruitCard(fruits[i]);
    };
  };
  // TODO: очищаем fruitsList от вложенных элементов,
  // чтобы заполнить актуальными данными из fruits
  //for (let i = 0; i < fruits.length; i++) {
     // let fruitStart = documnt.createElement('li');
      //fruitStart.className = "fruit__item";
      //fruitsList.appendChild(fruitStart);

      


    // TODO: формируем новый элемент <li> при помощи document.createElement,
    // и добавляем в конец списка fruitsList при помощи document.appendChild

// первая отрисовка карточек
display();

/*** ПЕРЕМЕШИВАНИЕ ***/

// генерация случайного числа в заданном диапазоне
const getRandomInt = (min,max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(getRandomInt);
// перемешивание массива
const shuffleFruits = () => {
  let result = [];

  // ATTENTION: сейчас при клике вы запустите бесконечный цикл и браузер зависнет
  while (fruits.length > 0) {
    var randomInt = getRandomInt(0,Object.keys(fruits).length);
    var item = fruits.splice(randomInt,1);
    result.push(item);
  };

    // TODO: допишите функцию перемешивания массива
    // Подсказка: находим случайный элемент из fruits, используя getRandomInt
    // вырезаем его из fruits и вставляем в result.
    // ex.: [1, 2, 3], [] => [1, 3], [2] => [3], [2, 1] => [], [2, 1, 3]
    // (массив fruits будет уменьшатся, а result заполняться
  fruits = result;
};

shuffleButton.addEventListener('click', () => {
  document.querySelectorAll('.fruit__item').forEach(e => e.remove());
  shuffleFruits();
  display();
});

/*** ФИЛЬТРАЦИЯ ***/

// фильтрация массива
const filterFruits = () => {
  fruits.filter((item) => {

    // TODO: допишите функцию
  });
};

filterButton.addEventListener('click', () => {
  filterFruits();
  display();
});

/*** СОРТИРОВКА ***/

let sortKind = 'bubbleSort'; // инициализация состояния вида сортировки
let sortTime = '-'; // инициализация состояния времени сортировки

const comparationColor = (a, b) => {
  // TODO: допишите функцию сравнения двух элементов по цвету
};

const sortAPI = {
  bubbleSort(arr, comparation) {
    // TODO: допишите функцию сортировки пузырьком
  },

  quickSort(arr, comparation) {
    // TODO: допишите функцию быстрой сортировки
  },

  // выполняет сортировку и производит замер времени
  startSort(sort, arr, comparation) {
    const start = new Date().getTime();
    sort(arr, comparation);
    const end = new Date().getTime();
    sortTime = `${end - start} ms`;
  },
};

// инициализация полей
sortKindLabel.textContent = sortKind;
sortTimeLabel.textContent = sortTime;

sortChangeButton.addEventListener('click', () => {
  // TODO: переключать значение sortKind между 'bubbleSort' / 'quickSort'
});

sortActionButton.addEventListener('click', () => {
  // TODO: вывести в sortTimeLabel значение 'sorting...'
  const sort = sortAPI[sortKind];
  sortAPI.startSort(sort, fruits, comparationColor);
  display();
  // TODO: вывести в sortTimeLabel значение sortTime
});

/*** ДОБАВИТЬ ФРУКТ ***/


function newParametrs(text) {
  let newPar1 = document.createElement('div');
  const text1 = document.createTextNode(text);
  newPar1.appendChild(text1);
  return newPar1;
};

addActionButton.addEventListener('click', () => {
  let newFruit = document.createElement('li');
  newFruit.className = "fruit__item fruit_default";
  let infoDiv = document.createElement('div');
  infoDiv.className = "fruit__info";
  infoDiv.appendChild(newParametrs(`index: 5`)); 
  infoDiv.appendChild(newParametrs(`kind: ${kindInput.value}`));
  infoDiv.appendChild(newParametrs(`color: ${colorInput.value}`)); 
  infoDiv.appendChild(newParametrs(`weight (кг): ${weightInput.value}`)); 
  newFruit.appendChild(infoDiv);
  let checkIt = [kindInput.value, colorInput.value, weightInput.value];
  let count = checkIt.length;
    for (let i = 0; i < count; i++) {
      if (checkIt[i] === "") {
        count--;
      };
    };
    if (count === checkIt.length) {
      document.querySelector('.fruits__list').appendChild(newFruit);
    } else {
      alert("Заполните все поля!");
    };
});

