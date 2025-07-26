import React from 'react';
import Icon from '@mdi/react';
import { mdiMinus, mdiPlus } from '@mdi/js';

import './AddToCart.scss';

import { useCartDispatch, useCartState } from 'cart-context';
import { toast } from 'react-toastify'; // ✅ Toast import

function AddToCart({ product }) {
  const { products } = useCartState();
  const dispatch = useCartDispatch();

  const cartEntry = products[product.id];

  const handleIncrement = () => {
    dispatch({ type: 'increment', payload: product });

    if (cartEntry) {
      toast.info('Item quantity increased');
    } else {
      toast.success('Item added to cart!');
    }
  };

  const handleDecrement = () => {
    dispatch({ type: 'decrement', payload: product });
    toast.warn('Item quantity decreased');
  };

  return cartEntry ? (
    <div className="add-to-cart">
      <button
        className="add-to-cart__action add-to-cart__action--minus"
        onClick={handleDecrement}
      >
        <Icon className="add-to-cart__icon" size={1.2} path={mdiMinus} />
      </button>
      <div className="add-to-cart__quantity">{cartEntry.quantity}</div>
      <button
        className="add-to-cart__action add-to-cart__action--plus"
        onClick={handleIncrement}
      >
        <Icon className="add-to-cart__icon" size={1.2} path={mdiPlus} />
      </button>
    </div>
  ) : (
    <button
      className="add-to-cart-button"
      onClick={handleIncrement}
    >
      Add to cart
    </button>
  );
}

export default AddToCart;
