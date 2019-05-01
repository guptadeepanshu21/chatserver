

let socket = io('http://localhost:3000');

socket.on('disconnect', function () {
    setTitle('Disconnected');
});
socket.on('connect', function () {
    setTitle('Connected');
});
socket.on('message', (message) => {
    printMessage(message);
});
document.forms[0].onsubmit = function () {
    let input = document.getElementById('message');
    console.log('hi', input);
    printMessage(input.value);
    socket.emit('chat',input.value);
    input.value = '';
}
function setTitle(title) {
    document.querySelector('h1').innerHTML = title;
}
function printMessage(message) {
    let p = document.createElement('p');
    p.innerText = message;
    document.querySelector('div.messages').appendChild(p);
}