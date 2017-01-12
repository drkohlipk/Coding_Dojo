module.exports = () => {
	return {
		add: (num1, num2) => {
			return num1 + num2;
		},
		multiply: (num1, num2) => {
			return num1 * num2;
		},
		square: num => {
			return num * num;
		},
		random: (num1, num2) => {
			return Math.floor(Math.random() * (num2 - num1 + 1) + num1);
		}
	};
};
