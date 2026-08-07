import './Authentication.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Authentication() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    setError('')

    if (!username.trim() || !password.trim()) {
      setError('Please enter both username and password.')
      return
    }

    navigate('/')
  }

  return (
    <main id="auth">
      <section className="container" aria-label="Login form">
        <div className="container_header">
          <h1 className="header-label1">Login</h1>
          <img src="/Logo2.jpeg" className="logo2" alt="Live Weather Monitoring System" />
        </div>

        <form className="container_content" onSubmit={handleSubmit}>
          <div className="field-row">
            <label htmlFor="username" className="field-label">
              User Name<span className="required">*</span>
            </label>
            <div className="field">
              <img src="/user.png" alt="User icon" className="field-icon user-icon" />
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div className="field-row">
            <label htmlFor="password" className="field-label">
              Password<span className="required">*</span>
            </label>
            <div className="field">
              <img src="/lock.png" alt="Password icon" className="field-icon lock-icon" />
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="action-row">
            <button type="button" className="forgot-password" onClick={() => setError('Forgot password flow not implemented yet')}>
              Forgot Password?
            </button>
          </div>

          {error && <p className="errorMessage">{error}</p>}

          <button type="submit" className="sign-in-button">
            Let Me In
          </button>

          <p className="signupLine">
            Don't have an account?{' '}
            <button type="button" className="linkButton" onClick={() => navigate('/')}>Sign Up</button>
          </p>
        </form>

        <footer className="container_footer">Copyright © 2026 Weather App. All rights reserved.</footer>
      </section>
    </main>
  )
}
