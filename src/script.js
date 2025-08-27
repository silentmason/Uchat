const chatArea = document.getElementById('chat-area');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

const socket = new WebSocket('ws://localhost:8080'); // Replace with your WebSocket server URL

socket.onopen = () => {
    console.log('Connected to WebSocket server');
};

socket.onmessage = (event) => {
    const message = event.data;
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    chatArea.appendChild(messageElement);
};

socket.onclose = () => {
    console.log('Disconnected from WebSocket server');
};

sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    socket.send(message);
    messageInput.value = '';
});