let a=document.getElementById("container");
let b=document.getElementById("incont1");
let c=document.getElementById("incont2");
let d=document.getElementById("menu");
function hide()
{
    if(d.style.display != 'none')
    {
        d.style.display='none';
        c.style.height='0rem';
        a.style.height='5rem';
        // document.getElementById("button").innerHTML="SHOW   ";
    }
    else
    {
        d.style.display='flex';
        a.style.height='20rem';
        c.style.height='80%';
        // document.getElementById("button").innerHTML="HIDE";
        
    }
    
}