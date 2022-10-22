import React from 'react'
import AteGirl from "../assets/ategirl.svg"
import LMCLogo from "../assets/LMCLogo.svg"
import Google from "../assets/google.svg"

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
      <button className='button-google'><img  src={Google} alt="google"></img>Sign in with Google</button>
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
       <button className='button-login'>Login</button>
      </form>
    </div>
  )
}





export default Login