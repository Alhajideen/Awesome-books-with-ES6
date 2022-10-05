export default class Book {
  constructor(title, author) {
    this._title = title;
    this._author = author;
  }

  get title() {
    return this._title;
  }

  get author() {
    return this._author;
  }

  addBook() {
    let dataStored = [];
    let books = [];
    if (localStorage.getItem('books')) {
      dataStored = localStorage.getItem('books');
      books = JSON.parse(dataStored);
    }
    books.push(this);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static deleteBook(btn, container) {
    btn.forEach((element, index) => {
      element.addEventListener('click', () => {
        element.parentNode.parentNode.remove();
        const books = JSON.parse(localStorage.getItem('books'));
        if (books.length > 1) {
          const deleted = books[index];
          let newBook = books.filter((e)=> {
            return e != deleted;
          });
          localStorage.setItem('books', JSON.stringify(newBook));
        } else {
          let newBook = [];
          localStorage.setItem('books', JSON.stringify(newBook));
          const listContainer = document.querySelector('.books-list');
          listContainer.innerHTML =
            '<tr> <td colspan="4">Nothing to show </td> <tr>';
        }
      });
    });
  }
}
