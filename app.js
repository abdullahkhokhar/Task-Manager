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
  // add events to tasks
  form.addEventListener('submit', addTask);

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
  // Clear input
  taskInput.value = '';



  e.preventDefault();
}
