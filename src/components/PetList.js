import React from 'react';
import PropTypes from 'prop-types';
import PetCard from './PetCard';

import 'bootstrap/dist/css/bootstrap.min.css';

const getCards=(props)=>{
  return props.pets.map((pet)=>{
    return (
      <PetCard
        key={pet.id}
        id={pet.id}
        name={pet.name}
        species={pet.species}
        about={pet.about}
        location={pet.location}
        onSelectPetCallback={props.onSelectPetCallback}
        onClosePetCallback={props.onClosePetCallback}
      />
    );
  });
}

const PetList = (props) => {


  return (
    <div className="card-group">
    {getCards(props)}
    </div>
  )
}

PetList.propTypes = {
  pets: PropTypes.array.isRequired,
  onSelectPetCallback: PropTypes.func,
  onClosePetCallback: PropTypes.func,
};

export default PetList;
