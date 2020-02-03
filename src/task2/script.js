window.onload = function(){
    
    
    let inp1 = prompt('Введіть колір фону сторінки');
    let inp2 = prompt('Введіть тип шрифта на сторінці');
    let inp3 = prompt('Введіть вирівнювання для заголовка');
    let inp4 = prompt('Введіть фон для параграфа з силками');
    let link = [];
    link[0] = prompt('Введіть перше посилання');
    link[1] = prompt('Введіть друге посилання');
    link[2] = prompt('Введіть третє посилання');
    let colors = [];
    colors[0] = prompt('Введіть колір тексту для 1 посилання');
    colors[1] = prompt('Введіть колір тексту для 2 посилання');
    colors[2] = prompt('Введіть колір тексту для 3 посилання');
    
    
    let body = document.body;
    body.style.backgroundColor = inp1;
    body.style.fontFamily = inp2;
    let h1 = body.children[0];
    h1.style.textAlign = inp3
    
    let div = body.children[1];
    div.style.backgroundColor = inp4;
    
    for(let i = 0; i < 3; i++){
        div.children[i].innerHTML = link[i]; 
        div.children[i] = div.children[i].style.color = colors[i];
        div.children[i].setAttribute('href', link[i]);
    }
    
 