class SavingsAccount {
    constructor() {
      this.amount = 0;
    }
    
    constructor(a) {
      this.amount = a;
    }
    
    deposit(a) {
      this.amount += a;
    }
    
    withdraw(a) {
      this.amount -= a;
    }
    
    getAmount() {
      return this.amount;
    }
    
    toString() {
      let s = "Your savings account currently has: $" + this.amount;
      return s;
    }
  }
  