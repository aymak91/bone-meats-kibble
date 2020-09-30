import React from "react";
import { Link } from "react-router-dom";
import moment from 'moment'
import NavBarContainer from "../nav/navbar_container";
import BackButton from "../back_button/back_button"

class Messages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      sendingDog: {},
      receivingDog: {},
      body: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteMessage = this.deleteMessage.bind(this);
    this.websocketChat = this.websocketChat.bind(this);
  }

  async componentDidMount() {
    await this.props.fetchMessages();
    await this.setState({ messages: this.props.messages });

    await this.props.fetchSendingDog();
    await this.setState({ sendingDog: this.props.currentDog });

    await this.props.fetchReceivingDog();
    await this.setState({ receivingDog: this.props.receivingDog });

    const sendBtn = document.querySelector("#send");
    const messages = document.querySelector("#messages");
    const messageBox = document.querySelector("#messageBox");

    this.websocketChat(sendBtn, messages, messageBox);
  }

  async componentDidUpdate(prevProps) {
    if (!this.props.messages) return null;
    if (this.state.messages.length === 0) return null;

    if ((await prevProps.messages.length) !== this.props.messages.length) {
      await this.props.fetchMessages();
      this.setState({ messages: this.props.messages });
    }

    // if (await this.props.currentDog === null) return null
    // await this.props.fetchSendingDog();
    // await this.setState({ sendingDog: this.props.currentDog });

    // await this.props.fetchReceivingDog();
    // await this.setState({ receivingDog: this.props.receivingDog });
  }

  async handleSubmit(e) {
    e.preventDefault();

    const message = await {
      body: this.state.body,
    };

    await this.props.createMessage(message, this.props.history);
    await this.props.fetchMessages();
    await this.setState({ messages: this.props.messages });
    await this.setState({
      body: "",
    });
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  deleteMessage(idx) {
    this.state.messages.splice(idx, 1);
    this.setState({ messages: this.state.messages });
  }

  websocketChat(sendBtn, messages, messageBox) {
    let ws;
    let props = this.props;

    function showMessage(message) {
      messages.textContent += `\n\n${message}`;
      messages.scrollTop = messages.scrollHeight;
      messageBox.value = "";
    }

    function init() {
      if (ws) {
        ws.onerror = ws.onopen = ws.onclose = null;
        ws.close();
      }

      ws = new WebSocket("ws://localhost:6969");
      ws.onopen = () => {
        console.log("Connection opened!");
      };
      ws.onmessage = ({ data }) => showMessage(data);
      ws.onclose = function () {
        ws = null;
      };
    }

    sendBtn.onclick = function() {
      if (!ws) {
        showMessage("No WebSocket connection :(");
        return;
      }

      ws.send(messageBox.value);

      const message = {
        body: messageBox.value,
      };

      props.createMessage(message, props.history);

      showMessage(messageBox.value);
    };

    // sendBtn.keypress(function(e) {

    //   if (e.keyCode === 13) {
    //     if (!ws) {
    //       showMessage("No WebSocket connection :(");
    //       return;
    //     }
  
    //     ws.send(messageBox.value);
  
    //     const message = {
    //       body: messageBox.value,
    //     };
  
    //     props.createMessage(message, props.history);
  
    //     showMessage(messageBox.value);
    //   }

    // })


    init();
  }

  render() {
    // if (!this.props.messages) return null;

    // if (!this.props.matches) return null;
    // if (this.state.matches.length === 0) return null;

    const messages = this.state.messages;
    const sendingDog = this.state.sendingDog;
    const receivingDog = this.state.receivingDog;

    if (sendingDog === undefined) return null;
    let chatMessage;
    let avatar;

    if (!this.props) {
      return null;
    }

<<<<<<< HEAD
    return (
      <div className="messages-bgd">
        <NavBarContainer />

        <div className="messages-form">
          <BackButton />
          <h1 className="message-h1">{`${sendingDog.name}, start chatting with ${receivingDog.name}`}</h1>
          <h2 className="message-h2">
            {" "}
            {/* <img className="message-avatar" src={`${message.sendingDog.imageURL}`} /> */}
            <img
              className="message-avatar"
              // src="https://cms-tc.pbskids.org/global/show-icons/circle/Clifford_200x200_white.png?mtime=20191120142954"
              src={receivingDog.imageURL}
            />
            Messages with {receivingDog.name}{" "}
            <div className="back-to-matches">
              <Link
                to={`/${sendingDog._id}/matches`}
                class="fas far fa-arrow-alt-circle-left"
              >
                Back to Matches
              </Link>
            </div>
          </h2>
          <div className="messages-container">
            {messages.map((message, idx) => {
              // console.log(receivingDog)
              // console.log(sendingDog)
              console.log(message, idx);
              chatMessage =
                message.sendingDog.name !== this.props.currentDog.name
                  ? "chat-message-left"
                  : "chat-message-right";
              avatar =
                message.sendingDog.name !== this.props.currentDog.name
                  ? receivingDog
                  : sendingDog;
              return (
                <li className={chatMessage} key={message._id}>
                  <img className="message-avatar" src={`${avatar.imageURL}`} />
                  <div>
                    <div className="message-header">
                      <div>{`${message.sendingDog.name}`}</div>
                      {/* <div className="timestamp">
=======
    render() {
      // if (!this.props.messages) return null;

      // if (!this.props.matches) return null;
      // if (this.state.matches.length === 0) return null;
      
      const messages = this.state.messages;
      const sendingDog = this.state.sendingDog;
      const receivingDog = this.state.receivingDog;

      if (sendingDog === undefined) return null
      let chatMessage 
      let avatar

      return (
        <div className="messages-bgd">
          <NavBarContainer className="navbarcontainer" />

          <div className="messages-form">
            <BackButton />
            <h1 className="message-h1">{`${sendingDog.name}, start chatting with ${receivingDog.name}`}</h1>
            <h2 className="message-h2">
              {" "}
              {/* <img className="message-avatar" src={`${message.sendingDog.imageURL}`} /> */}
              <img
                className="message-avatar"
                // src="https://cms-tc.pbskids.org/global/show-icons/circle/Clifford_200x200_white.png?mtime=20191120142954"
                src={receivingDog.imageURL}
              />
              Messages with {receivingDog.name}{" "}
              <div className="back-to-matches">
                <Link
                  to={`/${sendingDog._id}/matches`}
                  class="fas far fa-arrow-alt-circle-left"
                >
                  Back to Matches
                </Link>
              </div>
            </h2>
            <div className="messages-container">
              {messages.map((message, idx) => {
                // console.log(receivingDog)
                // console.log(sendingDog)
                console.log(message, idx);
                chatMessage =
                  message.sendingDog.name !== this.props.currentDog.name
                    ? "chat-message-left"
                    : "chat-message-right";
                avatar =
                  message.sendingDog.name !== this.props.currentDog.name
                    ? receivingDog
                    : sendingDog;
                return (
                  <li className={chatMessage} key={message._id}>
                    <img
                      className="message-avatar"
                      src={`${avatar.imageURL}`}
                    />
                    <div>
                      <div className="message-header">
                        <div>{`${message.sendingDog.name}`}</div>
                        {/* <div className="timestamp">
>>>>>>> master
                        {moment().format("HH:mm")}
                      </div> */}
                      </div>
                      <div className="message-body">
                        <span>{`${message.body}`}</span>
                      </div>
                    </div>
<<<<<<< HEAD
                    <div className="message-body">
                      <span>{`${message.body}`}</span>
                    </div>
                  </div>
                </li>
              );
            })}{" "}
=======
                  </li>
                );
              })}{" "}
            </div>
            <form onSubmit={this.handleSubmit} className="enter-chat-input">
              <div className="chat-box">
                <input
                  type="textarea"
                  value={this.state.body}
                  onChange={this.update("body")}
                  className="chat-input"
                />
                <input type="submit" value="woof!" />
              </div>
            </form>
>>>>>>> master
          </div>
          <form onSubmit={this.handleSubmit} className="enter-chat-input">
            <div className="chat-box">
              <input
                type="textarea"
                value={this.state.body}
                onChange={this.update("body")}
                className="chat-input"
              />
              <input type="submit" value="woof!" />
            </div>
          </form>
        </div>

        <h1>Real Time Messaging</h1>
        <pre id="messages"></pre>
        <input
          type="text"
          id="messageBox"
          placeholder="Type your message here"
        />
        <button id="send" title="Send Message!">
          Send Message
        </button>
      </div>
    );
  }
}

export default Messages

