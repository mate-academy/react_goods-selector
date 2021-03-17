import React from 'react';
import './App.scss';
import ClassNames from 'classnames';

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

const goodsWithId = goodsFromServer.map((name, index) => ({
  name, id: index + 1,
}));

class App extends React.Component {
  state = {
    selectedGood: 'Jam',
  }

  setSelection = (good) => {
    this.setState({
      selectedGood: good,
    });
  }

  resetSelection = () => {
    this.setState({
      selectedGood: null,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="ui middle aligned divided list">
          <div className="list-header">
            <h1>
              {this.state.selectedGood ? (
                <>
                  <span className="selected">
                    {this.state.selectedGood}
                  </span>
                  {' '}
                  is selected
                </>
              ) : 'Nothing selected'}
            </h1>
            <button
              type="button"
              onClick={this.resetSelection}
              className={ClassNames(
                'ui icon button header-button',
                { hidden: !this.state.selectedGood },
              )}
            >
              <i className="close icon" />
            </button>
          </div>
          {goodsWithId.map(good => (
            <div key={good.id} className="item">
              <div className="right floated content">
                <button
                  type="button"
                  className={ClassNames(
                    'ui',
                    'button',
                    { disabled: good.name === this.state.selectedGood },
                  )}
                  onClick={() => this.setSelection(good.name)}
                >
                  Select
                </button>
              </div>
              <div className={ClassNames({
                selected: good.name === this.state.selectedGood,
              })}
              >
                {good.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
