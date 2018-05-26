let todoForm;


function addTask(text) {
    const article = document.createElement('article');
    article.classList.add('taskContainer');

    const todoHeading = document.createElement('h4');
    todoHeading.classList.add('taskDate');
    const date = new Date();
    const dateText = date.getDate() + '.' + (date.getMonth()+1) + '.' + date.getFullYear() + ', ' + date.getHours() + ':' + date.getMinutes();
    todoHeading.textContent = dateText;

    const todoDeleteBtn = document.createElement('button');
    todoDeleteBtn.classList.add('.deleteBtn');
    todoDeleteBtn.innerHTML = '<i class="far fa-times-circle"></i>';

    const todoParagraph = document.createElement('p');
    todoParagraph.classList.add('task');
    todoParagraph.textContent = text;

    article.appendChild(todoHeading);
    article.appendChild(todoDeleteBtn);
    article.appendChild(todoParagraph);


    const list = document.querySelector('.list');
    list.append(article);

    todoDeleteBtn.addEventListener('click', function() {
      document.querySelector('.taskContainer').remove();
  })


}

document.addEventListener('DOMContentLoaded', function() {
    todoForm = document.querySelector('.content');
    deleteTask = document.querySelector('.deleteBtn');

    todoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const textarea = this.querySelector('textarea');
        if(textarea.value != '') {
            addTask(textarea.value);
        }
    })
})
