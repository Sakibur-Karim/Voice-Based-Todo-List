import React from 'react'
import { FiX } from 'react-icons/fi'
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
        <h1 className='header'>Todo React</h1>
        <div className='todo-card'>
          {todoList.map((todo) => {
            return (
              <div className='todo-list'>
                <h3 className='todo-item'>{todo.item}</h3>
                <FiX
                  className='close-icon'
                  onClick={() => deleteItems(todo.id)}
                />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
