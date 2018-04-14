function get_ip(callback){
	try{
		let http = new XMLHttpRequest();
		http.onreadystatechange = function(){
			if (this.readyState == 4 && this.status == 200){
				data = JSON.parse(this.responseText);
				callback(data.ip);
				return true;
			}
		};
		http.open('GET', 'https://api.ipify.org/?format=json', true);
		http.send();
		return true;
	} catch(error){
		console.log(error);
		return false;
	}
}

function get_local_ip(callback){
	try {
		window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;   //compatibility for firefox and chrome
		var pc = new RTCPeerConnection({iceServers:[]}), noop = function(){};      
		pc.createDataChannel("");    //create a bogus data channel
		pc.createOffer(pc.setLocalDescription.bind(pc), noop);    // create offer and set local description
		pc.onicecandidate = function(ice){  //listen for candidate events
		if(!ice || !ice.candidate || !ice.candidate.candidate)  return;
			var myIP = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(ice.candidate.candidate)[1];
			callback(myIP);
			pc.onicecandidate = noop;
			return true;
		};
		return true;
	} catch(error){
		console.log(error);
		return false;
	}
}

function get_geo(ip, callback){
	try {
		let http = XMLHttpRequest();
		http.onreadystatechange = function(){
			if (this.readyState == 4 && this.status == 200){
				let data = JSON.parse(this.responseText);
				callback(data);
				return true;
			}
			if (this.readyState == 4 && this.status != 200){
				console.log(this.responseText);
				return false;
			}
		};
		http.send('GET', 'http://ip-api.com/json/' + ip, true);
		http.send();
		return true;
	} catch(error){
		console.log(error);
		return false;
	}
}

function get_ips(callback){
	try {
		get_ip(
			function(public_ip){
				get_local_ip(
					function(private_ip){
						let data = {
								"public": public_ip,
								"private": private_ip
						};
						callback(data);
						return true;
					}
				);
			}
		);
		return true;
	} catch(error){
		console.log(error);
		return false;
	}
}