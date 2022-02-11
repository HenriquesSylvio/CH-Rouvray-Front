// import React from 'react';
//
// const Post = (props) => {
//     return (
//         <div className="card border-primary mb-3">
//             <h1 className="display-3">Post name</h1>
//             <p className="lead">Créé à : .... | Créé par : ....</p>
//             <hr className="my-1"/>
//             <p>Post Content </p>
//         </div>
//     );
// };
//
// export  default Post;

import React, { Component } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
import { connect } from 'react-redux'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import AddCommentButton from "../../components/AddCommentButton";
import Pagination from '@mui/material/Pagination';
import Card from '@mui/material/Card'
import { CardActionArea } from '@mui/material';
import {useHistory} from "react-router-dom";
import { withRouter } from "react-router";
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


class Post extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            post:[],
            postAuthor:[],
            comment: [],
            commentAuthor: [],
            pageNumberMax: 1,
            current_page: 1
        }
    }


    async componentDidMount() {
        await this.getPostData();
        await this.getCommentData()
    }

    async getPostData() {
        let id = this.props.match.params.id
        const url = `http://127.0.0.1:8000/api/posts/${id}`
        // await axios.get("http://127.0.0.1:8000/api/posts/12")
        //     .then(response => {
        //         console.log(response)
        //         this.setState({post: response.data['hydra:member']})
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
        await axios.get(url)
            .then(response => {
                console.log(response)
                this.setState({post: response.data})
                this.setState({postAuthor: response.data.author})
                console.log()
            })
            .catch(error => {
                console.log(error)
            })
    }

    async getCommentData(pageNumber = 1) {
        let id = this.props.match.params.id
        const url = `http://127.0.0.1:8000/api/comments?page=${pageNumber}&belongTo=${id}`
        // await axios.get("http://127.0.0.1:8000/api/posts/12")
        //     .then(response => {
        //         console.log(response)
        //         this.setState({post: response.data['hydra:member']})
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
        await axios.get(url)
            .then(response => {
                console.log(response)
                this.setState({comment: response.data['hydra:member']})
                this.setState({pageNumberMax: Math.ceil(response.data['hydra:totalItems']/10)})
                console.log(response.data['hydra:member'])
            })
            .catch(error => {
                console.log(error)
            })
    }
    formatJsonDate(jsonDate) {
        return (new Date(parseInt(jsonDate.substr(6)))).format("dd/mm/yyyy");
    };

    render() {
        const { post, postAuthor, comment, commentAuthor, pageNumberMax} = this.state
        // const history = useHistory()


        return(
            <div className="component-wrapper">
                <div className="title-page mb-5">
                    <h1 className="text-center text-white">{post.name}</h1>
                    <h5 className="text-center">
                        <a href="" className="text-white">
                            {"Par " + postAuthor.firstName + " " + postAuthor.lastName}
                        </a>
                    </h5>
                </div>
                <div className="container">
                    <div className="result" key={post.id}>
                        <div className="border-primary mb-2">
                            <div className="card-body">
                                <h3  className="card-text">{post.content}</h3>
                            </div>
                        </div>
                    </div>
                    <h1 className="mt-5">Derniers commentaires : </h1>
                    <div>
                        {
                            comment.length ?
                                comment.map(comment =>
                                        <div className="result">
                                            <div className="border-primary mb-2">
                                                <div className="result__title">
                                                    <IconButton>
                                                        <Avatar style={{ marginRight: "14px" }} />
                                                        <Typography >{comment.author.firstName} {comment.author.lastName}</Typography>
                                                    </IconButton>
                                                    <h3 className="mt-4">
                                                        {comment.content}
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                ) :
                                null
                        }
                    </div>
                </div>
                <AddCommentButton idPost={this.props.match.params.id}/>
                <Pagination className="muiToolbar-middle mt-3" count={pageNumberMax} color="primary" hidePrevButton hideNextButton onChange={(pageNumber) => this.getCommentData(pageNumber.target.innerText)} />

            </div>
        )
    }
}

export default withRouter(Post)

