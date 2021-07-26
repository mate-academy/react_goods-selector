import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

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
    good: 'Jam',
  }

  render() {
    const { good } = this.state;

    return (
      <div>
        {good ? (
          <h1>
            {good}
            {' '}
            is selected
            {' '}
            <>
              <Button
                variant="primary"
                size="lg"
                active
                type="button"
                onClick={() => {
                  this.setState({ good: null });
                }}
              >
                X
              </Button>
            </>
          </h1>
        ) : (
          <h1>No goods selected</h1>
        )}
        <ul>
          {goodsFromServer.map(goods => (
            <li key={goods}>
              {goods}
              {' '}
              {good !== goods && (
                <>
                  <Button
                    variant="primary"
                    size="lg"
                    active
                    type="button"
                    onClick={() => {
                      this.setState({
                        good: goods,
                      });
                    }}
                  >
                    Select
                  </Button>
                </>
              )
              }
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
