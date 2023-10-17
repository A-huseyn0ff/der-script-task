//task1-Istenilen sayda  gelen datalarin Ortalamasini veren Js function yazin.Call back istifade edeceksiz.

// function ortalama(...elements) {
//     const arr=elements
//     let sum=arr.reduce((sum,elements)=>sum+elements,0)
//     return sum/arr.length
// }
// function son(callback,...elements) {
//     return callback(...elements)
// }
// console.log(son(ortalama,10,2,5,4,7,8,6,22));

//---------------------------------------------------------------------------------------------------------

//task2-Istenilen sayda gelen datalarin cut olanlarinin toplamini tapan Js function yazin.Call back istifade edeceksiz.

// function ortalama(...elements) {
//     const arr=elements
//     let sum=0
//     arr.forEach((elements)=>{
//         if (elements%2==0) {
//         sum+=elements
//         }
//     })
//     return sum
      
// }
// function son(callback,...elements) {
//     return callback(...elements)
// }
// console.log(son(ortalama,10,2,1,4,8,3,6));

//---------------------------------------------------------------------------------------------------------

//task3-Istenilen sayda gelen datalarin tek olanlarinin toplamini tapan Js function yazin.Call back istifade edeceksiz.

// function ortalama(...elements) {
//     const arr=elements
//     let sum=0
//     arr.forEach((elements)=>{
//         if (elements%2!==0) {
//         sum+=elements
//         }
//     })
//     return sum
      
// }
// function son(callback,...elements) {
//     return callback(...elements)
// }
// console.log(son(ortalama,10,2,1,4,8,3,6));

//---------------------------------------------------------------------------------------------------------

//task4-Istenilen sayda gelen datalarin cut olanlarin toplamini tek olanlarinin toplamina olan hasilini tapan Js function yazin.Call back istifade edeceksiz.

// function ortalama(...elements) {
//     const arr=elements
//     let sumtek=0
//     let sumcut=0
//     arr.forEach((elements)=>{
//         if (elements%2!==0) {
//         sumtek+=elements
//         }
//         else{
//             sumcut+=elements
//         }
//     })
//     return sumcut*sumtek
      
// }
// function son(callback,...elements) {
//     return callback(...elements)
// }
// console.log(son(ortalama,10,2,1,4,8,3,6));

//---------------------------------------------------------------------------------------------------------
// let sentence='Salam millet necesiz'
// const arr=sentence.split(' ')
// let word=''
// for (let i = 0; i < arr.length; i++) {
    
// for (let j = arr[i].length-1; j >=0 ; j--) {
//   word+=arr[i][j];

// }
// word+=' ';

// }
// console.log(word);
//------------------------------------------------------------------------------------------------------
// function reverse(a) {

//     const arr=a.split(' ');
//     let word='';
//     for (let i = 0; i < arr.length; i++) {
    
//         for (let j = arr[i].length-1; j >=0 ; j--) {
//           word+=arr[i][j];
        
//         }
//         word+=' ';
        
//         }
//         console.log(word);
// }

// reverse('Axmed Mohsin gaydi');

//arr=[1,3,6,7,10]
//------------------------------------------------------------------------------

// const arr=[1,3,6,7,10,11,23]
// const newarr=[]
// let max = arr[0]
// for (let i = 0; i < arr.length; i++) {
// if (arr[i] > max) {
//      max = arr[i]; 
// } 
// }
// for (let num =1;num <= max;num++) {
//    newarr.push(num)
// }
// console.log(newarr);
    

    
//task26

// const arr=[1,3,3,5,4,5,6,7];
// arr.forEach((x,i)=>x%2!==0 ? console.log(i):0)
//task27
// const arr=[1,3,3,5,4,5,6,7];
// arr.forEach((x,i)=>x%2==0 ? console.log(i):0)
//task28
// const arr=[1,3,3,5,4,5,6,7];
// arr.forEach((x,i)=>x%2!==0 ? console.log(x):0)
//task29
// const arr=[1,3,3,5,12,5,26,7];
// arr.forEach((x,i)=>x%2==0 ? console.log(x):0)
//task30
// const arr=[1,3,3,5,12,5,26,7,32];
// let max=0
// arr.forEach((x,i)=>arr[i]>max ? max=arr[i]:0)
// console.log(max);
//task31
// const arr=[1,3,3,5,12,5,26,7];
// console.log(Math.min(...arr));
//task32
// const arr=[1,3,3,5,12,5,26,7];
//  console.log(Math.max(...arr.filter(a=>a%2==0)));
//task33
// const arr=[1,3,3,5,12,5,26,7];
//  console.log(Math.min(...arr.filter(a=>a%2==0)));
//task34
// const arr=[1,3,3,5,12,5,26,7];
//  console.log(Math.max(...arr.filter(a=>a%2!==0)));
//task35
// const arr=[1,3,3,5,12,5,26,7];
//  console.log(Math.min(...arr.filter(a=>a%2!==0)));
//task36
// const arr=[2,3,3,5,4,5,6,7];
// console.log(arr.indexOf(Math.min(...arr)))


//task37
// const arr=[1,3,3,5,4,5,6,15];
// console.log(arr.indexOf(Math.max(...arr)))

//task38