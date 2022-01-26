import React from 'react'
import { FiX } from 'react-icons/fi'
export default function Todo() {
  return (
    <>
      <div className='todo-main'>
        <h1 className='header'>Todo React</h1>
        <div className='todo-card'>
          <div className='todo-list'>
            <h2>Play</h2>
            <FiX className='close-icon' />
          </div>

          <div className='todo-list'>
            <h2>Kill</h2>
            <FiX className='close-icon' />
          </div>

          <div className='todo-list'>
            <h2>Destroy</h2>
            <FiX className='close-icon' />
          </div>
        </div>
      </div>
    </>
  )
}
