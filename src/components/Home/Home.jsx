import React, { useState } from 'react';
import NavHome from '../Nav_home/NavHome';
import { useEffect } from 'react';
import { FcFullTrash } from 'react-icons/fc'
import './Home.css'
const Home = () => {
    const [islogin, SetIsLogin] = useState(true);
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
        // <section>
        // <article>
        //     {postLists.map((post) => {
        //         return (
        //             <div key={post._id} className="post container">                 
        //                 <div>
        //                     <div className="title">
        //                         <h3>{post.title}</h3>
        //                          <a href="#">{<FcFullTrash />}</a>
        //                     </div>
        //                     <div className="postText">
        //                         {post.description}
        //                     </div>
        //                     <h4 className = "userName">@{post.username}</h4>
        //                 </div>
        //             </div>
        //         );
        //     })}
        //</article>
        //</section>

        <>
            <NavHome islogin={islogin} />
            <article>
                <div className="post container">
                    <div>
                        <div className="title">
                            <h3>Title</h3>
                            <a href="#">{<FcFullTrash />}</a>
                        </div>
                        <div className="postText">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Fuga aspernatur rerum voluptates nam, excepturi numquam dolore cupiditate nesciunt, officiis unde iure neque doloribus amet natus cum maiores atque hic harum ab!
                            Dignissimos, tempora libero qui consequuntur magnam molestiae quod ut!
                        </div>
                        <h4 className='username'>@joy</h4>
                    </div>
                </div>


                <div className="post container">
                    <div>
                        <div className="title">
                            <h3>Title2</h3>
                            <a href="#">{<FcFullTrash />}</a>
                        </div>
                        <div className="postText">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Fuga aspernatur rerum voluptates nam, excepturi numquam dolore cupiditate nesciunt, officiis unde iure neque doloribus amet natus cum maiores atque hic harum ab!
                            Dignissimos, tempora libero qui consequuntur magnam molestiae quod ut!
                        </div>
                        <h4 className="username">@joy</h4>
                    </div>
                </div>
            </article>
        </>
    )
}

export default Home