import React, { Component } from 'react';


class ClickGame extends Component{
    constructor(props){
        super(props);
        this.state={
                numWin: 8,
                num: 0,
                isWinner: false
        }
        this.numGenerator = this.numGenerator.bind(this);
    }   
  
    numGenerator(){
        let randNum = Math.floor(Math.random() * 10) + 1;
        console.log(randNum);
        if(randNum === 7){
            this.setState({isWinner : true});
        }
        this.setState({num: randNum});
    };

    render(){

        return(
            <div>
                <h1>Number is: {this.state.num}</h1>
                {/* {!this.state.isWinner ? <button onClick={this.numGenerator}>Generate Random Number</button> : <h2>You WIN!!</h2>} */}
                {/* {this.state.num === 7 ? <h2>YOU WIN!!</h2> : <button onClick={this.numGenerator}>Generate Random Number</button>} */}
                {this.state.isWinner ? <h2>YOU WIN!!</h2> : <button onClick={this.numGenerator}>Generate Random Number</button>}
            </div>
        )
    }


}


export default ClickGame;