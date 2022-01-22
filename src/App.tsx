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
  selectedGood: string,
  selectedGoodsArray: string[]
};

export class App extends React.Component<{}, State> {
  state: State = {
    selectedGood: '',
    selectedGoodsArray: [],
  };

  chooseItemHandler = (item: string) => {
    this.state.selectedGoodsArray.push(item);
    this.setState(prevState => ({
      selectedGood: `${prevState.selectedGoodsArray} is selected`,
    }));
  };

  RemoveItemHandler = (item: string) => {
    const indexItem = this.state.selectedGoodsArray.indexOf(item);

    if (indexItem === -1) {
      return;
    }

    this.state.selectedGoodsArray.splice(indexItem, 1);
    this.setState(prevState => ({
      selectedGood: `${prevState.selectedGoodsArray} is selected`,
    }));
  };

  resetSelectedItems() {
    this.setState({
      selectedGood: '',
      selectedGoodsArray: [],
    });
  }

  render() {
    const { selectedGood, selectedGoodsArray } = this.state;
    let SelectedValues = '';

    switch (selectedGoodsArray.length) {
      case 1:
        SelectedValues = `${selectedGoodsArray.join('')} is selected`;
        break;

      case 2:
        SelectedValues = `${selectedGoodsArray[0]} and ${selectedGoodsArray[1]} are selected`;
        break;

      case 3:
        SelectedValues = `${selectedGoodsArray[0]},${selectedGoodsArray[1]}  and ${selectedGoodsArray[2]} are selected`;
        break;
      case 0:
        SelectedValues = 'None of items selected';
        break;

      default:
        SelectedValues = `${selectedGoodsArray} are selected`;
        break;
    }

    return (
      <div className="App">
        <h1>
          {selectedGood === ''
            ? 'No items selected'
            : `${SelectedValues}`}
          {selectedGoodsArray.length > 0
            ? (
              <Button
                type="button"
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
                  active: this.state.selectedGoodsArray.includes(item) === true,
                },
              )}
              as="li"
              key={item}
            >
              {item}
              <div>
                <Button
                  type="button"
                  onClick={() => {
                    this.chooseItemHandler(item);
                  }}
                >
                  Add
                </Button>
                <Button
                  type="button"
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
