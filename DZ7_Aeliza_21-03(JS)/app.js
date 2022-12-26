document.querySelector('.addBtn').onclick = function () {
    if (document.querySelector('input').value === "") {
        alert('Please enter a task')
    }else {
        (document.querySelector('.tasks').innerHTML
            += `<div class="task">
                <span class="taskName">${document.querySelector('input').value}</span>
                <button class="delete">x</button>
            </div>`)
        //////////delete task/////////
        let current_task = document.querySelectorAll('.delete');
        for (let i = 0; i < current_task.length; i++){
            current_task[i].onclick = function () {
                this.parentNode.remove();
            }
        }
        //////////done task//////////
        let doneTask = document.querySelectorAll('.taskName');
        for (let i =0; i < doneTask.length; i++){
            doneTask[i].onclick = function (){
                this.classList.toggle('completed')
            }
        }
        document.querySelector('input').value = ""
    }
}
