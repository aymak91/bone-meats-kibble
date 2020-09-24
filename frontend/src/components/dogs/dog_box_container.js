import { connect } from 'react-redux';
import DogBox from "./dog_box";
import { patchDog, destroyDog } from "../../actions/dog_actions";
import { fetchUserDogs } from "../../actions/dog_actions";

const mapStateToProps = (state, ownProps) => {
    const dog = ownProps.dog;
  
    return {
      dog: dog,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
      patchDog: (data, dogId) => dispatch(patchDog(data, dogId)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DogBox)