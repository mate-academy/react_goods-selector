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
  selectedItem: string,
};

export class App extends React.Component<{}, State> {
  state: State = {
    selectedGood: '',
    selectedItem: '',
  };

  ClickHandler = (item: string) => {
    this.setState({
      selectedGood: `${item} is selected`,
      selectedItem: `${item}`,
    });
  };

  resetSelectedItem() {
    this.setState({
      selectedGood: '',
      selectedItem: '',
    });
  }

  render() {
    const { selectedGood, selectedItem } = this.state;

    return (
      <div className="App">
        <h1>
          {selectedGood === ''
            ? 'No items selected'
            : `${selectedGood}`}
          {selectedGood
            ? (
              <Button
                type="button"
                onClick={() => (
                  this.resetSelectedItem()
                )}
              >
                X
              </Button>
            )
            : ('')}
        </h1>
        <ListGroup as="ul">
          {goodsFromServer.map((item: string) => (
            <ListGroupItem
              className={classNames(
                'd-flex justify-content-between align-items-center',
                {
                  active: selectedItem === item,
                },
              )}
              as="li"
              key={item}
            >
              {item}
              <Button
                type="button"
                onClick={() => {
                  this.ClickHandler(item);
                }}
              >
                Select
              </Button>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

export default App;
