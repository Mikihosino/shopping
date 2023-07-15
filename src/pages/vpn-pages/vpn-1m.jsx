import React from 'react'
import { PaymentScreen } from '../../context/paymentScreen'

export const OneMonthVPN = () => {
  const product = {
    period: 1,
    price: 14.9
  };
  return (
    <div>
      <PaymentScreen product={product} />
    </div>
  )
}

