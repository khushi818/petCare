import react, { useState } from 'react'
import './SignUp.css'

function SignUp() {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    return (
        <main>
            <div className="SignUp container">
                <h3>Login here 👇</h3>
                <form>
                    <div>
                        <label>Email</label>
                        <input type="Email" onChange={e => setPassword(e.target.value)} />
                    </div>
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

export default SignUp