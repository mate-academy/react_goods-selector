import ReactDOM from 'react-dom';
import { App, goods } from './App';

ReactDOM.render(
  <App goodsList={goods} />,
  document.getElementById('root'),
);
