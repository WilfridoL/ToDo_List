import React, { useContext, useState } from 'react'
import { Contexto } from '../context/GlobalContext'
import Header from '../components/Header'
import ContainerItem from '../components/ListText'
import FormItem from '../components/FormItem'

function Home() {
  const {userDataAccess, itemData, setIsLog} = useContext(Contexto)
  const {name} = userDataAccess
  
  
  return (
    <div className='home'>
      <Header userName={name} closeLog={setIsLog}/>
      <ContainerItem item={itemData}/>
      <FormItem />
    </div>
  )
}

export default Home