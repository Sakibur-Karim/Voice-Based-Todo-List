import React from 'react'
import { FiX } from 'react-icons/fi'
import { useEffect } from 'react'
import { getDocs } from 'firebase/firestore'
import { useState } from 'react'


export default function Todo({ databaseRef }) {
  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    const getData = async () => {
      let data = await getDocs(databaseRef);
      setTodoList(data.docs.map((item) => ({ ...item.data(), id: item.id })));
    }
    getData()
  }, [])


  return (
    <>
      <div className='todo-main'>
        <h1 className='header'>Todo React</h1>
        <div className='todo-card'>
          {todoList.map((todo) => {
            return (
              <div className='todo-list'>
                <h3>{todo.item}</h3>
                <FiX className='close-icon' />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
