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
  goods: string[],
}

class App extends React.Component<{}, State> {
  state: State = {
    goods: ['Dumplings'],
  };

  renderList = (list: string[]) => (
    <ul>
      {list.map(item => {
        const status = this.state.goods.includes(item);

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

  getTitle = (): string => {
    const { goods } = this.state;
    let titleText = '';

    if (goods.length === 1) {
      titleText = `${goods[0]} is selected.`;
    }

    if (goods.length > 1) {
      titleText = goods.reduce((text, item, i, arr) => {
        if (i === 0) {
          return item + text;
        }

        if (i === arr.length - 1) {
          return `${text} and ${item} are selected`;
        }

        return `${text}, ${item}`;
      }, '');
    }

    if (goods.length === 0) {
      titleText = 'No goods selected';
    }

    return titleText;
  };

  switchList = (selected: boolean, item: string) => {
    if (selected === false) {
      this.setState(({ goods }) => {
        return {
          goods: [...goods, item],
        };
      });
    } else {
      this.setState(({ goods }) => {
        return {
          goods: [...goods].filter(x => x !== item),
        };
      });
    }
  };

  clearList = () => {
    this.setState({ goods: [] });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="app">
        <h1>{this.getTitle()}</h1>
        {goodsFromServer.length && this.renderList(goodsFromServer)}
        {goods.length
          ? (
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
