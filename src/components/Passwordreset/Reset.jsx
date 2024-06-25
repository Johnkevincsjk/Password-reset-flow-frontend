
import { Button } from 'react-bootstrap'

import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import 'react-toastify/dist/ReactToastify.css';


// Validation schema
const Resetform_val = Yup.object().shape({
    Mailid: Yup.string().email('Invalid email').required('Enter registered mail id'),
});

const ini = {
    Mailid: '',
};

function PasswordResetForm() {


    const formik = useFormik({
        initialValues: ini,
        validationSchema: Resetform_val,
        onSubmit: async (values, { resetForm }) => {
            try {
                console.log('Form values:', values); // Debugging: Check form values
                const resp = await axios.post('https://password-reset-flow-backend-r21n.onrender.com/api/resetflow/Password_reset', values);
                console.log('Server response:', resp); // Debugging: Check server response
                if (resp.data.message === 'Reset email sent') {
                    toast.success('Reset mail sent successfully');

                } else {
                    toast.error('User does not exist');
                    resetForm();
                }
            } catch (error) {
                toast.error('Something went wrong');
                console.error('Error response:', error.response); // Debugging: Check error response
            }
        },
    });

    return (
        <div className='Login_main'>
            <div className="Login_head">
                <h5>Password reset</h5>
            </div>
            <form className='Login-forms' onSubmit={formik.handleSubmit}>
                <div className="Login_one">
                    <div className="input-group mb-3">
                        <input
                            name='Mailid'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Mailid}
                            type="email"
                            placeholder='Email'
                            className="form-control w-100"
                            aria-label="Text input with checkbox"
                        />
                        {formik.touched.Mailid && formik.errors.Mailid && (
                            <p className='input_errors'><small>{formik.errors.Mailid}</small></p>
                        )}
                    </div>
                </div>



                <div className="Login_btn">
                    <Button type="submit" className="btn btn-success">Send Mail</Button>
                </div>
                <Link to={'/'}>Back to Login page</Link>
            </form>
        </div>
    );
}

export default PasswordResetForm;