import React from 'react';
import classes from './Counter.module.css';

const Counter = (props) => {

    let cssClass = props.helper ? 'helperCountDown' : '';

    return (
        <div className={classes[ cssClass ]}>
            00 : {props.counter < 10 ? '0' : ''}
            {props.counter}
        </div>
    );
}

export default Counter;