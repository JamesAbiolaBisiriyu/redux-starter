import React from 'react'

const Modal = () => {
  return (
    <aside className='modal-container'>
      <div className='modal'>
      <h4> Remove All Items from Shopping Cart</h4>
      <div className='btn-container'>
        <button type='button' className='btn confirm-btn'> Confirm</button>
        <button type='button' className='btn clear-btn'> Cancel</button>

      </div>
      </div>

    </aside>
  )
}

export default Modal