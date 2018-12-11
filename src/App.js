import React, { Component } from 'react';
import PetList from './components/PetList';
import PetCard from './components/PetCard'
import PetDetails from './components/PetDetails';
import SearchBar from './components/SearchBar';
import NewPetForm from './components/NewPetForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import pets from './data/pets.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petList: pets,
      currentPet: undefined,
    };
  }

  onSelectPet = (petId)=> {
    console.log('Pet Selected');

    const pet = this.state.petList.find((pet)=> {
      return pet.id === petId
      });

      this.setState({
      currentPet: pet,
    });

  }

  onClosePet =(petId) =>{
    console.log('Pet Closed');

    const pet = this.state.petList.find((pet)=>{
      return pet.id === petId
    })

    let updatedPets = this.state.petList
    updatedPets.splice(updatedPets.indexOf(pet),1);

    this.setState({petList:updatedPets})
  }


  render() {
    const { currentPet } = this.state;

    return (
      <main className="App">
        <header className="app-header">
          <h1>Ada Pets</h1>
        </header>
        <section className="search-bar-wrapper">
          { /* Wave 4:  Place to add the SearchBar component */ }
          <SearchBar />
        </section>
          { /* Wave 2:  Where Pet Details should appear */ }
        <section className="pet-list-wrapper">
          { /* Wave 1:  Where PetList should appear */ }
          {this.state.currentPet ? <PetDetails currentPet={currentPet}/>: ""}
          <PetList
            pets={this.state.petList}
            onSelectPetCallback={this.onSelectPet}
            onClosePetCallback={this.onClosePet}
          />
        </section>
        <section className="new-pet-form-wrapper">
          { /* Wave 3:  Where NewPetForm should appear */ }
        </section>
      </main>
    );
  }
}

export default App;
