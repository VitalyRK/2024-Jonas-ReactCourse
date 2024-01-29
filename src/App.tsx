import React from 'react';
import Main from './components/main/Main';
import './global.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Classy wheater</h1>
        <Main />
      </div>
    );
  }
}

export default App;
