import React from 'react'
import { PaymentScreen } from '../../context/paymentScreen'

export const YearVPN = () => {
  const product = {
    period: 12,
    price: 8.9
  };
  return (
    <div>
      <PaymentScreen product={product} />
    </div>
  )
}