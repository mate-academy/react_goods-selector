import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
    const listLength = this.state.selectedGoods.length;

    switch (listLength) {
      case 0:
        return 'NO GOODS SELECTED';
      case 1:
        return `${this.state.selectedGoods} is selected`;
      default:
        return `${this.state.selectedGoods.slice(0, -1).join(', ')} and
          ${this.state.selectedGoods.slice(-1)} are selected`;
    }
  }

  clearText = () => {
    this.setState(
      prevState => prevState.selectedGoods.splice(0),
    );
  }

  goodIsSelected(good) {
    const res = this.state.selectedGoods.includes(good);

    return res;
  }

  addGood(good) {
    this.setState(prevState => prevState.selectedGoods.push(good));
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
            <Button
              onClick={this.clearText}
            >
              X
            </Button>
          </h1>
        </div>

        <ListGroup as="ul" className="list__group">
          {goodsFromServer.map(good => (
            <ListGroup.Item
              key={uuidv4()}
              active={this.goodIsSelected(good)}
              as="li"
              className="list__item"
            >
              { good }
              <Button
                key={uuidv4()}
                variant={this.goodIsSelected(good) ? 'danger' : 'success'}
                className="list__selector"
                onClick={this.goodIsSelected(good)
                  ? () => this.removeGood(good)
                  : () => this.addGood(good)
                }
              >
                {this.goodIsSelected(good) ? 'Remove' : 'Add'}
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
  }
}
