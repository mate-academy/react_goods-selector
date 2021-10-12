import React from 'react';
import classNames from 'classnames';

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

interface State {
  Goods: string[],
}

class App extends React.Component<{}, State> {
  state: State = {
    Goods: [],
  };

  renderList = (list: string[]) => (
    <ul>
      {list.map(item => {
        const status = this.state.Goods.includes(item);

        return (
          <li
            key={item}
            className={
              classNames(
                'list-item',
                {
                  'list-item--selected': status,
                },
              )
            }
          >
            <button
              className={
                classNames(
                  'button-item',
                  {
                    'button-item--selected': status,
                  },
                )
              }
              type="button"
              onClick={() => this.switchList(status, item)}
            >
              {' '}
            </button>
            {item}
          </li>
        );
      })}
    </ul>
  );

  renderText = (): string => {
    const { Goods } = this.state;
    let titleText = '';

    if (Goods.length === 1) {
      titleText = `${Goods[0]} is selected.`;
    }

    if (Goods.length > 1) {
      titleText = Goods.reduce((text, item, i, arr) => {
        if (i === 0) {
          return item + text;
        }

        if (i === arr.length - 1) {
          return `${text} and ${item} are selected`;
        }

        return `${text}, ${item}`;
      }, '');
    }

    if (Goods.length === 0) {
      titleText = 'No goods selected';
    }

    return titleText;
  };

  switchList = (selected: boolean, item: string) => {
    if (selected === false) {
      this.setState(({ Goods }) => {
        return {
          Goods: [...Goods, item],
        };
      });
    } else {
      this.setState(({ Goods }) => {
        return {
          Goods: [...Goods].filter(i => i !== item),
        };
      });
    }
  };

  clearList = () => {
    this.setState({ Goods: [] });
  };

  render() {
    const { Goods } = this.state;

    return (
      <div className="app">
        <h1>{this.renderText()}</h1>
        {goodsFromServer.length && this.renderList(goodsFromServer)}
        {Goods.length ? (
          <button
            className="button-clear"
            type="button"
            onClick={this.clearList}
          >
            Unselected All!
          </button>
        ) : ''}
      </div>
    );
  }
}

export default App;
