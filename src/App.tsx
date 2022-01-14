import React from 'react';
import './App.scss';

const goodsFromServer: string[] = [
  ' Dumplings',
  ' Carrot',
  ' Eggs',
  ' Ice cream',
  ' Apple',
  ' Bread',
  ' Fish',
  ' Honey',
  ' Jam',
  ' Garlic',
];

interface State {
  selectedGoods: string[];
}

class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: [],
  };

  getMessage = () => {
    let message = '';
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        message = 'No goods selected';
        break;

      case 1:
        message = `${selectedGoods[0]} is selected`;
        break;

      case 2:
        message = `${selectedGoods[0]} and ${selectedGoods[1]} are selected`;
        break;

      default:
        message = `${selectedGoods.slice(0, selectedGoods.length - 1)} and ${selectedGoods[selectedGoods.length - 1]} are selected`;
        break;
    }

    return message;
  };

  getButton = (good: string) => {
    return (
      <button
        type="button"
        className={this.state.selectedGoods.includes(good) ? 'btn btn-warning' : 'btn btn-success'}
        onClick={() => {
          this.selector(good);
        }}
      >
        {this.state.selectedGoods.includes(good) ? 'Remove' : 'Add'}
      </button>
    );
  };

  selector = (good: string) => {
    const { selectedGoods } = this.state;

    if (selectedGoods.includes(good)) {
      selectedGoods.splice(selectedGoods.indexOf(good), 1);
    } else {
      selectedGoods.push(good);
    }

    this.setState(prevState => ({ selectedGoods: prevState.selectedGoods }));
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h1>
              The goods you have selected:
            </h1>
            {this.getMessage()}
          </div>
          <div className="col-md-8">
            <div className="table-responsive">
              <table
                className="
                  table
                  table-striped
                  table-hover
                  table-bordered
                "
              >
                <thead>
                  <tr className="bg-info">
                    <th>Grosery</th>
                    <th>Add to cart</th>
                    <th>Added</th>
                  </tr>
                </thead>

                <tbody>
                  {goodsFromServer.map((good) => {
                    return (

                      <tr className={this.state.selectedGoods.includes(good) ? 'bg-info' : ''}>
                        <th>
                          {good}
                        </th>
                        <th>
                          {this.getButton(good)}
                        </th>
                        <th>
                          {this.state.selectedGoods.includes(good) ? 'This item was added to your cart' : 'Press add button to add this item to your cart'}
                        </th>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
