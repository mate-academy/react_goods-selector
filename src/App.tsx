import React from "react";
import "bulma/css/bulma.css";
import "./App.scss";
import classNames from "classnames";

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

export class App extends React.Component {
  state = {
    selectedGood: "Jam",
  };

  handleRemove = () => {
    this.setState({ selectedGood: "" });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {selectedGood ? `${selectedGood} is selected` : "No goods selected"}
          {selectedGood && (
            <button
              aria-label="Mute volume"
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.handleRemove}
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map((good) => (
              <tr
                data-cy="Good"
                key={good}
                className={classNames({
                  "has-background-success-light": selectedGood === good,
                })}
              >
                <td>
                  <button
                    data-cy={
                      selectedGood === good ? "RemoveButton" : "AddButton"
                    }
                    type="button"
                    className={
                      selectedGood === good ? "button is-info" : "button"
                    }
                    onClick={
                      selectedGood === good
                        ? this.handleRemove
                        : () => this.setState({ selectedGood: good })
                    }
                  >
                    {selectedGood === good ? "-" : "+"}
                  </button>
                </td>

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
