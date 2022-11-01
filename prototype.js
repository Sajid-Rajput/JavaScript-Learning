console.log("Prototype in Javascript");

class BankAccout {
  constructor(name, account_number) {
    this.name = name;
    this.account = account_number;
    this.amount = 0;
  }
}

BankAccout.prototype.deposit = function (amount) {
  this.amount += amount;
};

BankAccout.prototype.withdraw = function (amount) {
  this.amount -= amount;
};

let account1 = new BankAccout("Sajid", 100);
let account2 = new BankAccout("Wali", 200);

account1.deposit(10000);
account2.deposit(3000000);

console.log(account1.amount);
console.log(account2.amount);
