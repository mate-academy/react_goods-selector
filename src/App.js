import React, { useState } from 'react';
import './App.scss';
import { goodsFromServer } from './data';
import Good from './components/Good';

const App = () => {
  const fetchData = data => (
    data.map((value, index) => ({
      id: index,
      value,
      selected: false,
    }))
  );

  const [items, setItems] = useState(fetchData(goodsFromServer));
  const [showingList, setShowingList] = useState([]);

  const getSelectedItems = () => (
    items.filter(item => item.selected)
  );

  const handleClick = (selectedId) => {
    const selectedItems = getSelectedItems();
    const clickedItem = items.find(item => item.id === selectedId);

    if (selectedItems.length > 1) {
      setItems(items.map(item => ({
        ...item,
        selected: item.id === selectedId,
      })));

      setShowingList([clickedItem]);
    } else {
      setItems(items.map(item => ({
        ...item,
        selected: item.id === selectedId
          ? !item.selected
          : false,
      })));

      if (clickedItem.selected) {
        setShowingList([]);
      } else {
        setShowingList([clickedItem]);
      }
    }
  };

  const handleCtrClick = (selectedId) => {
    const clickedItem = items.find(item => item.id === selectedId);

    if (clickedItem.selected) {
      setShowingList(showingList.filter(item => item.id !== selectedId));
    } else {
      setShowingList([...showingList, clickedItem]);
    }

    setItems(items.map(item => ({
      ...item,
      selected: item.id === selectedId
        ? !item.selected
        : item.selected,
    })));
  };

  return (
    <div className="App">
      <h1 className="App__title">
        {
          `selected good: - ${
            showingList.map(item => item.value).join(' ')
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
            ...item,
            selected: false,
          })));
          setShowingList([]);
        }}
        className="App__clear"
      >
        <i className="far fa-times-circle" />
      </button>
    </div>
  );
};

export default App;
