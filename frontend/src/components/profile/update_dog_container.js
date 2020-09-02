import { connect } from "react-redux";
import { patchDog, destroyDog } from "../../actions/dog_actions";
import UpdateDogForm from "./update_dog_form";

const mapStateToProps = (state) => {
  return {
    // currentDog: state.dogs.all[],
    newDog: state.dogs.new,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    patchDog: (data, dogId) => dispatch(patchDog(data, dogId)),
    destroyDog: (dogId) => dispatch(destroyDog(dogId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateDogForm);
