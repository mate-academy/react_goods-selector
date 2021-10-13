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

type State = {
  selectedNames: string[];
};

class App extends React.Component<{}, State> {
  state = {
    selectedNames: ['Jam'],
  };

  toggleListItem = (selectedName: string, selected: boolean) => {
    this.setState(({ selectedNames }) => (
      selected
        ? { selectedNames: selectedNames.filter(good => good !== selectedName) }
        : { selectedNames: [...selectedNames, selectedName] }
    ));
  };

  getTitle = () => {
    const { selectedNames } = this.state;

    if (selectedNames.length === 0) {
      return 'No goods';
    }

    if (selectedNames.length === 1) {
      return `${selectedNames} is selected`;
    }

    const firstNames = selectedNames.slice(0, -1);

    return `${firstNames.join(', ')} and ${selectedNames[selectedNames.length - 1]} are selected`;
  };

  clearList = () => {
    this.setState({ selectedNames: [] });
  };

  render() {
    const { selectedNames } = this.state;

    return (
      <div className="app">
        <h1 className="title">
          {this.getTitle()}
          {' '}
          {selectedNames.length !== 0 && (
            <button
              type="button"
              className="button__title"
              onClick={() => {
                this.clearList();
              }}
            >
              x
            </button>
          )}
        </h1>
        <ul className="goods__list">
          {goodsFromServer.map(item => {
            const selected = selectedNames.includes(item);

            return (
              <div
                key="item"
                className={classNames(
                  'goods__field',
                  { 'goods__field--selected': selected },
                )}
              >
                <li className="goods__item">
                  {item}
                </li>
                <div className="button__block">
                  <button
                    type="button"
                    className="button"
                    onClick={() => {
                      return this.toggleListItem(item, selected);
                    }}
                  >
                    {selected ? 'Remove' : 'Select'}
                  </button>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
