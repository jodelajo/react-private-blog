import React from 'react';
import postData from '../data/posts.json';
import {

    useParams
} from 'react-router-dom';


function Blog () {  
    const { slug } = useParams();
    const singlePost = postData[`${slug-1}`];


   return (
       <div className="main">
        <h3>{singlePost.title}</h3>
            <span className="nummer">{singlePost.id}</span>
           <span>{singlePost.date}</span>
           <p>{singlePost.content}</p>
       </div>
   );
};

export default Blog;