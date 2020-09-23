import { connect } from "react-redux";
import { fetchUserDogs, destroyDog } from "../../actions/dog_actions";
import Profile from "./profile";

const mapStateToProps = (state) => {
  return {
    dogs: Object.values(state.dogs.user),
    currentUser: state.session.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserDogs: (id) => dispatch(fetchUserDogs(id)),
    destroyDog: (dogId) => dispatch(destroyDog(dogId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
