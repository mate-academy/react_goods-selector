import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    selectedGoods: [],
  };

  add = (product) => {
    this.setState(prevState => (
      { selectedGoods: [...prevState.selectedGoods, product] }));
  }

  remove = (product) => {
    if (this.state.selectedGoods.includes(product)) {
      const copyArr = [...this.state.selectedGoods];
      const elementIndex = copyArr.findIndex(element => element === product);

      copyArr.splice(elementIndex, 1);
      this.setState(() => ({ selectedGoods: copyArr }));
    }
  }

  reset = () => {
    this.setState(() => ({ selectedGoods: [] }));
  }

  render() {
    return (
      <div className="App">
        <h2 className="mainText">
          Selected good:
          {' '}
          <p
            className="stateTranslation"
          >
            {this.state.selectedGoods.join(', ')}
          </p>
        </h2>
        <h3>
          quantity:
          {this.state.selectedGoods.length}
        </h3>
        <Button
          onClick={this.reset}
          className="btn"
          variant="danger"
        >
          Remove all from cart
        </Button>
        <ul className="mainUl">
          {goodsFromServer.map(product => (
            <li className="liOne" key={product}>
              <span className={this.state.selectedGoods.includes(product)
                ? 'liText highlighted' : 'liText'}
              >
                {product}
              </span>
              <span className="buttonsGroup">
                <Button
                  onClick={() => this.add(product)}
                  className="btn"
                >
                  Add
                </Button>
                <Button
                  onClick={() => this.remove(product)}
                  className="btn"
                >
                  Remove
                </Button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
