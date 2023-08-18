import React, { useContext } from 'react'
import { PaymentScreen } from '../../context/paymentScreen'
import { ShopContext } from '../../context/shop-context'

export const Payment = () => {
  const { getTotalCartAmount } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();
  const product = {
    price: totalAmount
  };
  return (
    <div>
      <PaymentScreen product={product} />
    </div>
  )
}

