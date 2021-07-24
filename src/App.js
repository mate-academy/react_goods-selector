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

class App extends React.Component {
   state = {
     goodsList: [],
   }

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

   show(good) {
     // eslint-disable-next-line no-console
     console.log('it is alive');

     return this.state.goodsList.some(el => el === good)
       ? 'Remove' : 'Add';
   }

   render() {
     return (
       <div className="App">
         <h1>Selected good: -</h1>
         <button
           type="button"
           onClick={() => this.removeAllGood()}
         >
           X
         </button>
         {goodsFromServer.map(good => (
           <>
             <p>
               {good}
               {' '}
               <button
                 type="button"
                 onClick={() => this.changeStatus(good)}
               >
                 {this.show(good)}
               </button>
             </p>
           </>
         ))}
       </div>
     );
   }
}

export default App;
