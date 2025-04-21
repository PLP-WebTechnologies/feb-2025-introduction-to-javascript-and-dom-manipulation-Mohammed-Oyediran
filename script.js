// This is a JavaScript file that contains functions to manipulate the DOM and handle events.
// It includes functions to change the background color of a button, toggle a subscription message,
function subscribeButtonClicked() {
    let subscribeButton = document.getElementById("js-subscribe-button");
    let subscribeText = document.getElementById("js-subscribe-message");

    if (subscribeButton.innerHTML === "Subscribed") {
        subscribeButton.innerHTML = "subscribe";
        subscribeButton.style.backgroundColor = "red";
        subscribeText.innerHTML = "Click to subscribe";
    } else {
        subscribeButton.innerHTML = "Subscribed";
        subscribeButton.style.backgroundColor = "rgb(60, 60, 60)";
        subscribeText.innerHTML = "Thank you for subscribing!";
    }
}

//Add/remove todo items from a list.

function addTodo() {
    let todoInput = document.querySelector("#js-todo-input");
    let listItems = document.querySelector("#js-todo-list");
    let todoItem = document.createElement("li");

    if (todoInput.value.trim() === "") {
        alert("Please enter a todo item.");
        return;
    } else {
        todoItem.textContent = todoInput.value;
        listItems.appendChild(todoItem);
        todoInput.value = "";
    }
}

function removeTodo() {
    let listItems = document.getElementsByTagName("li");

    if (listItems.length === 0) {
        alert("There is no item to remove.");
        return;
    } else {
        let lastItem = listItems[listItems.length - 1];
        lastItem.remove();
    }
}
