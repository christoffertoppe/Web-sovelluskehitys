
let request = new XMLHttpRequest();
request.open('GET', 'data/books.json', false);
request.send(null);
let data = JSON.parse(request.responseText);
console.log(data);

let books = data.books;
let h1 = document.createElement("h1");
document.body.appendChild(h1);
let table = document.createElement('table');

let tr = document.createElement('tr');

let list = [];

for (let j=0; j < books.length; j++) {
	list[j] = books[j].title;
}

console.log("% " + list[2]);
for (let i=0; i < books.length; i++) {
	let th = document.createElement('th');
	th.innerHTML = books[i].title;

	th.addEventListener('click', function() {
		h1.innerHTML = this.innerHTML;
	});

	/*
	th.onclick = function(nameMy name) {
		console.log(name);
		h1.innerHTML = list[i];
	};

*/
	tr.appendChild(th);
	table.appendChild(tr);
}
let tr = document.createElement('tr');
for (let i=0; i < books.length; i++) {
	let td = document.createElement('td');
	td.innerHTML = books[i].title;
	tr.appendChild(td);
	table.appendChild(tr);
}

let tr = document.createElement('tr');
for (let i=0; i < books.length; i++) {
	let td = document.createElement('td');
	td.innerHTML = books[i].year;
	tr.appendChild(td);
	table.appendChild(tr);
}

let tr = document.createElement('tr');
for (let i=0; i < books.length; i++) {
	let td = document.createElement('td');
	td.innerHTML = books[i].isbn;
	tr.appendChild(td);
	table.appendChild(tr);
}

let tr = document.createElement('tr');
for (let i=0; i < books.length; i++) {
	let td = document.createElement('td');
	td.innerHTML = books[i].authors;
	tr.appendChild(td);
	table.appendChild(tr);
}


document.body.appendChild(table);


/*
var list = document.createElement('table');
for (var i=0; i < books.length; i++) {
	console.log(books[i].title);
	var item = document.createElement('th');
	item.innerHTML = books[i].title + ", " + books[i].year;
	list.appendChild(item);
}
document.body.appendChild(list);
*/