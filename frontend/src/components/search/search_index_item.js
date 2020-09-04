import React from 'react';


const SearchIndexItem = props => {

    return (
        <div>
        <ul>
            <li>{props.dog.breed}</li>
            <li>{props.dog.description}</li>
            <li>{props.dog.birthDate}</li>
            <li>{props.dog.size}</li>
            <li>{props.dog.gender}</li>
            <li>{props.dog.activeness}</li>
            <li>{props.dog.personality}</li>
            <br />
        </ul>
        </div>
    );
}


export default SearchIndexItem 