import './index.scss'
import loginLeft from 'assets/images/login_left.png'
import logo from 'assets/images/logo.png'
import LoginForm from './components/LoginForm'
const Login = () => {
    return (
        <div className="login-container">
            <div className='login-box'>
                <div className='login-left'>
                    <img src={loginLeft} alt="" />
                </div>
                <div className='login-form'>
                    <div className="login-logo">
                        <img className="login-icon" src={logo} alt="logo" />
                        <span className="logo-text">Hooks-Admin</span>
                    </div>
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}

export default Login;