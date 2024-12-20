import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Style.css";

function ShoppingCart() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const updateQuantity = (index, quantity) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = Math.max(quantity, 1);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); 
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); 
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const finishOrder = () => {
    alert("Order placed successfully!");
    setCart([]);
    localStorage.removeItem("cart"); 
    navigate("/"); 
  };

  return (
    <div className="container">
      <br/><br/><br/><br/><br/>
      <h1 className="text-center my-4">Shopping Cart</h1>
      <br/><br/>
      {cart.length > 0 ? (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <input
                      style={{ width: '5rem' }}
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(index, parseInt(e.target.value) || 1)}
                      min="1"
                    />
                  </td>
                  <td>
                    <button className="btn btn-danger" onClick={() => removeFromCart(index)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h4>Total: ${total.toFixed(2)}</h4>
          <br/>
          <div className="text-center">
            <button className="btn btn-primary" onClick={finishOrder}>Finish Order</button>
          </div>          
        </div>
      ) : (
        <p className="text-center">Your cart is empty</p>
      )}
      <br/><br/>
    </div>
  );
}

export default ShoppingCart;