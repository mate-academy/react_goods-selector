import React from 'react';
import './App.scss';
import classNames from 'classnames';

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
    selectedGoods: [],
  }

  setSelection = (good) => {
    this.setState(prevState => ({
      selectedGoods: [...prevState.selectedGoods, good],
    }));
  }

  removeSelection = (good) => {
    this.setState(prevState => ({
      selectedGoods: prevState.selectedGoods.filter(
        element => element !== good,
      ),
    }));
  }

  resetSelection = () => {
    this.setState({
      selectedGoods: [],
    });
  }

  render() {
    return (
      <div className="App">
        <div className="ui middle aligned divided list">
          <div className="list-header">
            <h1>
              {this.state.selectedGoods.length !== 0 ? (
                <>
                  <span className="selected">
                    {this.state.selectedGoods.join(', ')}
                  </span>
                  {' '}
                  {this.state.selectedGoods.length > 1 ? (
                    'are selected'
                  ) : 'is selected'}
                </>
              ) : 'No goods selected'}
            </h1>
            <button
              type="button"
              onClick={this.resetSelection}
              className={classNames(
                'ui icon button header-button',
                { hidden: this.state.selectedGoods.length === 0 },
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
                  className={classNames(
                    'ui button',
                    { hidden: this.state.selectedGoods.includes(good.name) },
                  )}
                  onClick={() => this.setSelection(good.name)}
                >
                  Add
                </button>
                <button
                  type="button"
                  className={classNames(
                    'ui button',
                    { hidden: !this.state.selectedGoods.includes(good.name) },
                  )}
                  onClick={() => this.removeSelection(good.name)}
                >
                  Remove
                </button>
              </div>
              <div className={classNames(
                { selected: this.state.selectedGoods.includes(good.name) },
              )}
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
