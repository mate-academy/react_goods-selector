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
  selectedGood: string[],
}

class App extends React.Component<{}, State> {
  state: State = {
    selectedGood: ['Jam'],
  };

  renderList = (list: string[]) => (
    <ul className="list">
      {list.map(item => {
        const isSelected = this.state.selectedGood.includes(item);
        const buttonText = isSelected ? 'Remove' : 'Add';

        return (
          <li
            key={item}
            className={classNames(
              'list__item',
              {
                'list__item--selected': isSelected,
              },
            )}
          >
            {item}
            <button
              className="list__btn"
              type="button"
              onClick={() => this.toggleListItem(isSelected, item)}
            >
              {buttonText}
            </button>
          </li>
        );
      })}
    </ul>
  );

  getTitle = (): string => {
    const { selectedGood } = this.state;
    let title = '';

    if (selectedGood.length === 1) {
      title = `${selectedGood[0]} is selected.`;
    }

    if (selectedGood.length > 1) {
      title = selectedGood.reduce((text, listItem, i, arr) => {
        if (i === 0) {
          return listItem + text;
        }

        if (i === arr.length - 1) {
          return `${text} and ${listItem} are selected`;
        }

        return `${text}, ${listItem}`;
      }, '');
    }

    if (!selectedGood.length) {
      title = 'No goods selected';
    }

    return title;
  };

  toggleListItem = (selected: boolean, item: string) => {
    if (!selected) {
      this.setState(({ selectedGood }) => {
        return {
          selectedGood: [...selectedGood, item],
        };
      });
    } else {
      this.setState(({ selectedGood }) => {
        return {
          selectedGood: [...selectedGood].filter(i => i !== item),
        };
      });
    }
  };

  clearList = () => {
    this.setState({ selectedGood: [] });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        {selectedGood.length ? (
          <button
            type="button"
            onClick={this.clearList}
          >
            X
          </button>
        ) : ''}

        <h1>{this.getTitle()}</h1>

        {goodsFromServer.length && this.renderList(goodsFromServer)}
      </div>
    );
  }
}

export default App;
