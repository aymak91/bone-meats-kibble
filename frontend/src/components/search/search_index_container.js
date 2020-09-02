import { connect } from 'react-redux';
import { fetchUserDogs, fetchDogs } from '../../actions/dog_actions';
import SearchIndex from './search_index'
// import { render } from 'react-dom';

const mSTP = (state, ownProps) => ({
    dogs: state.dogs.all,
    currentUser: state.session.user.id
    // currentUserId: state.session.
})


const mDTP = (dispatch, ownProps) => ({
    fetchUserDogs: (userId) => dispatch(fetchUserDogs(userId)),
    fetchDogs: () => dispatch(fetchDogs())
})




export default connect(mSTP, mDTP)(SearchIndex)