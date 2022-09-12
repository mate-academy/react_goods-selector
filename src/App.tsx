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

type State = {
  selectedGood: string
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  isSelected = (good: string) => {
    this.setState({ selectedGood: good });
  };

  deleteGood = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (

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
                onClick={this.deleteGood}
              />
            </h1>
          ) : (
            <h1 className="title">No goods selected</h1>
          )}

        <table className="table">
          <tbody>
            {goods.map(good => {
              const chosenElement = selectedGood === good;

              return (
                // можно сделать два варианта верстки и не мучатся с условиями для классов
                <tr
                  data-cy="Good"
                  // ключ как и товары так как они пока уникальные
                  key={good}
                  // если выбраный товар соответствует тому что в переборе то вешаем класс
                  className={classNames({
                    'has-background-success-light': chosenElement,
                  })}
                >
                  <td>
                    <button
                      data-cy={chosenElement
                        ? 'RemoveButton'
                        : 'AddButton'}
                      type="button"
                      className={classNames('button', {
                        'is-info': chosenElement,
                      })}
                      // меняем тайтл при нажатии на кнопку товара
                      // вроде я не получаю евент и у меня есть аргумент
                      // поэтому я 3й пункт чеклиста не нарушаю
                      // если сделаю без стрелки то отображения на экране не будет
                      onClick={() => this.isSelected(good)}
                    >
                      {chosenElement
                        ? '-'
                        : '+'}
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

/* кусок тайтла чисто на тернарниках */
//  {/* <h1 className="title">No goods selected</h1> */}
//          {/* тут тоже можно условие на два типа верстки без тернарников */}
//          {/* тут походу так инадо делать так как от кнопки не избавится */}
//          {/* или ставить на кнопку дисплей нон */}
//          <h1 className="title is-flex is-align-items-center">
//          <h1 className={classNames('title', { 'is-flex is-align-items-center': titleName })}>
//            {`${selectedGood} is selected`}
//            {titleName ? `${selectedGood} is selected` : 'No goods selected'}
//            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
//            <button
//              data-cy="ClearButton"
//              type="button"
//              className="delete ml-3"
//              onClick={this.deleteGood}
//            />
//          </h1>

// стартовая верстка
// import React from 'react';
// import 'bulma/css/bulma.css';
// import './App.scss';

// export const goods = [
//   'Dumplings',
//   'Carrot',
//   'Eggs',
//   'Ice cream',
//   'Apple',
//   'Bread',
//   'Fish',
//   'Honey',
//   'Jam',
//   'Garlic',
// ];

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
