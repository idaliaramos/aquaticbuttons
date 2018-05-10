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
    let bgColor = this.state.pressed_button1 ? "#6FACC8" : "#DB9F40";
    let bgColor2 = this.state.pressed_button2 ? "#D22E35" : "#D97C38";
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">2 Button Site</h1>
        </header>
        {/* //button1, when pressed button2 will change colors */}
        <button
          className="button"
          style={{ backgroundColor: bgColor2 }}
          onClick={this.changeColor2}
        >
          Button1
        </button>

        {/* //button2, when pressed button1 will change colors */}
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
  // render() {
  //   let bgColor = this.state.color_black ? "black" : "white";
  //
  //   return (
  //     <div>
  //       <button
  //         style={{ backgroundColor: bgColor }}
  //         onClick={this.changeColor.bind(this)}
  //       >
  //         Button
  //       </button>
  //     </div>
  //   );
  // }
}

export default App;
