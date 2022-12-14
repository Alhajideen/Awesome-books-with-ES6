import Book from '../modules/Books.js';

export default class Form {
  constructor() {
    this._content = `
        <section class="card" aria-labelledby="project-name">
            <div class="data-form">
                <h2 class="text-center secondary-header">Add a new book</h2>
                <form action="javascript:void(0)" method="post" class="form">
                    <div class="form-control my-3">
                        <input class="input-form border" type="text" required minlength="3" name="title" id="book-title" aria-label="book-title" placeholder="Title">
                    </div>
                    <div class="form-control my-3">
                        <input class="input-form border" type="text" required minlength="3" name="author" id="book-Author" aria-label="book-Author" placeholder="Author">
                    </div>
                    <div class="form-control my-3">
                        <button type="submit" class="btn border">Add
                            <img width="20" height="20" class="icon" src="../img/submit-icon.svg" alt="submit-icon">
                        </button>
                    </div>
                </form>
                <h1 class="success"></h1>
                </div>
        </section>
        `;
  }

  get content() {
    return this._content;
  }

  active() {
    const form = document.querySelector('form');
    const title = document.getElementById('book-title');
    const author = document.getElementById('book-Author');
    form.addEventListener('submit', () => {
      const bookTitle = title.value;
      const bookAuthor = author.value;
      const newBook = new Book(bookTitle, bookAuthor);
      Form.success();
      newBook.addBook();
      title.value = '';
      author.value = '';
    });
  }

  static success() {
    const success = document.querySelector('.success');
    success.innerHTML = 'Book added successfully';
    setTimeout(() => {
      success.innerHTML = '';
    }, 2000);
  }
}
