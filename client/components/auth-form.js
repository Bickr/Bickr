import React from 'react'

/**
 * COMPONENT
 */
const AuthForm = () => {
  return (
    <div id="signin-container">
      <a href="/auth/google">
        <img className="signin-image" src="/google-sign-in.png" />
      </a>
      <a href="/auth/facebook">
        <img className="signin-image" src="/facebook-sign-in.png" />
      </a>
    </div>
  )
}


export const Login = (AuthForm)
export const Signup = (AuthForm)
