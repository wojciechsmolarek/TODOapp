let todoForm;

function addTask(text) { 
    const article = document.createElement('article');
    article.classList.add('taskContainer');

    const todoHeading = document.createElement('h4');
    todoHeading.classList.add('taskDate');
    const date = new Date();
    const dateText = date.getDate() + '.' + (date.getMonth()+1) + '.' + date.getFullYear() + ', ' + date.getHours() + ':' + date.getMinutes();
    todoHeading.textContent = dateText;

    const todoI = document.createElement('i');
    todoI.classList.add('far');
    todoI.classList.add('fa-times-circle');

    const todoParagraph = document.createElement('p');
    todoParagraph.classList.add('task');
    todoParagraph.textContent = text;

    article.appendChild(todoHeading);
    article.appendChild(todoI);
    article.appendChild(todoParagraph);


    const list = document.querySelector('.list');
    list.append(article);

}

document.addEventListener('DOMContentLoaded', function() {
    todoForm = document.querySelector('.content');
    todoList = document.querySelector('.list');

    todoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const textarea = this.querySelector('textarea');
        if(this.value != '') {
            addTask(textarea.value);
        }
        else {
            alert('error');
        }
    })

    todoList.addEventListener('click', function(e) {
        e.preventDefault();
        if(e.target.closest('.far') != 0) {
            e.target.closest('.taskContainer').remove();
        }
    })
})