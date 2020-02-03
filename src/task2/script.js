//function getMaxNumber(){ 
//    let Number = arguments[0];
//    if(arguments.length == 3 || arguments.length == 4){
//        for(let i = 1; i < arguments.length; i++){
//            if(arguments[i] > Number) Number = arguments[i]
//        }
//        console.log(Number);
//    }else
//    return;
//}
//
//getMaxNumber(1,2,3);

//function progresion(n, q){
//    let first = 1;
//    let sum = 0;
//    for(let i = 1; i < n; i++){
//        first *= q;
//        sum += first;
//    }
//    return sum;
//}
//
//console.log(progresion(4,5));


function progresion2(n, q){
    let first = 1;
    return first * (1 - (q ** n)) / (1 - q);
}

console.log(progresion2(4,5))