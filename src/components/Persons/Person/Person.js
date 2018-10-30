import React, { Component } from 'react';
import PropTypes from 'prop-types'
import classes from './Person.css';
import Aux from '../../hoc/Aux';
import withClass from '../../hoc/withClass'

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
        if(this.props.position === 0) {
            this.inputElement.focus();
        }
    }

    render() {
        console.log('Person JS Render');
        return (
            <Aux> {/* <div className='Person' onClick={props.deletePerson} style={style}> */}
                <p onClick={this.props.click}>I'm {this.props.name} and my age is {this.props.age} </p>  {/* binding props data dynamically and binding function refernce*/}
                <p>{this.props.children}</p> {/* getting child props */}
                <input type='text' onChange={this.props.changeMe} value={this.props.name} ref={(inp) => {this.inputElement = inp}} /> {/* two way data binding */}
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