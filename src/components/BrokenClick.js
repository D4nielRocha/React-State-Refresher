import React, { Component } from 'react';


class BrokenClick extends Component{

    // #####One way of using state #######

    // constructor(props){
        // super(props);
        // this.state = {clicked: false};
        // this.handleClick = this.handleClick.bind(this);
    // }

    // #### Another wauy of declaring states ########

    state = {clicked: false};
    
    ///##### Using an arrow function binds the function ###### 
    
    handleClick = (e) => {
        this.setState({clicked: true});
    }


    render(){
        return(
            <div>
            <h1>{this.state.clicked ? 'Clicked!!!' : 'Not Clicked'}</h1>
            <button onClick={this.handleClick}>Click Me!</button>
            </div>
        )
    }

}


export default BrokenClick;