//console.log('page loaded');

console.log(document);

document.querySelector('#userForm input[type="text"]').onkeyup = function() {
	var email = document.querySelector('#userForm input[type="text"]').value;
	document.querySelector('#summary h1').innerHTML = email;
};

document.querySelector('#userForm input[type="email"]').onkeyup = function() {

	var email = document.querySelector('#userForm input[type="email"]').value;
	document.querySelectorAll('#summary p')[0].innerHTML = email;
};

document.querySelector('#userForm input[type="password"]').onkeyup = function() {

	var passwd = document.querySelector('#userForm input[type="password"]').value;
	document.querySelectorAll('#summary p')[1].innerHTML = passwd;
};





/*
document.querySelector('#userForm button').onclick = function() {
	// get a DOM object representing a form field.
	var name = document.querySelector('#userForm input[type="text"]');
	document.querySelector('#summary h1').innerHTML = name.value;
	var email = document.querySelector('#userForm input[type="email"]');
	var passwd = document.querySelector('#userForm input[type="password"]');
	paragraphs[0].innerHTML = email.value;
	paragraphs[1].innerHTML = passwd.value;
}
*/
/*
document.querySelector('#userForm button').onclick = function() {
	console.log('save');
	// get a DOM object representing a form field.
	var name = document.querySelector('#userForm input[type="text"]');
	console.log(name);
	document.querySelector('#summary h1').innerHTML = name.value;
	var data = document.querySelectorAll('#userForm input');
	console.log(data);
	var paragraphs = document.querySelectorAll('#summary p');
	console.log('found ' + paragraphs.length + ' p tags');
	paragraphs[1].innerHTML = 'Hello World!';
}

	document.querySelector('#userForm input[type="email"]').onkeypress = function() {
		console.log('updating email');
		var email = document.querySelector('#userForm input[type="email"]').value;
		document.querySelector('#summary p').innerHTML = email;
	};
*/
	/*
document.getElementById('save').onclick = save;


document.querySelector('#userForm input[type="email"]').onkeypress = function() {
	console.log('updating email');
	var email = document.querySelector('#userForm input[type="email"]').value;
	document.querySelector('#summary p').innerHTML = email;
};

document.querySelector('#userForm input[type="email"]').onkeydown = function() {
	console.log('updating email');
	var email = document.querySelector('#userForm input[type="email"]').value;
	document.querySelector('#summary p').innerHTML = email;
};

function save() {
	console.log('save');
	// get a DOM object representing a form field.
	var name = document.querySelector('#userForm input[type="text"]');
	console.log(name);
	document.querySelector('#summary h1').innerHTML = name.value;
	var data = document.querySelectorAll('#userForm input');
	console.log(data);
	var paragraphs = document.querySelectorAll('#summary p');
	console.log('found '+paragraphs.length+' p tags');
	paragraphs[1].innerHTML = 'Hello World!';
}
*/