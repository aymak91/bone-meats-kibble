import { connect } from "react-redux";
import { 
  fetchPossibleMatches, 
  createPossibleMatches, 
  increasePossibleMatches, 
  decreasePossibleMatches 
} from "../../actions/match_actions/possible_matches_actions";
import {
  fetchPendingMatches,
  increasePendingMatches,
} from "../../actions/match_actions/pending_matches_actions";

import {fetchCurrentDog} from "../../actions/dog_actions"

import PossibleMatches from "./possible_matches.js";

const mapStateToProps = (state, ownProps) => {
    return {
        currentDogId: ownProps.match.params.dog_id,
        currentDog: state.dogs.currentDog,
        possibleMatches: state.possibleMatches.data,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      //FETCH CURRENT DOG
      fetchCurrentDog: () => dispatch(fetchCurrentDog(ownProps.match.params.dog_id)),
      //POSSIBLE MATCHES ACTIONS
      fetchPossibleMatches: () =>
        dispatch(fetchPossibleMatches(ownProps.match.params.dog_id)),
      decreasePossibleMatches: (rejectedDogId) =>
        dispatch(
          decreasePossibleMatches(ownProps.match.params.dog_id, rejectedDogId)
        ),
      //PENDING MATCHES ACTIONS
      fetchPendingMatches: (dogId) => dispatch(fetchPendingMatches(dogId)), //to check if other dog already has this array
      increasePendingMatches: (dogId) => dispatch(increasePendingMatches(dogId, ownProps.match.params.dog_id)) //to add current dog to the liked dog's pendingarray
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PossibleMatches)