import React from 'react';
import classNames from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

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

export class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  clearSelectedGoods = () => {
    this.setState({ selectedGoods: [] });
  };

  addProduct = (product: string) => {
    this.setState((state) => ({
      selectedGoods: [...state.selectedGoods, product],
    }));
  };

  deleteProduct = (product: string) => {
    const { selectedGoods } = this.state;
    const changedGoods = selectedGoods.filter(item => item !== product);

    this.setState({ selectedGoods: changedGoods });
  };

  getStringOfGoods = () => {
    const { selectedGoods } = this.state;
    let stringOfGoods = '';

    if (selectedGoods.length === 0) {
      return 'No goods selected';
    }

    if (selectedGoods.length === 1) {
      stringOfGoods = `${selectedGoods[0]} is selected`;
    } else {
      const goodWithoutLast = selectedGoods.slice(0, -1);

      stringOfGoods = `${goodWithoutLast.join(', ')} `
       + `and ${selectedGoods[selectedGoods.length - 1]} are selected`;
    }

    return stringOfGoods;
  };

  render() {
    const { selectedGoods } = this.state;
    const stringOfGoods = this.getStringOfGoods();

    return (
      <div className="App">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6 d-flex justify-content-center">
              <div className="row justify-content-center">
                <div className="App__header d-flex justify-content-center">
                  <h1 className="App__title">
                    {stringOfGoods}
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="App__clear row justify-content-center">
            <div className="col-4 d-flex justify-content-center">
              {!!selectedGoods.length && (
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={this.clearSelectedGoods}
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-10 d-flex justify-content-center">
              <ul className="col-6 list list-group">
                {goodsFromServer.map(product => {
                  const isProductSelected = selectedGoods.includes(product);

                  return (
                    <li
                      key={product}
                      className={classNames({
                        'd-flex': true,
                        'justify-content-between': true,
                        'align-items-center': true,
                        'list-group-item': true,
                        'list-group-item-warning': !isProductSelected,
                        'list-group-item-success': isProductSelected,
                      })}
                    >

                      <span>{product}</span>

                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => {
                          if (isProductSelected) {
                            this.deleteProduct(product);
                          } else {
                            this.addProduct(product);
                          }
                        }}
                      >
                        {isProductSelected
                          ? 'Remove'
                          : 'Add'}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
