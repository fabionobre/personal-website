import React from 'react';
import {render} from 'react-dom';
import Main from './main.jsx';

class App extends React.Component {

  render () {
	return (
		<Main />
	)
  }
}

render(<App/>, document.getElementById('app'));