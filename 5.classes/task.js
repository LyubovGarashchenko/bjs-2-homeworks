// Task 1
class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this._state = 100;
		this.type = null;
	}
	fix() {
		this.state *= 1.5;
	}
	set state(newCondition) {
		if (newCondition < 0) {
			this._newCondition = 0;
		} else if (newCondition > 100) {
			this._newCondition = 100;
		} else {
			this._newCondition = newCondition;
		}
	}
	get state() {
		return this._newCondition;
	}
}

class Magazine extends PrintEditionItem {
	constructor(...args) {
		super(...args)
		this.type = "magazine";
	}
}
class Book extends PrintEditionItem {
	constructor(author, ...args) {
		super(...args)
		this.author = author;
		this.type = "book";
	}
}
class NovelBook extends Book {
	constructor(...args) {
		super(...args)
		this.type = "novel";
	}
}
class FantasticBook extends Book {
	constructor(...args) {
		super(...args)
		this.type = "fantastic";
	}
}
class DetectiveBook extends Book {
	constructor(...args) {
		super(...args)
		this.type = "detective";
	}
}
// Task 2

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}
	addBook(book) {
		if (book.state > 30) {
			this.books.push(book)
		}
	}
	findBookBy(type, value) {
		const findedBook = this.books.find(book => book[type] === value);
		if (!findedBook) {
			return null;
		}
		return findedBook;
	}
	giveBookByName(bookName) {
		const requestedBook = this.books.findBookBy(book => book.name === bookName);
		if (requestedBook != -1) {
			return this.books.splice(requestedBook, 1)[0];
		}
		return null;
	}
}
