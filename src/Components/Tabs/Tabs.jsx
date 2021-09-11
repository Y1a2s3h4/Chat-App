import React, { useState } from 'react'
import Signup from './Signup'
import Signin from './Signin'
export default function Tabs() {
    const [signUp, setSignUp] = useState(true)
    const [signIn, setSignIn] = useState(false)
    const signUpClass = signUp ? 'signup font-display signup-active' : 'signup font-display'
    const signInClass = signIn ? 'signin font-display signin-active' : 'signin font-display'
    function signUpHandle() {
        if (signIn) {
            setSignIn(false)
            setSignUp(true)
        }
    }
    function signInHandle() {
        if (signUp) {
            setSignUp(false)
            setSignIn(true)
        }
    }
    return (
        <div className="tabs container bg-white max-w-498 max-h-923">
            <div className="flex flex-row justify-around">
                <div onClick={signUpHandle} className={signUpClass}>Sign Up</div>
                <div onClick={signInHandle} className={signInClass}>Sign In</div>
            </div>
            {signUp && <Signup />}
            {signIn && <Signin />}
        </div>
    )
}
