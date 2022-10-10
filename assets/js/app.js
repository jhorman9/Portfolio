const open = document.querySelector("#open");
const ul = document.querySelector("ul");
const closed = document.querySelector(".closed")
const buttonRight = document.querySelector(".button-right");
const iconsExperience = document.querySelector(".icons--experience")

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

buttonRight.addEventListener("click", () =>{
    iconsExperience.innerHTML += `<div class="icon">
                                    <img src="assets/imgs/Google.png" alt="google">
                                    <p class="center padding withoutMargin">Frontend and UI Dev</p>
                                    <h4 class="withoutMargin">6 meses</h4>
                                </div>
                                <div class="icon">
                                    <img src="assets/imgs/Wizeline.png" alt="Wizeline">
                                    <p class="center padding withoutMargin">Interactive Design</p>
                                    <h4 class="withoutMargin">1 año</h4>
                                </div>
                                <div class="buttonLeft"><</div>
    `})
