
const buttons = document.querySelectorAll(".card .btn")
const selectedPlayer = document.getElementById("selected-player");
const playerExpense = document.getElementById("player-expense");
const overAllCost = document.getElementById("total-cost");

const listItem = [];
buttons.forEach(button =>{
    button.addEventListener('click', function(e){
        const playerName = e.target.parentElement.children[1].children[0].innerHTML;
        const li = document.createElement('li');
        li.innerText = playerName;
        listItem.push(li);

        if(listItem.length <= 5){
            selectedPlayer.appendChild(li);
            button.disabled = true;

            if(button.disabled === true){
                button.classList.add('desable');
            }
        }
        else{
            alert("You have already added five player");
        }
    })
})

const inputValue = (id) =>{
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;

    const inputNumber = parseInt(inputValue);
    inputField.value = '';
    return inputNumber;
}

const costCalculation = () =>{
    const expenseText = playerExpense.innerText;
    const expenseNumber = parseInt(expenseText);
    
    const playerCost = inputValue("cost-pp");   
    const totalCost = playerCost*listItem.length;
    listItem.length = 0;
    
    const totalExpense = totalCost + expenseNumber;
    playerExpense.innerText = totalExpense;
}


const calculateTotal = () =>{

    let expenseText = playerExpense.innerText;
    let expenseNumber = parseInt(expenseText);
    
   
    const managerCost = inputValue("manager");
    const coachCost = inputValue("coach");

    
        const costText = overAllCost.innerText;
        const costNumber = parseInt(costText);

        const totalCost =  managerCost + coachCost;

        const total = totalCost + expenseNumber;
        overAllCost.innerText = total;
        expenseNumber = 0;

        // overAllCost.innerText = expenseNumber + costNumber;

}









