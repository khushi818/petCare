import { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { AiOutlineGooglePlus, AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai'

function Login() {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    return (
        <main>
            <div className="loginPage container">
                <h3>Login here 👇</h3>
                <form>
                    <div>
                        <label>Username</label>
                        <input type="text" onChange={e => setUserName(e.target.value)} />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
                <div>
                    <p>Don't Already have a account?
                        <Link to='/signup'>
                            <span>SignUp here</span>
                        </Link>
                    </p>
                </div>
                <div className='links'>
                    <a href="#">{<AiOutlineGooglePlus />}</a>
                    <a href="#">{<AiOutlineGithub />}</a>
                    <a href="#">{<AiOutlineTwitter />}</a>
                </div>
            </div>
        </main>
    )
}

export default Login