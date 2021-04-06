import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
    selected: [],
  };

  clearGoods = () => {
    this.setState({
      selected: [],
    });
  }

  addGood = (good) => {
    this.setState(prevState => ({
      selected: [...prevState.selected, good],
    }));
  }

  removeGood = (goodToRemove) => {
    const goods = this.state.selected;

    if (goods.includes(goodToRemove)) {
      goods.splice(
        goods.indexOf(goodToRemove), 1,
      );
      this.setState({
        selected: goods,
      });
    }
  }

  listRenderer() {
    const goods = this.state.selected;

    if (!goods.length) {
      return `No goods are selected`;
    }

    if (goods.length === 1) {
      return `${goods} is selected`;
    }

    if (goods.length === 2) {
      return `${goods[0]} and ${goods[1]} are selected`;
    }

    return `${goods.slice(0, -1).join(`, `)}`
    + ` and ${goods.slice(-1)} are selected`;
  }

  render() {
    const { selected } = this.state;
    const title = this.listRenderer();

    return (
      <div>
        <div className="ml-5">
          <h2>
            Selected goods:
            {` ${title}`}
          </h2>
          <p>
            Number of goods selected:
            <span>
              {` ${selected.length}`}
            </span>
          </p>
          <Button
            type="button"
            onClick={this.clearGoods}
            variant="outline-danger"
            className="mb-5"
          >
            Clear
          </Button>
          {' '}
        </div>
        <div className="ml-5">
          {goodsFromServer.map(good => (
            <div
              key={`${Math.random()}`}
            >
              <Card
                border="info"
                style={{ width: '18rem' }}
                className="mb-1"
              >
                <Card.Header>{good}</Card.Header>
                <Card.Body>
                  <Card.Text>
                    {selected.filter(item => item === good).length || null + 0}
                  </Card.Text>
                </Card.Body>
              </Card>
              <Button
                type="button"
                onClick={() => this.addGood(good)}
                variant="outline-success"
                className="mb-1"
              >
                Add
              </Button>
              {' '}
              <Button
                type="button"
                onClick={() => this.removeGood(good)}
                variant="outline-warning"
                className="mb-1"
              >
                Remove
              </Button>
              {' '}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default App;
