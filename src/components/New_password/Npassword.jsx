import React, { useState } from 'react';
import '../New_password/Npassword.css';
import { motion } from 'framer-motion';
import { Button } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Npassword() {
    const navigate = useNavigate();
    const { ramdamstring } = useParams()
    console.log(ramdamstring)
    const Npassword_validation = Yup.object({
        Password: Yup.string().required("Enter password"),
        Cpassword: Yup.string().oneOf([Yup.ref('Password')], "Password is not matched").required("Re-enter Password")
    });

    const formik = useFormik({
        initialValues: {
            Password: '',
            Cpassword: ''
        },
        validationSchema: Npassword_validation,
        onSubmit: async (values, { resetForm }) => {
            try {
                const resp = await axios.post(`https://password-reset-flow-backend-w563.onrender.com/api/resetflow/NewPassword/${ramdamstring}`, values);
                console.log(resp)

                if (resp.data.message == 'Password reset successfully') {
                    toast.success("Password reset successfully")
                    navigate('/');

                } else {
                    toast.error('Token is invalid or has expired')
                    resetForm()
                }

            } catch (error) {
                console.error(error);
                toast.error('Failed to reset password. Please try again.');
                resetForm();
            }
        }
    });

    return (
        <div className='Login_main'>
            <div className="Login_head">
                <h5>Reset Password</h5>
            </div>

            <form className='Login-forms' onSubmit={formik.handleSubmit}>
                <div className="Login_one">
                    <p>Create password</p>
                    <div className="input-group mb-3">
                        <input
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Password}
                            name="Password"
                            type="password"
                            placeholder='Enter New Password'
                            className="form-control w-100"
                            aria-label="Text input with checkbox"
                        />
                        {formik.touched.Password && formik.errors.Password && (
                            <p className='input_errors'><small>{formik.errors.Password}</small></p>
                        )}
                    </div>
                </div>
                <div className="Login_two">
                    <p>Confirm password</p>
                    <div className="input-group mb-3">
                        <input
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Cpassword}
                            name="Cpassword"
                            type="password"
                            placeholder='Re-enter New Password'
                            className="form-control w-100"
                            aria-label="Text input with checkbox"
                        />
                        {formik.touched.Cpassword && formik.errors.Cpassword && (
                            <p className='input_errors'><small>{formik.errors.Cpassword}</small></p>
                        )}
                    </div>
                </div>
                <motion.div whileHover={{ scale: 1.2 }} className="Login-btn">
                    <Button type="submit" id='' className="btn btn-success">Reset</Button>
                </motion.div>
            </form>
            <Link to={'/Signin'}>Back to Signin page</Link>
        </div>
    );
}