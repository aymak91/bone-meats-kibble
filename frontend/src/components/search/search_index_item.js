import React from 'react';
import Moment from 'moment';

const SearchIndexItem = props => {

    return (
      <ul className="dog-index-item">
        <li className="dog-name">
          {props.dog.name}
          <br />
          Age: {Moment().diff(props.dog.birthDate, "years")}
          <br />
        </li>

        <img className="match-image" src={`${props.dog.imageURL}`} />
        <li className="dog-desc">
          <div> Description: </div> <div> {props.dog.description} </div>
        </li>
        <div className="dog-details">
          <li>
            <span> Breed: </span>
            <br />
            <span> {props.dog.breed} </span>
          </li>
          <li>
            <span> BDay: </span>{" "}
            <span>{Moment(props.dog.birthDate).format("MMM Do YYYY")}</span>
          </li>
          <li>
            <span>Size: </span> <span>{props.dog.size}</span>
          </li>
          <li>
            <span>Gender: </span> <span>{props.dog.gender}</span>
          </li>
          <li>
            <span>Activeness: </span> <span>{props.dog.activeness}</span>
          </li>
        </div>
        <br />
      </ul>
    );
}


export default SearchIndexItem 