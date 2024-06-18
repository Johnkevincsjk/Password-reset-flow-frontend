import React from 'react'
import '../Passwordreset/Reset.css'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import Resetform_val from './Reset_form_validation'

export default function Reset() {

    const { handleBlur, handleChange, handleSubmit, values, errors, resetForm } = useFormik({
        initialValues: {
            Mailid: ''
        },

        validationSchema: Resetform_val,
        onSubmit: async (values) => {

        }

    })
    return (
        <div className='Login_main'>
            <div className="Login_head">
                <h5>Password reset</h5>
            </div>
            <form className='Login-forms'>
                <div className="Login_one">

                    <div className="input-group mb-3">
                        <input
                            name='Mailid'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.Mailid}
                            type="email" placeholder='Email' className="form-control w-100" aria-label="Text input with checkbox" />
                        <p className='input_errors'>{errors.Mailid && <small>{errors.Mailid}</small>}</p>
                    </div>

                </div>

                <div className="Login_btn">
                    <Button type="button" id='' class="btn btn-success">Send Mail</Button>
                </div>

                <Link to={'/'}>Back to Login page</Link>
            </form>


        </div>
    )
}
