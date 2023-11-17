import React from 'react'
import { useNavigate } from 'react-router-dom'

const Todo = () => {

    const navigate = useNavigate()

    return (
        <div className='pagecenter'>
            <h2>Todo Page</h2>
            <button onClick={() => navigate("/")}>Back to Homepage</button>
        </div>
    )
}

export default Todo