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
        return balance;
    }
    deposit(amt) {
        if (amt >= 0) {
            let deposit = new Transaction(amt);
            this.transactions.push(deposit);
        } else {
            return "Please deposit a positive amount.";
        }
    }
    charge(payee, amt) {
        this.balance();
        console.log(this.balance());
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


