import React from "react";

class Messages extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
            sendingDog: {},
            receivingDog: {},
            body: ""
        };
    }


    async componentDidMount() {
        await this.props.fetchMessages();
        await this.setState({ messages: this.props.messages })

        await this.props.fetchSendingDog();
        await this.setState({ sendingDog: this.props.currentDog })

        await this.props.fetchReceivingDog();
        await this.setState({ recivingDog: this.props.currentDog })
    }

    async componentDidUpdate(prevProps) {
        if (!this.props.messages) return null;
        if (this.state.messages.length === 0) return null;

        if (await prevProps.messages.length !== this.props.messages.length) {
            await this.props.fetchMessages();
            this.setState({ messages: this.props.messages })
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        let body = {
            body: this.state.body
        }

        this.props.createMessage(body)
    }

    update(field) {
        return (e) =>
            this.setState({
                [field]: e.currentTarget.value,
            });
    }

    render() {
        if (!this.props.messages) return null;
        // if (this.state.messages.length === 0) return null;

        const messages = this.state.messages
        const sendingDog = this.state.sendingDog;
        const receivingDog = this.state.receivingDog;

        return (
            <div>
                <h1>Messages</h1>
                {messages.map((message) => (
                    <li>
                        {`${message.sendingDog.name}: ${message.body}`}
                    </li>
                ))}
                <form onSubmit={this.handleSubmit} >
                    <div>
                        <input
                            type="textarea"
                            value={this.state.body}
                            onChange={this.update("body")}
                        />
                        <input type="submit" value="Submit" />
                        <br />
                    </div>
                </form>
            </div>
        )
    }
}

export default Messages