import React from 'react';
import { createUseStyles } from 'react-jss';
import Alert from '../alert/Alert';
import './cartSuccess.css';

const useStyles = createUseStyles({
  item: {},
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    borderTop: 'black solid 1px',
    '& h2': {
      width: '100%'
    },
    '& $item': {
      marginRight:20
    }
  }
})

const CartSuccess = () => {
  const classes = useStyles();
  return (
    <Alert title ="Added to Cart" type="success">
      <div className={classes.wrapper}>
        <h2>You added 3 items to the cart</h2>
        <div className={classes.item}>
          <h4>Bananas</h4>
          <p>Quantity: 2</p>
        </div>
        <div className={classes.item}>
          <h4>Lettuce</h4>
          <p>Quantity: 1</p>
        </div>
      </div>
      
    </Alert>
  )
}

export default CartSuccess;


// In some situations, you may need to make a specific selector to override other styles. For // example, let’s say you only want the item styling to apply when the element is a child of 
//the wrapper class. To do this, first create the class on the object with no properties.     // Then inside the wrapper class, reference the new class with a $ symbol: