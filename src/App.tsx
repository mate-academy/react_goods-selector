import React from 'react';
import './App.scss';

import classNames from 'classnames';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';

const goodsFromServer: string[] = [
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

type State = {
  selectedGoods: string[]
};

export class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: [],
  };

  chooseItemHandler = (item: string) => {
    if (!(this.state.selectedGoods.includes(item))) {
      this.setState(prevState => ({
        selectedGoods: [...prevState.selectedGoods, item],
      }));
    }
  };

  RemoveItemHandler = (item: string) => {
    this.setState(prevState => ({
      selectedGoods: prevState.selectedGoods.filter(element => element !== item),
    }));
  };

  resetSelectedItems() {
    this.setState({
      selectedGoods: [],
    });
  }

  showItemsHandler() {
    let SelectedValues = '';

    switch (this.state.selectedGoods.length) {
      case 1:
        SelectedValues = `${this.state.selectedGoods} is selected`;
        break;

      case 2:
        SelectedValues = `${this.state.selectedGoods[0]} and ${this.state.selectedGoods[1]} are selected`;
        break;

      case 3:
        SelectedValues = `${this.state.selectedGoods[0]},${this.state.selectedGoods[1]}  and ${this.state.selectedGoods[2]} are selected`;
        break;
      case 0:
        SelectedValues = 'No items selected';
        break;

      default:
        SelectedValues = `${this.state.selectedGoods} are selected`;
        break;
    }

    return SelectedValues;
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>
          {this.showItemsHandler()}
          {selectedGoods.length > 0
            ? (
              <Button
                type="button"
                className="btn btn-danger"
                onClick={() => (
                  this.resetSelectedItems()
                )}
              >
                X
              </Button>
            )
            : ('')}
        </h1>
        <ListGroup
          as="ul"
        >
          {goodsFromServer.map((item: string) => (
            <ListGroupItem
              className={classNames(
                'd-flex justify-content-between align-items-center',
                {
                  active: (this.state.selectedGoods.includes(item)),
                },
              )}
              as="li"
              key={item}
            >
              {item}
              <div>
                <Button
                  type="button"
                  className="addButton btn btn-success"
                  onClick={() => {
                    this.chooseItemHandler(item);
                  }}
                >
                  Add
                </Button>
                <Button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    this.RemoveItemHandler(item);
                  }}
                >
                  Remove
                </Button>
              </div>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

export default App;
