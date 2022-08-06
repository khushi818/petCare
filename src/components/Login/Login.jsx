import { useState } from 'react'
import './Login.css'

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
            </div>
        </main>
    )
}

export default Login