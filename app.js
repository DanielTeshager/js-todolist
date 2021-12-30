$(document).ready(function(){
    $('.datepicker').datepicker();
    $('.timepicker').timepicker();
    $('select').formSelect();
  });
//Initialize UI variables
const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const taskDescription = document.querySelector('#description');
const taskDate = document.querySelector('#date');
const taskTime = document.querySelector('#time');
const taskPriority = document.querySelector('#priority');
const taskStatus = document.querySelector('#status');

const taskList = document.querySelector('#collection tbody');
const clearBtn = document.querySelector('#clear-tasks');
const filter = document.querySelector('#filter');

const submitBtn = document.querySelector('.submit-btn');

//load event listeners
loadEventListeners();

function loadEventListeners() {
    //DOM load event
   form.addEventListener('submit', addTask);
   clearBtn.addEventListener('click', clearTasks);
   filter.addEventListener('keyup', filterTasks);
}

function addTask(e) {
    if(taskInput.value === '' || taskDescription.value === '' || taskDate.value === '' || taskTime.value === '' || taskPriority.value === '' || taskStatus.value === '') {
        alert('Please fill in all fields');
    } else {
        //update the task table
        updateTaskTable();
    }
    e.preventDefault();
}

function clearTasks(e) {
    //clear the task table
    taskList.innerHTML = '';

    e.preventDefault();
}

function updateTaskTable() {
    //create a new task
    const task = {
        task: taskInput.value,
        description: taskDescription.value,
        date: taskDate.value,
        time: taskTime.value,
        priority: taskPriority.value,
        status: taskStatus.value
    }
    //create a new row
    const row = document.createElement('tr');   
    row.innerHTML = `<td>${task.task}</td><td>${task.description}</td><td>${task.date}</td><td>${task.time}</td><td>${task.priority}</td><td>${task.status}</td>`;
    //append row to the table
    taskList.appendChild(row);
}

function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.task-item').forEach(function(task) {
        // const item = task.firstChild.textContent;
        // if(item.toLowerCase().indexOf(text) != -1) {
        //     task.style.display = 'block';
        // } else {
        //     task.style.display = 'none';
        // }
        // task.forEach(function(item) {
        //     if(item.textContent.toLowerCase().indexOf(text) != -1) {
        //         task.style.display = 'block';
        //     } else {
        //         task.style.display = 'none';
        //     }
        // });
        if(task.firstElementChild.textContent.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'table-row';
            console.log(task);
        }else if(task.lastElementChild.textContent.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'table-row';
            console.log(task);
        }else{
            task.style.display = 'none';
        }
    });
}