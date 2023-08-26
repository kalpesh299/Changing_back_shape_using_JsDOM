const changecolor=document.getElementById("chcolor");
const chshape=document.getElementById("chshape");
const circle=document.querySelector(".circle");
const shape=document.querySelector(".shape");


const colors=["red","green","khaki","blue"];
let i=0;
    changecolor.addEventListener("click",()=>{
        circle.style.backgroundColor=colors[i];
        i++;
        if(i==colors.length) i=0;
  })

  const shapes=["triangle","para","round"];
let j=0;
  chshape.addEventListener("click",()=>{
   
        shape.classList.add(shapes[j]);
        j++;
    
 if(j==shapes.length)j=0;
  })
  
   




