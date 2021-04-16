
// var numRes = confirm('Подтверди');
//
// alert(numRes);
// (function() {
//     var name = 'Petr';
//     alert(name);
// }());


function increase(arr , num2) {

    let res = [];

    for (let i = 0; i < arr.length; i++){
        res.push(arr[i] + num2);
    }

   // let wRes =  window.numRes;
   //  // if (num2 === undefined) num2 = 0;
   //  //
   //  // num2 = num2 === undefined ? 0 : num2;
   //  let numRes = 50;
   //
   //  let res = num + num2 + numRes + wRes + myName();

    //window.location.href = 'https://www.google.com/';
    return res;

}


function myName(){
    return 'Denis';
}

let arr = [10,20,15,5,30,60,70];
let num  = increase(arr, 50);
//
document.write(num);