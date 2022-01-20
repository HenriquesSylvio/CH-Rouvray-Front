import React from 'react';

const Post = (props) => {
    return (
        <div className="card border-primary mb-3">
            <h1 className="display-3">Post name</h1>
            <p className="lead">Créé à : .... | Créé par : ....</p>
            <hr className="my-1"/>
            <p>Post Content </p>
        </div>
    );
};

export  default Post;
