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
    this.setState((prevState) => ({
      selectedGood: [...prevState.selectedGood, good],
    }));
  };

  removeGoodHandler = (good: string) => {
    this.setState(prevState => ({
      selectedGood: prevState.selectedGood.filter(item => item !== good),
    }));
  };

  getTitle = () => {
    const copySelectedGood = [...this.state.selectedGood];

    if (copySelectedGood.length === 0) {
      return 'No goods selected';
    }

    if (copySelectedGood.length === 1) {
      return `${copySelectedGood} is selected`;
    }

    const lastItem = copySelectedGood.pop();

    return `${copySelectedGood.join(', ')} and ${lastItem} are selected`;
  };

  render() {
    return (
      <Card style={{ width: '30rem' }}>
        <Card.Body>
          <Card.Title>
            {this.getTitle()}
          </Card.Title>
          <Card.Subtitle>
            {this.state.selectedGood.length > 0 && (
              <Button
                className="clearButton"
                variant="warning"
                type="button"
                onClick={() => {
                  this.clearHandler();
                }}
              >
                Clear All
              </Button>
            )}
          </Card.Subtitle>

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
