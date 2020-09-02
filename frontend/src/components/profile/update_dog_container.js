import { connect } from "react-redux";
import { patchDog } from "../../actions/dog_actions";
import UpdateDogForm from "./update_dog_form";

const mapStateToProps = (state, ownProps) => {
  const dogId = ownProps.dogId
  return {
    dogId: dogId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    patchDog: (data, dogId) => dispatch(patchDog(data, dogId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateDogForm);
