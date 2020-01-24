let num = +prompt("Введи число");
if(num < 1 || num > 12){
    alert("False");
}else{
    if(num == 12 || num == 1 || num == 2)
    {
        alert("Зима");
    }else if(num == 12 || num == 1 || num == 2)
    {
        alert("Весна");
    }else if(num == 12 || num == 1 || num == 2)
    {
        alert("Літо");
    }else if(num >= 9 && num <= 11){
        alert("Осінь");
    }
}