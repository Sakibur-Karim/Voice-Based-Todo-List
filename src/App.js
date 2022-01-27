import './App.css'
import Todo from './components/Todo'
import alanBtn from '@alan-ai/alan-sdk-web'
import React, { useEffect } from 'react'
import { app, database } from './firebase-config'
import { collection, addDoc } from 'firebase/firestore'

const databaseRef = collection(database, 'todo-list')

function App() {
  useEffect(() => {
    alanBtn({
      key: '32ecd9d53caf4a9b50593a384f8294712e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: (commandData) => {
        addDoc(databaseRef, { item: commandData.data })
      },
    })
  }, [])

  return (
    <>
      <Todo databaseRef={databaseRef}/>
    </>
  )
}

export default App
