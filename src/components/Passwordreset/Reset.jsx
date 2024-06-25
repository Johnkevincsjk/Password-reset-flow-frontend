// import React from 'react'
// import '../Passwordreset/Reset.css'
import { Button } from 'react-bootstrap'
// import { Link, useNavigate } from 'react-router-dom'
// import { useFormik } from 'formik'
// // import Resetform_val from './Reset_form_validation'
// import axios from 'axios'
// import { toast } from 'react-toastify'
// import * as Yup from 'yup'

// export default function Reset() {
//     const Resetform_val = Yup.object().shape({
//         Mailid: Yup.string().email('Invalid email').required('Required'),
//       });
//     const Nav = useNavigate()
//     console.log("helo world")
//     const { handleBlur, handleChange, handleSubmit, values, errors, resetForm } = useFormik({
//         initialValues: {
//             Mailid: ''
//         },

//         validationSchema: Resetform_val,
//         onSubmit: async (values) => {
//             try {
//                 const resp = await axios.post('http://localhost:8000/resetflow/Password_reset', values)
//                 if (resp.data.message == 'Reset email sent') {
//                     toast.success('Reset mail sent successfully')


//                     Nav('/NewPassword/:ramdamstring')

//                 } else {
//                     toast.error("User does not exist")
//                     resetForm()
//                 }
//             } catch (error) {
//                 toast.error("Something went wrong")
//                 console.log(error.resp)
//             }
//         }

//     })
//     return (
//         <div className='Login_main'>
//             <div className="Login_head">
//                 <h5>Password reset</h5>
//             </div>
//             <form className='Login-forms' onSubmit={handleSubmit}>
//                 <div className="Login_one">

//                     <div className="input-group mb-3">
//                         <input
//                             name='Mailid'
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             value={values.Mailid}
//                             type="email" placeholder='Email' className="form-control w-100" aria-label="Text input with checkbox" />
//                         <p className='input_errors'>{errors.Mailid && <small>{errors.Mailid}</small>}</p>
//                     </div>

//                 </div>

//                 <div className="Login_btn">
//                     <Button type="button" id='' class="btn btn-success">Send Mail</Button>
//                 </div>

//                 <Link to={'/'}>Back to Login page</Link>
//             </form>


//         </div>
//     )
// }
import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import 'react-toastify/dist/ReactToastify.css';
// import { Button } from 'reactstrap'; // Ensure you have reactstrap installed

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
                const resp = await axios.post('http://localhost:8000/api/resetflow/Password_reset', values);
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