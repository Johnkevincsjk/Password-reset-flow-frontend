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


    const formik = useFormik({
        initialValues: {
            Mailid: "",
            Password: ""
        },
        validationSchema: Login_val,

        onSubmit: async (values, { resetForm }) => {
            try {
                const resp = await axios.post('https://password-reset-flow-backend-r21n.onrender.com/api/resetflow/loginUser', values)
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
            <form className='Login-forms' onSubmit={formik.handleSubmit}>
                <div className="Login_one">
                    <p>Username</p>
                    <div className="input-group mb-3">
                        <input
                            name='Mailid'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Mailid}

                            type="email" placeholder='enter mail id' className="form-control w-100" />
                        {formik.touched.Mailid && formik.errors.Mailid && (
                            <p className='input_errors'><small>{formik.errors.Mailid}</small></p>
                        )}

                    </div>

                </div>
                <div className="Login_two">
                    <p>Password</p>
                    <div className="input-group mb-3">
                        <input
                            name='Password'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Password}
                            type="password" placeholder='enter password' className="form-control w-100" aria-label="Text input with checkbox" />
                        {/* <p className='input_errors'>{errors.Password && <small>{errors.Password}</small>}</p> */}
                        {formik.touched.Password && formik.errors.Password && (
                            <p className='input_errors'><small>{formik.errors.Password}</small></p>
                        )}
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
