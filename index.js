const pages = document.querySelectorAll('.list-item');
const container = document.getElementById('app');
const myList = new List();
container.innerHTML = myList.content;
