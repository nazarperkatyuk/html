//function sum(arr){
//    let res = arr.reduce((previousValue, currentValue) => (previousValue + currentValue));
//    console.log(res);
//}
//console.log(sum([2,3,5,10]));


//function addArrAfterPos(arr, arrToPaste, position){
//    for(let i = 0; i < arrToPaste.length; i++){
//         arr.splice(position+i,0,arrToPaste[i]);
//    }
//console.log(arr);
//}
//addArrAfterPos([2, 3, 4, 5, 10, 11, 12, 13], [6, 7, 8, 9], 4);

function getPosOfArr(arr, num){
    let position = arr.indexOf(num);
    if(position == -1)
        console.log('Немає такого елементу');
    else
        console.log(position);
}
    getPosOfArr([3, 92, 2, 8, 4, 1], 5);