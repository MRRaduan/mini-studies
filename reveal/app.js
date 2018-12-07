
  // Define UI vars
  const form = document.querySelector('#task-form');  
  const taskList = document.querySelector('.collection');
  const clearBtn = document.querySelector('.clear-tasks');
  const filter = document.querySelector('#filter');
  const taskInput = document.querySelector('#task');

  // Load all event listeners
  loadEventListeners(); 

  // Load all event listeners
  function loadEventListeners() {
    // DOM Loaded
    document.addEventListener('DOMContentLoaded', getTasks);
    // Add task event
    form.addEventListener('submit', addTask);
    // Remove task event
    taskList.addEventListener('click', removeTask);
    // Clear task events
    clearBtn.addEventListener('click', clearTasks);
    // Filter tasks event
    filter.addEventListener('keyup', filterTasks);
  }

  function getTasks() {
    let tasks;
    if(localStorage.getItem('tasks') === null ) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task) {
      // Create <li></li> element
      const li = document.createElement('li');
      // Add a class
      li.className = 'collection-item';
      // Create textNode and append to li
      li.appendChild(document.createTextNode(task));
      // Create new link element
      const link = document.createElement('a');
      // add class
      link.className = 'delete-item secondary-content';
      // add icon html
      link.innerHTML = '<i class="fas fa-check"></i>';
      // Append the link to li
      li.appendChild(link);
      // Append the li  to ul
      taskList.appendChild(li);
    });
  }

  // Add Task
  function addTask(e) {
    if(taskInput.value === '' ) {
      alert("Add a task");
      e.preventDefault();
      return;
    }

    // Create <li></li> element
    const li = document.createElement('li');
    // Add a class
    li.className = 'collection-item';
    // Create textNode and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement('a');
    // add class
    link.className = 'delete-item secondary-content';
    // add icon html
    link.innerHTML = '<i class="fa fa-remove">remove</i>';
    // Append the link to li
    li.appendChild(link);

    // Append the li  to ul
    taskList.appendChild(li);

    // Store in LS
    storeTaskInLocalStorage(taskInput.value);


    taskInput.value = '';

    e.preventDefault();
  }

  // Store task
  function storeTaskInLocalStorage(task) {
    let tasks;
    if(localStorage.getItem('tasks') === null ) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }


  // remove Task
  function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
      if(confirm('Are you sure?')) {
        e.target.parentElement.parentElement.remove();

        // Remove from LS
        removeTaskFromLocalStorage(e.target.parentElement.parentElement);
      }
    }
  }

  function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if(localStorage.getItem('tasks') === null ) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index) {
      if(taskItem.textContent === task){
        tasks.splice(index, 1);
      }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function clearTasks(e) {
    // taskList.innerHTML = '';
    // Faster
    while(taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }

    clearTaskFromLocalStorage();

    e.preventDefault();
  }

  function clearTaskFromLocalStorage() {
    localStorage.clear();
  }

  function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task){
      const item = task.firstChild.textContent;
      if (item.toLowerCase().indexOf(text) != -1){
        task.style.display = 'block';
      } else {
        task.style.display = 'none';
      }
    });

  }
