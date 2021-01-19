/* eslint-disable */
import React from 'react';
import './App.scss';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Selector } from './components/Selector/Selector';

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

const App = () => (
  <Selector goods={goodsFromServer} />
);

export default App;
