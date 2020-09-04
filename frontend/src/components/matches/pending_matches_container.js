import { connect } from "react-redux";
import PendingMatches from "./pending_matches";
import {
    fetchPendingMatches,
    decreasePendingMatches,
} from "../../actions/match_actions/pending_matches_actions";
import {
    increaseMatches,
} from "../../actions/match_actions/matches_actions";
import { fetchCurrentDog } from "../../actions/dog_actions"

const mapStateToProps = (state, ownProps) => {

    return ({
        pendingMatches: state.pendingMatches.data,
        currentDogId: ownProps.match.params.dog_id,
        currentDog: state.dogs.currentDog,
    })
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      fetchCurrentDog: () =>
        dispatch(fetchCurrentDog(ownProps.match.params.dog_id)),
      fetchPendingMatches: () =>
        dispatch(fetchPendingMatches(ownProps.match.params.dog_id)),
      decreasePendingMatches: (rejectedDogId) =>
        dispatch(
          decreasePendingMatches(ownProps.match.params.dog_id, rejectedDogId)
        ),
      increaseMatches: (currentDogId, newDogId) =>
        dispatch(increaseMatches(currentDogId, newDogId)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PendingMatches);