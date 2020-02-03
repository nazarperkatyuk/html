//function getParams(){
//    console.log(arguments.length)
//}
//getParams();


//function getMinNumber(){
//    if(arguments.length < 2){
//        console.error("Must be at least 2 numbers");
//        return;
//    }
//    let Number = arguments[0];
//    for(let i = 0; i < arguments.length; i++){
//        if(arguments[i] < Number)
//            Number = arguments[i]
//    }
//    console.log(Number);
//}
//
//getMinNumber(3);


//function getMaxNumber(){
//    if(arguments.length < 2){
//        console.error("Must be at least 2 numbers");
//        return;
//    }
//    let Number = arguments[0];
//    for(let i = 0; i < arguments.length; i++){
//        if(arguments[i] > Number)
//            Number = arguments[i]
//    }
//    console.log(Number);
//}
//
//getMaxNumber(3,6,0);


function luckyTicket(){
    if(arguments.length % 2 == 0){
        let sum1 = 0, sum2 = 0;
        for(let i = 0; i < arguments.length; i++){
            if(i < (arguments.length/2))
                sum1 += arguments[i];
            else
                sum2 += arguments[i];
        }
        if (sum1 == sum2)
            return true;
        else
            return false;
    }else{
        console.eror("Неправильна кількісь параметрів");
        return;
    }
}
console.log(luckyTicket(0,3,3,7,1,1,2));