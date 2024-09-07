// src/components/Listing.js

import React from 'react';
import '../css/main.css'; // Подключение css файла для корректной стилизации

const Listing = ({ items = [] }) => {
  const formatPrice = (price, currency_code) => {
    if (currency_code === 'USD') {
      return `$${price}`;
    } else if (currency_code === 'EUR') {
      return `€${price}`;
    } else {
      return `${price} ${currency_code}`;
    }
  };

  const getQuantityClass = (quantity) => {
    if (quantity <= 10) {
      return 'level-low';
    } else if (quantity <= 20) {
      return 'level-medium';
    } else {
      return 'level-high';
    }
  };

  return (
    <div className="item-list">
      {items.map(item => (
        <div className="item" key={item.listing_id}>
          <div className="item-image">
            <a href={item.url}>
              <img src={item.MainImage.url_570xN} alt={item.title} />
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">{item.title.length > 50 ? `${item.title.slice(0, 50)}…` : item.title}</p>
            <p className="item-price">{formatPrice(item.price, item.currency_code)}</p>
            <p className={`item-quantity ${getQuantityClass(item.quantity)}`}>{item.quantity} left</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listing;
