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
  state = {
    selectedGoods: [],
  };

  render() {
    let message = 'No goods selected';

    const adder = (event) => {
      const listItem: HTMLElement = document.getElementById(event.target.id);
      const listModule: HTMLElement = document.getElementById(event.target.id + 1);

      if (listItem.innerHTML === 'Add') {
        this.state.selectedGoods.push(event.target.id);
        listItem.innerHTML = 'Remove';
        const current = this.state.selectedGoods;
        listModule.className = 'added';

        this.setState({
          selectedGoods: current,
        });
      } else if (listItem.innerHTML === 'Remove') {
        const itemIndex = this.state.selectedGoods.findIndex(good => good === event.target.id);

        this.state.selectedGoods.splice(itemIndex, 1);
        const current = this.state.selectedGoods;

        this.setState({
          selectedGoods: current,
        });
        listItem.innerHTML = 'Add';
        listModule.className = '';
      }
    };

    switch (this.state.selectedGoods.length) {
      case 0:
        message = 'No goods selected';
        break;

      case 1:
        message = `${this.state.selectedGoods[0]} is selected`;
        break;

      case 2:
        message = `${this.state.selectedGoods[0]} and ${this.state.selectedGoods[1]} are selected`;
        break;

      default:
        message = `${this.state.selectedGoods.slice(0, this.state.selectedGoods.length - 1)} and ${this.state.selectedGoods[this.state.selectedGoods.length - 1]} are selected`;
        break;
    }

    return (
      <div className="App">
        <h1>{message}</h1>
        <ul>
          {goodsFromServer.map((good) => (
            <li key={good} id={good + 1}>
              {good}
              <button type="button" onClick={adder} id={good}>Add</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
















// class App extends React.Component<{}, State> {
//   state = {
//     selectedGoods: [],
//   };

//   render() {
//     let message = 'No goods selected';

//     const adder = (event) => {
//       const listItem: HTMLElement = document.getElementById(event.target.id);
//       const listModule: HTMLElement = document.getElementById(event.target.id + 1);

//       if (listItem.innerHTML === 'Add') {
//         this.state.selectedGoods.push(event.target.id);
//         listItem.innerHTML = 'Remove';
//         const current = this.state.selectedGoods;
//         listModule.className = 'added';

//         this.setState({
//           selectedGoods: current,
//         });
//       } else if (listItem.innerHTML === 'Remove') {
//         const itemIndex = this.state.selectedGoods.findIndex(good => good === event.target.id);

//         this.state.selectedGoods.splice(itemIndex, 1);
//         const current = this.state.selectedGoods;

//         this.setState({
//           selectedGoods: current,
//         });
//         listItem.innerHTML = 'Add';
//         listModule.className = '';
//       }
//     };

//     switch (this.state.selectedGoods.length) {
//       case 0:
//         message = 'No goods selected';
//         break;

//       case 1:
//         message = `${this.state.selectedGoods[0]} is selected`;
//         break;

//       case 2:
//         message = `${this.state.selectedGoods[0]} and ${this.state.selectedGoods[1]} are selected`;
//         break;

//       default:
//         message = `${this.state.selectedGoods.slice(0, this.state.selectedGoods.length - 1)} and ${this.state.selectedGoods[this.state.selectedGoods.length - 1]} are selected`;
//         break;
//     }

//     return (
//       <div className="App">
//         <h1>{message}</h1>
//         <ul>
//           {goodsFromServer.map((good) => (
//             <li key={good} id={good + 1}>
//               {good}
//               <button type="button" onClick={adder} id={good}>Add</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

export default App;
