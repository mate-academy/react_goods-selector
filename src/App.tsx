import { Component } from "react";
import "bulma/css/bulma.css";
import "./App.scss";

export const goods = [
  "Dumplings",
  "Carrot",
  "Eggs",
  "Ice cream",
  "Apple",
  "Bread",
  "Fish",
  "Honey",
  "Jam",
  "Garlic",
];

type State = {
  selectedGood: string;
};

export class App extends Component<{}, State> {
  state = {
    selectedGood: "Jam",
  };

  removeGood = () => {
    this.setState({ selectedGood: '' });
  };

  addGood = (good: string) => {
    this.setState({selectedGood: good})
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood ? (
          <h1 className="title is-flex is-align-items-center">
            {`${selectedGood} is selected`}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.removeGood}
            />
          </h1>
        ) : (
          <h1 className="title">
            No goods selected
          </h1>
        )}

        <table className="table">
          <tbody>
            {goods.map(elem => (
              <tr 
                data-cy="Good" 
                key={elem}
                className={this.state.selectedGood === elem 
                  ? 'has-background-success-light'
                  : '' }
              >
              <td>
                  {this.state.selectedGood === elem ? (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={this.removeGood}
                    >
                      -
                    </button>
                  ) : (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => this.addGood(elem)}
                    >
                      +
                    </button>
                  )}
                </td>


              <td data-cy="GoodTitle" className="is-vcentered">
                {elem}
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}
