function post_cnc(data, callback){
	try{
		http = new XMLHttpRequest();
		http.onreadystatechange = function(){
			if (this.readyState == 4 && this.status == 200){
				callback(data);
				return true;
			}
			if (this.readyState == 4 && this.status != 200){
				return false;
			}
		};
		http.open('POST', 'http://' + config.server + ':' + config.port, true);
		http.setRequestHeader('Content-Type', 'application/json');
		http.send(JSON.stringify(data));
		return true;
	} catch(error){
		console.log(error);
		return false;
	}
}
