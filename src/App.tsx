import { Component } from 'react';
import cn from 'classnames';
import 'bulma/css/bulma.css';
import './App.scss';

export const goods = [
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
  activeGood: string;
};

export class App extends Component<{}, State> {
  state = {
    activeGood: 'Jam',
  };

  isActive = (good: string) => (
    good === this.state.activeGood
  );

  clearBtnHandler = () => (
    this.setState({ activeGood: '' })
  );

  activeBtnToggler = (good: string) => (
    this.setState({
      activeGood: this.isActive(good)
        ? ''
        : good,
    })
  );

  render() {
    const { activeGood } = this.state;
    const hasNoneActive = !activeGood;

    return (
      <main className="section container">
        <h1 className={
          cn(
            'title',
            { 'is-flex is-align-items-center': !hasNoneActive },
          )
        }
        >
          {
            hasNoneActive
              ? 'No goods selected'
              : (`${activeGood} is selected`)
          }
          { !hasNoneActive && (
            <>
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.clearBtnHandler}
              />
            </>
          ) }
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => {
              const isActive = this.isActive(good);

              return (
                <tr
                  data-cy="Good"
                  key={good}
                  className={
                    cn(
                      { 'has-background-success-light': isActive },
                    )
                  }
                >
                  <td>
                    <button
                      data-cy={
                        isActive
                          ? 'removeButton'
                          : 'addButton'
                      }
                      type="button"
                      className={cn(
                        'button',
                        { 'is-info': isActive },
                      )}
                      onClick={() => this.activeBtnToggler(good)}
                    >
                      {
                        isActive
                          ? '-'
                          : '+'
                      }
                    </button>
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    );
  }
}
