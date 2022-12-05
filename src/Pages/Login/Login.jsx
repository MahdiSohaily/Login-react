import React from 'react'
import './style.css'

export default function Login() {
    return (
        <div className="login">
            <h1>Login</h1>
            <form method="post" >
                <input type="text" placeholder="Username" required="required" />
                <input type="password" placeholder="Password" required="required" />
                <button type="submit" className="btn btn-primary btn-block btn-large">Let me in.</button>
            </form>
        </div>
    )
}
