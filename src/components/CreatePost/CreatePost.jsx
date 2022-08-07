import React, { useState } from 'react'
import './CreatePost.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavHome from '../Nav_home/NavHome';

const CreatePost = () => {
    const [islogin, SetIsLogin] = useState(true);
    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");

    const submitPost = async () => {
        const token = localStorage.getItem('auth-token');

        const response = await fetch('https://petcare-backend13.herokuapp.com/api/blog/createblog', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': token
            },
            body: JSON.stringify({ title, description: postText }),
        });
        const jsonResponse = await response.json();

        if (!jsonResponse.errors && !jsonResponse.error) {
            setPostText('');
            setTitle('');
            toast.success('Your Blog Has been successfully Posted!');
        }

        // If there are some errors
        else if (jsonResponse.errors) {
            const allErrors = jsonResponse.errors;
            // Looping through all the errors and showing them using a toast
            for (let error of allErrors) {
                toast.error(error.msg);
            }
        }

        else {
            toast.error("Internal Server Error");
        }
    }
    return (
        <>
            <NavHome islogin={islogin} />
            <section>
                <div className='container create-post'>
                    <h3>Create a Post</h3>
                    <div className="input_value">
                        <label className="title"><h3>Title:</h3></label>
                        <input
                            value={title}
                            placeholder='Title...'
                            onChange={e => setTitle(e.target.value)} />
                    </div>
                    <div className="input_value">
                        <label className="post"><h3>Post:</h3></label>
                        <textarea
                            value={postText}
                            placeholder='Post...'
                            onChange={e => setPostText(e.target.value)}
                        />
                    </div>
                    <button onClick={submitPost}>Post</button>
                </div>
            </section>
            <ToastContainer toastStyle={{ backgroundColor: "#202d40", color: 'white' }} />
        </>
    )
}

export default CreatePost