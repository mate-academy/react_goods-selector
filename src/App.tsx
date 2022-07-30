import React from 'react';
import './App.scss';
import classNames from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

import goodsFromServer from './goods';

const goods = [...goodsFromServer];

type State = {
  selectGoodName: string,
  title: string,
};

export class App extends React.Component<{}, State> {
  state = {
    selectGoodName: 'Jam',
    title: 'is selected',
  };

  render() {
    const { selectGoodName, title } = this.state;

    return (
      <main className="App">
        <header className="App__header">
          <h1>
            {`${selectGoodName} ${title}`}
          </h1>

        </header>

        {selectGoodName !== ''
          && (
            <Button
              className="App__clear-btn"
              variant="danger"
              type="button"
              onClick={() => {
                this.setState({
                  selectGoodName: '',
                  title: 'No goods selected',
                });
              }}
            >
              Clear
            </Button>
          )}

        <ul className="App__list">
          {goods.map(good => (
            <li
              key={good}
              className={classNames(
                'Good',
                {
                  'Good--active': good === selectGoodName,
                },
              )}
            >
              {good}

              {good === selectGoodName
                && (
                  <Button
                    variant="danger"
                    type="button"
                    onClick={() => {
                      this.setState({
                        selectGoodName: '',
                        title: 'No goods selected',
                      });
                    }}
                  >
                    Remove
                  </Button>
                )}

              {good !== selectGoodName
                && (
                  <Button
                    variant="primary"
                    type="button"
                    onClick={() => {
                      this.setState({
                        selectGoodName: good,
                        title: 'is selected',
                      });
                    }}
                  >
                    Select
                  </Button>
                )}
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
