import React from 'react'
import { useNavigate } from 'react-router-dom'

const Statements = () => {
    const navigate = useNavigate()
    return (
        <div className='pagecenter'>
            <h2>
                Bank Statements Page
            </h2>
            <button onClick={() => navigate("/")}>Back to Homepage</button>
        </div>
    )
}

export default Statements