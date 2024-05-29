function Account (agency, account, balance) {
    this.agency = agency;
    this.account = account;
    this.balance = balance;
}

Account.prototype.cashOut = function (value) {
    if(this.balance < value) this.seeBalance();
    return this.balance -= value;
};

Account.prototype.deposit = function (value) {
    return this.balance += value;
};

Account.prototype.seeBalance = function() {
    return `Ag: ${this.agency} | ac: ${this.account} | balance: R$${this.balance.toFixed(2)}`
};

const account1 = new Account(7, 782655, 10);
// account1.deposit(100);
// console.log(account1.seeBalance());
// account1.cashOut(10);
// console.log(account1.seeBalance());

function CurrentAccount (agency, account, balance, limit) {
    Account.call(this, agency, account, balance); // Fazendo herança
    this.limit = limit;
}
CurrentAccount.prototype = Object.create(Account.prototype); // Linkando os prototypes

CurrentAccount.prototype.cashOut = function(value) {
    if(value > (this.balance + this.limit)) {
        console.log(`Saldo insuficiente: ${this.balance}`);
        return;
    }

    this.balance -= value;
    console.log(this.seeBalance());
};

const currentAccount = new CurrentAccount(7, 782652, 0, 100);
currentAccount.cashOut(100);
currentAccount.seeBalance();
