const inputTask = document.querySelector('#input-task')
const allTask = document.querySelector('#to-do-item')

inputTask.addEventListener('keyup', function(e){
   
   if(e.key == "Enter"){
       addTask(this.value);
       this.value = "";
   }
})

const  addTask = (item)=>{
    const listItem = document.createElement('li');
    listItem.innerHTML = `
    ${item}
    <button class="btn"><img src="close.png" class="del"></button>
                    
    `;
    listItem.addEventListener('click', function(){
        this.classList.toggle('done')
    })
    allTask.appendChild(listItem);

    listItem.querySelector(".del").addEventListener('click', function(){
        listItem.remove();
    })
}
