import React from 'react'

function SigInScreen() {
    return (
        <div className="sigInScreen">
            <h2 >Sign In</h2>
            <label>Username</label>
            <input type="email" placeholder="Enter your username"></input>
            <label>Password</label>
            <input type="password" placeholder="Enter your password"></input>
        </div>
    )
}

export default SigInScreen
