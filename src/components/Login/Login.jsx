import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import "../Login/Login.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';
import { motion } from 'framer-motion'


export default function Login() {
    const Nav = useNavigate()
    const [Mailid, setMailid] = useState('')
    const [Password, setPassword] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault()
        const login_crd = { Mailid, Password }


        try {
            const resp = await axios.post('http://localhost:8000/resetflow/loginUser', login_crd)

            if (resp.data.Error) {
                toast.error(resp.data.Feedback)
            } else {
                Nav('/LandingPage')
                toast.success(resp.data.Feedback)
            }
        } catch (error) {
            toast.error(error.response?.data?.Feedback)
            console.log(error)
        }
    }

    return (
        <div className='Login_main'>
            <div className="Login_head">
                <h5>Login</h5>
            </div>
            <form onSubmit={handleLogin}>
                <div className="Login_one">
                    <p>Username</p>
                    <div className="input-group mb-3">
                        <input
                            value={Mailid}
                            onChange={(e) => setMailid(e.target.value)}
                            type="email" placeholder='enter mail id' className="form-control" aria-label="Text input with checkbox" />
                    </div>

                </div>
                <div className="Login_two">
                    <p>Password</p>
                    <div className="input-group mb-3">
                        <input
                            value={Password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password" placeholder='enter password' className="form-control" aria-label="Text input with checkbox" />
                    </div>
                </div>
                <motion.div whileHover={{ scale: 1.2 }} className="Login_btn">
                    <Button type="submit" id='' className="btn btn-success">Login</Button>
                </motion.div>
            </form>
            <Link to={'/Resetpassword'}>Forgot Password</Link>
            <p>Not a member ? <Link to={'/Signin'}>Join the clan !</Link></p>


        </div>
    )
}