import React from 'react';
import './App.scss';

const goodsFromServer = [
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

const preparedGoods = goodsFromServer.map((item, index) => (
  {
    id: index,
    name: item,
  }
));

class App extends React.Component {
  state = {
    selectedGoods: [],
  }

toggleGood = ({ name }) => {
  this.setState((state) => {
    if (!state.selectedGoods.includes(name)) {
      return {
        selectedGoods: [...state.selectedGoods, name],
      };
    }

    const goodIndex = state.selectedGoods.indexOf(name);

    state.selectedGoods.splice(goodIndex, 1);

    return {
      selectedGoods: state.selectedGoods,
    };
  });
}

 clearSelect = () => {
   this.setState({
     selectedGoods: [],
   });
 }

 render() {
   const { selectedGoods } = this.state;

   const temp = ((selectedGoods.length > 0) ? 1 : 0);

   return (
     <div className="goods__selector">
       <h1 className="goods__select">
         {(!temp)
           ? `Selected good: - none`
           : `Selected good: - ${selectedGoods.join(', ')}`
         }
       </h1>
       {temp && (
         <button
           className="button__clear"
           type="button"
           onClick={this.clearSelect}
         >
           Clear
         </button>
       )}

       <div>
         <ul>
           {preparedGoods.map(good => (
             <li
               key={good.id}
               className={selectedGoods.includes(good.name)
                 ? 'selected' : 'selected_not_yet'}
             >
               {good.name}
               <button
                 type="button"
                 onClick={() => this.toggleGood(good)}
               >
                 add / remove
               </button>
             </li>
           ))}
         </ul>
       </div>
     </div>
   );
 }
}

export default App;
