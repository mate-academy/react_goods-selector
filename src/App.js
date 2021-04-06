import React from 'react';
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
  state ={
    selected: [],
  }

  add = (good) => {
    this.setState(prevState => ({
      selected: [...prevState.selected, good],
    }));
  }

  remove = (good) => {
    this.setState(prevState => ({
      selected: prevState.selected.filter(item => item !== good),
    }));
  }

  clear = () => {
    this.setState({
      selected: [],
    });
  }

  headingContent = () => {
    const [...selected] = this.state.selected;

    if (selected.length < 1) {
      return 'No goods selected';
    }

    if (selected.length > 0 && selected.length < 2) {
      return `${selected[0]} is selected`;
    }

    if (selected.length > 1 && selected.length <= 2) {
      return `${selected[0]} and ${selected[1]} are selected`;
    }

    return `${selected.slice(0, -1).join(', ')} and ${
      selected[selected.length - 1]} are selected`;
  }

  render() {
    const [...selected] = this.state.selected;
    const content = this.headingContent();

    return (
      <div className="App">
        <h1 className="App__heading">
          {content}
        </h1>
        <p className="App__count">
          Number of selected goods:
          {selected.length}
        </p>
        <button
          className="App__clear"
          onClick={this.clear}
          type="button"
        >
          Clear
        </button>
        <ul className="App__list">
          {goodsFromServer.map(good => (
            <React.Fragment key={good}>
              <li className="listItem">{good}</li>
              <button
                className="App__add"
                onClick={() => this.add(good)}
                type="button"
              >
                Add
              </button>
              <button
                className="App__remove"
                onClick={() => this.remove(good)}
                type="button"
              >
                Remove
              </button>
            </React.Fragment>
          ))}
        </ul>
      </div>
    );
  }
}
