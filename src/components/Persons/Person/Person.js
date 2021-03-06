import React, { Component } from 'react';
import PropTypes from 'prop-types'
import classes from './Person.css';
import Aux from '../../hoc/Aux';
import withClass from '../../hoc/withClass'
import {AuthContext} from '../../../containers/App'

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('Person JS Constructor');
        this.inputElement = React.createRef(); // creating ref from react 16.3 version onwards
    }

    componentWillMount() {
        console.log('Person JS ComponetWillMount');
    }

    componentDidMount() {
        console.log('Person JS ComponetDidMount');
        this.focus();
    }

    focus() {
        if (this.props.position === 0) {
            this.inputElement.current.focus();
        }
    }

    render() {
        console.log('Person JS Render');
        return (
            <Aux> {/* <div className='Person' onClick={props.deletePerson} style={style}> */}
                <AuthContext.Consumer>
                    {auth => auth ? <p>Successfully Authentictated !!!</p> : <p>Failed to Login !!!</p>}
                </AuthContext.Consumer>
                <p onClick={this.props.click}>I'm {this.props.name} and my age is {this.props.age} </p>  {/* binding props data dynamically and binding function refernce*/}
                <p>{this.props.children}</p> {/* getting child props */}
                <input type='text' onChange={this.props.changeMe} value={this.props.name} ref={this.inputElement} /> {/* two way data binding */} 
                {/* ref={(inp) => {this.inputElement = inp}} ref in react version < 16.3*/}
            </Aux>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func
}

export default withClass(Person, classes.Person);