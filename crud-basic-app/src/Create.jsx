
import React, { useState } from 'react'
import { addUser } from './UserReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
export default function Create() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

  
    return (
        <div className=' d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className=' w-50 border bg-secondary text-white p-5'>
                <h3>Add New User</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name=' name ' required className='form-control' placeholder='enter name'
                            onChange={e => setName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name=' email ' required className='form-control' placeholder='enter email'
                            onChange={e => setEmail(e.target.value)} />

                    </div><br />
                    <button className='btn btn-info'>Submit</button>

                </form>
            </div>

        </div >

    )
}
