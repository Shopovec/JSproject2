let num = 55;
let arrName = ['Galya', 'Tanya', 'Marina', 'Anna', 'Sonia'];
let strName = 'Galya  Hello  Tanya Hello Marina Hello Anna Sonia';
let str = `   Число`;
let str1 = ``;

let alfaBet = '0123';//ABCDEFGHIJKLMNOPQRSTUVWXYZАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя';

let strPromp = prompt('Enter your name');

let arrRes = strPromp.split(' ');

console.log(arrName);

for (let i = 0; i < alfaBet.length;i++){
 // document.write(`Code   =>    ${alfaBet.charCodeAt(i)}  <br>`);
  //  debugger
}


/*let need = /  /g;

let serchStr = '-';

let res = strName.replace(need, serchStr);*/

//document.write(strName.charAt(7));
//let toUp  = strName.toUpperCase();
//let res = strName.substr(5, 10);
//let res = str.localeCompare(str1);

//let res = strName.concat(str);
//let res = str.trim();

//document.write(strName + '<br>');



for (let i = 0; i<str.length; i++){
    //document.write(`<h2>Имя -  ${elem} </h2><br>`);
    //document.write(str[i]);
}

// document.write(str.length);