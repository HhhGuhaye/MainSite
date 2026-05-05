<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Mini Chat</title>
  <style>
    body {
      margin: 0;
      font-family: Arial;
      background: #0f0f0f;
      color: white;
      display: flex;
      flex-direction: column;
      height: 100vh;
    }
    #top {
      padding: 10px;
      background: #1a1a1a;
      display: flex;
      gap: 10px;
    }
    input {
      padding: 8px;
      border: none;
      border-radius: 6px;
    }
    button {
      padding: 8px 12px;
      border: none;
      border-radius: 6px;
      background: #2a2a2a;
      color: white;
      cursor: pointer;
    }
    #chat {
      flex: 1;
      padding: 10px;
      overflow-y: auto;
    }
    .msg {
      margin: 5px 0;
      padding: 8px;
      background: #1e1e1e;
      border-radius: 6px;
    }
    #bottom {
      display: flex;
      padding: 10px;
      gap: 10px;
      background: #1a1a1a;
    }
    #message {
      flex: 1;
    }
  </style>
</head>
<body>

<div id="top">
  <input id="room" placeholder="Код комнаты">
  <button onclick="connect()">Подключиться</button>
</div>

<div id="chat"></div>

<div id="bottom">
  <input id="message" placeholder="Сообщение">
  <button onclick="send()">Отправить</button>
</div>

<script>
let ws;
let room = "";
let userId = Math.random().toString(36).substring(2, 8);

function connect() {
  room = document.getElementById("room").value;
  if (!room) return alert("Введите код комнаты");

  ws = new WebSocket("wss://echo.websocket.events"); // публичный тест сервер

  ws.onopen = () => {
    addMessage("SYSTEM", "Подключено к комнате: " + room);
  };

  ws.onmessage = (event) => {
    try {
      let data = JSON.parse(event.data);
      if (data.room === room && data.user !== userId) {
        addMessage(data.user, data.text);
      }
    } catch {}
  };
}

function send() {
  let input = document.getElementById("message");
  let text = input.value;
  if (!text || !ws) return;

  let data = {
    room: room,
    user: userId,
    text: text
  };

  ws.send(JSON.stringify(data));
  addMessage("YOU", text);
  input.value = "";
}

function addMessage(user, text) {
  let chat = document.getElementById("chat");
  let div = document.createElement("div");
  div.className = "msg";
  div.innerText = user + ": " + text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}
</script>

</body>
</html>