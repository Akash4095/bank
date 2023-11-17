import React from 'react'
import { useNavigate } from 'react-router-dom'

const Intrest = () => {

    const navigate = useNavigate()

    return (
        <div className='pagecenter'>
            <h2>Intrest and Charges Page</h2>
            <button onClick={() => navigate("/")}>Back to Homepage</button>
        </div>
    )
}

export default Intrest