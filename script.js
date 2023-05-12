const tasks = [
  {
    titulo: "Comprar comida para o gato",
    tipo: "Urgente",
  },
  {
    titulo: "Consertar Computador",
    tipo: "Prioritário",
  },
  {
    titulo: "Beber água",
    tipo: "Normal",
  },
];

//______________________________________________
let buttonAddTask = document.querySelector("#btnSubmit");

buttonAddTask.addEventListener("click", function (e) {
  e.preventDefault();
  let inputTask = document.querySelector("#input_title").value;
  let selectPriority = document.querySelector("#input_priority").value;

  let newObj = {};
  newObj.titulo = inputTask;
  newObj.tipo = selectPriority;

  // *o de cima ou esse
  // let newObj = {
  //   titulo: inputTask,
  //   tipo: selectPriority,
  // };

  tasks.push(newObj);

  renderElements(tasks);
});

//_______________________________________________
function createCard(taskInfo, index) {
  // Criando elementos necessários
  const li = document.createElement("li");
  const div = document.createElement("div");
  const span = document.createElement("span");
  const p = document.createElement("p");

  // Adicionando o titulo da tarefa como texto do paragrafo
  p.innerText = taskInfo.titulo;

  // Adicionando classes nos tipos em relação à urgência
  if (taskInfo.tipo == "Urgente") {
    span.classList.add("span-urgent");
  } else if (taskInfo.tipo == "Prioritário") {
    span.classList.add("span-priority");
  } else if (taskInfo.tipo == "Normal") {
    span.classList.add("span-normal");
  }

  // Adicionando span e paragrafo a div
  div.appendChild(span);
  div.appendChild(p);

  // Criando botão para deletar tarefa
  const button = document.createElement("button");

  // Adicionando icone ao botão
  button.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';

  //Criando um evento de remover ao clicar no botão
  button.addEventListener("click", function (e) {
    tasks.splice(index, 1);

    renderElements(tasks);
  });

  // Adicionando a div e o botão de deletar ao list item
  li.appendChild(div);
  li.appendChild(button);

  return li;
}

function renderElements(taskList) {
  const htmlList = document.querySelector(".tasks"); //é a ul
  htmlList.innerHTML = "";

  for (let i = 0; i < taskList.length; i++) {
    let individualTask = taskList[i];

    let card = createCard(individualTask, i);
    htmlList.appendChild(card);
  }
}

renderElements(tasks);
