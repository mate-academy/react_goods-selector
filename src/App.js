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
    // eslint-disable-next-line react/no-unused-state
    list: goodsFromServer,
    selectedGood: [],
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
      const { selectedGood } = this.state;
      const arr = selectedGood.splice(index, 1);

      this.setState({
        selectedGood: arr,
        title: `${product} is deleted`,
      });
    } else {
      this.setState({
        title: `${product} was not selected`,
      });
    }
  };

  clear = () => {
    this.setState({
      selectedGood: ['Jam'],
      title: 'No goods selected',
    });
  };

  render() {
    return (
      <div className="wrapper">
        <h1>{this.state.title}</h1>
        <button type="button" onClick={this.clear}>
          X
        </button>
        <p>
          <strong>Your list: </strong>
          {this.state.selectedGood.join(', ')}
        </p>
        <div
          style={{
            width: 700,
            border: '1px solid #ccc',
            backgroundColor: 'beige',
            margin: '20px auto',
          }}
        >
          {this.state.list.map(product => (
            <>
              <ul className="list">
                <li
                  key={product}
                  className={
                    this.state.selectedGood.includes(product)
                      ? 'list--bg'
                      : null
                  }
                >
                  {product}
                </li>
                <button
                  type="button"
                  onClick={this.onDeleteProduct.bind(this, product)}
                  className={
                    !this.state.selectedGood.includes(product)
                      ? 'visibility'
                      : null
                  }
                >
                  Delete
                </button>
                <button
                  type="button"
                  onClick={this.onAddProduct.bind(this, product)}
                  className={
                    this.state.selectedGood.includes(product)
                      ? 'visibility'
                      : null
                  }
                >
                  Add
                </button>
              </ul>
            </>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
