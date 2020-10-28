// Selectors for either open ToDo or Note
const openTodo = document.getElementsByClassName('.openTodo');
const openNote = document.getElementsByClassName('.openNote');
const addData = document.querySelector('.addData');

// Hide both container
$('.addTodos').hide();
$('.addNotes').hide();

// Show Todo container and hide Hide container
$('.openTodo').click(function () {
  // Show Todo container and hide Note container
  $('.addNotes').hide();
  $('.addTodos').show();
});

// Show Note container and hide Todo container
$('.openNote').click(function () {
  $('.addTodos').hide();
  $('.addNotes').show();
});

//Selectors for Note form
const title = document.querySelector('.note_input');
const note = document.querySelector('.note_textarea');
const noteContainer = document.querySelector('.note_container');
const noteButton = document.querySelector('.note_button');

let notesList = JSON.parse(localStorage.getItem(noteContainer));

//Selectors for Todo form
const todoInput = document.querySelector('.todo_input');
const todoButton = document.querySelector('.todo_button');
const todoList = document.querySelector('.todo_list');
const filterOption = document.querySelector('.filter_todo');

//Event Listener for add Todo list items
document.addEventListener('DOMContentLoaded', () => {
  getFromLocalTodo();
  getFromLocalNotes();
});
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

//Event Listener for add Notes list items
noteButton.addEventListener('click', addNote);
//noteContainer.addEventListener('click', deleteNote);
// noteContainer.addEventListener('click',editNote);

// -----------------Note --------------------

//function to add note
function addNote(e) {
  e.preventDefault();

  //Create note div
  const noteDiv = document.createElement('div');
  noteDiv.classList.add('noteCard');

  if (title.value == '' || note.value == '') {
    return alert('Please enter both title and note');
  } else {
    const tools = document.createElement('div');
    tools.classList.add('tools');

    //edit button added to each note and append to tool div
    const editButton = document.createElement('button');
    editButton.innerHTML = '<i class="fas fa-edit"></i>';
    editButton.classList.add('editBtn');
    tools.appendChild(editButton);

    //delete button added to each note and append to tool div
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('deleteBtn');
    tools.appendChild(deleteButton);

    //append tool div to note div
    noteDiv.appendChild(tools);

    // title add to note div
    const noteTitle = document.createElement('h5');
    noteTitle.classList.add('noteTitle');
    noteTitle.innerText = title.value;
    noteDiv.appendChild(noteTitle);

    const noteText = document.createElement('p');
    noteText.classList.add('noteText');
    noteText.innerText = note.value;
    noteDiv.appendChild(noteText);

    // append noteDiv to container
    noteContainer.appendChild(noteDiv);

    // Add to Local Storage
    // saveToLocalNotes(title.value, note.value);

    //set both value again blank
    title.value = '';
    note.value = '';
  }
}

// function deleteNote(e){
//     const deleteNote = e.target;
//     console.log(deleteNote);
//     // Delete item
//     if (deleteNote.classList[0] === 'deleteBtn') {
//       const noteEl = deleteNote.parentElement;
//       noteEl.classList.add('delete');
//       removeLocalNote(note);
//       deleteNote.addEventListener('transitionend', function () {
//         deleteNote.remove();
//       });
//     }
//   }

// function checkNotesList(el1,el2) {
//   let notes = localStorage.getItem('note_container');
//   if (notes == null) {
//     newNotes = {};
//   } else {
//     newNotes = JSON.parse(notes);
//   }
//   return this.newNotes;
// }

// function saveToLocalNotes(el1, el2) {
//   let newNotes = checkNotesList();
//   newNotes.title = el1;
//   newNotes.note = el2;
//   notesList.push(newNotes);
//   console.log(notesList);
//   localStorage.setItem('notes', JSON.stringify(notesList));
// }

// function removeLocalNote(note) {
//   notes = checkNotesList(note);
//   const noteIndex = note.children[0].innerHTML;
//   notes.splice(notes.indexOf(noteIndex), 1);
//   localStorage.setItem('notes', JSON.stringify(notes));
// }

function getFromLocalNotes() {
  let notes = localStorage.getItem('note_container');
    if (notes == null) {
      newNotes = {};
    } else {
      newNotes = JSON.parse(notes);
    }
  newNotes.forEach(function (element) {
    console.log('hello ,' + this.element);
    const noteDiv = document.createElement('div');
    noteDiv.classList.add('noteCard');

    const tools = document.createElement('div');
    tools.classList.add('tools');

    //edit button added to each note and append to tool div
    const editButton = document.createElement('button');
    editButton.innerHTML = '<i class="fas fa-edit"></i>';
    editButton.classList.add('editBtn');
    tools.appendChild(editButton);

    //delete button added to each note and append to tool div
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('deleteBtn');
    tools.appendChild(deleteButton);

    //append tool div to note div
    noteDiv.appendChild(tools);

    // title add to note div
    const noteTitle = document.createElement('h5');
    noteTitle.classList.add('noteTitle');
    noteTitle.innerText = element.title;
    noteDiv.appendChild(noteTitle);

    const noteText = document.createElement('p');
    noteText.classList.add('noteText');
    noteText.innerText = element.note;
    noteDiv.appendChild(noteText);

    // append noteDiv to container
    noteContainer.appendChild(noteDiv);
  });
}

// -------------------Todo ---------------------
//functions to add todo item
function addTodo(e) {
  e.preventDefault();
  //Todo div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  //Create li
  const newTodo = document.createElement('li');
  if (todoInput.value !== '') {
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo_item');
    todoDiv.appendChild(newTodo);

    //Add to local storage
    saveToLocalTodo(todoInput.value);

    //check mark button
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add('complete_btn');
    todoDiv.appendChild(completeButton);

    //trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash_btn');
    todoDiv.appendChild(trashButton);

    //append div to ul
    todoList.appendChild(todoDiv);

    //clear todo input value
    todoInput.value = '';
  } else {
    alert('enter todo item');
  }
}

function deleteCheck(e) {
  const item = e.target;
  // Delete item
  if (item.classList[0] === 'trash_btn') {
    const todo = item.parentElement;
    todo.classList.add('delete');
    removeLocalTodo(todo);
    todo.addEventListener('transitionend', function () {
      todo.remove();
    });
  }
  if (item.classList[0] === 'complete_btn') {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}

function filterTodo(e) {
  const todoLi = todoList.childNodes;
  todoLi.forEach(function (todo) {
    switch (e.target.value) {
      case 'all':
        todo.style.display = 'flex';
        break;
      case 'completed':
        if (todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
      case 'remaining':
        if (!todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
    }
  });
}

function checkTodoList(todo) {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  return todos;
}

function saveToLocalTodo(todo) {
  todos = checkTodoList();
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}

function getFromLocalTodo() {
  todos = checkTodoList();
  todos.forEach(function (todo) {
    //Todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //Create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todo;
    newTodo.classList.add('todo_item');
    todoDiv.appendChild(newTodo);
    //check mark button
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add('complete_btn');
    todoDiv.appendChild(completeButton);
    //trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash_btn');
    todoDiv.appendChild(trashButton);
    //append div to ul
    todoList.appendChild(todoDiv);
  });
}

function removeLocalTodo(todo) {
  todos = checkTodoList(todo);
  const todoIndex = todo.children[0].innerHTML;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem('todos', JSON.stringify(todos));
}
