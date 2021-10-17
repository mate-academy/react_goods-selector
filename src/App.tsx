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
  itemsList: string[],
  selectedItem: string,
};

class App extends React.Component<{}, State> {
  state: State = {
    itemsList: goodsFromServer,
    selectedItem: 'Jam',
  };

  render() {
    const { itemsList, selectedItem } = this.state;

    return (
      <div className="container">
        <h1 className="title">
          {`${selectedItem} is selected`}
          <button
            type="button"
            className={classNames(
              { hidden: selectedItem === 'Nothing' },
            )}
            onClick={() => {
              this.setState({ selectedItem: 'Nothing' });
            }}
          >
            X
          </button>
        </h1>
        <ul className="items-list">
          {itemsList.map(item => (
            <li
              key={item}
              className={
                classNames(
                  'items',
                  { selected: selectedItem === item },
                )
              }
            >
              <div>
                {item}
              </div>
              <button
                type="button"
                className={
                  classNames(
                    'button',
                    { hidden: selectedItem === item },
                  )
                }
                onClick={() => {
                  this.setState({ selectedItem: item });
                }}
              >
                select
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
