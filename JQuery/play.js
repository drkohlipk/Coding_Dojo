var coins = {
	quarter: 0.25,
	dime: 0.10,
	nickel: 0.5,
	penny: 0.01
};

function dec(num) {
	num = Math.round(num * 100) / 100;
	return num;
}

function minCoins(amount) {
	var quarters = Math.round(amount / coins.quarter),
		quartered = (amount % coins.quarter),
		dimes = Math.round(dec(quartered) / coins.dime),
		dimed = (dec(quartered) % coins.dime),
		nickels = Math.round(dec(dimed) / coins.nickel),
		nickeled = (dec(dimed) % coins.nickel),
		pennies = Math.round(dec(nickeled) / coins.penny),
		pennied = (dec(nickeled) / coins.penny);
	console.log(dec(quartered));
	console.log('The total coins you need are ' + quarters + ' quarter(s), ' +
		dimes + ' dime(s), ' + nickels + ' nickel(s), and ' + pennies +
		' penny(ies)');
}

minCoins(3.27);
