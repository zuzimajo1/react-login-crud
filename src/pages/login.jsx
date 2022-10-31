import React, { useRef, useState } from 'react'
import AteGirl from "../assets/ategirl.svg"
import LMCLogo from "../assets/LMCLogo.svg"
import { Button } from '../components'
import * as FcIcon from "react-icons/fc";
import { toast } from 'react-toastify';
import { validateEmail } from '../helpers/utils';
import { login, LoginUser } from '../helpers/api';
import { useSelector, useDispatch } from 'react-redux';
import { Loginuser } from '../redux/reducers/authRedux';

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
  const email = useRef();
  const password = useRef();
  const dispatch = useDispatch();
  const [Loading, setLoading] = useState(false);

  const handlelogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!email.current.value) {
      return toast.warn("Email is required!"), setLoading(false)
    }
    if (validateEmail(email.current.value)) {
      return toast.warn("Invalid Email!"), setLoading(false)

    }
    if (!password.current.value) {
      return toast.warn("Password is required!"), setLoading(false)

    }

    const loginDetails = {
      email: email.current.value,
      password: password.current.value
    };


    try {
      const res = await LoginUser(loginDetails);
      res && dispatch(Loginuser(res))
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message)
      setLoading(false);
    }

  }

  return (
    <div className="loginform-wrapper">
      <img src={LMCLogo} alt="LMCLogo"></img>
      <h2>Welcome to LMC Admin App</h2>
      <Button className='button-google' text='Sign in with Google' icon Icon={FcIcon.FcGoogle} Iconclassname='googleIcon'></Button>
      <div className='divider'>
        <div className='line'></div>
        <p >or Sign in with Email</p>
        <div className='line'></div>
      </div>
      <form className='loginform' onSubmit={handlelogin}>
        <div>
          <label htmlFor='email'>Email</label>
          <input type="text" name="email" id="email" ref={email}></input>
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input type="password" name="password" id="password" ref={password}></input>
        </div>
        <p className='forgot-password'><a>forgot password?</a></p>
        <Button loading={Loading} className='button-login' text='Login' />
      </form>
    </div>
  )
}





export default Login