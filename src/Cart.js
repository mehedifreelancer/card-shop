import React, { Fragment } from 'react';
import './Cart.css';

function Cart({isActiveCart}) {
    
  
    return(
        <Fragment>
        <div className={`cart ${isActiveCart}`}></div>
        </Fragment>
    )
}

export default Cart;