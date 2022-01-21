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

type State = {
  selectedGoods: string[],
};

export class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: ['Jam'],
  };

  select = (good: string) => {
    this.setState(oldState => ({
      selectedGoods: [...oldState.selectedGoods, good],
    }));
  };

  remove = (good: string) => {
    this.setState(oldState => {
      oldState.selectedGoods.splice(oldState.selectedGoods.indexOf(good), 1);

      return { selectedGoods: oldState.selectedGoods };
    });
  };

  stringOfGoods = (goods: string[]) => {
    let title = '';

    switch (goods.length) {
      case (0):
        title = 'No goods selected';
        break;

      case (1):
        title = `${goods[0]} is selected`;
        break;

      default:
        return `${[...goods].splice(0, goods.length - 1).join(', ')} and ${goods[goods.length - 1]} are selected`;
    }

    return title;
  };

  delete = () => {
    this.setState({ selectedGoods: [] });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        {!!this.state.selectedGoods.length && (
          <button
            type="button"
            className="button__res"
            onClick={
              () => this.delete()
            }
          >
            x
          </button>
        )}
        <span>
          {'    '}
        </span>
        <h1 className="title">
          {this.stringOfGoods(selectedGoods)}
        </h1>
        <ul className="ul">
          {goodsFromServer.map(good => {
            const selected = selectedGoods.includes(good);

            return (
              <>
                <li
                  key={good}
                  className={classNames('not-selected', {
                    sel: selected,
                  })}
                >
                  {good}
                  <div className="button">
                    <button
                      type="button"
                      className={classNames('button-55', {
                        'button-56': selected,
                      })}
                      onClick={selected
                        ? () => this.remove(good)
                        : () => this.select(good)}
                    >
                      {selected ? 'remove' : 'select'}
                    </button>
                  </div>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    );
  }
}
