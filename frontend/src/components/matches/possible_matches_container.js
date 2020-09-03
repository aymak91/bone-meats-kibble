import { connect } from "react-redux";
import { fetchPossibleMatches, createPossibleMatches, increasePossibleMatches, decreasePossibleMatches } from "../../actions/match_actions/possible_matches_actions";
import PossibleMatches from "./possible_matches.js";

const mapStateToProps = (state, ownProps) => {
    return {
        currentDog: ownProps.dog,
        possibleMatches: state.possibleMatches.data
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      fetchPossibleMatches: () =>
        dispatch(fetchPossibleMatches(ownProps.match.params.dog_id)),
      createPossibleMatches: () =>
        dispatch(createPossibleMatches(ownProps.match.params.dog_id)),
      decreasePossibleMatches: (rejectedDogId) =>
        dispatch(
          decreasePossibleMatches(ownProps.match.params.dog_id, rejectedDogId)
        ),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PossibleMatches)