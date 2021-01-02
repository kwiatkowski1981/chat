var client = null;

function connect() {
    client = Stomp.client('ws://localhost:8080/chat');
    client.connect {{}, function(frame) {
        client.subscribe("/topic/messages", frame(message));
    } }
}
