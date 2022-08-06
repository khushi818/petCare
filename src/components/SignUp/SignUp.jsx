import { useState, useEffect } from 'react'
import { AiOutlineGooglePlus, AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai'
import './SignUp.css'
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const submitForm = async e => {
        e.preventDefault();
        // Displaying a Loader
        setIsLoading(true);
        
        const response = await fetch('http://localhost:5000/api/auth/createuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, username, password }),
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
        // Redirecting
        navigate('/');
      }
      // eslint-disable-next-line
    }, []);
    return (
        <main>
            <div className="SignUp container">
                <h3>SignUp here 👇</h3>
                <form onSubmit={submitForm}>
                    <div>
                        <label>Email</label>
                        <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
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
                <div className='links'>
                    <a href="/">{<AiOutlineGooglePlus />}</a>
                    <a href="/">{<AiOutlineGithub />}</a>
                    <a href="/">{<AiOutlineTwitter />}</a>
                </div>
            </div>
        </main>
    )
}

export default SignUp