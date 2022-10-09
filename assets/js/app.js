const open = document.querySelector("#open");
const ul = document.querySelector("ul");
const closed = document.querySelector(".closed")

open.addEventListener("click", () =>{
    ul.style.display = "flex";
    if(ul.style.display == "flex") {
        closed.style.display ="block";
    }else{
        closed.style.display ="none";
    }
})

closed.addEventListener("click", () =>{
    ul.style.display ="none";
})