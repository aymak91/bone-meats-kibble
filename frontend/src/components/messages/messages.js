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

    render() {
        if (!this.props.messages) return null;

        const messages = this.state.messages
        const sendingDog = this.state.sendingDog;
        const receivingDog = this.state.receivingDog;

        return (
          <div className="messages-bgd">
            <div className="messages-form">   

            <div className="back-to-matches">
              <Link to={`/${sendingDog._id}/matches`} class="fas fa-fire">
                Back to Matches
              </Link>
            </div>
            <h1 className="message-h1"> Messages with {receivingDog.name} </h1>
            <h2 className="message-h2">{`${sendingDog.name}, start chatting with ${receivingDog.name}`}</h2>
            {messages.map((message) => (
                <li className="chat-message" key={message._id}>
                    <div classname="message-name">
                        
                        <div>{`${message.sendingDog.name}:`}</div>
                        {/* <div>{moment().format("HH:mm")}</div> */}
                    </div>

                    <div className="message-body">
                        {`${message.body}`}
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