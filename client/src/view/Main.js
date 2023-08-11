import React from 'react'
import Nav from '../components/Nav'
import GodList from '../components/GodList'

const Main = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <Nav/>
        <div className='mt-10 w-10/12 h-screen'>
            <GodList/>
        </div>
    </div>
  )
}

export default Main