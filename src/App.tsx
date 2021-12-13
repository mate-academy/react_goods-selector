import classNames from 'classnames';
import React from 'react';

import './App.scss';

import CloseButton from 'react-bootstrap/CloseButton';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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

const delicious:string[] = [
  'Appetizing',
  'Flavorful',
  'Fresh',
  'Delish',
  'Delectable',
  'Tasteful',
  'Tasty',
  'Toothsome',
  'Yummy',
  'Flavorful',
];

type State = {
  selectedGoods: string[],
};

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  reset = () => {
    this.setState({ selectedGoods: [] });
  };

  add = (el:string, selectedGoods:string[]) => {
    if (!selectedGoods.includes(el)) {
      this.setState(prevState => (
        { selectedGoods: [...prevState.selectedGoods, el] }));
    }
  };

  remove = (el:string, selectedGoods:string[]) => {
    if (selectedGoods.includes(el)) {
      this.setState(prevState => ({
        selectedGoods: [...prevState.selectedGoods].filter(
          product => product !== el,
        ),
      }));
    }
  };

  titleMaker = (goods:string[]) => {
    return (
      goods.length
        ? (
          <h1 className="productCards__cartContent">
            {goods.length > 1
              ? `${goods.slice(0, -1).join(', ')} and ${goods[goods.length - 1]} are `
              : (`${goods.join(', ')} is `)}

            selected

          </h1>
        )
        : <h1 className="productCards__cartContent">No goods selected</h1>);
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <div className="productCards">
          {this.titleMaker(selectedGoods)}

          {selectedGoods.length > 0 && (
            <CloseButton
              type="button"
              className={classNames('button', 'button-close')}
              onClick={() => {
                this.reset();
              }}
            />
          )}

          <p className="productCards__amount">
            Goods amount:
            {` ${selectedGoods.length}`}
          </p>

          <div className="productCards__products">
            {goodsFromServer.map((el, i) => (
              <Card
                bg={el}
                key={el}
                style={{ width: '18rem' }}
                className={classNames(
                  'product',
                  'mb-2',
                  { product_selected: selectedGoods.includes(el) },
                )}
              >
                <Card.Body>
                  <Card.Title>{el}</Card.Title>

                  <Card.Text>
                    {`${delicious[i]} `}
                    {el}
                  </Card.Text>

                  {!selectedGoods.includes(el)
                    ? (
                      <Button
                        variant="outline-success"
                        className={classNames(
                          `${el.toLowerCase()}-button`,
                          'button',
                          'selected',
                        )}
                        onClick={() => {
                          this.add(el, selectedGoods);
                        }}
                      >
                        Select
                      </Button>
                    )
                    : (
                      <Button
                        variant="outline-success"
                        className={classNames(
                          `${el.toLowerCase()}-button`,
                          'button',
                        )}
                        onClick={() => {
                          this.remove(el, selectedGoods);
                        }}
                      >
                        Remove
                      </Button>
                    )}
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
