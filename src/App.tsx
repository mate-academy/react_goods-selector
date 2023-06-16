/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';

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
  isSelected: string | null
};

export class App extends React.Component<{}, State> {
  state = {
    isSelected: 'Jam',
  };

  handleClick = (name: string) => {
    if (this.state.isSelected === name) {
      this.setState({ isSelected: '' });
    } else {
      this.setState({ isSelected: name });
    }
  };

  render() {
    const { isSelected } = this.state;

    return (
      <main className="section container">
        {isSelected
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${isSelected} is selected`}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => this.handleClick('')}
              />
            </h1>
          )
          : <h1 className="title">No goods selected</h1>}

        <table className="table">
          <tbody>
            {goods.map(good => {
              const btnClassName = cn({
                button: true,
                'is-info': good === isSelected,
              });

              const trClassName = cn({
                'has-background-success-light': good === isSelected,
              });

              return (
                <tr data-cy="Good" key={good} className={trClassName}>
                  <td>
                    <button
                      data-cy={good === isSelected ? 'RemoveButton' : 'AddButton'}
                      type="button"
                      className={btnClassName}
                      onClick={() => this.handleClick(good)}
                    >
                      {good === isSelected ? '-' : '+'}
                    </button>
                  </td>
                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    );
  }
}

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
