var list = document.getElementById("list");

function addTodo() {
    var todo_item = document.getElementById("todo-item");


    // create li tag with text node
    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)
    // creating font awasome image
    var createli=document.createElement("i");
    createli.setAttribute("class","fas fa-trash container d-flex justify-content-center");
    createli.setAttribute("onclick", "deleteItem(this)")

    li.appendChild(createli)

      // create edit button
    var editBtn = document.createElement("i");
    editBtn.setAttribute("class","fas fa-edit container d-flex justify-content-center");
    var editText = document.createTextNode("EDIT")
    editBtn.appendChild(editText)
    editBtn.setAttribute("onclick", "editItem(this)")

    list.appendChild(li)
    li.appendChild(editBtn)

    todo_item.value = ""
}

function deleteItem(e) {
    e.parentNode.remove()
}

function editItem(e) {
  var val = prompt("Enter updated value",e.parentNode.firstChild.nodeValue)
  e.parentNode.firstChild.nodeValue = val;
}

function deleteAll() {
    list.innerHTML = ""
}

