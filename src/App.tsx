import classNames from 'classnames';
import React from 'react';
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
  goods: string[],
  selectedGoods: string[],
};

export class App extends React.Component <{}, State> {
  state: Readonly<State> = {
    goods: goodsFromServer,
    selectedGoods: [goodsFromServer[goodsFromServer.findIndex(good => {
      return good === 'Jam';
    })]],
  };

  saveGoods = (good:string) => {
    const { selectedGoods } = this.state;

    if (selectedGoods.includes(good)) {
      this.setState((prevState) => ({
        selectedGoods: prevState.selectedGoods.filter(item => {
          return item !== good;
        }),
      }));
    } else {
      this.setState({
        selectedGoods: [...selectedGoods, good],
      });
    }
  };

  renderListofGoods = (goods: string[]) => {
    if (goods.length === 0) {
      return 'No goods selected';
    }

    if (goods.length === 1) {
      return `${goods[0]} is selected`;
    }

    return `${goods.slice(0, 1)} and ${goods.slice(1).join(', ')} are selected`;
  };

  render(): React.ReactNode {
    const { goods, selectedGoods } = this.state;

    return (
      <div className="App card card-content">
        <h1 className="card-header-title">
          {`Selected good: - ${this.renderListofGoods(selectedGoods)}`}
        </h1>
        {goods.map(good => {
          const isSelected = selectedGoods.includes(good);

          return (
            <h2
              key={good}
              className={classNames(
                'notification is-light',
                {
                  'is-info': !isSelected,
                  'is-success': isSelected,
                },
              )}
            >
              {good}
              <button
                className={classNames(
                  'button',
                  {
                    'is-info': !isSelected,
                    'is-success': isSelected,
                  },
                )}
                type="button"
                onClick={() => this.saveGoods(good)}
              >
                {isSelected ? 'Rremove' : 'Select'}

              </button>
            </h2>
          );
        })}
        {selectedGoods.length > 0 && (
          <button
            className="button is-danger"
            type="button"
            onClick={() => {
              this.setState({ selectedGoods: [] });
            }}
          >
            Clear
          </button>
        )}

      </div>
    );
  }
}

export default App;
