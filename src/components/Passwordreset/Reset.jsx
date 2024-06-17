import React from 'react'
import '../Passwordreset/Reset.css'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Reset() {
    return (
        <div className='Login_main'>
            <div className="Login_head">
                <h5>Password reset</h5>
            </div>
            <form>
                <div className="Login_one">

                    <div className="input-group mb-3">
                        <input type="email" placeholder='Enter registered mail id' className="form-control" aria-label="Text input with checkbox" />
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
