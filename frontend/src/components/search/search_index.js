import React from 'react';
import DogBoxContainer from '../dogs/dog_box_container'

class SearchIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.fetchUserDogs(currentUser);
        this.props.fetchDogs()
    }

    render() {
        const currentUserId = this.props.currentUser;

        let all_dogs = this.props.dogs;
        let compat_dogs = all_dogs.map(dogs => {
            dogs.user !== currentUser
        })

        return (
            <div>
                <ul>
                    {compat_dogs.map( dog => 
                       <DogBoxContainer dog={dog} key={dog.id} /> 
                        )}
                </ul>
            </div>
        )
    }
}

export const SearchIndex