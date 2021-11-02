import React from 'react';
import './App.scss';
import classNames from 'classnames';

const cn = classNames;
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
  selectedGood: string;
};
type HandleChangeGood = (string: string) => void;
type ResetSelectedGood = () => void;
type Props = {};

class App extends React.Component<Props, State> {
  state = {
    selectedGood: 'Jam',
  };

  handleChangeGood:HandleChangeGood = (selectedGood) => {
    this.setState({ selectedGood });
  };

  resetSelectedGood:ResetSelectedGood = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="wrapper">
        <div className="header">
          <h1>{selectedGood ? `${selectedGood} is selected` : 'No goods selected'}</h1>
          {selectedGood && <button type="button" className="header__reset-button" onClick={this.resetSelectedGood}>X</button>}
        </div>
        <ul className="goods">
          {goodsFromServer.map((good) => (
            <li
              key={good}
              className={cn('goods__item', {
                active: good === selectedGood,
              })}
            >
              <span>{good}</span>
              <button type="button" onClick={() => this.handleChangeGood(good)}>Select</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
