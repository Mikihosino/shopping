import React from 'react'
import './paymentScreen.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faCreditCard } from '@fortawesome/free-regular-svg-icons'
import { faCcMastercard, faCcVisa, faCcAmex, faCcJcb, faCcPaypal } from '@fortawesome/free-brands-svg-icons'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';

import {Collapse} from 'react-collapse';


export const PaymentScreen = ({ product }) => {
  const {price} = product;
  return (
    <div className="container d-flex justify-content-center mt-5 mb-5">
      <div className="row g-3">
        <div className="col-md-6">
          <span>Payment Method</span>
          <div className="card">
          
            <div className="accordion" id="accordionExample">
              <div className="card">
                <div className="card-header p-0" >
                  <Collapse isOpened={true}>
                    <h2 className="mb-0">

                      <button className="btn btn-light btn-block text-left collapsed p-3 rounded-0 border-bottom-custom" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <div className="d-flex align-items-center justify-content-between">
                          <span>Paypal</span>
                          <div className='paypal-icons'>
                            <i className="icon"><FontAwesomeIcon icon={faCcPaypal} size="3x"/></i>
                          </div>
                        </div>
                      </button>
                    </h2>
                   </Collapse>
                  
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                  <div className="card-body">
                    <input type="text" className="form-control" placeholder="Paypal email" />
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header p-0">
                <Collapse isOpened={true}>
                    <h2 className="mb-0">
                      <button className="btn btn-light btn-block text-left p-3 rounded-0" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <div className="d-flex align-items-center justify-content-between">
                          <span>Credit card</span>
                          <div className='icons'>
                            <i className="icon"><FontAwesomeIcon icon={faCcMastercard} size="2x"/></i>
                            <i className="icon"><FontAwesomeIcon icon={faCcVisa} size="2x"/></i>
                            <i className="icon"><FontAwesomeIcon icon={faCcAmex} size="2x"/></i>
                            <i className="icon"><FontAwesomeIcon icon={faCcJcb} size="2x"/></i>
                          </div>
                        </div>
                      </button>
                    </h2>
                  </Collapse>
                  
                </div>
                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                  <div className="card-body payment-card-body">
                    <span className="font-weight-normal card-text">Card Number</span>
                    <div className="input">
                      <i><FontAwesomeIcon icon={faCreditCard} /></i>
                      <input type="text" className="form-control" placeholder="0000 0000 0000 0000" />
                    </div>

                    <div className="row mt-3 mb-3">
                      <div className="col-md-6">
                        <span className="font-weight-normal card-text">Expiry Date</span>
                        <div className="input">
                          <i><FontAwesomeIcon icon={faCalendar} /></i>
                          <input type="text" className="form-control" placeholder="MM/YY" />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <span className="font-weight-normal card-text">CVC/CVV</span>
                        <div className="input">
                          <i><FontAwesomeIcon icon={faKey} /></i>
                          <input type="text" className="form-control" placeholder="000" />
                        </div>
                      </div>
                    </div>

                    <span className="text-muted certificate-text"><i className="fa fa-lock"></i> Your transaction is secured with ssl certificate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <span>Summary</span>

          <div className="card">
            <div className="d-flex justify-content-between p-3">

              <div className="mt-1">
                <sup className="super-price">Total:${price}</sup>
              </div>
            </div>

            <hr className="mt-0 line" />

            <div className="p-3">
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span>${price}</span>
              </div>

              <div className="d-flex justify-content-between">
                <span>Shipping <i className="fa fa-clock-o"></i></span>
                <span>Free</span>
              </div>
            </div>

            <hr className="mt-0 line" />

            <div className="p-3 d-flex justify-content-between">
              <div className="d-flex flex-column">
                <span>Today you pay(US Dollars)</span>
                <small>After 30 days +$9.59</small>
              </div>
              <span>$0</span>
            </div>

            <div className="p-3">
              <button className="btn btn-primary btn-block free-button">Check Out</button>
              <div className="text-center">
                <a href="#">Have a promo code?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


