import React, { useContext, useState } from 'react'
import { Contexto } from '../context/GlobalContext'
import Header from '../components/Header'
import Input from '../components/Inputs'
import ContainerItem from '../components/ListText'
import Form from '../components/FormItem'

function Home() {
  const {userDataAccess, itemData} = useContext(Contexto)
  const {name} = userDataAccess
  
  
  return (
    <>
      <Header userName={name}/>
      <ContainerItem item={itemData}/>
      <Form />
    </>
  )
}

export default Home