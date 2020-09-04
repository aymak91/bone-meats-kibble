import { connect } from "react-redux";
import Matches from "./matches";
import {
    fetchMatches,
    decreaseMatches,
} from "../../actions/match_actions/matches_actions";
import { fetchCurrentDog } from "../../actions/dog_actions"


const mapStateToProps = (state, ownProps) => {
    return {
        matches: state.matches.data,
        currentDogId: ownProps.match.params.dog_id,
        currentDog: state.dogs.currentDog,
    };
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      fetchCurrentDog: () =>
        dispatch(fetchCurrentDog(ownProps.match.params.dog_id)),
      fetchMatches: () => dispatch(fetchMatches(ownProps.match.params.dog_id)),
      decreaseMatches: (dogId, unmatchedDogId) =>
        dispatch(decreaseMatches(dogId, unmatchedDogId)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Matches);