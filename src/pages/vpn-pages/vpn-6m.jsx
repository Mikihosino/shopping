import React from 'react'
import { PaymentScreen } from '../../context/paymentScreen'

export const SixMonthVPN = () => {
  const product = {
    period: 6,
    price: 11.9
  };
  return (
    <div>
      <PaymentScreen product={product} />
    </div>
  )
}