import React, { Component } from 'react';
import classes from './main.module.css';
import axios from 'axios';
import {Subject} from 'rxjs';

class main extends Component {

    // const result = await axios.get('http://jsonplaceholder.typicode.com/posts');

    state = {
        subject: new Subject(),
        currentImg: '',
        text: '',
        input: '',
        gameStarted: false,
        fail: false,
        counter: 31,
        interval: undefined,
        startImg: require('../../assets/images/1.jpg'), 
        pantsDownImg: require('../../assets/images/2.jpg'),
        shitInPantsImg: require('../../assets/images/3.jpg'), 
        successMessyImg: require('../../assets/images/4.jpg'), 
        successImg: require('../../assets/images/5.jpg'),
        possibleFirstAnswers: [
            'take pants off',
            'take off pants',
            'drop pants',
            'pants off',
            'get naked',
            'pull off pants',
            'pull pants off',
        ],
        pantsOffMessage: 'You pull your pants down...',
        firstStepPassed: false,
        secondStepPassed: false,
        possibleEndAnswers: [
            'shit on the floor',
            'shit on floor',
            'shit', 
            'shit on the wall',
            'poop on the floor',
            'poop',
            'poop on floor',
            'crap',
            'crap on the floor',
            'crap on floor'
        ],
        success: false,
        missAnswers: [
            {answer: 'look around', response: 'You look around and see a door, and a hallway. You want to burst!'}, 
            {answer: 'go down the hall', response: 'You try to move, but you cant! Your gonna crap your pants!'}, 
            {answer: 'open door', response: 'You try to open the door, but its sealed shut! You are gonna shit your pants!'}, 
            {answer: 'open the door', response: 'You try to open the door, but its sealed shut! You are gonna shit your pants!'}, 
            {answer: 'go to bathroom', response: 'Yea... You realy want to go to the bathroom.'}, 
            {answer: 'go to the bathroom', response: 'Yea... You realy want to go to the bathroom.'}, 
            {answer: 'go to toilet', response: 'You realy should...'}, 
            {answer: 'go to the toilet', response: 'You realy should...'}, 
            {answer: 'sit down', response: 'You are going to explode. You cant sit down.'}, 
            {answer: 'sit', response: 'You are going to explode. You cant sit down.'}, 
            {answer: 'squat', response: 'You are going to explode. You cant do a slav squat now.'}, 
            {answer: 'lay', response: 'Why would you even try to lay down? You cant shit laying down!'}, 
            {answer: 'lay down', response: 'Why would you even try to lay down? You cant shit laying down!'}, 
           
            {answer: 'look', response: 'You look around and see a door, and a hallway. You want to burst!'}, 
            {answer: 'look at door', response: 'You take a look at the door. Its shut!'}, 
            {answer: 'look at the door', response: 'You take a look at the door. Its shut!'}, 
            {answer: 'go down the hallway', response: 'You try to move, but you cant! Your gonna crap your pants!'}, 
            {answer: 'go to hallway', response: 'You wanna go, but you cant!'}, 
            {answer: 'go to hall', response: 'You try to move, but you cant! Your gonna crap your pants!'}, 
            {answer: 'go to door', response: 'Oh shiiit!'}, 
            {answer: 'go to the door', response: 'The door is shut!'}, 
        ],
        failMessage: 'You shat your pants',
        successMessage: 'You didnt shit your pants!'
    }

    componentDidUpdate() {
        if (this.state.gameStarted && !this.state.interval) {
            this.setState({interval: setInterval(()=> {
                this.setState((previousState, props) => {return {counter: this.state.counter - 1}})

                if (this.state.counter === Math.floor((Math.random() * 5) + 3)) {
                    this.setState({text: 'OOOOHH shit, you are going to expload!!!'})
                }
                if (this.state.counter === Math.floor((Math.random() * 10) + 8)) {
                    this.setState({text: 'You feal the preasure rising!!!'})
                }
                if (this.state.counter === Math.floor((Math.random() * 15) + 12)) {
                    this.setState({text: 'Hurry Up! You realy dont want to shit your pants'})
                }
                console.log(this.state.counter)
                if (this.state.counter === 0) {
                    this.setState({success: false})
                    this.setState({text: this.state.failMessage});
                    this.setState({currentImg: this.state.shitInPantsImg});
                    clearInterval(this.state.interval)
                }
            }, 1000)});
        }
    }

    handleChange = (event) => {
        this.setState({input: event.target.value})
    } 

    resetGame = () => {
        this.setState({success: false})
        this.setState({fail: false})
        this.setState({currentImg: this.state.startImg});
        this.setState({gameStarted: false});
        this.setState({firstStepPassed: false});
        this.setState({secondStepPassed: false});
        this.render();
    }

    completeGame = () => {
        // complete screen
        // success image
        let successImg = Math.floor((Math.random() * 1) + 1);
        this.setState({currentImg: successImg > 0 ? this.state.successImg : this.state.successMessyImg});
        // success message
        this.setState({text: this.state.successMessage});
        // stop interval
        clearInterval(this.state.interval);
        // success state true
        this.setState({success: true});
        this.setState({success: false});
    }

    failGame = () => {
        // fail screen
        // fail image
        this.setState({currentImg: this.state.shitInPantsImg});
        // fail message
        this.setState({text: this.state.failMessage})
        // stop interval
        clearInterval(this.state.interval);
        // fail state true
        this.setState({success: false});
        this.setState({fail: true});
    }

    saveToBe = (input) => {
        axios.post('https://shit-game.firebaseio.com/userInput.json', {answer: input})
        .then(response => {
            console.log(response);
        });
    }

    startNewGame = () => {        
        this.setState({fail: false});
        this.setState({success: false});
        this.setState({currentImg: this.state.startImg});
        this.setState({text: 'You want to take a shit.'});
        this.setState({gameStarted: true});
        this.setState({firstStepPassed: false});
        this.setState({secondStepPassed: false});
        this.render();
    }

    goToMainScreen = () => {
        this.setState({input: ''});
        this.setState({text: ''});
        this.setState({gameStarted: false})
        this.setState({success: false})
        this.setState({fail: false})
    }

    handleKeyDown = (event) => {
        let input = this.state.input.toLowerCase()
        if (event.key === 'Escape') {
            if (this.state.success || this.state.fail) {
                this.resetGame();
            }
        }

        if (event.key === 'Enter') {
            // if game is successful or failed
            if (this.state.success || this.state.fail) {
                this.goToMainScreen();
            }
            // if not start or scores and game has started save it to the BE for later examination
            if (input !== 'start' || input !== 'scores' && this.state.gameStarted) {
                this.saveToBe();
            }

            // start new game if input start and game not started already
            if (input === 'start' && !this.state.gameStarted) {
                this.startNewGame();
            }

            // get scores in input is scores and game is not started
            if (input === 'scores' && !this.state.gameStarted) {
                this.setState({text: 'Feature Still in development...'});
            }

             // OVDE JE PROBLEM !!!!!!!!!!!!!!
            // if game is started check input
            if (this.state.gameStarted) {
                // success conditions
                if (!this.state.secondStepPassed && this.state.firstStepPassed) {
                    this.setState({secondStepPassed: this.state.possibleEndAnswers.indexOf(input) !== -1 ? true : false});
                }
                if (!this.state.firstStepPassed) {
                    this.setState({firstStepPassed: this.state.possibleFirstAnswers.indexOf(input) !== -1 ? true : false});
                }
                if (!this.state.secondStepPassed && this.state.secondStepPassed) {
                    this.failGame();
                }
                // if end answer end game screen
                if (this.state.secondStepPassed && this.state.secondStepPassed) {
                    this.completeGame();
                }

                // if first step passed ////////////  Math.floor((Math.random() * 1) + 1);

                // if both steps passed complete game

                // miss
                if (this.state.success) {
                    switch(input) {
                        case this.state.missAnswers[0].answer: 
                                this.setState({text: this.state.missAnswers[0].response}); 
                                break;   
                        case this.state.missAnswers[1].answer: 
                            this.setState({text: this.state.missAnswers[1].response}); 
                            break;
                        case this.state.missAnswers[2].answer: 
                            this.setState({text: this.state.missAnswers[2].response}); 
                            break;
                        case this.state.missAnswers[3].answer: 
                            this.setState({text: this.state.missAnswers[3].response}); 
                            break;
                        case this.state.missAnswers[4].answer: 
                            this.setState({text: this.state.missAnswers[4].response}); 
                            break;
                        case this.state.missAnswers[5].answer: 
                            this.setState({text: this.state.missAnswers[5].response}); 
                            break;
                        case this.state.missAnswers[6].answer: 
                            this.setState({text: this.state.missAnswers[6].response}); 
                            break;
                        case this.state.missAnswers[7].answer: 
                            this.setState({text: this.state.missAnswers[7].response}); 
                            break;
                        case this.state.missAnswers[8].answer: 
                            this.setState({text: this.state.missAnswers[8].response}); 
                            break;
                        case this.state.missAnswers[9].answer: 
                            this.setState({text: this.state.missAnswers[9].response}); 
                            break;
                        case this.state.missAnswers[10].answer: 
                            this.setState({text: this.state.missAnswers[10].response}); 
                            break;
                        case this.state.missAnswers[11].answer: 
                            this.setState({text: this.state.missAnswers[11].response}); 
                            break;
                        case this.state.missAnswers[12].answer: 
                            this.setState({text: this.state.missAnswers[12].response});
                            break;
                        case this.state.missAnswers[13].answer: 
                            this.setState({text: this.state.missAnswers[12].response});
                            break;
                        case this.state.missAnswers[14].answer: 
                            this.setState({text: this.state.missAnswers[12].response});
                            break;
                        case this.state.missAnswers[15].answer: 
                            this.setState({text: this.state.missAnswers[12].response});
                            break;
                        case this.state.missAnswers[16].answer: 
                            this.setState({text: this.state.missAnswers[12].response});
                            break;
                        case this.state.missAnswers[17].answer: 
                            this.setState({text: this.state.missAnswers[12].response});
                            break;
                        case this.state.missAnswers[18].answer: 
                            this.setState({text: this.state.missAnswers[12].response});
                            break;
                        case this.state.missAnswers[19].answer: 
                            this.setState({text: this.state.missAnswers[12].response});
                            break;
                        case this.state.missAnswers[20].answer: 
                            this.setState({text: this.state.missAnswers[12].response});
                            break;
                        // default: this.setState({text: `You dont know how to ${input}...`});
                    }
                }
            }

            // reset input
            this.setState({input: ''})
        }
    }

    render () {
        let counter;
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
            counter = (
                <div>00 : {this.state.counter}</div>
            )
        }

        return (
        <div className={classes.main}>
            <header className={classes.header}>Shit Game {counter}</header>
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