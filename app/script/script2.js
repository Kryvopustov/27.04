var create2Arr = (function(){
var myArr = [];
var newArr = [];
var i;
var e;
for (i = 1; i < 101; i++ ) {
	myArr.push(i);
}
for (e = 1; e < myArr.length; e++ ) {
	if (e%3 === 0){
	 newArr.push(e);
	}
}

/*console.log(myArr);
console.log(newArr);*/

})()