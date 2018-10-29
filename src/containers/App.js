import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component { // state-full component

  constructor(props) {
    super(props);
    console.log('App JS Constructor');
    this.state = {
      persons: [
        { id: '1', name: 'Dora', age: '32' },
        { id: '2', name: 'Chai', age: '33' },
        { id: '3', name: 'Hari', age: '34' }
      ],
      showPersons: false,
      togglePersons: false,
      iteratePersons: false
    }
  }

  componentWillMount() {
    console.log('App JS ComponetWillMount');
  }

  componentDidMount() {
    console.log('App JS ComponetDidMount');
  }

  // state = {
  //   persons: [
  //     { id: '1', name: 'Dora', age: '32' },
  //     { id: '2', name: 'Chai', age: '33' },
  //     { id: '3', name: 'Hari', age: '34' }
  //   ],
  //   showPersons: false,
  //   togglePersons: false,
  //   iteratePersons: false
  // }

  changedStateHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = e.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1)
    this.setState({ persons: persons });
  }

  personIterateHandler = () => {
    this.setState({ iteratePersons: !this.state.iteratePersons });
  }

  render() {
    console.log('App JS Render');
    let personsList = null;
    if (this.state.iteratePersons) {
      personsList =
        <div>
          <Persons
            persons={this.state.persons}
            changed={this.changedStateHandler}
            clicked={this.deletePersonHandler}
          />
        </div>
    }

    return (
      <div className={classes.App}>
        <Cockpit
          appTitle={this.props.title}
          loadPersons={this.personIterateHandler}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
        />
        {personsList}
      </div>
    );
  }
}

export default App;
