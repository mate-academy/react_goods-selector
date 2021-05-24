import React from 'react';
import { Goods } from './components/Goods';
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

function App() {
  return (
    <Goods goods={goodsFromServer} />
  );
}

export default App;
