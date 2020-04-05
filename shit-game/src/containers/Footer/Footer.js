import React from 'react';
import classes from './Footer.module.css';

const Footer = (props) => {
    return (
        <footer>
            <div>
                Based on the original "Don't Shit Your Pants". Made
                using ReactJs.
            </div>
            <div className={classes.hidden}>
                <span>Songs used:</span>
                <span>Piano Ballad | iMovie Song-Music</span>
                <span>Plinkett's List Song FULL ("Oranges"/Playground)</span>
            </div>
            <div>
                By
						<a href='https://linkedin.com/in/mile-ignjatovic-683188138'>
                    Mile Ignjatovic
						</a>
            </div>
        </footer>
    );
}

export default Footer;