import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
class App extends React.Component {
  state(
    
  )
}
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
        />
        <Card />
      </div>
    );
  }
}

export default App;
