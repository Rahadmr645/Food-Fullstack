import React from 'react'
import { useContext } from 'react'
import { Context } from '../../context/StoreContext'

const Order = () => {
  const { username } = useContext(Context);
  return (
    <div>Order
      {username}
    </div>
  )
}

export default Order