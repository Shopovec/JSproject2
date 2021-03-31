let arr = ['Vasya', 'Petr', 'Vlad', 'Djon', 'Fed', 'Dima','Roma', 'Gena'];

let arrName = ['Galya', 'Tanya', 'Marina', 'Anna', 'Sonia'];
let arr1 = [20,30,25,5,40,110,550,78,7];

//let strUser = prompt('text');
let arr21 = arr1.flatMap(function (element,key) {
    return key;
});

//let arrUser = strUser.split(',');

//arr1.fill(38,0,5);
let strUser2 = arr.join(' - ');

//arr1.reverse();

let res = arr1.every(function (elem) {
    return elem > 20;
} );

let res1 = Array.from('name', function (elem) {
    return elem + '-value  ';
});

console.log(arr21);
// arr.push(20,30);
// arr.pop();
//let arrRes = arr.includes('Djon',4);

//document.write(strUser2);
// for (let i=0; i <Math.floor(arr.length/2); i++){
//     document.write(arr[i]+'<br>');
//
// }


// arr.pop();

//console.log(res);


// for (let i = 0; i < arrName.length; i++) {
//     arr.push(arrName[i]);
// }
//
// for (let i = 0; i < arr.length; i++) {
//     document.write(arr[i] + '<br>');
// }

//arr.push('Alex');
// arr.unshift('Alex');

// console.log(arr);

// let arr2 = [
//     [5, 10, 25],
//     [60, 50, 15],
//     [23, 12, 54],
//     [24, 15, 54]
// ];
//
// for (let i = arr2.length-1; i >=0; i--) {
//     for (let j = arr2[i].length-1; j >=0; j--) {
//         document.write(arr2[i][j] + '<br>');
//     }
// }
//
// console.log(arr2[1][1]);
// arrAssoc['name'] = 'Vasya';
//
// document.write(arrAssoc['name']);
// console.log(arrAssoc);

// for (let i = 0; i < arr.length; i++){
//     // if (i == 2){
//     //     arr[i] = 'Taras';
//     // }
//     document.write(arr[i] + `<br>`);
// }

// for (let i = arr.length-1; i >= 0; i--) {
//     // console.log([i, arr.length]);
//     // debugger
//     document.write(arr[i] + '<br>');
// }


//console.log(arr.length);
