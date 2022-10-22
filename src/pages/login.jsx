import React from 'react'
import AteGirl from "../assets/ategirl.svg"
import LMCLogo from "../assets/LMCLogo.svg"
import { Button } from '../components'
import * as FcIcon from "react-icons/fc";

const Login = () => {
  return (
    <main className='login-main'>
      <section className='image-section'>
        <Image />
      </section>
      <section className='loginform-section'>
        <LoginForm />
      </section>
    </main>
  )
}

const Image = () => <img className='ategirl' src={AteGirl} alt="ategirl"></img>


const LoginForm = () => {
  return (
    <div className="loginform-wrapper">
      <img  src={LMCLogo} alt="LMCLogo"></img>
      <h2>Welcome to LMC Admin App</h2>
      <Button className='button-google' text='Sign in with Google' icon Icon={FcIcon.FcGoogle} Iconclassname='googleIcon'></Button>
      <div className='divider'>
      <div className='line'></div>
      <p >or Sign in with Email</p>
      <div className='line'></div>
      </div>
      <form className='loginform'>
       <div>
          <label htmlFor='email'>Email</label>
          <input type="text" name="email" id="email"></input>
       </div>
       <div>
          <label htmlFor='password'>Password</label>
          <input type="password" name="password" id="password"></input>
       </div>
       <p className='forgot-password'><a>forgot password?</a></p>
        <Button className='button-login' text='Login' />
      </form>
    </div>
  )
}





export default Login