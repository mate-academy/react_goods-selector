import React from 'react';
import classNames from 'classnames';
import './App.scss';

type State = {
  selectedGoods: string[],
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGoods: ['Jam'],
  };

  setTitle() {
    switch (this.state.selectedGoods.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${this.state.selectedGoods} is selected`;
      default:
        return `${this.state.selectedGoods.slice(0, -1).join(', ')} and ${this.state.selectedGoods.slice(-1)} are selected`;
    }
  }

  addGood = (good: string) => {
    this.setState(state => ({
      selectedGoods: [
        ...state.selectedGoods,
        good,
      ],
    }));
  };

  removeGood = (good: string) => {
    this.setState(state => ({
      selectedGoods: state.selectedGoods
        .filter(selectedGood => selectedGood !== good),
    }));
  };

  clearSelectedGoods = () => {
    this.setState({
      selectedGoods: [],
    });
  };

  render() {
    const { selectedGoods } = this.state;

    const isGoodSelected = (good: string): boolean => {
      return selectedGoods.includes(good);
    };

    return (
      <div className="box has-text-centered">
        <h1
          className="subtitle has-text-centered is-size-3 mt-3"
        >
          { this.setTitle() }
        </h1>

        {(this.state.selectedGoods.length !== 0) && (
          <button
            type="button"
            className="button is-responsive"
            onClick={() => {
              this.setState(() => {
                this.clearSelectedGoods();
              });
            }}
          >
            Clear List
          </button>
        )}

        <div className="list box">
          {goodsFromServer.map(good => (
            <div
              key={good}
              className={classNames(
                'item',
                {
                  'has-background-grey-lighter': !isGoodSelected(good),
                  'has-background-success': isGoodSelected(good),
                },
              )}
            >
              <div>
                {good.toLocaleUpperCase()}
              </div>

              <button
                type="button"
                className={classNames(
                  'button',
                  'is-focused',
                  {
                    'is-danger': isGoodSelected(good),
                  },
                )}
                onClick={() => {
                  if (!isGoodSelected(good)) {
                    this.addGood(good);
                  }

                  if (isGoodSelected(good)) {
                    this.removeGood(good);
                  }
                }}
              >
                {!selectedGoods.includes(good)
                  ? 'CLICK TO SELECT'
                  : 'CLICK TO REMOVE'}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
