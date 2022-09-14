/* eslint-disable jsx-a11y/control-has-associated-label */
import { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

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
  curentSelector: string,
};

export class App extends Component<{}, State> {
  state: State = {
    curentSelector: 'Jam',
  };

  removeSelecktor = () => {
    this.setState({
      curentSelector: '',
    });
  };

  chengSelecktor = (element: string) => (
    this.state.curentSelector === element
      ? this.setState({ curentSelector: '' })
      : this.setState({ curentSelector: element })
  );

  render() {
    const {
      curentSelector,
    } = this.state;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {curentSelector !== ''
            ? `${curentSelector} is selected`
            : 'No goods selected'}

          { (curentSelector !== '')
            && (
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.removeSelecktor}
              />
            )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(element => {
              const valueSelector = curentSelector === element;

              return (
                <tr
                  key={element}
                  data-cy="Good"
                  className={classNames(
                    '',
                    { 'has-background-success-light': valueSelector },
                  )}
                >
                  <td>
                    <button
                      data-cy={valueSelector
                        ? 'RemoveButton'
                        : 'AddButton'}
                      type="button"
                      className={classNames(
                        'button',
                        { 'button is-info': valueSelector },
                      )}
                      onClick={() => {
                        this.chengSelecktor(element);
                      }}
                    >
                      {valueSelector
                        ? '-'
                        : '+'}
                    </button>
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    { element }
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
