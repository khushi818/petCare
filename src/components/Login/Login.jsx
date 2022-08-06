import { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineGooglePlus, AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai'
import { useEffect } from 'react';

function Login() {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const submitForm = async e => {
        e.preventDefault();
        // Displaying a Loader
        setIsLoading(true);

        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        const jsonResponse = await response.json();
        // Removing the Loader
        setIsLoading(false);

        if (!jsonResponse.errors && !jsonResponse.error) {
            // Storing the authtoken in the localStorage
            localStorage.setItem('auth-token', jsonResponse.authtoken);
            // Redirecting
            navigate('/');
        }
    }

    useEffect(() => {
      if (localStorage.getItem('auth-token')) {
        navigate('/');
      }
      // eslint-disable-next-line
    }, []);
    
    return (
        <main>
            <div className="loginPage container">
                <h3>Login here 👇</h3>
                <form onSubmit={submitForm}>
                    <div>
                        <label>Username</label>
                        <input type="text" name="username" value={username} onChange={e => setUserName(e.target.value)} />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <button type="submit">{!isLoading?'Submit': <span class="loader"></span>}</button>
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
                    <a href="/">{<AiOutlineGooglePlus />}</a>
                    <a href="/">{<AiOutlineGithub />}</a>
                    <a href="/">{<AiOutlineTwitter />}</a>
                </div>
            </div>
        </main>
    )
}

export default Login