import { Component, ReactNode } from 'react';
import classNames from 'classnames';
import { mdiCloseCircle, mdiPlusCircle, mdiCloseCircleMultiple } from '@mdi/js';
import Icon from '@mdi/react';

import 'bulma';

import goodsFromServer from './goods';

type State = {
  selectedGoods: string[],
};

export class App extends Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  clear = () => {
    this.setState({
      selectedGoods: [],
    });
  };

  select = (good: string) => {
    this.setState((prevState) => ({
      selectedGoods: [
        ...prevState.selectedGoods,
        good,
      ],
    }));
  };

  remove = (good: string) => {
    this.setState((prevState) => {
      const newSelectedGoods = [...prevState.selectedGoods];
      const removeIndex = newSelectedGoods.indexOf(good);

      if (removeIndex !== -1) {
        newSelectedGoods.splice(removeIndex, 1);
      }

      return {
        selectedGoods: newSelectedGoods,
      };
    });
  };

  action = (good: string, isActive: boolean) => (
    isActive
      ? this.remove(good)
      : this.select(good)
  );

  getTitle = (selectedGoods: string[]): ReactNode => {
    if (!selectedGoods.length) {
      return 'No goods selected';
    }

    const plural = selectedGoods.length === 1
      ? 'is'
      : 'are';
    const separatedGoods = selectedGoods.length === 1
      ? selectedGoods[0]
      : `${selectedGoods.slice(0, -1).join(', ')} and ${selectedGoods.slice(-1)[0]}`;

    return `${separatedGoods} ${plural} selected`;
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <main className="App p-2">
        <header className="App__header columns is-centered pt-5">
          <div className="column is-half content has-text-centered">
            <h1 className="App__title">
              {this.getTitle(selectedGoods)}
            </h1>
            <button
              type="button"
              className={
                classNames(
                  'App__clear',
                  'button',
                  'is-black',
                  {
                    'is-hidden': !selectedGoods.length,
                  },
                )
              }
              onClick={this.clear}
            >
              <Icon
                path={mdiCloseCircleMultiple}
                title="Clear"
                size={1}
                color="white"
              />
              <span className="ml-2 is-size-6">
                Clear
              </span>
            </button>
          </div>
        </header>

        <section
          className="
            App__list-wrapper
            columns
            is-centered
          "
        >
          <ul className="App__list column level is-3 box">
            {goodsFromServer.map((good: string) => {
              const isActive = selectedGoods.includes(good);

              return (
                <li
                  key={good}
                  className={
                    classNames(
                      'level-left',
                      'Good',
                      {
                        'Good--active': isActive,
                      },
                    )
                  }
                >
                  <button
                    type="button"
                    className={
                      classNames(
                        'button',
                        'p-1',
                        'is-small',
                        'is-rounded',
                        'is-ghost',
                        {
                          Good__remove: !isActive,
                          Good__select: isActive,
                        },
                      )
                    }
                    onClick={() => this.action(good, isActive)}
                  >
                    <Icon
                      path={isActive ? mdiCloseCircle : mdiPlusCircle}
                      title={isActive ? 'Remove' : 'Select'}
                      size={1}
                      color={isActive ? 'red' : 'green'}
                    />
                  </button>

                  <span className="ml-2 is-size-4">
                    {good}
                  </span>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    );
  }
}
