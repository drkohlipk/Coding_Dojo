/*jshint esversion: 6*/

/****************************Hash String******************************/

/**************Outline**************
 *
 * hashStr() takes in a string, converts each character in that string to it's UTF-16 code equivalent and multiplies it to
 * a salt (8675309) and then adds it to the hashed value before returning it.
 *
 **************Outline**************/

/************Functions**********/

const hashStr = str => {
	let hash = 0;
	for (let i = 0; i < str.length; i++) {
		hash += str.charCodeAt(i) * 8675309;
	}
	return hash;
};

/************Functions**********/

/*************Test*************/

console.log(hashStr('Hello World!'));

/*************Test*************/

/****************************Hash String******************************/
