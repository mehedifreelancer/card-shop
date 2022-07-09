import React, { Fragment, useState } from 'react';
import Card from './Card';
import Cart from './Cart';
import Modal from './Modal';
import './App.css';

function App(){
 
  let [cart, cart_update]= useState("");
  let [modal, modal_update] = useState("");

  let modal_active = () =>{
    modal == "" ? modal_update("modal_active") : modal_update("");
  }

  
  let cart_move = () =>{
    cart == "" ? cart_update("cart_active") : cart_update("");
    
  }


  return(
    <Fragment>

      <Modal isActiveModal_={modal_active}  isActiveModal={modal}></Modal>
      <section id='all'>
        <div className='cart_wrapper'>
          <Cart  isActiveCart={cart}></Cart>
        </div>
        
        <div className='card_wrapper'>
          <Card isActiveModal={modal_active}  isActiveCart={cart_move}></Card>
          <Card isActiveModal={modal_active} isActiveCart={cart_move}></Card>
          <Card isActiveModal={modal_active} isActiveCart={cart_move}></Card>
        </div>
      </section>
    </Fragment>
  )
}

export default App;
