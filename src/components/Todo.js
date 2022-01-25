import React from 'react'

export default function Todo() {
  return (
    <>
      <div className='todo-main'>
        <h1 className='header'>Todo React</h1>
        <div className='todo-card'>
          <div className='todo-list'>
            <h2>Play</h2>
          </div>

          <div className='todo-list'>
            <h2>Kill</h2>
          </div>

          <div className='todo-list'>
            <h2>Destroy</h2>
          </div>
        </div>
      </div>
    </>
  )
}
