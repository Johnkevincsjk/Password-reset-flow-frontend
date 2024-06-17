import React from 'react'
import '../LandingPage/LandingPage.css'
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"


export default function LandingPage() {
    return (
        <div className='Landing_main'>
            <Link to={'/'}><Button id='log-out-btn' variant="danger">Log Out</Button></Link>
            <h1>Landing page</h1><br />

        </div>
    )
}
