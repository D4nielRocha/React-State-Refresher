import React, { Component } from 'react';
import '../components/Game.css';


class Game extends Component{
    constructor(props){
        super(props);
        this.state = {
            score: 50,
            gameOver: false,
        }
    }
    render(){

        if(this.state.score >= 50){
            this.setState({
                gameOver: true
            })
        }

        return(
            <div>
                <h1>Your score is: {this.state.score}</h1>
                {this.state.gameOver ? <h3>Game is Over</h3> : <h3>Keep Playing</h3> }
            </div>
        )
    }
}

export default Game;