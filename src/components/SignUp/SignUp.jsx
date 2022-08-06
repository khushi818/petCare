import react, { useState } from 'react'
import { AiOutlineGooglePlus, AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai'
import './SignUp.css'

function SignUp() {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    return (
        <main>
            <div className="SignUp container">
                <h3>SignUp here 👇</h3>
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
                <div className='links'>
                    <a href="#">{<AiOutlineGooglePlus />}</a>
                    <a href="#">{<AiOutlineGithub />}</a>
                    <a href="#">{<AiOutlineTwitter />}</a>
                </div>
            </div>
        </main>
    )
}

export default SignUp