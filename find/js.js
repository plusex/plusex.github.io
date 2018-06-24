/* window.addEventListener("load", function(){
    
} */

var elem = document.querySelectorAll(".point");
var res = document.querySelector(".res");
var rand = Math.floor(Math.random() * elem.length);
elem[rand].classList.add("win");

for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
        if (this.classList.contains("win")) {
            alert("Вы победили");
            res.innerHTML = rand;
        }
    })
}