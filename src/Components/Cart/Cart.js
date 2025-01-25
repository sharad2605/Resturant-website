import React,{useContext} from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/Cart-context';


const Cart = (props) => {
  const cartcontext = useContext(CartContext);
  
  const orderHandler = () => {
    props.onClose();
    // alert('Orderingggggggggggg.....')
    console.log("Orderingggggggggggg.....")
}
const hasItem = cartcontext.items.length > 0;
  
  const cartItems = (<ul className={classes['cart-items']}>
  {cartcontext.items.map((item) =>item.quantity > 0 &&(
    <li className={classes.meal} key={item.id}>
        <div>
                        <h3>{item.name}</h3>
                        <div className={classes.price}>
                            <span>${item.price} </span>

                        </div>
                        <div>
                            <span>x{item.quantity}</span>
                        </div>
                        <div className={classes.newactions}>
                        <button onClick={() => cartcontext.addItem({ ...item, quantity: '1' })}>+</button>
                        <button onClick={() => cartcontext.removeItem(item.id)} className={classes.button}>-</button>
                    </div>
        </div>
                    
    </li>
   ))}</ul>
  );

  let totalAmount = 0;
    cartcontext.items.forEach(element => {
        totalAmount += element.price * element.quantity;
    });



  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}onClick={props.onClose}>Close</button>
        {hasItem && <button onClick={orderHandler} className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;