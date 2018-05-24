let todoForm = null;

document.addEventListener('submit', function() {
    todoForm = document.querySelector('#content');

    todoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const textarea = this.querySelector('textarea');
        if(this.value != '') {
            addTask(textarea.value);
        }
    })
})