import React, { useState } from 'react'
import '../New_password/Npassword.css'
import { motion } from 'framer-motion'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Npassword() {







    return (
        <div className='Login_main'>
            <div className="Login_head">
                <h5>Reset Password</h5>
            </div>
            <form  >
                <div className="Login_one">
                    <p>Create password</p>
                    <div className="input-group mb-3">
                        <input
                            
                            type="email" placeholder='Enter New Password' className="form-control" aria-label="Text input with checkbox" />
                    </div>

                </div>
                <div className="Login_two">
                    <p>Confirm password</p>
                    <div className="input-group mb-3">
                        <input
                            
                            type="password" placeholder='Re-enter New Password' className="form-control" aria-label="Text input with checkbox" />
                    </div>
                </div>
                <motion.div whileHover={{ scale: 1.2 }} className="Login_btn">
                    <Button type="submit" id='' className="btn btn-success">Reset</Button>
                </motion.div>
            </form>
            <Link to={'/Signin'}>Back to Signin page</Link>


        </div>
    )
}
