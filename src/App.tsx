import React from 'react';
import classNames from 'classnames';
import './App.scss';
import goodsFromServer from './goods';

type State = {
  selectedGood: string;
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: '',
  };

  clear = () => {
    this.setState({ selectedGood: '' });
  };

  selectGood = (good: string) => {
    this.setState({
      selectedGood: good,
    });
  };

  isGoodSelected = (good: string) => {
    return this.state.selectedGood.includes(good);
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">

            {selectedGood
              ? `${selectedGood} is selected`
              : 'No goods selected'}
          </h1>

          <button
            type="button"
            className={classNames('App__clear',
              { 'App__clear--active': selectedGood })}
            onClick={this.clear}
          >
            Clear
          </button>
        </header>

        <ul>
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={classNames('good',
                { 'good--active': this.isGoodSelected(good) })}
            >
              {good}
              <button
                type="button"
                className={classNames('good__select',
                  { 'good__select--active': !this.isGoodSelected(good) })}
                onClick={() => this.selectGood(good)}
              >
                Select
              </button>

              <button
                type="button"
                className={classNames('good__remove',
                  { 'good__remove--active': this.isGoodSelected(good) })}
                onClick={this.clear}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
