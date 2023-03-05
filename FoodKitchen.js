class FoodKitchen {
    constructor() {
      this.center = "The River Food Pantry";
      this.amount_collected = 0;
    }
    
    donate_amount(increase) {
      this.amount_collected += increase;
    }
    
    get_amount() {
      return this.amount_collected;
    }
  }