var Request = function(url, method) {
	this.url = url;
	this.method = method || "GET";
	this.object = new XMLHttpRequest();
}

Request.prototype.send = function(callback) {
	this.object.open(this.method, this.url);
	this.object.send();
	this.response(callback);
}

Request.prototype.response = function(callback) {
	this.object.onload = function() {
		callback(this.responseText);
	}
}
