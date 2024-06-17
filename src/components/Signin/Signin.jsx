import React, { useState } from 'react'
import '../Signin/Signin.css'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';
import { motion } from 'framer-motion'


export default function Signin() {
    const navi = useNavigate()
    const [Full_name, setFull_name] = useState('')
    const [Mailid, setMailid] = useState('')
    const [Password, setPassword] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault()
        const submit_form = { Full_name, Mailid, Password }

        try {
            const resp = await axios.post('http://localhost:8000/resetflow/createuser', submit_form)
            if (resp.data.Success === false) {
                toast.error(resp.data.Feedback)

            } else {
                toast.success(resp.data.Feedback)
                navi('/')
            }

        } catch (error) {
            toast.error("Sometime went wrong")
            console.log(error.response.data.Feedback)

        }



    }




    return (
        <div className='Login_main'>
            <p>Note: Your password is not bcrypted</p>
            <div className="Login_head">
                <h5>Signin</h5>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="Login_one">
                    <p>Full name</p>
                    <div className="input-group mb-3">
                        <input
                            value={Full_name}
                            onChange={(e) => setFull_name(e.target.value)}
                            type="text" placeholder='Enter full name' className="form-control" aria-label="Text input with checkbox" />
                    </div>

                </div>
                <div className="Login_one">
                    <p>Mail Id</p>
                    <div className="input-group mb-3">
                        <input
                            value={Mailid}
                            onChange={(e) => setMailid(e.target.value)}
                            type="email" placeholder='Enter mail id' className="form-control" aria-label="Text input with checkbox" />
                    </div>

                </div>
                <div className="Login_two">
                    <p>Password</p>
                    <div className="input-group mb-3">
                        <input
                            value={Password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password" placeholder='Create password' className="form-control" aria-label="Text input with checkbox" />
                    </div>
                </div>
                <motion.div whileHover={{ scale: 1.2 }} className="Login_btn">
                    <Button type="submit" className="btn btn-success">Join clan</Button>
                </motion.div>

                <Link to={'/'}>Already a member ?</Link>
            </form>


        </div>
    )
}
