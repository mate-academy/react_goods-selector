import React from 'react';

function Item(item) {
  return (
    <li
      className="goods__item"
      key={item.text}
    >
      <button
        className="goods__button"
        onClick={(event) => {
          document.querySelectorAll('.highlight')
            .forEach(element => element.classList.remove('highlight'));
          event.target.classList.toggle('highlight');
        }}
        type="button"
      >
        {item.text}
      </button>
    </li>
  );
}

export default Item;
