import React, { Component } from "react";

class Autofixr extends Component {
  render() {
    return (
      <div>
        <h2>This is Autofixr</h2>
        <p>The render method returns a description of what you want to see on the screen.</p>
        <p>React takes the description and displays the result.</p>
        <p>In particular, render returns a React element, which is a lightweight description of what to render.</p> 
        <p>Most React developers use a special syntax called “JSX” which makes these structures easier to write.</p>
        <p>The syntax is transformed at build time to React.createElement('div')</p>
      </div>
    );
  }
}
export default Autofixr;
