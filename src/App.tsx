import React from 'react';
import classNames from 'classnames';
import { Card, Button, ListGroup } from 'react-bootstrap';
import './App.scss';

const goodsFromServer: string[] = [
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
  selectedGood: string[]
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedGood: [],
  };

  clearHandler = () => {
    this.setState({
      selectedGood: [],
    });
  };

  addGoodHandler = (good: string) => {
    this.setState(prevState => ({
      selectedGood: [...prevState.selectedGood, good],
    }));
  };

  removeGoodHandler = (good: string) => {
    this.setState(prevState => ({
      selectedGood: prevState.selectedGood.filter(item => item !== good),
    }));
  };

  render() {
    return (
      <Card style={{ width: '30rem' }}>
        <Card.Body>

          {this.state.selectedGood.length > 0
            ? (
              <Card.Title>
                {`${this.state.selectedGood.join(', ')} is selected`}
              </Card.Title>
            )
            : (
              <Card.Title>
                No goods selected
              </Card.Title>
            )}
          <Button
            className="clearButton"
            variant="warning"
            type="button"
            onClick={() => {
              this.clearHandler();
            }}
          >
            X
          </Button>
          <ListGroup as="ul">
            {goodsFromServer.map(good => (
              <ListGroup.Item
                as="li"
                key={Math.random()}
                className={classNames('', { active: this.state.selectedGood.includes(good) })}
              >
                {this.state.selectedGood.includes(good)
                  ? (
                    <Button
                      variant="light"
                      type="button"
                      onClick={() => {
                        this.removeGoodHandler(good);
                      }}
                    >
                      Remove
                    </Button>
                  )
                  : (
                    <Button
                      type="button"
                      onClick={() => {
                        this.addGoodHandler(good);
                      }}
                    >
                      Add
                    </Button>
                  )}
                <span className="item">
                  {good}
                </span>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    );
  }
}

export default App;
