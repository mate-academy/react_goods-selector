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

class App extends React.Component {
  state = {
    selectedGood: 'Jam',
    isClicked: false,
  };

  onSelected = (item: string) => {
    this.setState({
      isClicked: true,
      selectedGood: item,
    });
  };

  removeSelected = () => {
    this.setState({
      isClicked: false,
      selectedGood: 'No goods selected',
    });
  };

  render() {
    const { selectedGood, isClicked } = this.state;

    return (
      <div className="App">
        <h1>
          {!isClicked
            ? 'No goods selected'
            : (
              <>
                {selectedGood}
                {' '}
                is selected
                <button
                  type="button"
                  className="list__button"
                  onClick={() => this.removeSelected()}
                >
                  Clear
                </button>
              </>
            )}
        </h1>
        <ul>
          {goodsFromServer.map(item => (
            <li
              key={item}
              className={
                classNames('list__item',
                  { list__active: item === selectedGood && isClicked })
              }
            >
              {item}
              {item === selectedGood && isClicked
                ? (
                  <button
                    type="button"
                    className="list__button"
                    onClick={() => this.removeSelected()}
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
