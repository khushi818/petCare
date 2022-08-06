import React, { useState } from 'react';
import './Home.css'
const Home = () => {
    const [postLists, setPostList] = useState([]);
    return (
        <article>
            <div className="post">
                <div>
                    <div className="title">
                        <h3>title</h3>
                    </div>
                    <div className="postText">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatem, qui quis corrupti tempore dicta vero quo odio harum quas maiores
                        laudantium quam sunt reiciendis ducimus natus, officia quos aliquid quasi pariatur
                        aspernatur accusantium? Officiis voluptates repellat aspernatur ipsum ipsa,
                        sunt aperiam dicta sit, omnis iste, sint itaque atque consectetur consequuntur.
                    </div>
                    <h4>@joy</h4>
                </div>
            </div>
        </article>
    )
}

export default Home