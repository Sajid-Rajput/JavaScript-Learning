export default function(){
    console.log("Welcome to my bank");
}

export class BankAccount {
  constructor(name, account, balance) {
    this.name = name;
    this.account = account;
    this.balance = balance;
  }

  showDetails() {
    console.log(`
        Account Holder Name: ${this.name}
        Account No: ${this.account}
        Balance: ${this.balance}
        `);
  }

  depositMoney(deposit) {
    this.balance = this.balance + deposit;
  }

  withdrawMoney(withdraw) {
    this.balance = this.balance - withdraw;
  }
}