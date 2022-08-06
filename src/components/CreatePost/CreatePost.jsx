import React, { useState } from 'react'
import './CreatePost.css'
const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");
    return (
        <main>
            <div className='container post'>
                <h3>Create a Post</h3>
                <div className="input_value">
                    <label>Title:</label>
                    <input
                        placeholder='Title...'
                        onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="input_value">
                    <label>Post:</label>
                    <textarea
                        placeholder='Post...'
                        onChange={e => setPostText(e.target.value)}
                    />
                </div>
                <button>Post</button>
            </div>
        </main>
    )
}

export default CreatePost