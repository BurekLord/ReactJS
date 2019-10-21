import React, { Component } from 'react';
import classes from './main.module.css';
import image from '../../assets/images/1.png';

class main extends Component {

    state = {
        image: image,
        text: 'dummy text',
        input: '',
    }

    handleChange = (event) => {
        this.setState({input: event.target.value})
    } 

    handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            this.setState({input: ''})
            // TODO
        }
    }

    render () {
        return <div className={classes.main}>
            <header className={classes.header}>Shit Game</header>
            <img className={classes.image} src={this.state.image} alt="game progress depiction"/>
            <div className={classes.text}>{this.state.text}</div>
            <div className={classes.inputBox}>
                <span><i class="fas fa-chevron-right"></i></span>
                <input 
                    type="text"
                    className={classes.input} 
                    value={this.state.input} 
                    onChange={this.handleChange} 
                    onKeyDown={this.handleKeyDown}/>
            </div>
        </div>
    }

}

export default main;