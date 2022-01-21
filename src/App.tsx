import React from 'react';
import './App.scss';
import classNames from 'classnames';

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

interface State {
  selectedGoods: string[];
}

class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: [],
  };

  getMessage = () => {
    const { selectedGoods } = this.state;
    const firstPartOfGoods = selectedGoods.slice(0, selectedGoods.length - 1).join(', ');
    const restOfGoods = selectedGoods[selectedGoods.length - 1];

    switch (selectedGoods.length) {
      case 0:
        return 'No goods selected';

      case 1:
        return `${selectedGoods[0]} is selected`;

      default:
        return `${firstPartOfGoods} and ${restOfGoods} are selected`;
    }
  };

  selectGoods = (good: string) => {
    const { selectedGoods } = this.state;

    if (selectedGoods.includes(good)) {
      selectedGoods.splice(selectedGoods.indexOf(good), 1);
    } else {
      selectedGoods.push(good);
    }

    this.setState(prevState => ({ selectedGoods: prevState.selectedGoods }));
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h1>
              The goods you have selected:
            </h1>
            <p>
              {this.getMessage()}
            </p>
          </div>
          <div className="col-md-8">
            <div className="table-responsive">
              <table
                className="
                  table
                  table-striped
                  table-hover
                  table-bordered
                "
              >
                <thead>
                  <tr className="bg-info">
                    <th>Grosery</th>
                    <th>Add to cart</th>
                    <th>Added</th>
                  </tr>
                </thead>

                <tbody>
                  {goodsFromServer.map((good) => {
                    const goodSelected = this.state.selectedGoods.includes(good);

                    return (

                      <tr key="good" className={goodSelected ? 'bg-info' : ''}>
                        <th>
                          {good}
                        </th>
                        <th>
                          <button
                            type="button"
                            className={classNames(
                              'btn',
                              {
                                'btn-warning': goodSelected,
                                'btn-success': !goodSelected,
                              },
                            )}
                            onClick={() => {
                              this.selectGoods(good);
                            }}
                          >
                            {this.state.selectedGoods.includes(good) ? 'Remove' : 'Add'}
                          </button>
                        </th>
                        <th>
                          {this.state.selectedGoods.includes(good)
                            ? 'This item was added to your cart'
                            : 'Press add button to add this item to your cart'}
                        </th>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
