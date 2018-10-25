import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'

class App extends Component { // state-full component
  state = {
    persons: [
      { id: '1', name: 'Dora', age: '32' },
      { id: '2', name: 'Chai', age: '33' },
      { id: '3', name: 'Hari', age: '34' }
    ],
    showPersons: false,
    togglePersons: false,
    iteratePersons: false
  }

  changedStateHandler = (e, id) => { 
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });
    const person = {...this.state.persons[personIndex]};
    person.name = e.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  }

  deletePersonHandler = (index) => { 
    const persons = [...this.state.persons]; 
    persons.splice(index,1) 
    this.setState({ persons: persons});
  }

  personIterateHandler = () => {
    this.setState({ iteratePersons: !this.state.iteratePersons });
  }

  render() {

  let btnClass = '';

    let personsList = null;
    if (this.state.iteratePersons) { // Display content using iterator 
      personsList = (
        <div>
          <Persons
            persons={this.state.persons} 
            changed={this.changedStateHandler} 
            clicked={this.deletePersonHandler} /> 
        </div>
      );
  
      btnClass = classes.olive;
    }

    const assignedClasses = [];
    if(this.state.persons.length === 3) {
      assignedClasses.push(classes.green);
    }
    if(this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.App}>
          
          <h1 className={assignedClasses.join(' ')}>React Tutorial</h1>
          <button className={btnClass} onClick={this.personIterateHandler} key='loadPersons'>Load Persons</button> 
          
          {personsList} {/* Display content using iterator */}
        </div>
    );
  }
}

export default App;
//export default Radium(App);
