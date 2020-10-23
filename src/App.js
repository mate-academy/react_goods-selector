import React, { useState } from 'react';
import './App.scss';
import { goodsFromServer } from './data';
import Good from './components/Good';

const App = () => {
  const fetchData = data => (
    data.map((value, index) => ({
      id: index, value, selected: false,
    }))
  );

  const [items, setItems] = useState(fetchData(goodsFromServer));

  const handleClick = (selectedId) => {
    const selectedItems = getSelectedItems();

    if (selectedItems.length > 1) {
      setItems(items.map(item => ({
        ...item, selected: item.id === selectedId,
      })));
    } else {
      setItems(items.map(item => ({
        ...item, selected: item.id === selectedId ? !item.selected : false,
      })));
    }
  };

  const handleCtrClick = (selectedId) => {
    setItems(items.map(item => ({
      ...item,
      selected: item.id === selectedId
        ? !item.selected
        : item.selected,
    })));
  };

  const getSelectedItems = () => (
    items.filter(item => item.selected)
  );

  return (
    <div className="App">
      <h1 className="App__title">
        {
          `selected good: - ${
            getSelectedItems().map(item => item.value).join(' ')
          }`
        }
      </h1>
      <ul className="App__list">
        {
          items.map(item => (
            <Good
              key={item.id}
              {...item}
              handleClick={handleClick}
              handleCtrClick={handleCtrClick}
            />
          ))
        }
      </ul>
      <button
        type="button"
        onClick={() => {
          setItems(items.map(item => ({
            ...item, selected: false,
          })));
        }}
        className="App__clear"
      >
        <i className="far fa-times-circle" />
      </button>
    </div>
  );
};

export default App;
