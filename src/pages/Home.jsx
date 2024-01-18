import React from 'react'
import { useContext } from 'react'
import { CategContext } from '../context/CategContext'


export const Home = () => {
  const {categories}=useContext(CategContext)
  console.log(categories);
  return (
    <>
    <div>Home</div>
    
    </>
  )
}
