// import React from 'react'
import { clearCart } from '../features/cart/cartSlice'
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux'


const CartContainer = () => {
  const dispatch = useDispatch()
  const {cartItems, total, amount} = useSelector((store)=>store.cart)

if (amount<1){
  return (<section className='cart'>
  <header>
    <h2>Your cart is empty!</h2>
    <h4 className='empty-cart'>is currently empty</h4>
  </header>
</section>
);
}

  return (
    <section className='cart'>
      <header>
        <h2> your bag</h2>
      </header>
      <div>
        {cartItems.map((item)=>{
          return <CartItem key={item.id} {...item}/>
        })}
      </div>
      <footer>
        <hr/>
        <div className='cart-total'>
        <h4> Total<span> ${total.toFixed(2)}</span></h4>
        </div>
        <button className='btn clear-btn' onClick={()=>dispatch(clearCart())}>Clear Cart</button>
      </footer>
      </section>
  )
}

export default CartContainer