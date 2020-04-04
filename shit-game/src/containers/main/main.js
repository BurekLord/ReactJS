import axios from 'axios';
import React, { Component } from 'react';
import firstAnswers from '../../data/first-answers';
import missAnswersResponses from '../../data/miss-answers-responses';
import secondAnswers from '../../data/second-answers';
import Counter from '../Counter/Counter';
import Greeting from '../Greeting/Greeting';
import ImageContainer from '../ImageContainer/ImageContainer';
import classes from './main.module.css';

class main extends Component {
	constructor() {
		super();
		// input ref so that we can target input field
		this.inputRef = React.createRef();
	}

	// app state
	state = {
		allAnswersEver: null,
		currentImg: '',
		text: '',
		input: '',
		counter: 45,
		interval: undefined,
		gameStarted: false,
		firstStepPassed: false,
		secondStepPassed: false,
		success: false,
		fail: false,
		possibleFirstAnswers: firstAnswers,
		possibleEndAnswers: secondAnswers,
		missAnswers: missAnswersResponses,
		pantsOffMessage: 'You pull your pants down...',
		successMessage: 'You didnt shit your pants!',
		failMessage: 'You shat your pants... You are such a looser...',
		startImg: require('../../assets/images/1.jpg'),
		pantsDownImg: require('../../assets/images/2.jpg'),
		shitInPantsImg: require('../../assets/images/3.jpg'),
		successMessyImg: require('../../assets/images/4.jpg'),
		successImg: require('../../assets/images/5.jpg'),
	};

	// get the answers from be,it allready have them just return data
	getAllAnswersFromBE = async () => {
		if (!this.state.allAnswersEver) {
			let response = await axios.get('https://shit-game.firebaseio.com/userInput.json');
			if (response) {
				this.setState({ allAnswersEver: response.data })
				return response.data;
			} else {
				return null;
			}
		} else {
			return this.state.allAnswersEver;
		}
	}

	// log all answers given ever
	logAllAnswers = async () => {
		let answers = await this.getAllAnswersFromBE();
		console.log(answers ? answers : 'there is no data in db');
	};

	// log all unique answers
	logAllUniqueAnswers = async () => {
		let answers = await this.getAllAnswersFromBE();
		console.log(answers ? this.filterForUniqueAnswers(answers) : 'there is no data in db');
	}

	logNewAnswers = async () => {
		let tempArray = [];
		let missArrayOfAnswers = [];

		this.state.missAnswers.forEach(miss => {
			missArrayOfAnswers.push(miss.answer);
		})

		let answersFromBe = await this.getAllAnswersFromBE();

		if (answersFromBe) {
			answersFromBe = this.filterForUniqueAnswers(answersFromBe)
			answersFromBe.forEach(answer => {
				if (missArrayOfAnswers.indexOf(answer) === -1 &&
					this.state.possibleFirstAnswers.indexOf(answer) === -1 &&
					this.state.possibleEndAnswers.indexOf(answer) === -1) {
					tempArray.push(answer)
				}
			})
			console.log(tempArray)
		} else {
			console.log('no data in db')
		}
	}

	// filter answers for uniques
	filterForUniqueAnswers = (data) => {
		if (data) {
			const tempArray = [];
			Object.keys(data).forEach(key => {
				if (
					(data[ key ][ 'answer' ] &&
						data[ key ][ 'answer' ] !== '' && data[ key ][ 'answer' ] !== ' ')
				) {
					tempArray.push(data[ key ][ 'answer' ]);
				}
			});
			const uniqueAnswersArray = tempArray.filter((value, index, self) => self.indexOf(value) === index);
			return uniqueAnswersArray
		}
	}

	clearDatabase = async () => {
		await axios.delete('https://shit-game.firebaseio.com/userInput.json');
	}

	// saves the answer to BE
	saveToBe = input => {
		axios
			.post('https://shit-game.firebaseio.com/userInput.json', {
				answer: input
			})
			.then(() => { });
	};

	// react lifecycle hook (after page initialised)
	componentDidMount() {
		// add this component as a global variable so that we are able to acces helper functions from the console
		window.map = this;
	}

	// on input change
	handleChange = event => {
		this.setState({ input: event.target.value });
	};

	// finish game successfuly
	completeGame = () => {
		// complete screen
		// success image has 2 options
		let successImg = Math.floor(Math.random() * 1 + 1);
		this.setState({
			currentImg:
				successImg > 0
					? this.state.successImg
					: this.state.successMessyImg
		});
		// success message
		this.setState({ text: this.state.successMessage });
		// stop and clear interval
		clearInterval(this.state.interval);
		this.setState({ interval: undefined });
		// success state true
		this.setState({ success: true });
		this.setState({ fail: false });
	};

	// finish game by failing
	failGame = () => {
		// fail screen
		// fail image
		this.setState({ currentImg: this.state.shitInPantsImg });
		// fail message
		this.setState({ text: this.state.failMessage });
		// stop interval
		clearInterval(this.state.interval);
		this.setState({ interval: undefined });
		// fail state true
		this.setState({ success: false });
		this.setState({ fail: true });
	};

	startNewGame = () => {
		this.setState({ currentImg: this.state.startImg });
		this.setState({ text: 'You want to take a shit.' });
		this.setState({ gameStarted: true }, () => {
			if (!this.state.interval) {
				this.setState({ counter: 45 }, () => {
					this.startIntervalCountdown();
				});
			}
		});
	};

	startIntervalCountdown = () => {
		this.setState({
			interval: setInterval(() => {
				// decrease counter with each interval
				this.setState((previousState, props) => {
					return { counter: this.state.counter - 1 };
				});

				// random message
				if (this.state.counter === 10) {
					this.setState({
						text:
							'OOOOHH shit, you are going to explode!!!'
					});
				}
				// random message
				if (this.state.counter === 26) {
					this.setState({
						text: 'You feel the preasure rising!!!'
					});
				}

				if (this.state.counter === 0) {
					if (this.state.firstStepPassed) {
						this.completeGame();
						this.setState({
							text:
								'You cant hold it any more, so you just take a dump on the floor. But since you already took your pants off, its OK !'
						});
					} else {
						this.failGame();
					}
				}
			}, 1000)
		});
	}

	resetGame = () => {
		this.setState({ input: '' });
		this.setState({ text: '' });
		this.setState({ gameStarted: false });
		this.setState({ firstStepPassed: false });
		this.setState({ secondStepPassed: false });
		this.setState({ success: false });
		this.setState({ fail: false });
		clearInterval(this.state.interval);
		this.setState({ interval: undefined });
	};

	checkIfFirstStepPassed = (input) => {
		this.setState(
			{
				firstStepPassed:
					this.state.possibleFirstAnswers.indexOf(
						input
					) !== -1
						? true
						: false
			},
			() => {
				if (this.state.firstStepPassed) {
					this.setState({
						currentImg: this.state.pantsDownImg
					});
					this.setState({
						text: this.state.pantsOffMessage
					});
				}
				if (
					!this.state.firstStepPassed &&
					this.state.secondStepPassed
				) {
					this.failGame();
				}
				if (
					this.state.firstStepPassed &&
					this.state.secondStepPassed
				) {
					this.completeGame();
				}
			}
		);
	}

	checkIfSecondStepPassed = (input) => {
		this.setState(
			{
				secondStepPassed:
					this.state.possibleEndAnswers.indexOf(input) !==
						-1
						? true
						: false
			},
			() => {
				if (
					!this.state.firstStepPassed &&
					this.state.secondStepPassed
				) {
					this.failGame();
				}
				if (
					this.state.firstStepPassed &&
					this.state.secondStepPassed
				) {
					this.completeGame();
				}
			}
		);
	}

	handleKeyDownOnInput = event => {
		let input = this.state.input.toLowerCase().trim();
		if (event.key === 'Escape') {
			if (this.state.gameStarted) {
				this.resetGame();
			}
			if (this.state.success || this.state.fail) {
				this.resetGame();
			}
		}

		if (event.key === 'Enter') {
			if (this.state.success || this.state.fail) {
				this.resetGame();
			}
			// if game has started save answer to BE for later examination
			if (
				input !== 'start' ||
				this.state.gameStarted
			) {
				this.saveToBe(input);
			}

			// start new game if input start and game not started already
			if (input === 'start' && !this.state.gameStarted) {
				this.startNewGame();
			}

			// if game is started check input
			if (this.state.gameStarted) {
				if (!this.state.secondStepPassed) {
					this.checkIfSecondStepPassed(input);
				}
				if (!this.state.firstStepPassed) {
					this.checkIfFirstStepPassed(input);
				}

				// miss
				if (this.state.gameStarted && !this.state.secondStepPassed) {
					let answerExists = false;
					// check for possible miss responses
					this.state.missAnswers.forEach(missAnswer => {
						if (input === missAnswer.answer) {
							this.setState({
								text: missAnswer.response
							});
							answerExists = true;
							return;
						}
					});
					// default miss response
					if (!answerExists) {
						if (
							!this.firstStepPassed ||
							!this.secondStepPassed
						) {
							this.setState({
								text: `You dont know how to ${input}...`
							});
						}
					}
				}
			}
			// reset input
			this.setState({ input: '' });
		}
	};

	focusInput = () => {
		this.inputRef.current.focus();
	};

	render() {

		let img = <Greeting />;
		let counter = null;
		let helperCountDown = null;
		if (this.state.gameStarted) {
			img = (
				<ImageContainer currentImg={this.state.currentImg}></ImageContainer>
			);
			counter = <Counter counter={this.state.counter} />
			helperCountDown = <Counter helper counter={this.state.counter} />
		}

		let resetButton = null;
		if (this.state.success || this.state.fail) {
			resetButton = (
				<button className={classes.btn} onClick={this.resetGame}>
					<span>...Reset game</span>
				</button>
			);
		}

		let mainClasses = `${classes.main}`;
		if (this.state.success) {
			mainClasses = `${classes.main} ${classes.mainWin}`;
		} else if (this.state.fail) {
			mainClasses = `${classes.main} ${classes.mainLose}`;
		} else {
			mainClasses = `${classes.main}`;
		}

		return (
			<div className={mainClasses}>
				<header className={classes.header}>Shit Game {counter}</header>
				<div>
					{img}
					{helperCountDown}
					{resetButton}
				</div>
				<div className={classes.center}>
					<div className={classes.text}>{this.state.text}</div>
					<div className={classes.inputBox}>
						<span
							onClick={this.focusInput}
							className={classes.noMargin}
						>
							<img
								className={classes.svg}
								src={require('../../assets/images/chevron-right-solid.svg')}
								alt="command line"
							/>
						</span>
						<input
							ref={this.inputRef}
							type='text'
							className={classes.input}
							value={this.state.input}
							onChange={this.handleChange}
							onKeyDown={this.handleKeyDownOnInput}
						/>
					</div>
				</div>
				<footer>
					<div>
						Based on the original "Don't Shit Your Pants". Made
						using ReactJs.
					</div>
					<div>
						By
						<a href='https://linkedin.com/in/mile-ignjatovic-683188138'>
							Mile Ignjatovic
						</a>
					</div>
				</footer>
			</div>
		);
	}
}

export default main;
