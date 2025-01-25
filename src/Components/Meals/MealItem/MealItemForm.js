import React ,{useContext,useState}from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
import CartContext from '../../../store/Cart-context';

const MealItemForm = (props) => {
  const [quantity, setQuantity]=useState(1);
  const cartContext = useContext(CartContext);
  console.log('reinitialized cartcontext',cartContext)
  const addItemToCart = (event) => {

    event.preventDefault();

    // const quantity=document.getElementById('amount_'+props.id).value
    cartContext.addItem({ ...props.item, quantity: quantity})
    console.log('after addItemstoCart ',cartContext)
  }
  return (
    <form className={classes.form}>
      {console.log('inside render ',cartContext.items)}
      <Input
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
          onChange: (event) => {
              setQuantity(event.target.value);
          },
        }}
      
      />
      <button onClick={addItemToCart}>+ Add</button>
    </form>
  );
};

export default MealItemForm;