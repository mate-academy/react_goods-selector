import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';
import Button from '@mui/material/Button';
import { Paper } from '@mui/material';

export const goods = [
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
  selectedGood: string;
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  handleClickAddProduct = (product: string) => {
    this.setState({ selectedGood: product });
  };

  handleClickDeleteProduct = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <Paper
        sx={{
          margin: '0 auto',
          width: 'max-content',
        }}
        elevation={23}
      >
        <main className="section container">
          {selectedGood
            ? (
              <h1 className="title is-flex is-align-items-center">
                {`${selectedGood} is selected`}

                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={this.handleClickDeleteProduct}
                />
              </h1>
            )
            : (
              <h1 className="title">
                No goods selected
              </h1>
            )}

          <table className="table">
            <tbody>
              {goods.map(product => (
                <tr
                  key={product}
                  data-cy="Good"
                  className={classNames({
                    'has-background-success-light':
                    selectedGood === product,
                  })}
                >
                  <td>
                    {selectedGood === product ? (
                      <Button
                        data-cy="RemoveButton"
                        type="button"
                        variant="outlined"
                        color="error"
                        onClick={this.handleClickDeleteProduct}
                      >
                        -
                      </Button>
                    ) : (
                      <Button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        variant="contained"
                        color="success"
                        onClick={() => {
                          this.handleClickAddProduct(product);
                        }}
                      >
                        +
                      </Button>
                    )}
                  </td>

                  <td data-cy="GoodTitle">
                    {product}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </Paper>
    );
  }
}
