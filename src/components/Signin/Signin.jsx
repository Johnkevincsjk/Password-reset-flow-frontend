import React, { useState } from 'react'
import '../Signin/Signin.css'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';
import { motion } from 'framer-motion'
import { useFormik } from 'formik'
import Sign_val from './Signin_validation'


export default function Signin() {
    const navi = useNavigate()
    // const [Full_name, setFull_name] = useState('')
    // const [Mailid, setMailid] = useState('')
    // const [Password, setPassword] = useState('')


    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     const submit_form = { Full_name, Mailid, Password }

    //     try {
    //         const resp = await axios.post('http://localhost:8000/resetflow/createuser', submit_form)
    //         if (resp.data.Success === false) {
    //             toast.error(resp.data.Feedback)

    //         } else {
    //             toast.success(resp.data.Feedback)
    //             navi('/')
    //         }

    //     } catch (error) {
    //         toast.error("Sometime went wrong")
    //         console.log(error.response.data.Feedback)

    //     }



    // }
    const { handleBlur, handleChange, handleSubmit, errors, values } = useFormik({
        initialValues: {
            Full_name: '',
            Mailid: '',
            Password: ''
        },
        validationSchema: Sign_val,

        onSubmit: async (values) => {

            try {
                const resp = await axios.post('http://localhost:8000/api/resetflow/createuser', values)
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

    })




    return (
        <div className='Login_main'>
            <p>Note: Your password is not bcrypted</p>
            <div className="Login_head">
                <h5>Signin</h5>
            </div>
            <form className='Login-forms' onSubmit={handleSubmit}>
                <div className="Login_one">
                    <p>Full name</p>
                    <div className="input-group">
                        <input
                            name='Full_name'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.Full_name}
                            type="text" placeholder='Enter full name' className="form-control w-100" />
                        <p className='input_errors mb-1'>{errors.Full_name && <small>{errors.Full_name}</small>}</p>
                    </div>

                </div>
                <div className="Login_one">
                    <p>Mail Id</p>
                    <div className="input-group mb-3">
                        <input
                            name='Mailid'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.Mailid}
                            type="email" placeholder='Enter mail id' className="form-control w-100"/>
                            <p className='input_errors'>{errors.Mailid && <small>{errors.Mailid}</small>}</p>
                    </div>

                </div>
                <div className="Login_two">
                    <p>Password</p>
                    <div className="input-group mb-3">
                        <input
                            name='Password'
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.Password}
                            type="password" placeholder='Create password' className="form-control w-100" aria-label="Text input with checkbox" />
                            <p className='input_errors'>{errors.Password && <small>{errors.Password}</small>}</p>
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
