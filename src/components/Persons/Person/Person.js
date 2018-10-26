import React from 'react';
import classes from './Person.css'; 


const person = (props) => { // state-less component
    return ( 
        <div className={classes.Person}> {/* <div className='Person' onClick={props.deletePerson} style={style}> */}
            <p onClick={props.click}>I'm {props.name} and my age is {props.age} </p>  {/* binding props data dynamically and binding function refernce*/}
            <p>{props.children}</p> {/* getting child props */}
            <input type='text' onChange={props.changeMe} value={props.name} /> {/* two way data binding */}
        </div>
    );
}

export default person;