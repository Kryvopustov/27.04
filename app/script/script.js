var singleton = (function (){
	var instance;
		
	return {
		getInstance: function (){
			if (!instance){
				instance = init()
			}
			return instance;
		}
	}
	
	function init(){
		var privateRandom = Math.random();
		var objectSingleton = {
			method1: function (){
				return privateRandom
			}
		}
	return 	objectSingleton;
	} 

	
})();	

var test1 = singleton.getInstance();
var test2 = singleton.getInstance();