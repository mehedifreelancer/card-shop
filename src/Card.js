import React, { Component, Fragment, useState } from 'react';
import './Card.css';



function Card({isActiveCart, isActiveModal}) {

    // Using state hook 
    let [text, updateText] = useState("Add to Cart");
    let [card_color, update_card_color] = useState("");



    let test = () =>{
        if(text == "Add to Cart"){
            updateText("Added !");
            update_card_color("active");
            isActiveCart();
            isActiveModal();
        }else{
            updateText("Add to Cart");
            update_card_color("");
            isActiveCart();
            isActiveModal();
        }
    }

    return(
        <Fragment>
            <div className={`card ${card_color}`}>
                <button onClick={()=>test()}  className='add'> {text}</button>
            </div>
        </Fragment> 
    )
}

export default Card;