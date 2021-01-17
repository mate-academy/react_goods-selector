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
    selectedGoods: '',
  };

  add = ({ target }) => {
    let item = target
      .parentNode.previousElementSibling.innerText;

    item += ', ';
    this.setState(prevState => ({
      selectedGoods: prevState.selectedGoods + item,
    }));
  }

  remove = ({ target }) => {
    const item = target
      .parentNode.previousElementSibling.innerText;
    let result = (this.state.selectedGoods).slice();

    result = result.split((', '));
    if (result.includes(item)) {
      result.splice(result.indexOf(item), 1);
      result = result.join(', ');
      this.setState(() => ({
        selectedGoods: result,
      }));
    }
  }

  reset = () => {
    this.setState(() => ({
      selectedGoods: '',
    }));
  }

  render() {
    return (
      <div className="App">
        <h2 className="mainText">
          Selected good:
          {' '}
          <p className="stateTranslation">{this.state.selectedGoods}</p>
        </h2>
        <h3>
          quantity:
          {goodsFromServer.length}
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
                  onClick={this.add}
                  className="btn"
                >
                  Add
                </Button>
                <Button
                  onClick={this.remove}
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
