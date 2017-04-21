function jsShow(id) {
	document.getElementById(id).style.display="block";
}
function jsHide(id) {
	document.getElementById(id).style.display="none";
}

function producePrompt(message, promptLocation) {
	jsShow('overlayer');
    document.getElementById(promptLocation).innerHTML = message;
    var button = document.getElementById('ok');
	button.addEventListener('click', function(){
	   	jsHide('overlayer');
	});
}

function confirmation(message, confirmLocation, el) {
	setTimeout(function(){jsShow('overlayer2')}, 1000);
    document.getElementById(confirmLocation).innerHTML = message;
    var no = document.getElementById('no');
	no.addEventListener('click', function(){
	   	jsHide('overlayer2');
	   	document.getElementById(el).checked = false;
	});
	var yes = document.getElementById('yes');
	yes.addEventListener('click', function (){
		document.getElementById(el).parentNode.remove();
		jsHide('overlayer2');
	});
}

// function remove list ketika di klik
function removeList(el) {
	confirmation('Sudah Selesai?', 'message2', el);
}

// button Simpan
var simpan = document.getElementById('component-1');
simpan.addEventListener('click', function(){
	var ul = document.getElementById('whatToDo');
	data = document.getElementById('toDo').value;
    
    if(data.length === 0){
    	producePrompt("input tidak boleh kosong!", "message");
    } else {
	    var li = document.createElement('li');
	   	ul.appendChild(li);
	    
	    var input = document.createElement('input');
	    input.setAttribute('type', 'checkbox');
	    input.setAttribute('onclick', 'removeList(this.id)');
	    input.setAttribute('id', data);
	    li.appendChild(input);

	    var label = document.createElement('label');
	    label.setAttribute('for', data);
	    label.setAttribute('onclick', 'removeList(this.previousElementSibling.id)');
	    li.appendChild(label);
	    label.innerHTML = data;
    }

    document.getElementById('toDo').value = '';
    document.getElementsByClassName('input')[0].classList.remove('input--filled');;
})

// checked List
var list = document.getElementById('whatToDo').children;
for (i=0; i<list.length; i++){
	list[i].addEventListener ('click', function(e){
  		alert(e.target.parentNode.id);
	});
}