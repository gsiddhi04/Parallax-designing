let moon = document.getElementById("moon");
let train = document.getElementById("train");
let text = document.getElementById("text");

let desert_moon = document.getElementById("desert-moon");
let man = document.getElementById("man");

window.addEventListener("scroll",()=>{
    let value = window.scrollY;
    moon.style.top = value * .8 + 'px';
    text.style.top = 85 + value * -0.2 + '%';
    train.style.left = value * .9 + 'px';

    desert_moon.style.top = value * .3 + 'px';
    man.style.left = value * .4 + 'px';
});


//Progress Bar

let calcScrollValue = ()=>{
    let scrollProgress = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;

    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos*100)/calcHeight);

    if(pos > 100){
        scrollProgress.style.display="grid";
    }else{
        scrollProgress.style.display="none";
    }

    scrollProgress.addEventListener("click",()=>{
        document.documentElement.scrollTop=0;
    });

    scrollProgress.style.background = `conic-gradient(#194eb9 ${scrollValue}%, #67ccff ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
    