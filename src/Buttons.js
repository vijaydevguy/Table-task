import React from 'react'
import { Link } from 'react-router-dom'

const Buttons = () => {
  return (
    <>
      <div>
        <Link to="./Column1">
          <button className='btns btn mt-2'>
            click
          </button>
        </Link>
        <Link to="./Column2">
          <button className='btns btn mt-2'>
            click
          </button>
        </Link>
        <Link to="./Column3">
          <button className='btns btn mt-2'>
            click
          </button>
        </Link>
        <Link to="./Column4">
          <button className='btns btn mt-2'>
            click
          </button>
        </Link>
      </div>
    </>
  )
}

export default Buttons
