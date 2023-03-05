class Users {
    constructor() {
      this.accounts = new Map();
    }
  
    addUser(b) {
      if (this.accounts.has(b.getUserID())) {
        return false;
      } else {
        this.accounts.set(b.getUserID(), b);
        return true;
      }
    }
  }