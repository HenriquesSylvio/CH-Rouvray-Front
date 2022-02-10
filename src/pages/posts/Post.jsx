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
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import AddPostButton from "../../components/AddPostButton";
import Pagination from '@mui/material/Pagination';
import Card from '@mui/material/Card'
import { CardActionArea } from '@mui/material';
import {useHistory} from "react-router-dom";

class Post extends Component {

    constructor(props) {
        super(props)

        this.state = {
            post:[]
        }
    }

    async componentDidMount() {
        // axios.get('http://127.0.0.1:8000/api/posts?page=' + 1)
        //     .then(response => {
        //         console.log(response)
        //         this.setState({posts: response.data['hydra:member']})
        //         // pageNumberMax = Math.ceil(response.data['hydra:totalItems']/10)
        //         this.setState({pageNumberMax: Math.ceil(response.data['hydra:totalItems']/10)})
        //         console.log(Math.ceil(response.data['hydra:totalItems']/10))
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
        await this.getPostData();
    }

    async getPostData() {
        // const url = "http://127.0.0.1:8000/api/post/" & 1
        await axios.get("http://127.0.0.1:8000/api/posts/12")
            .then(response => {
                console.log(response)
                this.setState({post: response.data['hydra:member']})
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { post } = this.state
        // const history = useHistory()
        return(
            <div className="component-wrapper">
                <div className="title-page mb-5">
                    <h1 className="text-center text-white">Post name</h1>
                </div>
            </div>
        )
    }
}

export default Post

