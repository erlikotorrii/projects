function showCurrentDate() {
    const todayDate = document.getElementById('currentDate');
    const currentDate = new Date().toLocaleDateString();
    todayDate.textContent = `Today's date: ${currentDate}`;
}

function addTask() {
    const taskDescription = document.getElementById('taskDescription').value.trim();
    const taskTime = document.getElementById('taskTime').value;
    const taskDate = document.getElementById('taskDate').value;

    if (!taskDescription || !taskTime || !taskDate) {
        alert('Please fill in all the fields!');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.className = 'list-group-item d-flex justify-content-between align-items-center';
    taskItem.innerHTML = `${taskDate} at ${taskTime}: - ${taskDescription}`;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm';
    deleteButton.textContent = 'Remove';
    deleteButton.onclick = function () {
        removeTask(taskItem);
    };

    taskItem.appendChild(deleteButton);

    document.getElementById('taskList').appendChild(taskItem);

    document.getElementById('taskDescription').value = '';
    document.getElementById('taskTime').value = '';
    document.getElementById('taskDate').value = '';

    highlightTasks();
    saveTasks();
}

function highlightTasks() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    let day = currentDate.getDate();

    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;

    const currentDateString = `${year}-${month}-${day}`;

    const taskList = document.getElementById('taskList');
    const taskItems = taskList.querySelectorAll('li');

    for (let i = 0; i < taskItems.length; i++) {
        const taskItem = taskItems[i];
        const taskText = taskItem.innerHTML.split(' at ')[0];

        const taskDate = new Date(taskText);
        const dayName = taskDate.toLocaleDateString("en-GB", { weekday: 'long' });

        if (taskText === currentDateString) {
            taskItem.classList.add('highlight-current-date');
        } else {
            taskItem.classList.remove('highlight-current-date');
        }
    }
}

function removeTask(taskItem) {
    taskItem.remove();
    highlightTasks(); 
}

function saveTasks() {
    const taskList = document.getElementById('taskList').innerHTML;
    localStorage.setItem('taskList', taskList);
}

function loadTasks() {
    const taskList = localStorage.getItem('taskList');
    if (taskList) {
        document.getElementById('taskList').innerHTML = taskList;
    }
}

showCurrentDate();
highlightTasks();
loadTasks();
