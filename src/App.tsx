import React from 'react';
import './App.scss';
// import 'bulma/css/bulma.min.css';

const goodsFromServer = [
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

class App extends React.Component<{}, State> {
  state: State = {
    selectedGood: 'Jam',
  };

  remover = (good: string) => {
    if (this.state.selectedGood === good) {
      return 'Romove';
    }

    return 'Select';
  };

  render() {
    return (
      <div className="content">
        <h1 className="content__title">
          {(this.state.selectedGood)
            ? `Selected goods: ${this.state.selectedGood}`
            : 'No goods selected'}
        </h1>
        {(this.state.selectedGood)
          ? (
            <button
              type="button"
              onClick={() => {
                this.setState({ selectedGood: '' });
              }}
              className="button button__remove"
            >
              Clear
            </button>
          )
          : ''}
        <ul className="list">
          {goodsFromServer.map(good => (
            <React.Fragment key={good}>
              <div className="content__item">
                <li
                  className={(good === this.state.selectedGood)
                    ? 'list__item list__item--isSelected'
                    : 'list__item'}
                >
                  {good}
                </li>

                <button
                  type="button"
                  onClick={() => {
                    this.setState((state) => ({
                      selectedGood: state.selectedGood === good ? '' : good,
                    }));
                  }}
                  className={this.state.selectedGood === good
                    ? 'button button__remove'
                    : 'button'}
                >
                  {this.remover(good)}
                </button>
              </div>
            </React.Fragment>
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
