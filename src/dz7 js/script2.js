let ask = +prompt("Введи ім'я");
if(ask === 1){
    let ask1 = prompt("Введи пароль");
    if(ask1 == "ЛОГОС"){
        alert("Ласкаво просимо");
    }else if(ask1 == null){
        alert("Вхід скасований");
    }else{
        alert("Пароль невірний");
    }
}else if(ask == null){
    alert("Вхід скасований");
}else{
    alert("Я вас не знаю");
}
1

