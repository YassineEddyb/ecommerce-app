import React from 'react'
import './login.scss'

const Login = () => {

    return (
        <div className="login">
            <div className='img'>
            </div>
            <div className='form'>
                <div>
                    <h1 >Log in</h1>
                    <form action="">
                        <label class="label" htmlFor="email">Email</label>
                        <input className="input email" type="email" placeholder="Enter your email"/>
                        <label class="label" htmlFor="pass">Password</label>
                        <input className="input pass" type="password" placeholder="Enter your password"/>
                        <input className="check" type="checkbox" />
                        <label htmlFor="check">show password</label>
                        <button className="btn" type="submit">Log in</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login