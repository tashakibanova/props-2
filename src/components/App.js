import '../css/App.css';
import Listing from './Listing';
import etsy from './etsy';

function App() {
  return (
    <div className="container">
      <Listing items={etsy} />
    </div>
  );
}

export default App;



