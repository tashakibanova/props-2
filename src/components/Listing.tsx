// Listing.tsx
import React from 'react';
import ListItem from './ListItem';

// Определяем интерфейс для элемента списка
interface ListItemType {
  listing_id: number;
  url: string;
  MainImage: {
    url_570xN: string;
  };
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
  state: string; // Мы используем строку для состояния, можно улучшить типизацию, если известные значения
}

// Определяем интерфейс для пропсов компонента Listing
interface ListingProps {
  items?: ListItemType[]; // Опциональный массив элементов
}

// Устанавливаем значения по умолчанию для пропсов
const defaultProps = {
  items: [] as ListItemType[],
};

const Listing: React.FC<ListingProps> = ({ items = [] }) => {
  return (
    <div className="item-list">
      {items.map((item) => {
        if (item.state === 'removed') {
          return null;
        }

        return (
          <ListItem
            key={item.listing_id}
            id={item.listing_id}
            url={item.url}
            MainImage={item.MainImage.url_570xN}
            title={item.title}
            currency_code={item.currency_code}
            price={item.price}
            quantity={item.quantity}
          />
        );
      })}
    </div>
  );
};

// Устанавливаем defaultProps для компонента
Listing.defaultProps = defaultProps;

export default Listing;
