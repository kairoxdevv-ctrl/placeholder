console.log("NIKKI");

// particles
for(let i=0;i<80;i++){
const p=document.createElement("span");
p.style.left=Math.random()*100+"vw";
p.style.animationDuration=5+Math.random()*10+"s";
document.getElementById("particles").appendChild(p);
}
