import BooktoDom from '../modules/BookController.js';
import Book from '../modules/Books.js';

export default class List {
  constructor() {
    this._content = `
        <section class="card" aria-labelledby="project-name">
            <h1 id="project-name" class="text-center primary-heading">All Awesome Books</h1>
            <table class="table my-3 px-3 py-3 border">
                <thead>
                    <tr>
                        <th>NO</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody class="books-list">
                    <!-- Books list will be appended here -->
                    <input type='text' class="edit-title"  placeholder="Book Title"/> <br/>
                    <input type='text' class="edit-author"  placeholder="Book Title"/>
                    <button class="update-btn">Update Book</button>
                </tbody>
            </table>
          
        </section>
        `;
  }

  get content() {
    return this._content;
  }

  active() {
    const dataStored = localStorage.getItem('books');
    const books = JSON.parse(dataStored);
    const listContainer = document.querySelector('.books-list');
    if (books) {
      for (const item in books) {
        listContainer.innerHTML += BooktoDom.append(item, books[item]);
      }
    } else {
      listContainer.innerHTML =
        '<tr> <td colspan="4">Nothing to show </td> <tr>';
    }
  }
  deleteBook() {
    const delBtn = document.querySelectorAll('.delete-btn');
    delBtn.forEach((element, index) => {
      element.addEventListener('click', () => {
        element.parentNode.parentNode.remove();
        const books = JSON.parse(localStorage.getItem('books'));
        console.log('before=' + books);

        if (books.length > 1) {
          const deleted = books[index];
          let newBook = books.filter(function (e) {
            return e != deleted;
          });
          localStorage.setItem('books', JSON.stringify(newBook));
        } else {
          let newBook = [];
          localStorage.setItem('books', JSON.stringify(newBook));
        }
        console.log('after=' + newBook);
      });
    });
  }

  editBook() {
    const editBtn = document.querySelectorAll('.edit-btn');
    const form = document.querySelector('form');
    const title = document.querySelector('.edit-title');
    const author = document.querySelector('.edit-author');
    const books = JSON.parse(localStorage.getItem('books'));
    const update = document.querySelector('.update-btn');
    editBtn.forEach((elem, index) => {
      elem.addEventListener('click', () => {
        title.value = books[index]._title;
        author.value = books[index]._author;
        update.addEventListener('click', () => {});
      });
    });
  }
}
