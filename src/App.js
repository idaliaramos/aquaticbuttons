import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed_button1: false,
      pressed_button2: false
    };
  }

  //call back function for button 2 to change the color of button 1
  changeColor1 = event => {
    this.setState({ pressed_button2: !this.state.pressed_button2 });
  };
  //call back function for button 1 to change the color of button 2
  changeColor2 = event => {
    this.setState({ pressed_button1: !this.state.pressed_button1 });
  };

  render() {
    //set bgColors dependending on the state
    const bgColor = this.state.pressed_button1 ? "#6FACC8" : "#E1BD5E";
    const bgColor2 = this.state.pressed_button2 ? "#7AA6B2" : "#4F889B";
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Aquatic Buttons</h1>
        </header>
        <p>Press one button and it will change the other buttons color</p>

        {/* //button onClick will change the colors of the other button */}
        <button
          className="button"
          style={{ backgroundColor: bgColor2 }}
          onClick={this.changeColor2}
        >
          Button 1
        </button>

        {/* //button onClick will change the colors of the other button */}
        <button
          className="button"
          style={{ backgroundColor: bgColor }}
          onClick={this.changeColor1}
        >
          Button 2
        </button>
      </div>
    );
  }
}

export default App;
