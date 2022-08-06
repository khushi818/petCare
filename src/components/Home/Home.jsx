import React, { useState } from 'react';
import { useEffect } from 'react';
import './Home.css'
const Home = () => {
    const [postLists, setPostList] = useState([]);

    useEffect(() => {
      const fetchAllBlogs = async () => {
        const response = await fetch('http://localhost:5000/api/blog/getblogs', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const jsonResponse = await response.json();
        setPostList(jsonResponse);
      }
      fetchAllBlogs();
    }, [])
    
    return (
        <article>
            {postLists.map((post) => {
                return (
                    <div key={post._id} className="post">
                        <div>
                            <div className="title">
                                <h3>{post.title}</h3>
                            </div>
                            <div className="postText">
                                {post.description}
                            </div>
                            <h4>@{post.username}</h4>
                        </div>
                    </div>
                );
            })}
        </article>
    )
}

export default Home