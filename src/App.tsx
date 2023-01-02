/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

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
  selectedGood: string
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  RemoveProduct = () => {
    this.setState({ selectedGood: '' });
  };

  AddProductButton = (product:string) => {
    this.setState({ selectedGood: product });
  };

  render() {
    const { selectedGood } = this.state;
    const removeProductButton = (
      <Button
        variant="contained"
        data-cy="RemoveButton"
        type="button"
        className="button is-info"
        onClick={this.RemoveProduct}
      >
        -
      </Button>
    );

    return (
      <main className="Container">
        {selectedGood
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}
              <IconButton
                aria-label="delete"
                size="large"
                data-cy="ClearButton"
                onClick={this.RemoveProduct}
              >
                <DeleteIcon />
              </IconButton>
            </h1>
          )
          : <h1 className="title">No goods selected</h1>}
        <table className="table">
          <tbody>
            {goods.map(product => (
              <tr
                data-cy="Good"
                className={product === selectedGood
                  ? 'has-background-success-light'
                  : ''}
              >
                <td>
                  {product === selectedGood
                    ? removeProductButton
                    : (
                      <Button
                        variant="outlined"
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => this.AddProductButton(product)}
                      >
                        +
                      </Button>
                    ) }
                </td>
                <td data-cy="GoodTitle" className="is-vcentered" key={product}>
                  {product}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}
