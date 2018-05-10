import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed_button1: true,
      pressed_button2: true
    };
  }

  //call back function for button 2 to change the color of button 1
  changeColor1 = event => {
    console.log("click");
    console.log(this.state, "state");
    this.setState({ pressed_button2: !this.state.pressed_button2 });
  };
  //call back function for button 1 to change the color of button 2
  changeColor2 = event => {
    this.setState({ pressed_button1: !this.state.pressed_button1 });
  };

  render() {
    //set bgColors dependending on the state
    let bgColor = this.state.pressed_button1 ? "black" : "white";
    let bgColor2 = this.state.pressed_button2 ? "black" : "red";
    return (
      <div className="App">
        <header className="App-header">
          <img className="App-logo" alt="logo" />
          <h1 className="App-title">2 Button site!</h1>
        </header>
        <button
          className="button"
          style={{ backgroundColor: bgColor2 }}
          onClick={this.changeColor2.bind(this)}
        >
          Button1
        </button>
        <button
          className="button"
          style={{ backgroundColor: bgColor }}
          onClick={this.changeColor1.bind(this)}
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
