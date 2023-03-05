class HomelessShelter {
    constructor() {
      this.center = "Porchlight, inc.";
      this.amount_collected = 0;
    }
    
    donate_amount(increase) {
      this.amount_collected += increase;
    }
    
    get_amount() {
      return this.amount_collected;
    }
  }