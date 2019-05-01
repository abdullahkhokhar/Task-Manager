// DEFINE USER INTERFACE VARIABLES
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection'); // the ul
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter'); // the filter
const taskInput = document.querySelector('#task');

// Load all event listners
loadEventListners();

// Create load all event listner functions
function loadEventListners(){
  // DOM LOAD event
  document.addEventListener('DOMContentLoaded', getTasks);
  // add events to tasks
  form.addEventListener('submit', addTask);
  // will use event delegation and add an event listner to the ul itself
  taskList.addEventListener('click', removeTask);
  // clear ALL Tasks
  clearBtn.addEventListener('click', removeAll);
  // Filter through the task events
  filter.addEventListener('keyup', filterTasks);
}

// add task function
// event handler so will take in the event object
function addTask(e){
  if(taskInput.value == ''){
    alert('No Task Provided To Add');
  }

  // create li element
  const li = document.createElement('li');
  // add the class
  li.className = 'collection-item'; // in matteralize your ul should have a class of collection and li of collection-item
  // create the text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // create new link element
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content'; // if you want something on the right of a list item in materialize, need to be on the right of secondary content
  // Add icon htmk
  link.innerHTML = '<i class= "fas fa-minus-circle"></i>';
  // append the link to the li
  li.appendChild(link);
  // append the li to the ul
  taskList.appendChild(li);

  //store in local storeage
  storeTaskinLocalStorage(taskInput.value);

  // Clear input
  taskInput.value = '';
  e.preventDefault();
}

function storeTaskinLocalStorage(task){
  let tasks;
  if(localStorage.getItem('tasks') == null){
    tasks = [];
  }else{
    tasks = JASON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(){
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure you want to delete?')){
      e.target.parentElement.parentElement.remove();
    }
  }
}

function removeAll(){
  while(taskList.firstChild){ // while still something in the list
    taskList.removeChild(taskList.firstChild); // remove first while there still is one
  }
}

function filterTasks(e){
  const input =  e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(input) != -1){
      task.style.display = 'block';
    }else{
      task.style.display = 'none';
    }
  });  // query selector all returns a node list so can use for each
}

// get tasks
function getTasks(){
  let tasks;
  if(localStorage.getItem('tasks') == null){
    tasks = [];
  }else{
    tasks = JASON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task){ // for each task we create the element
    // create li element
    const li = document.createElement('li');
    // add the class
    li.className = 'collection-item'; // in matteralize your ul should have a class of collection and li of collection-item
    // create the text node and append to li
    li.appendChild(document.createTextNode(task));
    // create new link element
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content'; // if you want something on the right of a list item in materialize, need to be on the right of secondary content
    // Add icon htmk
    link.innerHTML = '<i class= "fas fa-minus-circle"></i>';
    // append the link to the li
    li.appendChild(link);
  })
}
