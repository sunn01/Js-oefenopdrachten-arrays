/*opdracht 1
let array1 = [4, 5, 8, 12, -1, 99];
console.log(array1);

//opdracht 2
let array2 = [0.33, 4.8, 11.1, 34.5, 129.1, -2.56, -17.4];
console.log(array2);

//opdracht 3
let array3 = ['rood', 'groen', 'geel', 'blauw', 'roze']
console.log(array3);

//opdracht 4
array1[3] = 21;
console.log(array1);

//opdracht 5
array2[0] = 3.3;
array2[6] = -1.74;
console.log(array2);

//opdracht 6
array3[3] = 'paars';
console.log(array3);

//opdracht 7
array3.push('zwart');
console.log(array3);

//opdracht 8 
array1.unshift(0);
console.log(array1);

//opdracht 9
array2.shift();
array2.pop();
console.log(array2);

//opdracht 10
let film = prompt('Vul een naam van een film in');
const ul = document.querySelector('.list');
ul.innerHTML += '<li>' + film + '</li>';

film = prompt('Vul een naam van een film in');
ul.innerHTML += '<li>' + film + '</li>';

film = prompt('Vul een naam van een film in');
ul.innerHTML += '<li>' + film + '</li>';

film = prompt('Vul een naam van een film in');
ul.innerHTML += '<li>' + film + '</li>';

console.log(film);*/

//opdracht 11 
array4 = ['Michael Jackson', 'Justin Bieber', 'Taylor Swift', 'Frenna', 'Lil Baby']
const btn = document.querySelector('.btn');
const div = document.querySelector('.function');

btn.addEventListener('click', function() {
    div.innerHTML = array4
});