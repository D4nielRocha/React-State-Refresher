import React, { Component } from 'react';


class ClickGame extends Component{

    state = {
        numWin: 8,
        num: 0,
        isWinner: false
    }

    numGenerator = () => {
        let randNum = Math.floor(Math.random() * 10);
        this.setState({num: randNum});
    };

    render(){

        if(this.state.num === this.state.numWin){
            this.setState({isWinner: true})
        }

        return(
            <div>
                <h1>Number is {this.state.num}</h1>
                {!this.state.isWinner ? <button onClick={this.numGenerator}>Click Me</button> : <h2>You WIN!!</h2>}
            </div>
        )
    }


}


export default ClickGame;