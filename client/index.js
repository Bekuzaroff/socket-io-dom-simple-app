 const socket = io("http://localhost:8000");

 socket.on('connect', (response) => {
    console.log(response);
 });

 let button = document.getElementById('send_button')
 let ed = document.getElementById('input_name')
 let ed2 = document.getElementById('input_message')
 let messages_p = document.getElementById('messages_p');

 button.addEventListener('click', (ev) => {
    socket.emit('message', JSON.stringify({
        name: ed.value,
        message: ed2.value
    }))
 });

 socket.on('all_messages', (data) => {
    messages_p.textContent = data;
    console.log(data);
 })