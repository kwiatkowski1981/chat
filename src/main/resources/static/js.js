const button = document.querySelector('.btn');

let client = null;

const showMessage = value => {
    const newResponse = document.createElement('p');
    newResponse.appendChild(document.createTextNode(value));
    const response = document.querySelector('.response');
    response.appendChild(newResponse);
};

const connect = () => {
    client = Stomp.client('ws://localhost:8080/chat');
    console.log(client);
    client.connect({}, function (frame) {
        client.subscribe("/topic/messages", function (message) {
            showMessage(JSON.parse(message.body).value);

        });
    })
};

const sendMessage = () => {
    const messageToSend = document.querySelector('.messageToSend').value;
    console.log(messageToSend);
    client.send("/app/chat", {}, JSON.stringify({'value': messageToSend}));
};

window.addEventListener('DOMContentLoaded', connect, false);
button.addEventListener('click', sendMessage);
