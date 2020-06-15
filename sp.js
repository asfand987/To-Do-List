function createList() {
  let text =  document.getElementById('userInput').value;
  let listNode = document.getElementById('list');
  let liNode = document.createElement("Li");
  let txtNode = document.createTextNode(text);

  var dBtn = document.createElement("button");
  dBtn.appendChild(document.createTextNode("X"));

  liNode.append(dBtn);

  liNode.appendChild(txtNode);
  listNode.appendChild(liNode);
  clearInput();

  dBtn.onclick = function() {deleteListItem(dBtn)};
  //dBtn.addEventListener("click", deleteListItem(dBtn));

}

function clearInput() {
    document.getElementById('userInput').value = '';
}

function deleteListItem(e)
{
  console.log("testing");
  e.parentNode.parentNode.removeChild(e.parentNode)
}
