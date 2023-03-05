class HealthCare {
    constructor() {
      this.center = "BSP Free Clinic";
      this.amount_collected = 0;
    }
    
    donate_amount(increase) {
      this.amount_collected += increase;
    }
    
    get_amount() {
      return this.amount_collected;
    }
  }