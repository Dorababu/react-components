import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('Person JS Constructor');
    }

    componentWillMount() {
        console.log('Person JS ComponetWillMount');
    }

    componentDidMount() {
        console.log('Person JS ComponetDidMount');
    }

    render() {
        console.log('Person JS Render');
        return (
            <div className={classes.Person}> {/* <div className='Person' onClick={props.deletePerson} style={style}> */}
                <p onClick={this.props.click}>I'm {this.props.name} and my age is {this.props.age} </p>  {/* binding props data dynamically and binding function refernce*/}
                <p>{this.props.children}</p> {/* getting child props */}
                <input type='text' onChange={this.props.changeMe} value={this.props.name} /> {/* two way data binding */}
            </div>
        );
    }
}

export default Person;