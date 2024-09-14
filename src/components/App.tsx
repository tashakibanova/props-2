// App.tsx
import React from 'react';
import '../css/App.css';
import Listing from './Listing';
import etsy from './etsy.json'; 

// Определяем тип для etsy, если он еще не определен
// Убедитесь, что этот интерфейс совпадает с интерфейсом в Listing
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
  state: string;
}

const App: React.FC = () => {
  return (
    <div className="container">
      <Listing items={etsy as ListItemType[]} />
    </div>
  );
};

export default App;
