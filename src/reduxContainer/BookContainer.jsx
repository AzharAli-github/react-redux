import React from 'react'
import { useSelector } from 'react-redux'

export const BookContainer = () => {
  const noOfBooks = useSelector(state => state.NumberofBooks)
  return (
    <>
      <h1>BookContainer</h1>
      <h2>No of Books - {noOfBooks}</h2>
    </>
  )
}
