import React, { Component } from 'react';
import Person from './Person/Person'

class Persons extends Component {
    constructor(props) {
        super(props);
        console.log('Persons JS Constructor');
        this.lastPersonRef = React.createRef();
    }

    componentWillMount() {
        console.log('Persons JS ComponetWillMount');
    }

    componentDidMount() {
        console.log('Persons JS ComponetDidMount');
        this.lastPersonRef.current.focus();
    }

    componentWillReceiveProps(nextProps) {
        console.log('Person JS ComponentWillReceiveProps',nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Person JS ShouldComponentUpdate', nextProps, nextState);
        return nextProps.persons !== this.props.persons;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Person JS ComponentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate(nextProps, nextState) {
        console.log('Person JS ComponentDidUpdate');
    }

    render() {
        console.log('Persons JS Render');
        return this.props.persons.map((person, index) => {
            return <Person
                name={person.name}
                age={person.age}
                position={index}
                key={person.id}
                ref={this.lastPersonRef}
                click={() => { this.props.clicked(index) }}
                changeMe={(e) => this.props.changed(e, person.id)}
            />
        });
    };
}

export default Persons;