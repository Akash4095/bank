import React from 'react'
import { useNavigate } from 'react-router-dom'

const Journals = () => {
    const navigate = useNavigate()
    return (
        <div className='pagecenter'>
            <h2>Journals Page</h2>
            <button onClick={() => navigate("/")}>Back to Homepage</button>
        </div>
    )
}

export default Journals