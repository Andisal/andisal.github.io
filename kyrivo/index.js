function createMessage(title, body) {
  var container = document.createElement('div');

  container.innerHTML = '<div class="my-message"> \
    <div class="my-message-title">' + title +'</div> \
    <div class="my-message-body">' + body +'</div> \
    <input class="my-message-ok" type="button" value="НИХУЯ"/> \
  </div>';

  return container.firstChild;
}

function positionMessage(elem) {
  elem.style.position = 'absolute';

  var scroll = document.documentElement.scrollTop || document.body.scrollTop;
  elem.style.top = scroll + 200 + 'px';

  elem.style.left = Math.floor(document.body.clientWidth/2) - 150 + 'px';
}

function addCloseOnClick(messageElem) {
  var input = messageElem.getElementsByTagName('INPUT')[0];
  input.onclick = function() {
    messageElem.parentNode.removeChild(messageElem);
  }
}


function setupMessageButton(title, body) {
  var messageElem = createMessage(title, body);
  positionMessage(messageElem);
  addCloseOnClick(messageElem);
  document.body.appendChild(messageElem);
}