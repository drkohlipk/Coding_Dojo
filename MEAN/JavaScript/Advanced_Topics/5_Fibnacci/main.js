function fib() {
	var add = [0, 1];

	function nacci() {
		var temp = add[0];
		add[0] = add[1];
		add[1] += temp;
		return add[0];
	}
	return nacci;
}
var fibCounter = fib();
console.log(fibCounter()); // should console.log "1"
console.log(fibCounter()); // should console.log "1"
console.log(fibCounter()); // should console.log "2"
console.log(fibCounter()); // should console.log "3"
console.log(fibCounter()); // should console.log "5"
console.log(fibCounter()); // should console.log "8"
