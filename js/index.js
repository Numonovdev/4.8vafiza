//  Asosiy metodlarga oid misollar
//  1-masala

// let sonlar = [1, 2,3, 4, 5, 6, 7];

// function lengthArr(sonlar){
//     return sonlar.length;
// }
// console.log(lengthArr(sonlar));

// 2-masalA

//   let sonlar = [1, 2, 3, 4, 5, 6, 7];
//    function tostringAr(sonlar){
//     let res = arr.toString();

//     return res;
//    }
//    console.log(tostringAr(sonlar));

// 3-MASALA

// let arr = [1, 2, 3, 4, 5, 6, 7];
// function tojoinAr(arr){
//     let res = arr.join(",")
//     return res;
// }
// console.log(tojoinAr(arr));

// 4-masala

// let arr = [1, 2, 3, 4, 5, 6, 7];

// function yangiElement(arr, element){
//     arr.push(element);
//     return arr;
// }
// console.log(yangiElement(arr, 0));

// 5-masalA

// let arr = [1, 2, 3, 4, 5, 6, 7];

//  function deleteLasElement(arr){
//     arr.pop();
//     return arr;
//  }
//  console.log(deleteLasElement(arr));

// 6-masala

// let arr = [1, 2, 3, 4, 5, 6, 7];

// function deletefistElement(arr, element){
//         arr.shift(element);
//         return arr;
//     }
//     console.log(deletefistElement(arr));

// 7masala

// let arr = [1, 2, 3, 4, 5, 6, 7];
// function unshiftElement(arr, element){
//              arr.unshift(element);
//              return arr;
//          }
//          console.log(unshiftElement(arr,0));

// 8-masala

// let arr1 = [1, 2, 3, 4, 5, 6, 7];
// let arr2 = [1, 2, 3, 4, 5, 6, 7];
// function addTwoElement(arr1, arr2){
//     let res = arr1.concat(arr2);
//     return res;
// }
// console.log(addTwoElement(arr1,arr2));

// 9-masala

// let arr = [1, 2, 3, 4, 5, 6, 7];

// function spliceAr(arr){
//     arr.splice(1, 2, 123);
//     return arr;
// }
// console.log(spliceAr(arr));

// 10-masaka

// let arr = [1, 2, 3, 4, 5, 6, 7];

//  function sliceAr(arr){
//      let res =   arr.slice(1, 3);
//         return res;
//     }
//     console.log(sliceAr(arr));

// 11-masala

// let arr = [ "damas", " gentra ", "captiva", "nexia"]

// function lengthArr(arr){
//     return arr.length;
// }
// console.log(lengthArr(arr));

// 12-masala

//   let arr = [ 1, 2, 3, 4, 5, 6, 7];
//    function tostringAr(arr){
//     let res = arr.toString();

//     return res;
//    }
//    console.log(tostringAr(arr));

// 13-masala

// let arr = [1, 2, 3, 4, 5, 6, 7];
// function tojoinAr(arr){
//     let res = arr.join(" ")
//     return res;
// }
// console.log(tojoinAr(arr));

// 14-masala

//     let arr = [1, 2, 3, 4, 5, 6, 7];
//     function addtwoElement(arr, element, element1){
//         arr.push(element,element1);
//         return arr;
//     }
// console.log(addtwoElement(arr, 1,2));

//   15-asala

// let arr = [1, 2, 3, 4, 5, 6, 7];

//  function deletetwoElement(arr){
//   arr.pop();
//   arr.pop();
//     return arr;
//  }
//  console.log(deletetwoElement(arr));

// 16-masala

// let arr = [1, 2, 3, 4, 5, 6, 7];

// function delete0Element(arr, element, element1){
//         arr.shift(element);
//         arr.shift(element1);
//         return arr;
//     }
//     console.log(delete0Element(arr));

// 17-masala

//  let arr = [1, 2, 3, 4, 5, 6, 7];

//  function unshiftElement(arr, element, element1){
//              arr.unshift(element);
//              arr.unshift(element1);
//              return arr;
//          }
//          console.log(unshiftElement(arr, 0, 1111));

// 18-masala

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let arr1 =[12, 24, 34, 48, 56, 67, 79];
// let arr2 =[10, 20, 30, 40, 50, 60, 70];


// function plusthreeElement(arr, arr1, arr2){

//    let res= arr.concat(arr1, arr2);
//      return res;
// }
// console.log(plusthreeElement(arr,arr2,arr1));

// 19-masaka

// let arr = [1, 2, 3, 4, 5, 6, 7];
// function deleteElement(arr){
//     arr.splice(0, 1);
//     return arr;
// }
// console.log(deleteElement(arr));

// 20-masala

// let arr = [1, 2, 3, 4, 5, 6, 7];

//  function sliceAr(arr){
//      let res =   arr.slice(0, arr.length - 1);
//         return res;
//     }
//     console.log(sliceAr(arr));

// Search metodlariga oid masalalar,

// 1-masala

// let arr = [1, 2, 3, 4, 5, 6, 7];
// function findElement(arr){
//    let result= arr.includes(0);
//     return result ;
// }
// console.log(findElement(arr));

// 2-masala

// let arr = [1, 2, 3, 4, 5, 6, 7];


// function fimdIndexElement(arr){
// let result=arr.indexOf(1);
// return result;
// }console.log(fimdIndexElement(arr));

// 3-masala

// let arr = [1, 2, 3, 4, 5, 6, 7];

// function fimdIndexElement(arr){
// let result=arr.lastIndexOf(1);
// return result;
// }console.log(fimdIndexElement(arr));

// 4-maasala

// let arr = [2, 5, 34, 9, 45, 12];

// function findElEMENT(arr){
// let result = arr.find(function(value, index){
//     return   value > 2 && value % 2 === 0
// })}
// console.log(findElEMENT(arr));

// 5-masala

// let arr = [2, 5, 34, 8, 45, 12];

// function arrFindindex(arr){
//  let res =   arr.findIndex(function(value,index){
//      return   value > 0

//     })
//     return res;
// }
// console.log(arrFindindex(arr));

