import './Authentication.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Authentication() {
  const [isSignup, setIsSignup] = useState(false)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const resetFields = () => {
    setUsername('')
    setEmail('')
    setMobile('')
    setPassword('')
    setConfirmPassword('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setError('')

    if (!username.trim() || !password.trim() || (isSignup && (!email.trim() || !mobile.trim() || !confirmPassword.trim()))) {
      setError('Please fill in all required fields.')
      return
    }

    if (isSignup && password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    if (isSignup) {
      setError('Account created successfully. Please sign in.')
      setIsSignup(false)
      resetFields()
      return
    }

    window.alert('Sign in successfully')
    navigate('/')
  }

  const switchForm = (signup) => {
    setIsSignup(signup)
    setError('')
    resetFields()
  }

  return (
    <main id="auth">
      <section className={`container ${isSignup ? 'signup-container' : ''}`} aria-label={isSignup ? 'Create account form' : 'Login form'}>
        <div className="container_header">
          <h1 className="header-label1">{isSignup ? 'Create Account' : 'Login'}</h1>
          <img src="/Logo2.jpeg" className="logo2" alt="Live Weather Monitoring System" />
        </div>

        <form className="container_content" onSubmit={handleSubmit}>
          <div className="field-row">
            <label htmlFor="username" className="field-label">{isSignup ? 'Full Name' : 'User Name'}</label>
            <div className="field">
              <img src="/user.png" alt="" className="field-icon" />
              <input id="username" type="text" placeholder={isSignup ? 'Enter your Full Name' : 'Enter your username'} value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
          </div>

          {isSignup && (
            <>
              <div className="field-row">
                <label htmlFor="email" className="field-label">Email</label>
                <div className="field">
                  <img src="/email.png" alt="" className="field-icon" />
                  <input id="email" type="email" placeholder="Enter your Email ID" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
              </div>

              <div className="field-row">
                <label htmlFor="mobile" className="field-label">Mobile Number</label>
                <div className="field">
                  <img src="/mobile.png" alt="" className="field-icon" />
                  <input id="mobile" type="tel" placeholder="Enter your Mobile-Number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                </div>
              </div>
            </>
          )}

          <div className="field-row">
            <label htmlFor="password" className="field-label">Password</label>
            <div className="field">
              <img src="/lock.png" alt="" className="field-icon" />
              <input id="password" type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>

          {isSignup && (
            <div className="field-row">
              <label htmlFor="confirm-password" className="field-label">Re-Password</label>
              <div className="field">
                <img src="/lock.png" alt="" className="field-icon" />
                <input id="confirm-password" type="password" placeholder="Enter your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              </div>
            </div>
          )}

          {!isSignup && <button type="button" className="forgot-password" onClick={() => setError('Forgot password flow not implemented yet')}>Forgot Password?</button>}
          {error && <p className="errorMessage">{error}</p>}
          <button type="submit" className="sign-in-button">{isSignup ? 'SignUp' : 'Let Me In'}</button>

          <p className="signupLine">
            {isSignup ? 'I have account ' : "Don't have an account? "}
            <button type="button" className="linkButton" onClick={() => switchForm(!isSignup)}>{isSignup ? 'SignIn' : 'Sign Up'}</button>
          </p>
        </form>

        <footer className="container_footer">Copyright � 2026 Weather App. All rights reserved.</footer>
      </section>
    </main>
  )
}