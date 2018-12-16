import { Component } from "react";
import AppHeader from '../appHeader/header';
import AppBody from '../appBody/appbody';
import {HashRouter} from 'react-router-dom';
import React from "react";
/**
* Main app container with layout
* ****************************************
*                 Header                 *
******************************************
*                 Body                   *
******************************************
*                 Footer                 *
******************************************
*/
class App extends Component {
  render() {
    return (
    	<HashRouter>
	      <div>
	        <AppHeader />
	        <AppBody />
	      </div>
	    </HashRouter>
    );
  }
}
export default App;
