import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <form>
        <label>
          Nome da carta:
          <input type="text" data-testid="name-input" />
        </label>
        <label>
          Descrição da Carta:
          <textarea type="textarea" data-testid="description-input" />
        </label>
        <label>
          Atributo 1:
          <input type="number" data-testid="attr1-input" />
        </label>
        <label>
          Atributo 2:
          <input type="number" data-testid="attr2-input" />
        </label>
        <label>
          Atributo 3:
          <input type="number" data-testid="attr3-input" />
        </label>
        <label>
          Imagem da carta:
          <input type="text" data-testid="image-input" />
        </label>
        <label>
          <select name="" data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label>
          Super Trunfo:
          <input type="checkbox" data-testid="trunfo-input" />
        </label>
        <button type="button" data-testid="save-button">
          Salvar
        </button>
      </form>
    );
  }
}
