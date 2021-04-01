import React from 'react';
import {
    NavLink,
} from 'react-router-dom';
import postData from '../data/posts.json';

function BlogPost() {

    return (
        <>
            <div className="main">
                <div className="list">
                    <h2>Blog Overzicht pagina</h2>
                    <div className="total"> Totaal aantal blogs <h2>{postData.length}</h2></div>
                    {postData.map((postDetail, index) => {
                        return <li key={postDetail.id}>
                            <NavLink to={`/blog/${postDetail.id}`}> {postDetail.title}
                            </NavLink>
                        </li>
                    })}
                </div>
            </div>
        </>
    );
};

export default BlogPost;