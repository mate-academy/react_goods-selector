import React from 'react';
import './App.scss';
import classNames from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bulma/css/bulma.min.css';
import { Button } from 'react-bootstrap';
import goodsFromServer from './goods';

const goods = [...goodsFromServer];
let checkedGoods: string[] = [];

function makeName() {
  let name = '';

  if (checkedGoods.length === 2) {
    name = `${checkedGoods[0]} and ${checkedGoods[1]}`;
  }

  if (checkedGoods.length > 2) {
    for (let i = 0; i < checkedGoods.length; i += 1) {
      if (i === checkedGoods.length - 2) {
        name += `${checkedGoods[i]} and `;
      } else {
        name += `${checkedGoods[i]}, `;
      }
    }

    name = name.slice(0, name.length - 2);
  }

  return name;
}

type State = {
  selectGoodName: string,
  title: string,
  multiple: boolean,
};

export class App extends React.Component<{}, State> {
  state = {
    selectGoodName: 'Jam',
    title: 'is selected',
    multiple: false,
  };

  render() {
    let { selectGoodName, title } = this.state;
    const { multiple } = this.state;

    if (multiple && checkedGoods.length > 1) {
      title = 'are selected';
      selectGoodName = makeName();
    }

    return (
      <main className="App">
        <header className="level">
          <h1 className="title">
            {`${selectGoodName} ${title}`}
          </h1>

          {selectGoodName !== ''
            && (
              <Button
                variant="danger"
                type="button"
                onClick={() => {
                  this.setState({
                    selectGoodName: '',
                    title: 'No goods selected',
                    multiple: false,
                  });
                  checkedGoods = [];
                }}
              >
                Clear
              </Button>
            )}
        </header>

        <Button
          variant="success"
          type="button"
          className="level"
          onClick={() => {
            this.setState({
              selectGoodName: '',
              title: 'No goods selected',
              multiple: true,
            });
          }}
        >
          Multiple goods
        </Button>

        <ul>
          {goods.map(good => (
            <li
              key={good}
              className={classNames(
                'Good',
                {
                  'Good--active': good === selectGoodName
                    || checkedGoods.includes(good),
                },
              )}
            >
              {good}

              {good === selectGoodName && !multiple
                && (
                  <Button
                    variant="danger"
                    type="button"
                    onClick={() => {
                      this.setState({
                        selectGoodName: '',
                        title: 'No goods selected',
                        multiple: false,
                      });
                      checkedGoods = [];
                    }}
                  >
                    Remove
                  </Button>
                )}

              {(good !== selectGoodName || multiple)
                && (
                  <Button
                    variant="primary"
                    type="button"
                    onClick={(event) => {
                      this.setState({
                        selectGoodName: good,
                        title: 'is selected',
                      });
                      const element = event.currentTarget;
                      const li = element.closest('li');

                      if (multiple === true && li && li.innerText) {
                        const currentGood = li.innerText.split('\n')[0];

                        if (!checkedGoods.includes(currentGood)) {
                          checkedGoods.push(currentGood);
                        }
                      }
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
