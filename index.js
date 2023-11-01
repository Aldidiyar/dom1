function addTask() {
    //function for adding task
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    
    if (taskInput.value.trim() !== '') {
        //checking if input is not empty
        var taskHTML = '<li class="list-group-item d-flex justify-content-between"> <input class="form-check-input me-1" type="checkbox" onclick="completeTask(this)"> <label class="form-check-label" for="firstCheckbox">' + taskInput.value + '</label> <button type="button" class="btn btn-primary ml-9" onclick="deleteTask(this)">Delete</button> </li>' ;
        //adding list elements with chekbox and delete button
        taskList.innerHTML += taskHTML;

        taskInput.value = '';
    }
}

function completeTask(checkbox) {
    //saving checkboxex
    var taskItem = checkbox.parentNode;
    taskItem.classList.toggle('completed');
}

function deleteTask(button) {
    //deleting tasks
    var taskItem = button.parentNode;
    taskItem.parentNode.removeChild(taskItem);
}

function formValidation()
{
    document.getElementById('errorMessages').innerHTML = '';
    //retrieving element with id errorMessages
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    //setting variables values from form

    if (name === '' || email === '' || message === '') {
        //checking if input is empty
        displayError('All fields are required');
        return;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //regex for email 
    if (!emailRegex.test(email)) {
        displayError('Invalid email format');
        return;
    }
    alert('Form submitted successfully!');
}

function displayError(message) {
    //displaing error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(message));
    //creating text node with message
    errorMessages.appendChild(errorDiv);
}
function startTimer() {
    var duration = parseInt(document.getElementById('duration').value);
    //getting duration from user's input
    var timerDisplay = document.getElementById('timer');
    var startTime;
    if (isNaN(duration) || duration <= 0) {
        //checking if duration is valid number
        alert('Please enter a valid duration.');
        return;
      }

    function updateTimer(timestamp) {
        if (!startTime) startTime = timestamp;
        //calculating elsapsed time
        var elapsedTime = timestamp - startTime;
        //calculating remaining time
        var remainingTime = Math.max(0, duration - Math.floor(elapsedTime / 1000));

        if (remainingTime <= 0) {
            //displaying message when remaining time is 0
            timerDisplay.innerHTML = 'Countdown Complete!';
        } else {
            //displaying time
            timerDisplay.innerHTML = 'Time remaining: ' + remainingTime + ' seconds';
            var color;
            if (remainingTime > 10) {
                color = 'green';
            } else {
                color = 'red';
            }
            //set timer color to red if duration is less than 10

            timerDisplay.style.color = color;
            requestAnimationFrame(updateTimer);
        }
    }

    requestAnimationFrame(updateTimer);
}



function darkMode()
{
    //changing bg color
    document.body.style.backgroundColor = '#222222';
}
function lightMode()
{
    //changing bg color
    document.body.style.backgroundColor = '#E6F2FF';
}

const newsCards = document.querySelectorAll('.card');
//retrieving all cards
newsCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('hovered');
  });
  //adds event listener when mouse is pointing to the card 

  card.addEventListener('mouseleave', () => {
    card.classList.remove('hovered');
  });
  //adds event listener when mouse is not pointing to the card
});
