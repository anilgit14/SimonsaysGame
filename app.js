
let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let h2=document.querySelector("h2");

let btns=["red","yellow","green","purple"];
document.addEventListener("keypress",function(){
    if(started==false)
    {
        console.log("game started");
        started=true;
        levelUp();
    }
    // levelUp();
   
});

function gameFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")},250
    );
    
   
}
function userFlash(btn)
{
    btn.classList.add("user");
    setTimeout(function(){
        btn.classList.remove("user")},250
    );
    
   
}

function levelUp()
{
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*4);
    // console.log(randIdx);
    let randColor=btns[randIdx];
    gameSeq.push(randColor);
    console.log(gameSeq);
    let randBtn=document.querySelector(`.${randColor}`);
    gameFlash(randBtn);
}
function checkAns(idx)
{
    if(userSeq[idx]===gameSeq[idx])
    {
        if(userSeq.length==gameSeq.length)
        {
           setTimeout(levelUp(),1000);
        }
    }else{
        h2.innerHTML=`game over! Your score was <b>${level}<b> <br>press any key to start again`;
        reset();
    }
}
function btnPressed()
{
    let btn=this;
    userFlash(btn);
    let usercolor=btn.getAttribute("id");
    userSeq.push(usercolor);
        // console.log(userSeq);

    checkAns(userSeq.length-1);
  
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns)
{
    btn.addEventListener("click",btnPressed);
}

function reset()
{
     gameSeq=[];
     userSeq=[];
     started=false;
     level=0;
}
