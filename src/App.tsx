/* eslint-disable react/no-unused-state */
import React from 'react';
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
  selectedItem: string;
};

type Props = {

};

class App extends React.Component<Props, State> {
  state: State = {
    selectedItem: 'Jam',
  };

  render() {
    const { selectedItem } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good:
          {selectedItem ? (` ${selectedItem} is selected `) : (' No goods selected')}

        </h1>
        {selectedItem && (
          <button
            type="button"
            onClick={() => this.setState({ selectedItem: '' })}
          >
            Clear
          </button>
        )}
        <table>
          <tr>
            <th>Goods</th>
            <th>Add goods</th>
          </tr>

          {goodsFromServer.map(element => {
            const selectedElem = selectedItem === element;

            return (
              <tr key={element}>
                <td className={selectedElem
                  ? 'app__listItem--selected'
                  : 'app__listItem'}
                >
                  {element}
                </td>

                <td>
                  {!selectedElem ? (
                    <button
                      type="button"
                      onClick={() => this.setState({ selectedItem: element })}
                    >
                      select
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => this.setState({ selectedItem: '' })}
                    >
                      remove
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </table>

      </div>
    );
  }
}
export default App;
