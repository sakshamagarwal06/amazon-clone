import React from 'react';
import { useCartState, useCartDispatch } from 'cart-context';
import { toast } from 'react-toastify'; // ✅ Import toast

function CartPage() {
  const { products, totalQuantity, totalPrice } = useCartState();
  const dispatch = useCartDispatch();

  const handleRemoveItem = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
    toast.warn('Item removed from cart!');
  };

  const handleClearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
    toast.error('All items removed from cart!');
  };

  const cartItems = Object.values(products);

  if (cartItems.length === 0) {
    return <h2 style={{ textAlign: 'center' }}>Your cart is empty 😕</h2>;
  }

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>

      <ul className="cart-page__items">
        {cartItems.map((item) => (
          <li key={item.id} className="cart-page__item">
            <img src={item.images[0]} alt={item.title} className="cart-page__item-image" />
            <div className="cart-page__item-info">
              <h4>{item.title}</h4>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ₹{item.price.amount}</p>
              <button onClick={() => handleRemoveItem(item.id)}>
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="cart-page__summary">
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Price: ₹{totalPrice}</p>
        <button className="clear-btn" onClick={handleClearCart}>
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default CartPage;
