import { connect } from "react-redux";
import { patchDog, fetchUserDogs } from "../../actions/dog_actions";
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
    patchDog: (data, dogId) => dispatch(patchDog(data, dogId)),
    fetchUserDogs: (id) => dispatch(fetchUserDogs(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateDogForm);
