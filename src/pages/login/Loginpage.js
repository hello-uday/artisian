import React,{useState} from 'react'
import './Loginpage.css'

const Loginpage = () => {

  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  return (
    <div className='body'>
      <h2>
        Artisian Welcomes You All
      </h2>
    <div className={`main-container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="main-container">
      <div className="form-main-container sign-up-main-container">
        <form>
          <h1>Create Account</h1>
          <div className="public-main-container">
          </div>
          <span>use your own email</span>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div className="form-main-container sign-in-main-container">
        <form>
          <h1>Sign in</h1>
          <div className="public-main-container">
          </div>
          <span>use your own credentials</span>
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className="layerup-main-container">
        <div className="layerup">
          <div className="layerup-panel layerup-left">
            <h1>Welcome Back!</h1>
            <p>
              For Sign In click here
            </p>
            <button className="ghost" onClick={handleSignInClick}>Sign In</button>
          </div>
          <div className="layerup-panel layerup-right">
            <h1>Hello, User</h1>
            <p>For Sign Up click here </p>
            <button className="ghost" onClick={handleSignUpClick}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Loginpage
 