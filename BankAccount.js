class BankAccount {
    constructor(fn, ln, e, ph, id, pw) {
    this.checking = new CheckingAccount();
    this.savings = new SavingsAccount();
    this.health = new HealthCare();
    this.foster = new FosterOrphanages();
    this.pets = new Pets();
    this.kitchen = new FoodKitchen();
    this.homeless = new HomelessShelter();
    this.amountDonated = 0;
    this.firstName = fn;
    this.lastName = ln;
    this.emailAddress = e;
    this.phoneNumber = ph;
    this.userid = id;
    this.password = pw;
    }
    
    getUserID() {
    return this.userid;
    }
    
    toString() {
    return "${this.checking.toString()}\n${this.savings.toString()}\n";
    }
    
    depositIntoChecking(amount) {
    this.checking.deposit(amount);
    }
    
    depositIntoSavings(amount) {
    this.savings.deposit(amount);
    }
    
    withdraw(itemAmount, percentSavings, isPets, isFood, isHomeless, isFoster, isHealth) {
    let cardGotten = false;
    let numberOfOrgs = 0;
    let withdrawAmount = Math.ceil(itemAmount);
    this.checking.withdraw(withdrawAmount);
    let difference = withdrawAmount - itemAmount;
    let savingsAmount = (percentSavings / 100) * difference;
    this.savings.deposit(savingsAmount);
    let orgAmount = difference - savingsAmount;
    this.amountDonated += orgAmount;
    
    if (this.amountDonated >= 50) {
      this.amountDonated -= 50;
      cardGotten = true;
    }
    
    if (isPets) {
      numberOfOrgs++;
    }
    if (isFood) {
      numberOfOrgs++;
    }
    if (isHomeless) {
      numberOfOrgs++;
    }
    if (isFoster) {
      numberOfOrgs++;
    }
    if (isHealth) {
      numberOfOrgs++;
    }
    
    let perOrgAmount = orgAmount / numberOfOrgs;
    if (isPets) {
      this.pets.donate_amount(perOrgAmount);
    }
    if (isFood) {
      this.kitchen.donate_amount(perOrgAmount);
    }
    if (isHomeless) {
      this.homeless.donate_amount(perOrgAmount);
    }
    if (isFoster) {
      this.foster.donate_amount(perOrgAmount);
    }
    if (isHealth) {
      this.health.donate_amount(perOrgAmount);
    }
    
    return cardGotten;
    }
    
    getTotalDonated() {
    return this.pets.get_amount();
    }
    
    getPets() {
    return this.pets.get_amount();
    }
    
    getFood() {
    return this.foster.get_amount();
    }
    
    getHomeless() {
    return this.homeless.get_amount();
    }
    
    getFoster() {
    return this.kitchen.get_amount();
    }
    
    getHealth() {
    return this.health.get_amount();
    }
    
    getChecking() {
    return this.checking.getAmount();
    }
    
    getSavings() {
    return this.savings.getAmount();
    }
    }
    