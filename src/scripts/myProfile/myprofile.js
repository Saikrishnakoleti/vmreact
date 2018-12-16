import React, { Component } from "react";

class MyProfile extends Component {
  render() {
    return (
      <div>
        <h3>This is MyProfile</h3>
        <p>Open webpack.config.js file and add the following code.</p>
          <p>We are setting webpack entry point to be main.js.</p> 
          <p>Output path is the place where bundled app will be served.</p>
          <p> We are also setting the development server to 8080 port.</p>
          <p> You can choose any port you want. </p>
      </div>
    );
  }
}
export default MyProfile;
