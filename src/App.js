import React from 'react';
import classNames from 'classnames';
import './App.scss';

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

export class App extends React.Component {
  state = {
    selected: [],
  };

  handleClick = (e) => {
    const { selected } = this.state;
    const good = e.target.textContent;

    if ((e.ctrlKey || e.metaKey) && !selected.includes(good)) {
      this.setState({ selected: [...selected, good] });
    } else if ((e.ctrlKey || e.metaKey)
    && selected.includes(good)) {
      this.setState({ selected: selected.filter(item => item !== good) });
    } else {
      this.setState({ selected: [good] });
    }
  }

  handleDelete = () => {
    this.setState({ selected: [] });
  }

  render() {
    const { selected } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good:
          <span className="selected">{`${selected.join(', ')}`}</span>
          <button
            type="button"
            className={classNames({
              button: true,
              visible: selected.join(', '),
            })}
            onClick={this.handleDelete}
          >
            X
          </button>
        </h1>
        <div className="good-list">
          {goodsFromServer.map(good => (
            <button
              type="button"
              className={classNames({
                buttonList: true,
                active: selected.includes(good),
              })}
              key={good}
              onClick={this.handleClick}
            >
              {good}
            </button>
          ))}
        </div>
      </div>
    );
  }
}
