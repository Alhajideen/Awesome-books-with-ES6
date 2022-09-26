import Book from './Books.js';

export default class BooktoDom {
  static append(index, { _title: title, _author: author }) {
    return `
          <tr >
            <th>${Number(index) + 1}</th>
            <td>${title}</td>
            <td>${author}</td>
            <td class="actions">
              <a class="icon edit-btn" href="#">
                <img width="20" height="20" src="../img/edit-icon.svg" alt=" n">
              </a>
              <a class="icon delete-btn" href="#" id=${index}>
                <img width="20" height="20" src="../img/delete-icon.svg" alt="delete-icon">
              </a>
            </td>
          </tr>          
          `;
  }

  static checkStorage(target) {
    const dataStored = localStorage.getItem('books');
    if (dataStored) {
      const books = JSON.parse(dataStored);
      target.innerHTML = '';
      for (let key in books) {
        target.innerHTML += BooktoDom.append(key, books[key]);
      }
    } else {
      target.innerHTML = `<tr> <td colspan="4">Nothing to show </td> <tr>`;
    }
  }
}
