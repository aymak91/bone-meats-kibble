import { connect } from "react-redux";
import Messages from "./messages";
import {
    fetchMessages,
    createMessage,
} from "../../actions/message_actions";

import { fetchCurrentDog } from "../../actions/dog_actions"


const mapStateToProps = (state, ownProps) => {
    // const sendingDogId = ownProps.match.params.sending_dog_id;
    // const receivingDogId = ownProps.match.params.receiving_dog_id;
    // console.log(ownProps)

    return ({
        messages: state.messages.data,
        currentDog: state.dogs.currentDog,
    })
}
const mapDispatchToProps = (dispatch, ownProps) => {
    const sendingDogId = ownProps.match.params.sending_dog_id;
    const receivingDogId = ownProps.match.params.receiving_dog_id;
    console.log(sendingDogId)
    console.log(receivingDogId)
    return {
        fetchSendingDog: () =>
            dispatch(fetchCurrentDog(sendingDogId)),
        fetchReceivingDog: () =>
            dispatch(fetchCurrentDog(receivingDogId)),
        fetchMessages: () => dispatch(fetchMessages(sendingDogId, receivingDogId)),
        createMessage: (message) => dispatch(createMessage(sendingDogId, receivingDogId, message)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages);