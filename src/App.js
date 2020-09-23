/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      goodSelected: '',
      listSelected: [],
      prevSelected: undefined,
    };

    this.handleSelected = this.handleSelected.bind(this);
    this.handleDeleteSelected = this.handleDeleteSelected.bind(this);
  }

  handleDeleteSelected() {
    const { listSelected } = this.state;

    if (listSelected.length > 0) {
      listSelected.map(good => good.classList.toggle('selected', false));
      this.setState({
        goodSelected: '',
        listSelected: [],
        prevSelected: null,
      });
    }
  }

  handleSelected(event) {
    const { goodSelected, listSelected, prevSelected } = this.state;

    const target = event.target.closest('.content');
    const goodName = target.textContent.slice(0, target.textContent.length - 1);
    const goods = goodSelected.length > 0
      ? goodSelected.split(', ') : [];
    const arrayList = listSelected.length > 0
      ? listSelected : [];

    if (!goods.includes(goodName)) {
      if (event.metaKey) {
        goods.push(goodName);
        target.classList.add('selected');
        arrayList.push(target);
      } else {
        goods.push(goodName);

        goodSelected.length === 0
          ? this.setState({
            prevSelected: target,
          })
          : prevSelected.classList.toggle('selected', false);

        target.classList.add('selected');
        this.setState({
          prevSelected: target,
        });
        arrayList.push(target);
      }
    }

    this.setState({
      goodSelected: goods.join(', '),
      listSelected: arrayList,
    });
  }

  render() {
    const { goodSelected } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good: -
        </h1>
        <div className="container">
          <div className="header">
            <p>
              {goodSelected}
            </p>
          </div>
          <button
            type="button"
            className="delete"
            onClick={this.handleDeleteSelected}
          >
            Delete
          </button>
          <div>
            <ul>
              {goodsFromServer.map(good => (
                <li
                  key={good}
                  className="content"
                  onClick={this.handleSelected}
                >
                  {good}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
