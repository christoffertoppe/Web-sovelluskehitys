
let request = new XMLHttpRequest();
request.open('GET', 'data/books.json', false);
request.send(null);
let data = JSON.parse(request.responseText);

let books = data.books;
let h1 = document.createElement("h1");
document.body.appendChild(h1);
let table = document.createElement('table');

let tr1 = document.createElement('tr');

let list = [];

for (let j=0; j < books.length; j++) {
	list[j] = books[j].title;
}

for (let i=0; i < books.length; i++) {
	let th = document.createElement('th');
	th.innerHTML = books[i].title;

	th.addEventListener('click', function() {
		h1.innerHTML = this.innerHTML;
	});

	tr1.appendChild(th);
	table.appendChild(tr1);
}
let tr2 = document.createElement('tr');
for (let i=0; i < books.length; i++) {
	let td = document.createElement('td');
	td.innerHTML = books[i].title;
	td.addEventListener('click', function() {
		h1.innerHTML = this.innerHTML;
	});
	tr2.appendChild(td);
	table.appendChild(tr2);
}

let tr3 = document.createElement('tr');
for (let i=0; i < books.length; i++) {
	let td = document.createElement('td');
	td.innerHTML = books[i].year;

	tr3.appendChild(td);
	table.appendChild(tr3);
}

let tr4 = document.createElement('tr');
for (let i=0; i < books.length; i++) {
	let td = document.createElement('td');
	td.innerHTML = books[i].isbn;
	tr4.appendChild(td);
	table.appendChild(tr4);
}

let tr5 = document.createElement('tr');
for (let i=0; i < books.length; i++) {
	let td = document.createElement('td');
	td.innerHTML = books[i].authors;
	tr5.appendChild(td);
	table.appendChild(tr5);
}

document.body.appendChild(table);
