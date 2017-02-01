class GuessingGame {
    constructor() {
    	this.max = null;
    	this.min = null;
    	this.quantity = 0;
    }

    setRange(min, max) {
    	this.min = min;
    	this.max = max;
    }

    guess() {
    	return this.findMedium();

    }

    lower() {
    	this.max=this.findMedium();

    }

    greater() {    	
    	this.min=this.findMedium();
    }

    findMedium() {
    	var quantity = this.max-this.min+1;
    	var medium = 0;
    	if(quantity%2==0){
    		medium = quantity/2+this.min;
    	}
    	else {
    		medium = parseInt(quantity/2)+this.min;
    	}
    	return medium;

    }
}

module.exports = GuessingGame;
