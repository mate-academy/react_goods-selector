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
  state = {
    title: ['none'],
  }

  clear = () => {
    this.setState({ title: ['none'] });
  }

  select = (item) => {
    if (this.state.title[0] === 'none') {
      this.setState({ title: [] });
    }

    if (!this.state.title.includes(item)) {
      this.setState(prevState => ({
        title: [...prevState.title, item],
      }));
    }
  }

  delete = (item) => {
    this.setState(prevState => ({
      title: prevState.title.filter(product => product !== item),
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>
          Selected good:
          {this.state.title.length !== 0
            ? this.state.title.join(', ')
            : this.setState({ title: ['none'] })
          }
        </h1>
        <div className="container">
          <ul className="container__list">
            {goodsFromServer.map(product => (
              <>
                <li className="container__item">
                  <span className={
                    this.state.title.includes(product)
                      ? 'container__text'
                      : ''}
                  >
                    {product}
                    {':'}
                  </span>
                  <div>
                    <button
                      type="button"
                      className="container__button"
                      onClick={() => {
                        this.select(product);
                      }}
                    >
                      Select
                    </button>
                    <button
                      type="button"
                      className="container__button container__button-delete"
                      onClick={() => {
                        this.delete(product);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              </>
            ))}
          </ul>
        </div>
        <button
          type="button"
          className="
            container__button
            container__button-delete
            container__button-delete-all
          "
          onClick={this.clear}
          hidden={this.state.title[0] === 'none' || false}
        >
          Clear
        </button>
      </div>
    );
  }
}

export default App;
