import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    data: [],
  };

  onSaveButtonClick = (cardData) => {
    const { cardTrunfo } = this.state;
    this.setState((prevState) => ({
      data: [...prevState.data, cardData],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
    }), () => {
      if (cardTrunfo) {
        this.setState({ hasTrunfo: true });
      } else {
        this.setState({ hasTrunfo: false });
      }
    });
  };

  isSaveButtonDisabled = () => {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    const maxSum = 210;
    const maxAttr = 90;
    if ((cardName && cardDescription && cardImage && cardRare !== '')
      && (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= maxSum)
      && (cardAttr1 <= maxAttr && cardAttr1 >= 0)
      && (cardAttr2 <= maxAttr && cardAttr2 >= 0)
      && (cardAttr3 <= maxAttr && cardAttr3 >= 0)
    ) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => { (this.isSaveButtonDisabled()); });
  };

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      data,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        {data.map((cards) => (
          <div key={ cards.cardName }>
            <Card
              key={ cards.cardName }
              cardName={ cards.cardName }
              cardDescription={ cards.cardDescription }
              cardAttr1={ cards.cardAttr1 }
              cardAttr2={ cards.cardAttr2 }
              cardAttr3={ cards.cardAttr3 }
              cardImage={ cards.cardImage }
              cardRare={ cards.cardRare }
              cardTrunfo={ cards.cardTrunfo }
            />
          </div>
        )) }
      </div>
    );
  }
}

export default App;
