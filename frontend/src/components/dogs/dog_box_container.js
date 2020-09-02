import { connect } from 'react-redux';
import DogBox from "./dog_box";
import { patchDog, destroyDog } from "../../actions/dog_actions";

const mapStateToProps = (state, ownProps) => {
    const dog = ownProps.dog;

    return ({
        dog: dog
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        patchDog: (data, dogId) => dispatch(patchDog(data, dogId)),
        destroyDog: (dogId) => dispatch(destroyDog(dogId))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(DogBox)