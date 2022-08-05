import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';
import './App.scss';

import goodsFromServer from './goods';

const goods = goodsFromServer.map(good => ({
  id: uuidv4(),
  name: good,
}));

type State = {
  selected: string[];
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selected: ['Jam', 'Apple', 'Garlic'],
  };

  selectGood = (good:string) => {
    this.setState(prevState => ({ selected: [...prevState.selected, good] }));
  };

  removeSelect = (good:string) => {
    this.setState(prevState => (
      { selected: prevState.selected.filter(el => el !== good) }));
  };

  render() {
    const { selected } = this.state;
    const title = selected.length
      ? (`${selected.length > 1
        ? `${selected.slice(0, -1).join(', ')} and ${selected.at(-1)} are`
        : `${selected[0]} is`}`)
        + ' selected'
      : 'No goods selected';

    return (
      <main className="App panel is-info">
        <header className="App__header panel-heading">
          <h1 className="App__title">
            {title}
          </h1>

          {selected.length
            ? (
              <button
                type="button"
                className="App__clear button is-danger"
                onClick={() => this.setState({ selected: [] })}
              >
                Clear
              </button>
            )
            : ''}
        </header>

        <ul className="has-background-info-light has-text-dark">
          {goods.map(({ id, name }) => {
            const isSelected = selected.includes(name);

            return (
              <li
                key={id}
                className={classNames(
                  'Good',
                  { 'Good--active': isSelected },
                )}
              >
                {name}

                {isSelected
                  ? (
                    <button
                      type="button"
                      className="Good__remove button is-danger is-outlined"
                      onClick={() => this.removeSelect(name)}
                    >
                      Remove
                    </button>
                  )
                  : (
                    <button
                      type="button"
                      className="Good__select button is-info is-outlined "
                      onClick={() => this.selectGood(name)}
                    >
                      Select
                    </button>
                  )}
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
}
