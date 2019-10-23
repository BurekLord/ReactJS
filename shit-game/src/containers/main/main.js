import React, { Component } from 'react';
import classes from './main.module.css';
import axios from 'axios';

class main extends Component {

    // const result = await axios.get('http://jsonplaceholder.typicode.com/posts');

    state = {
        currentImg: '',
        text: 'dummy text',
        input: '',
        gameStarted: false,
        end: false,
        startImg: require('../../assets/images/1.jpg'), 
        pantsDownImg: require('../../assets/images/2.jpg'),
        shitInPantsImg: require('../../assets/images/3.jpg'), 
        successMessyImg: require('../../assets/images/4.jpg'), 
        successImg: require('../../assets/images/5.jpg'),
        possibleAnswers: [
            'shit on the floor',
            'shit on floor',
            'shit', 
            'shit on the wall',
        ],
        missAnswers: [
            'look around', 
            'go down the hall', 
            'open door', 
            'go to bathroom', 
            'go to toilet',
            'sit', 
            'squat',
            'lay',
        ],
        tryMessages: [''],
        failMessage: 'you shat your pants'
    }

    handleChange = (event) => {
        this.setState({input: event.target.value})
    } 

    handleKeyDown = (event) => {
        let input = this.state.input.toLowerCase()
        if (event.key === 'Escape') {
            this.setState({input: ''})
        }
        if (event.key === 'Enter') {
            if (input !== 'start' || input !== 'scores') {
                axios.post('https://shit-game.firebaseio.com/userInput.json', {answer: input})
                .then(response => {
                    console.log(response);
                });
            }
            if (input === 'start') {
                this.setState({gameStarted: true});
                this.setState({currentImg: this.state.startImg});
            }
            if (input === 'scores') {
                this.setState({text: 'Feature Still in development...'});
            }
            // reset input
            this.setState({input: ''})
        }
    }

    render () {
        let img = (
        <div className={classes.content}>
            <h1>Dont shit your pants !!!</h1>
            <div>In  this  game  the  goal  is  for  you  not  to  shit  your  pants...</div>
            <div>To  start  a  <span className={classes.colorPurple}>new  game</span>,  type  <span className={classes.colorGreen}>start</span>  in  the  console  and  pres  <span className={classes.colorGold}>'Enter'</span></div>
            <div>To  see  <span className={classes.colorPurple}>scores</span>,  type  <span className={classes.colorGreen}>scores</span>  in  the  console  and  pres  <span className={classes.colorGold}>'Enter'</span></div>
        </div>
        );
        if (this.state.gameStarted){
            img = <img className={classes.content} src={this.state.currentImg} alt="game progress depiction"/>
        }

        return (
        <div className={classes.main}>
            <header className={classes.header}>Shit Game</header>
            {img}
            <div className={classes.center}>
                <div className={classes.text}>{this.state.text}</div>
                <div className={classes.inputBox}>
                    <span className={classes.noMargin}><i className="fas fa-chevron-right"></i></span>
                    <input 
                        type="text"
                        className={classes.input} 
                        value={this.state.input} 
                        onChange={this.handleChange} 
                        onKeyDown={this.handleKeyDown}/>
                </div>
            </div>
        </div>
        )
    }

}

export default main;