import React from 'react';
import './App.scss';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';
import { Button } from './Button';

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
  selectedGoods: string[];
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: [],
  };

  addProduct = (item: string) => {
    this.setState((prevState) => ({
      selectedGoods: [
        ...prevState.selectedGoods,
        item,
      ],
    }));
  };

  deleteProduct = (item: string) => {
    this.setState((prevState) => ({
      selectedGoods: prevState.selectedGoods.filter(
        product => product !== item,
      ),
    }
    ));
  };

  clearAllProducts = () => {
    this.setState({
      selectedGoods: [],
    });
  };

  showProducts = () => {
    const { selectedGoods } = this.state;
    const firstPart = selectedGoods.slice(0, -1);
    const lastProduct = selectedGoods[selectedGoods.length - 1];

    return selectedGoods.length > 1
      ? `${firstPart.join(', ')} and ${lastProduct} are selected`
      : `${lastProduct} is selected`;
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>
          {selectedGoods.length
            ? `${this.showProducts()}`
            : 'No goods selected'}
        </h1>
        {!!selectedGoods.length && (
          <Button
            buttonName="Clear"
            action={this.clearAllProducts}
            disabled={false}
          />
        )}
        <section className="cards">
          {goodsFromServer.map(item => (
            <div
              key={uuidv4()}
              className={classNames(
                'cards__card',
                'card',
                { 'card--selected': selectedGoods.includes(item) },
              )}
            >
              <h2>
                {item}
              </h2>
              <Button
                buttonName="Add"
                action={() => {
                  this.addProduct(item);
                }}
                disabled={selectedGoods.includes(item)}
              />
              <Button
                buttonName="Remove"
                action={() => {
                  this.deleteProduct(item);
                }}
                disabled={!selectedGoods.includes(item)}
              />
            </div>
          ))}
        </section>
      </div>
    );
  }
}

export default App;
