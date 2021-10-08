import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Message } from './Message';

function ChatRoom() {
  const [chats, setchats] = useState([]);
  const [username, setusername] = useState("");
  const [msg, setmsg] = useState([]);

  console.log(chats);

  const submitMessage = (event) => () => {
    event.preventDefault();
    console.log(chats);
    setchats(event.target[0].value);
    console.log(event.target[0].value);
  }

  return (
    <div>
      <ul className="chats" ref={chats}>
        {
          chats.map((chat) => {
            <Message chat={chat} user={username} />
          }
          )
        }
      </ul>
      <form className="input" onSubmit={(event) => submitMessage(event)}>
        <input type="text" ref={msg} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom)

