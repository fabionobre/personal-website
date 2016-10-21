import React from 'react';
import {render} from 'react-dom';
import * as axios from 'axios';
import Menu from './menu.jsx';

var Main = React.createClass({

  getInitialState: function() {
    return {
      mainConfig: {}
    }
  },

  componentDidMount() {
    this.loadMainPageInfo();
  },

  loadMainPageInfo: function() {

    var _this = this;

    axios.get("public/main.json")
      .then(function (response) {
        var mainConfig = JSON.parse(JSON.stringify(response.data));
        _this.setState({ mainConfig: mainConfig })
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  render () {
    return (
    	<div>
	    	<Menu mainConfig={this.state.mainConfig} />
	    	<p>Hello React! Hello World!</p>
    	</div>
    )
  }
});

export default Main;