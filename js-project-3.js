let balance = 1000;

function checkBalance(){
    console.log("Your Current Balance is $" + balance);
}
function deposit(amount){
    balance = balance + amount;
    console.log("$" + amount + "Deposited Successfully");
}
function withdraw(amount){
    if(amount > balance){
        console.log("Gareeb Gareeb");
    } else {
        balance = balance - amount;
        console.log("$" + amount + "Withdrawn Successfully");
    }
};

let choice = Number(prompt(`
    Welcome to Aman Bank of World

    1. Check Balance
    2. Deposit
    3. Withdraw

    Enter Your Choice:`));
    if (choice === 1){
        checkBalance();
    } else if (choice === 2){
        let amount = Number(prompt("Enter Deposit Amount"));
        deposit(amount);
        checkBalance();
    } else if( choice === 3){
        let amount = Number(prompt("Enter Withdrawal Amount"));
        withdraw(amount);
        checkBalance();
    }else {
        "Thanks for using our service"
    };