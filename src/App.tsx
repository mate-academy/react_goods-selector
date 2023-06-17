import { Component } from 'react';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import './App.scss';

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

// export const App: React.FC = () => (
//   <main className="section container">
//     <h1 className="title">No goods selected</h1>

//     <h1 className="title is-flex is-align-items-center">
//       Jam is selected

//       {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
//       <button
//         data-cy="ClearButton"
//         type="button"
//         className="delete ml-3"
//       />
//     </h1>

//     <table className="table">
//       <tbody>
//         <tr data-cy="Good">
//           <td>
//             <button
//               data-cy="AddButton"
//               type="button"
//               className="button"
//             >
//               +
//             </button>
//           </td>

//           <td data-cy="GoodTitle" className="is-vcentered">
//             Dumplings
//           </td>
//         </tr>

//         <tr data-cy="Good" className="has-background-success-light">
//           <td>
//             <button
//               data-cy="RemoveButton"
//               type="button"
//               className="button is-info"
//             >
//               -
//             </button>
//           </td>

//           <td data-cy="GoodTitle" className="is-vcentered">
//             Jam
//           </td>
//         </tr>

//         <tr data-cy="Good">
//           <td>
//             <button
//               data-cy="AddButton"
//               type="button"
//               className="button"
//             >
//               +
//             </button>
//           </td>

//           <td data-cy="GoodTitle" className="is-vcentered">
//             Garlic
//           </td>
//         </tr>
//       </tbody>
//     </table>
//   </main>
// );

type State = {
  selectedGood: string;
};

export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  insertSelectedProductToTitle = (selectedGood: string) => {
    if (selectedGood) {
      return (
        <>
          {`${selectedGood} is selected`}
          <button
            data-cy="ClearButton"
            aria-label="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={this.clearSelectedProduct}
          />
        </>
      );
    }

    return (
      'No goods selected'
    );
  };

  clearSelectedProduct = (): void => {
    this.setState({ selectedGood: '' });
  };

  getSelectedProduct = (product: string) => {
    if (this.state.selectedGood === product) {
      this.clearSelectedProduct();
    } else {
      this.setState({ selectedGood: product });
    }
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1 className={classNames('title', {
          'is-flex': selectedGood,
          'is-align-items-center': selectedGood,
        })}
        >
          {this.insertSelectedProductToTitle(selectedGood)}
        </h1>
        <table className="table">
          <tbody>
            {goods.map(product => (
              <tr
                key={product}
                data-cy="Good"
                className={classNames(
                  { 'has-background-success-light': product === selectedGood },
                )}
              >
                <td>
                  <button
                    type="button"
                    data-cy={
                      product === selectedGood
                        ? 'RemoveButton'
                        : 'AddButton'
                    }
                    className={classNames('button', {
                      'is-info': product === selectedGood,
                    })}
                    onClick={() => {
                      this.getSelectedProduct(product);
                    }}
                  >
                    {product === selectedGood ? '-' : '+'}
                  </button>
                </td>
                <td data-cy="GoodTitle" className="is-vcentered">
                  {product}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
