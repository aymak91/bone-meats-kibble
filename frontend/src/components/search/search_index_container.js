import { connect } from 'react-redux';
import { fetchUserDogs, fetchDogs } from '../../actions/dog_actions';
import SearchIndex from './search_index'

const mSTP = (state, ownProps) => {
    // debugger
    return {
        dogs: state.dogs.all,
        currentUser: state.session.user.id
    }
}


const mDTP = (dispatch, ownProps) => ({
    fetchUserDogs: (userId) => dispatch(fetchUserDogs(userId)),
    fetchDogs: () => dispatch(fetchDogs()),
})




export default connect(mSTP, mDTP)(SearchIndex)