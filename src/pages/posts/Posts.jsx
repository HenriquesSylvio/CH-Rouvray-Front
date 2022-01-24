// import React from 'react';
//
// const Posts = (props) => {
//     return (
//         <div className="card-container mt-2">
//             <div className="card border-primary mb-2">
//                 <div className="card-header">Post name</div>
//                 <div className="card-body">
//                     <p className="card-text">Post Content</p>
//                 </div>
//             </div>
//             <div className="card border-primary mb-2">
//                 <div className="card-header">Post name</div>
//                 <div className="card-body">
//                     <p className="card-text">Post Content</p>
//                 </div>
//             </div>
//             <div className="card border-primary mb-2">
//                 <div className="card-header">Post name</div>
//                 <div className="card-body">
//                     <p className="card-text">Post Content</p>
//                 </div>
//             </div>
//             <div className="card border-primary mb-2">
//                 <div className="card-header">Post name</div>
//                 <div className="card-body">
//                     <p className="card-text">Post Content</p>
//                 </div>
//             </div>
//             <div className="card border-primary mb-2">
//                 <div className="card-header">Post name</div>
//                 <div className="card-body">
//                     <p className="card-text">Post Content</p>
//                 </div>
//             </div>
//             <div className="card border-primary mb-2">
//                 <div className="card-header">Post name</div>
//                 <div className="card-body">
//                     <p className="card-text">Post Content</p>
//                 </div>
//             </div>
//             <div className="card border-primary mb-2">
//                 <div className="card-header">Post name</div>
//                 <div className="card-body">
//                     <p className="card-text">Post Content</p>
//                 </div>
//             </div>
//             <div className="card border-primary mb-2">
//                 <div className="card-header">Post name</div>
//                 <div className="card-body">
//                     <p className="card-text">Post Content</p>
//                 </div>
//             </div>
//             <div className="card border-primary mb-2">
//                 <div className="card-header">Post name</div>
//                 <div className="card-body">
//                     <p className="card-text">Post Content</p>
//                 </div>
//             </div>
//             <div className="card border-primary mb-2">
//                 <div className="card-header">Post name</div>
//                 <div className="card-body">
//                     <p className="card-text">Post Content</p>
//                 </div>
//             </div>
//             <div className="card border-primary mb-2">
//                 <div className="card-header">Post name</div>
//                 <div className="card-body">
//                     <p className="card-text">Post Content</p>
//                 </div>
//             </div>
//             <div className="card border-primary mb-2">
//                 <div className="card-header">Post name</div>
//                 <div className="card-body">
//                     <p className="card-text">Post Content</p>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export  default Posts;

import React, { Component } from 'react'
import axios from 'axios'

class Posts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/posts')
            .then(response => {
                console.log(response.data['hydra:member'])
                this.setState({posts: response.data['hydra:member']})
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { posts } = this.state
        return(
            <div>
                <h1>Listes des posts</h1>
                {
                    posts.length ?
                        posts.map(post =>
                            <div className="card-container mt-2" key={post.id}>
                                <div className="card border-primary mb-2">
                                    <div className="card-header">{post.name}</div>
                                    <div className="card-body">
                                        <p className="card-text">{post.content}</p>
                                    </div>
                                </div>
                            </div>
                            // <div key={post.id}>{post.name}</div>
                        ) :
                        null
                }
            </div>
        )
    }
}

export default Posts
