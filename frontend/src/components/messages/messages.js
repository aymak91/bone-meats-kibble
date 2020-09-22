import React from "react";
import { Link } from "react-router-dom";
import moment from 'moment'

class Messages extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
            sendingDog: {},
            receivingDog: {},
            body: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteMessage = this.deleteMessage.bind(this);
    }


    async componentDidMount() {
        await this.props.fetchMessages();
        await this.setState({ messages: this.props.messages })

        await this.props.fetchSendingDog();
        await this.setState({ sendingDog: this.props.currentDog })

        await this.props.fetchReceivingDog();
        await this.setState({ receivingDog: this.props.receivingDog })
    }

    async componentDidUpdate(prevProps) {
        if (!this.props.messages) return null;
        if (this.state.messages.length === 0) return null;

        if (await prevProps.messages.length !== this.props.messages.length) {
            await this.props.fetchMessages();
            this.setState({ messages: this.props.messages })
        }
    }

    async handleSubmit(e) {
        e.preventDefault();

        const message = await{
            body: this.state.body
        }

        await this.props.createMessage(message, this.props.history)
        await this.props.fetchMessages();
        await this.setState({ messages: this.props.messages })
        await this.setState({
            body: ''
        })
    }

    update(field) {
        return (e) =>
            this.setState({
                [field]: e.currentTarget.value,
            });
    }

    deleteMessage(idx) {
      console.log("test")
      this.state.messages.splice(idx, 1);
      this.setState({ messages: this.state.messages})
    }

    render() {
      // if (!this.props.messages) return null;

      // if (!this.props.matches) return null;
      // if (this.state.matches.length === 0) return null;

        const messages = this.state.messages
        const sendingDog = this.state.sendingDog;
        const receivingDog = this.state.receivingDog;

        // const matches = this.state.matches[0].matches;

        return (
          <div className="messages-bgd">
            <div className="messages-form">
              <div className="back-to-matches">
                <Link to={`/${sendingDog._id}/matches`} class="fas fa-fire">
                  Back to Matches
                </Link>
              </div>
              {/* <div>
                <ul>
                      {matches.map((match) => (
                        <div>
                          {match.name}
                        </div>
                      )) }
                  </ul>
              </div> */}
              <h1 className="message-h1">
                {" "}
                Messages with {receivingDog.name}{" "}
              </h1>
              <h2 className="message-h2">{`${sendingDog.name}, start chatting with ${receivingDog.name}`}</h2>
              {messages.map((message, idx) => (
                <li className="chat-message" key={message._id}>
                    <img className="message-avatar" src="data:image/jpeg;base64,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"/>
                    {/* <img className="message-avatar" src={`${message.sendingDog.imageURL}`} /> */}
                  <div className="message-body">
                    <div>{`${message.sendingDog.name}:`}</div>
                    <div>{`${message.body}`}</div>
                    <div className="timestamp">{moment().format("HH:mm")}</div>
                    <button onClick={() => this.deleteMessage(idx)}>delete</button>
                  </div>

                </li>
              ))}
              <form onSubmit={this.handleSubmit} className="enter-chat-input">
                <div>
                  <input
                    type="textarea"
                    value={this.state.body}
                    onChange={this.update("body")}
                    className="chat-input"
                  />
                  <input type="submit" value="woof!" />
                  <br />
                </div>
              </form>
            </div>
          </div>
        );
    }
}

export default Messages