// Page components
import List from './components/List.js';
import Contact from './components/Contact.js';
import Form from './components/Form.js';

const pages = document.querySelectorAll('.list-item');
const container = document.getElementById('app');
const myList = new List();
container.innerHTML = myList.content;
