let Button = document.querySelector("#btn")
let istatus = document.querySelector("h3")
let check = 0;
Button.addEventListener('click', function(){
    if(check == 0){
        istatus.innerHTML = "Friends"
        istatus.style.color = "darkcyan"
        Button.innerHTML = "Remove Friend"

        check = 1;
    }else{
        istatus.innerHTML = "Request"
        istatus.style.color = "Red"
        Button.innerHTML = "Add Friend"

        check = 0;
    }
    
})