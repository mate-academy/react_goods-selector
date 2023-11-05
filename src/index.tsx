import ReactDOM from 'react-dom';
import { App, goods } from './App';

ReactDOM.render(
  <App goods={goods} />,
  document.getElementById('root'),
);
