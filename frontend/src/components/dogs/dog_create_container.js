import { connect } from "react-redux";
import { createDog } from "../../actions/dog_actions";
import DogForm from "./create_dog_form";

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    newDog: state.dogs.new,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createDog: (data) => dispatch(createDog(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DogForm);
