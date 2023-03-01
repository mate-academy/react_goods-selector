import { Component } from 'react';
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

interface AppState {
  selectedGood: string;
}

export class App extends Component<{}, AppState> {
  state: AppState = {
    selectedGood: 'Jam',
  };

  handleSelectGood = (good: string) => {
    this.setState({ selectedGood: good });
  };

  handleClearSelection = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;
    const title = selectedGood ? `${selectedGood} is selected` : 'No goods selected';
    const buttonClear = selectedGood && (
      <button
        data-cy="ClearButton"
        type="button"
        className="delete ml-3"
        onClick={this.handleClearSelection}
        aria-label="Clear selection"
      />
    );

    return (
      <main className="section container">
        <h1 className="title">
          {title}
          {buttonClear}
        </h1>

        <table className="table">
          <tbody>
            {goods.map((good) => (
              <tr
                key={good}
                data-cy="Good"
                className={good === selectedGood
                  ? 'has-background-success-light' : ''}
              >
                {!selectedGood || good !== selectedGood ? (
                  <td>
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => this.handleSelectGood(good)}
                    >
                      +
                    </button>
                  </td>
                ) : (
                  <td>
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={this.handleClearSelection}
                    >
                      -
                    </button>
                  </td>
                )}
                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}
