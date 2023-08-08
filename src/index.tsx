import ReactDOM from 'react-dom';
import { App } from './App';
import { App2 } from './App2';

ReactDOM.render(
  <div>
    <App />
    <div>My app</div>
    <App2 />
  </div>,
  document.getElementById('root'),
);
