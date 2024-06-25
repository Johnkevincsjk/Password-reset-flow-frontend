import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import "../Login/Login.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';
import { motion } from 'framer-motion'
import { useFormik } from "formik"
import Login_val from './Login_validation'


export default function Login() {
    const Nav = useNavigate()
    // const [Mailid, setMailid] = useState('')
    // const [Password, setPassword] = useState('')

    // const handleLogin = async (e) => {
    //     e.preventDefault()
    //     const login_crd = { Mailid, Password }


    //     try {
    //         const resp = await axios.post('http://localhost:8000/resetflow/loginUser', login_crd)

    //         if (resp.data.Error) {
    //             toast.error(resp.data.Feedback)
    //         } else {
    //             Nav('/LandingPage')
    //             toast.success(resp.data.Feedback)
    //         }
    //     } catch (error) {
    //         toast.error(error.response?.data?.Feedback)
    //         console.log(error)
    //     }
    // }

    const { handleBlur, handleChange, values, handleSubmit, errors, resetForm } = useFormik({
        initialValues: {
            Mailid: "",
            Password: ""
        },
        validationSchema: Login_val,

        onSubmit: async (values) => {
            try {
                const resp = await axios.post('https://password-reset-flow-backend-w563.onrender.com/api/resetflow/loginUser', values)
                if (resp.data.Feedback === 'Login Successfully') {
                    toast.success('Login Successfully')
                    Nav('/LandingPage')
                } else {
                    resetForm()
                    toast.error('Mail id or password is invaild')
                }
            } catch (error) {
                toast.error(error.response?.data?.Feedback)
                console.log(error)
            }
        }

    })

    return (
        <div className='Login_main'>
            <div className="Login_head">
                <h5>Login</h5>
            </div>
            <form className='Login-forms' onSubmit={handleSubmit}>
                <div className="Login_one">
                    <p>Username</p>
                    <div className="input-group mb-3">
                        <input
                            name='Mailid'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.Mailid}

                            type="email" placeholder='enter mail id' className="form-control w-100" />
                        <p className='input_errors'>{errors.Mailid && <small>{errors.Mailid}</small>}</p>
                    </div>

                </div>
                <div className="Login_two">
                    <p>Password</p>
                    <div className="input-group mb-3">
                        <input
                            name='Password'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.Password}
                            type="password" placeholder='enter password' className="form-control w-100" aria-label="Text input with checkbox" />
                        <p className='input_errors'>{errors.Password && <small>{errors.Password}</small>}</p>
                    </div>
                </div>
                <motion.div whileHover={{ scale: 1.2 }} className="Login_btn">
                    <Button type="submit" id='' className="btn btn-success">Login</Button>
                </motion.div>
            </form>
            <Link to={'/Password_reset'}>Forgot Password</Link>
            <p >Not a member ? <Link to={'/Signin'}>Join the clan !</Link></p>


        </div>
    )
}
