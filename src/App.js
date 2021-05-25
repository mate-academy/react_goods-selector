import React from 'react';
import './App.scss';

const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

class App extends React.Component {
  state = {
    title: 'No goods selected',
    list: goodsFromServer,
    selectedGood: ['Jam'],
  };

  onAddProduct = (newTitle) => {
    this.state.selectedGood.push(newTitle);

    this.setState({
      title: `${newTitle} is selected`,
    });
  };

  onDeleteProduct = (product) => {
    const index = this.state.selectedGood.indexOf(product);

    if (index > -1) {
      const { selectedGood: prev } = this.state;

      prev.splice(index, 1);

      this.setState({
        selectedGood: prev,
        title: `${product} is deleted`,
      });
    }
  };

  clear = () => {
    this.setState({
      selectedGood: [],
      title: 'No goods selected',
    });
  };

  render() {
    return (
      <div className="wrapper">
        <h1>{this.state.title}</h1>
        <button
          type="button"
          className={this.state.selectedGood.length === 0 && 'visibility'}
          onClick={this.clear}
        >
          X
        </button>
        <p>
          <strong>Your list: </strong>
          {this.state.selectedGood.join(', ')}
        </p>
        <div>
          <ul className="list">
            {this.state.list.map(product => (
              <>
                <li
                  key={product}
                  className={
                    this.state.selectedGood.includes(product) && 'list--bg'
                  }
                >
                  {product}
                  <button
                    type="button"
                    onClick={this.onDeleteProduct.bind(this, product)}
                    className={
                      !this.state.selectedGood.includes(product) && 'visibility'
                    }
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    onClick={this.onAddProduct.bind(this, product)}
                    className={
                      this.state.selectedGood.includes(product) && 'visibility'
                    }
                  >
                    Add
                  </button>
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
