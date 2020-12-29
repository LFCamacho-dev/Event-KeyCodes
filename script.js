const eventKey = document.getElementById('eventKey');
const eventKeyCode = document.getElementById('eventKeyCode');
const eventCode = document.getElementById('eventCode');


window.addEventListener("keypress", (e) => {
  console.log(e);
  // eventKey.firstChild.textContent = (e.key);
  eventKey.firstChild.textContent = (e.key === ' ' ? 'Space' : e.key);
  eventKeyCode.firstChild.textContent = (e.keyCode);
  eventCode.firstChild.textContent = (e.code);


});
