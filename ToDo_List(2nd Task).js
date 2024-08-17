window.addEventListener("load", getlocalTodo);

Addbtn.addEventListener("click", () => {
  let data = Text.value.trim();
  if (data.length <= 0) {
    alert("Write something to add.");
    return false;
  }

  const list = document.createElement("li");
  const para = document.createElement("p");
  const todo = document.createElement("ul");
  const editbtn = document.createElement("i");
  const completebtn = document.createElement("i");
  const removebtn = document.createElement("i");

  list.appendChild(para);
  completebtn.classList.add("fa-solid", "fa-check");
  list.appendChild(completebtn);
  editbtn.classList.add("fa-solid", "fa-file-pen");
  list.appendChild(editbtn);
  removebtn.classList.add("fa-solid", "fa-trash");
  list.appendChild(removebtn);
  All_list.appendChild(todo);
  todo.appendChild(list);
  para.innerHTML = data;

  completebtn.addEventListener("click", () => {
    para.style.textDecoration = "line-through";
    updateLocalTodos();
  });

  removebtn.addEventListener("click", () => {
    list.remove();
    updateLocalTodos();
  });

  editbtn.addEventListener("click", () => {
    Text.value = data;
    Text.focus();
    Addbtn.innerText = "Edit";
    Addbtn.addEventListener("click", () => {
      Addbtn.innerText = "Add";
      list.remove();
      updateLocalTodos();
    });
  });

  saveLocalTodo(data);
  Text.value = "";
});

const saveLocalTodo = (todoText) => {
  let todos = localStorage.getItem("todos") === null ? [] : JSON.parse(localStorage.getItem("todos"));
  todos.push(todoText);
  localStorage.setItem("todos", JSON.stringify(todos));
};

const getlocalTodo = () => {
  let todos = localStorage.getItem("todos") === null ? [] : JSON.parse(localStorage.getItem("todos"));
  todos.forEach((todo) => {
    const list = document.createElement("li");
    const para = document.createElement("p");
    const todoUl = document.createElement("ul");
    const editbtn = document.createElement("i");
    const completebtn = document.createElement("i");
    const removebtn = document.createElement("i");

    para.innerHTML = todo;
    list.appendChild(para);
    completebtn.classList.add("fa-solid", "fa-check");
    list.appendChild(completebtn);
    editbtn.classList.add("fa-solid", "fa-file-pen");
    list.appendChild(editbtn);
    removebtn.classList.add("fa-solid", "fa-trash");
    list.appendChild(removebtn);
    All_list.appendChild(todoUl);
    todoUl.appendChild(list);

    completebtn.addEventListener("click", () => {
      para.style.textDecoration = "line-through";
      updateLocalTodos();
    });

    removebtn.addEventListener("click", () => {
      list.remove();
      updateLocalTodos();
    });

    editbtn.addEventListener("click", () => {
      Text.value = todo;
      Text.focus();
      Addbtn.innerText = "Edit";
      Addbtn.addEventListener("click", () => {
        Addbtn.innerText = "Add";
        list.remove();
        updateLocalTodos();
      });
    });
  });
};

const updateLocalTodos = () => {
  let todos = [];
  document.querySelectorAll("#all_list li p").forEach((para) => {
    todos.push(para.innerText);
  });
  localStorage.setItem("todos", JSON.stringify(todos));
};
