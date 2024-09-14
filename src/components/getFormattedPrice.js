export default function getFormattedPrice(currency_code, price) {
    let formattedPrice;
  
    if (currency_code === 'USD') {
      formattedPrice = `$${price}`;
    } else if (currency_code === 'EUR') {
      formattedPrice = `€${price}`;
    } else {
      formattedPrice = `${price} ${currency_code}`;
    }
  
    return formattedPrice;
  }