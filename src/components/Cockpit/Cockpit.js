import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.olive;
    }
    const assignedClasses = [];
    if (props.persons.length === 3) {
        assignedClasses.push(classes.green);
    }
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }


    return (
        <div className={classes.cockpit}>
            <h1 className={assignedClasses.join(' ')}>{props.appTitle}</h1>
            <button className={btnClass} onClick={props.loadPersons} key='loadPersons'>Load Persons</button>
        </div>
    );
};

export default cockpit;