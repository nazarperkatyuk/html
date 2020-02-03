let tries =4;
let success = false;
do{
    let a = prompt(" Ведіть пароль");
    if(a != 'password'){
        alert("залишилось " +  tries  +  " спроби");
        tries-=1;
    }else{
        success = true;
        alert("Запрошуємо на сайт");
    }
}while(tries>=0 && success==false)
    if(tries== -1)
        alert("будь ласка спробуйте пізніше");