let main = document.querySelector("#container")
let dot = document.querySelector(".dot")
let h1 = document.querySelector("h1")
main.addEventListener("mousemove", function(e){
    dot.style.left = e.x+"px"
    dot.style.top = e.y+"px"
})