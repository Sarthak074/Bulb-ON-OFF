const bulb = document.querySelector("#bulb");
const on = document.querySelector("#on");

var flag=0;

on.addEventListener("click",function()
{
    if(flag===0)
    {
        bulb.style.backgroundColor='yellow';
        on.innerHTML="OFF";
        flag=1;
    }
    else{
        bulb.style.backgroundColor='white';
        on.innerHTML="ON";
        flag=0;
    }
})

