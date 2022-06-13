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
  selectedGood: string[],
};

class App extends React.Component<{}, State> {
  state = {
    selectedGood: ['Jam'],
  };

  onSelected = (item: string) => {
    this.setState((prevState) => ({
      selectedGood: [...prevState.selectedGood, item],
    }));
  };

  removeSelected = (item: string) => {
    this.setState((prevState) => {
      const items = [...prevState.selectedGood];

      items.splice(items.indexOf(item), 1);

      return ({
        selectedGood: items,
      });
    });
  };

  removeAll = () => {
    this.setState({ selectedGood: [] });
  };

  render() {
    const { selectedGood } = this.state;
    const elToHeader = [...selectedGood];
    const lastEl = elToHeader.splice(-2);
    let header;

    switch (selectedGood.length) {
      case 0:
        header = 'No goods selected';

        break;

      case 1:
        header = `${selectedGood[0]} is selected`;

        break;

      case 2:
        header = `${selectedGood[0]} and ${selectedGood[1]}  is selected`;
        break;

      default:
        header = `${elToHeader.join(', ')}, ${lastEl.join(' and ')} is selected`;
    }

    return (
      <div className="App">
        <h1>
          <>
            {header}
            {' '}
            {selectedGood.length > 0
            && (
              <button
                type="button"
                className="list__button"
                onClick={() => this.removeAll()}
              >
                Clear
              </button>
            )}
          </>
        </h1>
        <ul>
          {goodsFromServer.map(item => (
            <li
              key={item}
              className={
                classNames('list__item',
                  { list__active: selectedGood.includes(item) })
              }
            >
              {item}
              {selectedGood.includes(item)
                ? (
                  <button
                    type="button"
                    className="list__button"
                    onClick={() => this.removeSelected(item)}
                  >
                    Remove
                  </button>
                )
                : (
                  <button
                    type="button"
                    className="list__button"
                    onClick={() => this.onSelected(item)}
                  >
                    Select
                  </button>
                )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
