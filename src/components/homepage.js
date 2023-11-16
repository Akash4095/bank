import React from 'react'
import Sidebar from './sidebar'
import "./homepage.css"
import Rightpage from './rightpage'

const Homepage = () => {
    return (
        <div className='homepage'>
            <Sidebar />
            <Rightpage />
        </div>
    )
}

export default Homepage