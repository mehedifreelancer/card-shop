import React, { Component, Fragment } from 'react';
import './Modal.css';

function Modal ({isActiveModal, isActiveModal_}){

    return(
        <Fragment>
            <section id='modal_bg' className={isActiveModal}>
            <div className='modal'>
                <div className='modal_header'>
                    <h5>It is a modal header</h5>
                    <span><button onClick={()=>isActiveModal_()} > X </button></span>
                </div>
                <div className='modal_body'>
                    <h4>Hey Mehedi Hasan, you completed mission 2 !</h4>
                    <p>Now you do more things !</p>
                </div>
                <div className='modal_footer'>
        
                </div>
            </div>
            </section>
        </Fragment>
    );
}

export default Modal;