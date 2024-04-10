import React from 'react'
import "./Sidebar.css"
import Category from "./Category/Category"
import Price from "./Price/Price"
import Search from "../Search/Search"


function Sidebar({handleInputChange,handleChange,query}) {
  return (
    <>
        <section className='sidebar'>
            <Search handleInputChange={handleInputChange} query = {query}/>
            <Category handleChange={handleChange}/>
            <Price handleChange={handleChange}/>
        </section>
    </>
  )
}

export default Sidebar