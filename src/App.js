import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, Button } from 'react-bootstrap';
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

export class App extends Component {
  state = {
    selectedGoods: ['Jam'],
  };

  setTitleList() {
    const { selectedGoods } = this.state;
    const listLength = selectedGoods.length;

    switch (listLength) {
      case 0:
        return 'NO GOODS SELECTED';
      case 1:
        return `${selectedGoods[0]} is selected`;
      default:
        return `${selectedGoods.slice(0, -1).join(', ')} and
          ${selectedGoods.slice(-1)} are selected`;
    }
  }

  clearText = () => {
    this.setState({
      selectedGoods: [],
    });
  }

  isSelectedGoodsLength() {
    if (this.state.selectedGoods.length) {
      return true;
    }

    return false;
  }

  isGodSelected(good) {
    return this.state.selectedGoods.includes(good);
  }

  addGood(good) {
    this.setState(prevState => ({
      selectedGoods: [...prevState.selectedGoods, good],
    }));
  }

  removeGood(good) {
    this.setState(prevState => ({
      selectedGoods: prevState.selectedGoods.filter(
        selectedGood => selectedGood !== good,
      ),
    }));
  }

  render() {
    return (
      <div className="App list">
        <div>
          <h1 className="list__title">
            Selected good:
            {' '}
            {this.setTitleList()}
            {' '}
            { this.isSelectedGoodsLength() && (
            <Button
              onClick={this.clearText}
            >
              X
            </Button>
            )
            }
          </h1>
        </div>

        <ListGroup as="ul" className="list__group">
          {goodsFromServer.map(good => (
            <ListGroup.Item
              key={good}
              active={this.isGodSelected(good)}
              as="li"
              className="list__item"
            >
              { good }
              <Button
                variant={this.isGodSelected(good) ? 'danger' : 'success'}
                className="list__selector"
                onClick={this.isGodSelected(good)
                  ? () => this.removeGood(good)
                  : () => this.addGood(good)
                }
              >
                {this.isGodSelected(good) ? 'Remove' : 'Add'}
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
  }
}
