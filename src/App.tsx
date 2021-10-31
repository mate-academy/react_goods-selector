import React from 'react';

import { Title } from './Components/Title';
import { MediaContent } from './Components/MediaContent';
import { Lists } from './Components/Lists';

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

const App: React.FC = () => (
  <div className="App">
    <Title />
    <MediaContent />
    <Lists goodsList={goodsFromServer} />
  </div>
);

export default App;
