window.onload = function() {
  document.getElementById('addTableBtn').addEventListener('click', addTable);
}

function createTRNode(colNodes) {
  let trNode = document.createElement("tr");
  colNodes.forEach(function(colNode) {
    trNode.appendChild(colNode);
  })
  return trNode;
}

function createTDNode(childNode) {
  let tdNode = document.createElement("td");
  tdNode.appendChild(childNode);
  return tdNode;
}

function createTxtNode(txt) {
  let txtNode = document.createTextNode(txt);
  return txtNode;
}

function createButton(buttonText, eventType, eventHandler) {
  let buttonElement = document.createElement("button");
  let buttonTextElement = document.createTextNode(buttonText);
  buttonElement.appendChild(buttonTextElement);
  buttonElement.addEventListener(eventType, eventHandler);
  return buttonElement;
}

function edit(targetNode) {
  let inputElement = document.createElement("input");
  inputElement.placeholder = "Enter Cell (x,y)";
  targetNode.replaceChild(inputElement, targetNode.childNodes[0]);
}

function addTable() {
  const tableNode = document.createElement("table");
  for(let i = 0; i < 3; i++) {
    let col1 = createTDNode(createTxtNode("Cell (" + i + ", 0)"));
    let col2 = createTDNode(createButton("Edit", "click", () => edit(col1)));
    tableNode.appendChild(createTRNode([col1, col2]));
  }
  document.getElementById("root").appendChild(tableNode);
}
