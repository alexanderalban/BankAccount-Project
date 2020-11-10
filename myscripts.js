class BankAccount {
    constructor(accountNumber, owner) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.transactions = [];
    }
    balance() {
        let balance = 0;
        this.transactions.forEach = (transaction) => {
            balance += transaction.amount;
        }
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
        let charge = new Transaction(amt, payee);
        if ((balance + charge.amount) < 0) {
            return "Charge not possible! Account would dip below 0";
        } else {
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