function createList() {
  var text =  document.getElementById('userInput').value;
  var listNode = document.getElementById('list');
  var liNode = document.createElement("Li");
  var txtNode = document.createTextNode(text);

  liNode.appendChild(txtNode);
  listNode.appendChild(liNode);
  clearInput();
}

function clearInput() {
    document.getElementById('userInput').value = '';
}
