import React from 'react';
import Icon from '@mdi/react';
import { mdiCartOutline } from '@mdi/js';
import { Link } from 'react-router-dom';
import { useCartState } from 'cart-context';

import './Cart.scss';

// ✅ Toastify (only imported in case needed later)
import { toast } from 'react-toastify';

function Cart() {
  const { totalQuantity } = useCartState();

  return (
    <Link to="/cart" className="h-cart">
      <Icon path={mdiCartOutline} size={1.4} />
      <div className="h-cart__count">{totalQuantity}</div>
    </Link>
  );
}

export default Cart;
