let elementById= x=>document.getElementById(x);
let form=document.forms[0]

elementById('F_name').addEventListener('input',fillFields);
elementById('S_name').addEventListener('input',fillFields);
elementById('E_address').addEventListener('input',fillFields);
elementById('b_woman').addEventListener('change',fillFields);
elementById('b_man').addEventListener('change',fillFields);
elementById('position').addEventListener('change',fillFields)

elementById('check').addEventListener('change',fillFields);
elementById('btn').addEventListener('click',function(){
    form.reset();
   console.log(user)
})
let user={};


function fillFields(e){
    if(this.id==='F_name'){
        user.fname=this.value;
    }
    else if(this.id==='S_name'){
                user.sname=this.value;
    }
    else if(this.id==='E_address'){
        user.email=this.value;

    }
    else if(this.id==='b_man'){
       user.gender=this.value
    }
     else if(this.id==='b_woman'){
         user.gender=this.value
    }
      else if(this.id==='position'){
        user.position=this.options[this.selectedIndex].value;
    }
    else {
        const isValid=form.checkValidity();
    if(isValid){
        elementById('btn').disabled=false;
    }
        else{
            elementById('btn').disabled=true;
        }
    }
    }

 elementById('btn').addEventListener('click',function(){
    const wrapper= elementById('info_wrapper');
     
     elementById('tytle').innerText=user.fname+ ' ' + user.sname;
     elementById('email').innerText=user.email;
     elementById('position_text').innerText=user.position;
     
        
     if(user.gender==='woman'){
         elementById('woman').style.display='inline'
     }
     else if(user.gender==='man'){
         elementById('man').style.display='inline'
     }
    
     elementById('main').style.display='none';
    elementById('main2').style.display='block'
 })


elementById('btn2').addEventListener('click',function(){
    elementById('main').style.display='block';
    elementById('main2').style.display='none'
    elementById('btn').disabled=true;
})