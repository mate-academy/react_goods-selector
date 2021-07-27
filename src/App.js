import React from 'react';
import './App.scss';
import { v4 as uuidv4 } from 'uuid';

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

class App extends React.Component {
   state = {
     goodsList: ['Jam'],
   }

   // eslint-disable-next-line react/sort-comp
   addGood(good) {
     this.setState(({ goodsList }) => ({
       goodsList: [...goodsList, good],
     }));
   }

   removeGood(good) {
     this.setState(({ goodsList }) => ({
       goodsList: goodsList.filter(el => el !== good),
     }));
   }

   removeAllGood() {
     this.setState(({ goodsList }) => ({
       goodsList: [],
     }));
   }

   changeStatus(good) {
     if (this.state.goodsList.some(el => el === good)) {
       this.removeGood(good);
     } else {
       this.addGood(good);
     }
   }

   makeListOfGoods = () => {
     switch (this.state.goodsList.length) {
       case 0:

         return 'no good is selected';
       case 1:

         return ' is selected';

       default:
         return ' are selected';
     }
   }

   buttonText(good) {
     return this.state.goodsList.some(el => el === good)
       ? 'Remove' : 'Add';
   }

   goodStatus = good => (this.state.goodsList.some(el => el === good)
     ? 'App__active'
     : 'App__disables');

   render() {
     return (
       <div className="App">
         <h1 className="App__header">
           {
             this.state.goodsList.join(', ')
           }
           {this.makeListOfGoods()}
         </h1>
         <button
           type="button"
           className={(this.state.goodsList.length < 1
             ? 'App__button-disable'
             : 'App__butoon'
           )}
           onClick={() => this.removeAllGood()}
         >
           X
         </button>
         <ul>
           {goodsFromServer.map(good => (
             <li key={uuidv4()} className="App__good-container">
               <span className={`App__good-item ${this.goodStatus(good)}`}>
                 {good}
               </span>
               {' '}
               <button
                 type="button"
                 className="App__good-item-button"
                 onClick={() => this.changeStatus(good)}
               >
                 {
                   this.state.goodsList.some(el => el === good)
                     ? 'Remove'
                     : 'Add'
                }
               </button>
             </li>
           ))}
         </ul>
       </div>
     );
   }
}

export default App;
