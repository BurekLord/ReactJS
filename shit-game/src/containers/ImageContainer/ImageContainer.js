import React from 'react';
import classes from './ImageContainer.module.css';

const ImageContainer = (props) => {
    return (
        <img
            className={[ classes.content, classes.image ]}
            src={props.currentImg}
            alt='game progress depiction'
        />
    );
}

export default ImageContainer;