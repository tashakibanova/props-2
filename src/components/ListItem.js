import classNames from 'classnames';
import PropTypes from 'prop-types';
import getFormattedPrice from './getFormattedPrice';

const propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  MainImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  currency_code: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

function ListItem(props) {
  const { url, MainImage, title, currency_code, price, quantity } = props;

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
}

ListItem.propTypes = propTypes;

export default ListItem;