import React from 'react'
import './chat.css'
function ChatLogIn(){
    return(
// <head>
//   <meta charset="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <meta http-equiv="X-UA-Compatible" content="ie=edge" />
//   <link
//     rel="stylesheet"
//     href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
//     integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk="
//     crossorigin="anonymous"
//   />
//   <link rel="stylesheet" href="css/style.css" />
//   <title>Lets Chat</title>
// </head>

  <div class="join-container">
    <header class="join-header">
      <h1><i class="fas fa-smile"></i> LetsChat</h1>
    </header>
    <main class="join-main">
      <form action="chat-Room.jsx">
        <div class="form-control">
          <label for="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter username..."
            required
          />
        </div>
        <div class="form-control">
          <label for="room">Room</label>
          <input
            type="text"
            name="room"
            id="room"
            placeholder="Enter Room Name..."
            required
          />
          // <select name="room" id="room">
          //   <option value="Web Development">Web Development</option>
          //   <option value="AI/ML">AI/ML</option>
          //   <option value="IOT">IOT</option>
          //   <option value="App Development">App Development</option>
          //   <option value="Blockchain">Blockchain</option>
          //
          // </select>
        </div>
        <button type="submit" class="btn">Join Chat</button>
      </form>
    </main>
  </div>

    );
}


export default ChatLogIn;
