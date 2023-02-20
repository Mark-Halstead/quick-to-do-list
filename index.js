const inputItem = document.getElementById("getItem")
const toDoList = document.getElementById("to-do-list")
const addButton = document.getElementById("add-button")


addButton.addEventListener("click", (e) => {
    e.preventDefault()
   
    
    let inputItemText = []
    
    inputItemText.push(inputItem.value)
    console.log(inputItemText);

    inputItemText.forEach(d => {
    const newItem = document.createElement('li')

    newItem.textContent = d ;

    toDoList.appendChild(newItem);

    const deleteButton = document.createElement('button')

   
    deleteButton.innerText = 'Delete';
    deleteButton.classList = 'delete-button'
    toDoList.appendChild(deleteButton);

    const completeButton = document.createElement('button')
    completeButton.classList = 'complete-button'
    completeButton.innerText = 'Complete';
    toDoList.appendChild(completeButton);


    })
    
 });

 
