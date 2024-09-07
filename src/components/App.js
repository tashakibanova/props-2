// src/App.js

import React from 'react';
import { data } from './data';
import Listing from './Listing';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Listing items={data} />
      </div>
    </div>
  );
}

export default App;

