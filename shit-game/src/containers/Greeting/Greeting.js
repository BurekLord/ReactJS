import React from 'react';
import classes from './Greeting.module.css';

const Greeting = (props) => {
    return (
        <div className={classes.content}>
            <div className={classes.hidden}>
                <h1>Don't Shit Your Pants !!!</h1>
                <div>
                    In this game the goal is for you not to shit your pants...
				</div>
            </div>
            <div className={classes.marginTop}>
                To start a{' '}
                <span className={classes.colorPurple}>new game</span>, type{' '}
                <span className={classes.colorGreen}>start</span> in the
					console and press{' '}
                <span className={classes.colorGold}>'Enter'</span>
            </div>
        </div>
    );
}

export default Greeting;