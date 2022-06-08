let span=document.querySelector('span');
let ul=document.querySelector('ul');
span.addEventListener('click',()=>{
    if(ul.style.display=="none"){
        ul.style.display="block";
        span.innerHTML="&#10005";
        span.style.color="white";
    }
    else{
        ul.style.display="none";
        span.innerHTML="&#9776";
    }
})