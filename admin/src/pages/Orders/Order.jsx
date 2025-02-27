import React from 'react'
import { useContext } from 'react'
import { Context } from '../../context/StoreContext'

const Order = () => {
  const { user } = useContext(Context);
  return (
    <div>Order
      {user.username}
      <div>
        <img src={user.profileImage} alt="note" />
      </div>

    </div>
  )
}

export default Order