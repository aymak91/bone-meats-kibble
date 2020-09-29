import { connect } from "react-redux";
import { createDog } from "../../actions/dog_actions";
import DogForm from "./create_dog_form";

import {fetchUserDogs} from "../../actions/dog_actions"

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    newDog: state.dogs.new,
    errors: state.errors.dogErrors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createDog: (data) => dispatch(createDog(data)),
    fetchUserDogs: (id) => dispatch(fetchUserDogs(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DogForm);
