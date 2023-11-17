import React from 'react'
import { useNavigate } from 'react-router-dom'

const Trasaction = () => {
    const navigate = useNavigate()
    return (
        <div className='pagecenter'>
            <h2>
                Trasaction Page
            </h2>
            <button onClick={() => navigate("/")}>Back to Homepage</button>
        </div>
    )
}

export default Trasaction