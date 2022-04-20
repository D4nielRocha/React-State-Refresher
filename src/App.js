import './App.css';
// import Subtitle from  './components/Subtitle';
// import Game from './components/Game';
// import Demo from './components/Demo';
import Rando from './components/Rando';
// import Button from './components/Button';
import BrokenClick  from './components/BrokenClick';
import React, {Component} from 'react';


class App extends Component {
  render() {

    // let text = "Hello to State-React project!!";

    return <div>
      {/* <Game /> */}
      {/* <Demo name='Bob' fruit='Pineapple' /> */}
      <Rando maxNum={7} /> 
      {/* <Button /> */}
      <BrokenClick />
    </div>
  };
}

export default App;