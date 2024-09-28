let boxes=document.querySelectorAll(".box");
let msg=document.querySelector(".msg");
let winnermsg=document.querySelector("#winnermsg");
let newg = document.querySelector("#newgame");
let restt=document.querySelector(".restart");
let player="true";
let check=true;


boxes.forEach((box)=>
{
    box.addEventListener("click",()=>
    {
        if(player)
        {
            player=false;
            box.innerText="O";
            box.style.color="black";
            box.style.fontSize="30px";
            box.disable="true";
            
        }
        else
        {
            player=true;
            box.innerText="X";
            box.style.color="red";
            box.style.fontSize="30px";
        }
        box.disabled="true";
        Winnercheck();
        if(check){
        drawcheck();
        }
    })
    
})
const dis =()=>
{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}

const ena =()=>
{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}

const rest =()=>
{
   
   ena();
   player="true";
   check=true;
    msg.classList.add("hide");
}

const newgame =()=>
{
    ena();
    player="true";
    check=true;
    msg.classList.add("hide");
}

let winner=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

const Winnercheck =()=>
{
    for(let p of winner)
    {
       
        let p1=boxes[p[0]].innerText;
        let p2=boxes[p[1]].innerText;
        let p3=boxes[p[2]].innerText;

        if(p1!="" && p2!="" && p3!="")
        {
            if(p1===p2 && p2===p3)
            {
                boxes.disabled="true";
                msg.classList.remove("hide");
                winnermsg.innerText=`Congratulation Winner is ${p1}`;
                dis();
                check=false;
            }
        }
    }
}

const drawcheck=()=>
{
    let ans=0;
    for(let b of boxes)
    {
        if(b.innerText==="")
        {
            ans=1;
        }
    }
    if(ans===0)
    {
        boxes.disabled="true";
        msg.classList.remove("hide");
        winnermsg.innerText="Draw";

    }
}

newg.addEventListener("click",newgame);
restt.addEventListener("click",rest);