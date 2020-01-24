let a = 0;
let res = 0;
switch (a) {
    case 0:
        let ask0 = +prompt("скільки тобі років ");
        if (ask0 === 22){
            res++;
        }
    case 1:
        let ask1 = +prompt("де ти вчишся ");
        if (ask1 === 'Політех'){
            res++;
        }
    case 2:
        let ask2 = +prompt("навчаєшся на курсах ");
        if (ask2 === "Так"){
            res++;
        }
    case 3:
        let ask3 = +prompt("Де саме");
        if (ask3 === "Логос"){
            res++;
        }
    case 4:
        let ask4 = +prompt("майбутня професія ");
        if (ask4 === "Програміст"){
            res++;
        }
    case 5:
        let ask5 = +prompt("2+2");
        if (ask5 === 4){
            res++;
        }
    case 6:
        let ask6 = +prompt("4*3");
        if (ask6 === 12){
            res++;
        }
    case 7:
        let ask7 = +prompt("8+8");
        if (ask7 === 16){
            res++;
        }
    case 8:
        let ask8 = +prompt("20/2");
        if (ask8 === 10){
            res++;
        }
    case 9:
        let ask9 = +prompt("2*7+5");
        if (ask9 === 19){
            res++;
        }
}
alert(res);