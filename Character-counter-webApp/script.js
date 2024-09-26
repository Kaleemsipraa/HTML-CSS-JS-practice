let textArea = document.querySelector('#Enter-text')
let button = document.querySelector('#btn')
let result = document.querySelector('.show-result')

button.addEventListener('click', function(){
    if(textArea.value == ""){
        alert("Please Enter Text ")
    }else{
    showingResult = textArea.value.length;
    result.innerHTML = `<h4>Your Total Character: ${showingResult} </h4> `
    result.style.display = "block"
}
})
