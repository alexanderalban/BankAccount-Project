class BankAccount {
    constructor(accountNumber, owner) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.transactions = [];
    }
    balance() {
        let balance = 0;
        this.transactions.forEach((transaction) => {
            balance += transaction.amount;
        })
        console.log("Current balance is " + balance)
        return balance;
    }
    deposit(amt) {
        if (amt >= 0) {
            let deposit = new Transaction(amt);
            this.transactions.push(deposit);
        } else {
            console.log("Please deposit a positive amount.")
            return "Please deposit a positive amount.";
        }
    }
    charge(payee, amt) {
        console.log(amt);
        if ((this.balance() + amt) < 0) {
            console.log("Charge not possible! Account would dip below 0")
            return "Charge not possible! Account would dip below 0";
        } else {
            let charge = new Transaction(amt, payee);
            this.transactions.push(charge);
        }
    }
};


class Transaction {
    constructor(amount, payee) {
        this.amount = amount;
        this.payee = payee;
        this.date = new Date();
    }
};


//Tests! Each of these creations will work to demonstrate that the code is correct.

console.log("Please see the myscripts.js for more information!")

//Creating an account
console.log("Test 1- Account Creation")
const tommy = new BankAccount(112345, "Tommy Oliver");
console.log("Below you will see the account we just created for Tommy.")
console.log(tommy);

//Depositing into the account
console.log("Test 2- Deposit");
tommy.deposit(130);
tommy.balance();

//Cannot deposit a negative amount
console.log("Test 3- Cannot deposit a negative amount")
tommy.deposit(-30);
tommy.balance();

//Can take in and track charges/transactions
console.log("Test 4- Can take in and track charges/transactions");
tommy.charge("Wal-Mart", -30);
tommy.balance();
console.log(tommy.transactions);

//Cannot charge an amount that would bring the balance below 0
console.log("Test 5- Cannot charge an amount that would bring account below 0")
tommy.charge("Target", -1000);
tommy.balance();