function jsShow(id) {
	document.getElementById(id).style.display="block";
}
function jsHide(id) {
	document.getElementById(id).style.display="none";
}

function producePrompt(message, promptLocation) {
	jsShow('overlayer');
    document.getElementById(promptLocation).innerHTML = message;
    var okBtn = document.getElementById('ok');
    okBtn.addEventListener('click', function(){
      jsHide('overlayer');
    });
}


function validateNama(nama) {
	if (nama.length === 0) {
		return false;
	}
	return true;
}

function validatePassword(password ) {
	if (password.length === 0) {
		return false;
	}
	return true;
}

function validateConfirmPassword(confirmPassword) {
	if (confirmPassword.length === 0) {
		return false;
	}
	return true;
}

function validateEmail(email) {
	if (email.length === 0) {
		return false;
	}
	return true;
}

function validateConfirmEmail() {
	var confirmEmail = document.getElementById("confirmEmail").value;
	if (confirmEmail.length === 0) {
		return false;
	}
	return true;
}

var submitBtn = document.getElementById('sumbit');
submitBtn.addEventListener('click', function(event) {
  var nama = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var email = document.getElementById("email").value;
  var confirmEmail = document.getElementById("confirmEmail").value;
 
  event.preventDefault();
  if(!validateNama(nama)) {
		producePrompt("Username tidak boleh kosong!", "message");
  } else if (!validatePassword(password)){
		producePrompt("Password tidak boleh kosong!", "message");    
  } else if (!validateConfirmPassword(confirmPassword)){
		producePrompt("Password Confirmation tidak boleh kosong!", "message");    
  } else if (!validateEmail(email)){
		producePrompt("Email tidak boleh kosong!", "message");    
  } else if (!validateConfirmEmail(confirmEmail)){
		producePrompt("Email confirmation tidak boleh kosong!", "message");    
  } else if (email !== confirmEmail){
		producePrompt("Email tidak sama", "message");    
  } else if (password !== confirmPassword){
		producePrompt("Password tidak sama", "message");    
  } else {
    alert('terimakasih telah melakukan registrasi!')
  }
});