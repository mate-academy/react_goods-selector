import React from 'react';
import './App.scss';
import Item from './Item';

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

const listOfGoods = goodsFromServer.map(item => <Item text={item} />);

class App extends React.Component {
  state = {
    selected: ' -',
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>
            Selected good:
            <span>
              {` `}
              {this.state.selected}
            </span>
          </h1>
          <h2
            className="header__remove"
            onClick={() => {
                this.setState({selected: ' -',})
                document.querySelector('.highlight').classList.remove('highlight');
              }
            }
          >
            &#10006;
          </h2>
        </div>
        <ul
          onClick={(event) => this.setState({ selected: event.target.textContent,})}
          className="goods"
        >
          {listOfGoods}
        </ul>
      </div>
    );
  }
}

export default App;
