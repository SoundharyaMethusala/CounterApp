let counter=document.querySelector('#counter');
let counterinput=document.querySelector('#counterinput');
let incbtn=document.querySelector('#plus');
let decbtn=document.querySelector('#minus');

let count=0;
let incdecby=1;

counterinput.addEventListener('change',function(e){
    let value=parseInt(counterinput.value);
    if(value){
        incdecby=value;
    }
    else{
        counterinput.value='';
        alert('Please enter a valid number');
        incdecby=1;
    }
});

incbtn.addEventListener('click',function(e){
    count+=incdecby;
    counter.innerText=count;
});

decbtn.addEventListener('click',function(e){
    if(count-incdecby<0){
        count=0;
    }
    else{
        count-=incdecby;
    }
    counter.innerText=count;
})