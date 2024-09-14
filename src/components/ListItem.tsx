// ListItem.tsx
import React from 'react';
import classNames from 'classnames';
import getFormattedPrice from './getFormattedPrice';

// Определяем интерфейс для пропсов
interface ListItemProps {
  id: number;
  url: string;
  MainImage: string;
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
}

const ListItem: React.FC<ListItemProps> = ({
  url,
  MainImage,
  title,
  currency_code,
  price,
  quantity
}) => {
  const titleLimit = 50;

  const quantityClassName = classNames('item-quantity', {
    'level-low': quantity <= 10,
    'level-medium': quantity > 10 && quantity <= 20,
    'level-high': quantity > 20,
  });

  return (
    <div className="item">
      <div className="item-image">
        <a href={url}>
          <img src={MainImage} alt={title} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">
          {
            title.length > titleLimit
              ? `${title.slice(0, titleLimit + 1)}…`
              : title
          }
        </p>
        <p className="item-price">{getFormattedPrice(currency_code, price)}</p>
        <p className={quantityClassName}>{quantity} left</p>
      </div>
    </div>
  );
};

export default ListItem;
