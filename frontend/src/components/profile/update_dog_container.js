import { connect } from "react-redux";
import { fetchUserDogs } from "../../actions/dog_actions";
import { patchDog } from "../../actions/dog_actions";
import UpdateDogForm from "./update_dog_form";

const mapStateToProps = (state, ownProps) => {
  const dogId = ownProps.dogId
  return {
    dogId: dogId,
    currentUser: state.session.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // remove patchdog if using axios instead in update_dog_form
    patchDog: (data, dogId) => dispatch(patchDog(data, dogId)),
    fetchUserDogs: (id) => dispatch(fetchUserDogs(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateDogForm);