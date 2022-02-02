import React from 'react'
import { FiTrash2 } from 'react-icons/fi'
import { useEffect } from 'react'
import { getDocs, doc, deleteDoc } from 'firebase/firestore'
import { useState } from 'react'
import { database } from '../firebase-config'

export default function Todo({ databaseRef, update, setUpdate }) {
  const [todoList, setTodoList] = useState([])
  const getData = async () => {
    let data = await getDocs(databaseRef)
    setTodoList(data.docs.map((item) => ({ ...item.data(), id: item.id })))
  }

  useEffect(() => {
    getData()
    setUpdate(false)
  }, [update])

  const deleteItems = (id) => {
    const data = doc(database, 'todo-list', id)
    deleteDoc(data).then(() => {
      getData()
    })
  }

  return (
    <>
      <div className='todo-main'>
        <h1 className='header'>To-Do List</h1>
        <div className='todo-card'>
          {todoList.map((todo) => {
            return (
              <div className='todo-list'>
                <h3 className='todo-item'>{todo.item}</h3>
                <FiTrash2
                  className='close-icon'
                  onClick={() => deleteItems(todo.id)}
                />
              </div>
            )
          })}
        </div>
      </div>
      <p className='footer'>
        Click the blue button to add a new item using voice command!
      </p>
      <p className='footer'>
        Click the red button to remove an item from the list.
      </p>
    </>
  )
}
