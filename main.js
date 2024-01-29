const names = ['Bob', 'Klar', 'Petya', 'Ilya', 'Viktoriya'];

let ulElement = document.getElementById('list');

names.forEach(item=>{
    liElem = document.createElement('li');
    liElem.innerHTML = item;
    ulElement.append(liElem);
})
Задание #1

Создайте 2 объекта john и ann с полями name, age, pet и заполните их именем, возрастом и именем питомца соответственно.

    Создайте функцию, которая в параметры принимает объект человека (john или ann), и в качестве результата выводит информацию о нем в консоль:

    “Меня зовут {name}, мне {age}, у меня есть питомец {pet}”

Создайте функцию incrementAge(), которая в параметры принимает объект человека и увеличивает ему возраст на 1.

Выведите циклом все названия свойств и их значения, которые есть у объекта john.

    Задание #2

Создайте функцию, которая на вход принимает массив, а на выходе возвращает сумму его элементов:

    function sum(array) {
        // Ваш код здесь...
    }

const arr = [1, 50, 20, 75, 90];

sum(arr); // 236
Задание #3

Создайте пустой массив names.
    Добавьте в него 5 любых имен.
    Выведите массив в консоль.
    Уберите из начала и конца массива по 1 элементу.
    Снова выведите массив в консоль.
    Задание #4

Дан массив names. Необходимо сделать функцию, которая на основе этого массива генерирует строку c HTML. Она представляет из себя список элементов (<ul>), где каждый элемент списка (<li>) содержит элемент массива.

    const names = ['Bob', 'Klar', 'Petya', 'Ilya', 'Viktoriya'];
    Задание #5

    Дан объект:

    const obj = {
        age: 22,
        favColor: 'red',
        height: 188,
        pet: 'dog',
        money: 12300
    };
    Необходимо выполнить деструктуризацию объекта (для всех полей). Выведите полученные переменные в консоль.

    Задание #6

    Даны объекты:

    const obj = {
        age: 22,
        favColor: 'red',
        height: 188,
        pet: 'dog',
        money: 12300
    };

    const updateObj = {
        age: 23,
        favColor: 'blue',
        money: 11450
    };

    const obj2 = {/* ... */};
    console.log(obj2);
    /**
    * {
        *	age: 23,
        *	favColor: 'blue',
        *	height: 188,
        *	pet: 'dog',
        *	money: 11450
        * }
    */
    Необходимо создать новый объект obj2, в котором будут все поля объекта obj, но с обновленными значениями полей как у объекта updateObj.

    Задание
    Дмитрий Комаров
    Статус: Черновик

    Ответ на задание #1 - * обязательное поле
    const personJohn = {     name: 'John',     age: 33,     pet: 'Soplia',     getInfo: function () {         console.log(`Меня зовут ${personJohn.name}, мне ${personJohn.age}, у меня есть питомец ${personJohn.pet}`);     }, } console.log(Object.entries(personJohn))  for (let key in  personJohn) {     if( personJohn.hasOwnProperty(key)){         console.log(`${key} : ${ personJohn[key]}`)     } }  const personAnn = {     name: 'Ann',     age: 23,     pet: 'Busia',     getInfo: function () {         console.log(`Меня зовут ${personAnn.name}, мне ${personAnn.age}, у меня есть питомец ${personAnn.pet}`);     }, } personAnn.getInfo();  function incrementAge() {     personAnn.age += 1;     console.log(personAnn) } incrementAge()
    Ответ на задание #2 - * обязательное поле
    function sum(array) {     // Ваш код здесь...     let sum = 0;     for (let i = 0; i < array.length; i++) {         sum += array[i];         console.log(sum);     } }  const arr = [1, 50, 20, 75, 90];  sum(arr);
        Ответ на задание #3 - * обязательное поле
        let names = [];
        names.push('John')
        console.log(names)
        names.push('Jnn')
        names.push('Ann')
        names.push('Jorge')
        names.push('Julian')
        console.log(names)
        names.pop(4);
        names.shift(0);
        console.log(names)
        Ответ на задание #4 - * обязательное поле
        const names = ['Bob', 'Klar', 'Petya', 'Ilya', 'Viktoriya'];
        let ulElement = document.getElementById('list');
        names.forEach(item=>{     liElem = document.createElement('li');
            liElem.innerHTML = item;
            ulElement.append(liElem); })
        Ответ на задание #5 - * обязательное поле
        const objectPerson = {
            age: 22,
        favColor: 'red',
        height: 188,
        pet: 'dog',
        money: 12300 };
        const ageObj = objectPerson.age;
        console.log(ageObj)
        const favColorObj = objectPerson.favColor;
        console.log(favColorObj)
        const heightObj = objectPerson.height;
        console.log(heightObj)
        const petObj = objectPerson.pet;
        console.log(petObj)
        const moneyObj = objectPerson.money;
        console.log(moneyObj)
        Ответ на задание #6 - * обязательное поле
