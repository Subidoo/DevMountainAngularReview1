angular.module("app").service("service", function() {
	var data;
	
	this.push = function(input) {
		data = input;
	};

	this.send = function() {
		return data;
	}

});