import { connect } from "react-redux";
import Messages from "./messages";
import {
    fetchMessages,
    createMessage,
} from "../../actions/message_actions";

import { fetchCurrentDog, fetchReceivingDog } from "../../actions/dog_actions"


const mapStateToProps = (state, ownProps) => {
    // const sendingDogId = ownProps.match.params.sending_dog_id;
    // const receivingDogId = ownProps.match.params.receiving_dog_id;
    // console.log(state.dogs)

    return ({
        messages: state.messages.data,
        currentDog: state.dogs.currentDog,
        receivingDog: state.dogs.receivingDog,
        matches: state.matches.data,

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
            dispatch(fetchReceivingDog(receivingDogId)),
        fetchMessages: () => dispatch(fetchMessages(sendingDogId, receivingDogId)),
        createMessage: (message) => dispatch(createMessage(sendingDogId, receivingDogId, message)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages);