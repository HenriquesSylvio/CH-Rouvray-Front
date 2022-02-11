import React, { Component } from 'react'
import axios from 'axios'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import AddPostButton from "../../components/AddPostButton";
import Pagination from '@mui/material/Pagination';
import Card from '@mui/material/Card'
import { CardActionArea } from '@mui/material';
import {useHistory} from "react-router-dom";

class Posts extends Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            pageNumberMax: 1,
            current_page: 1,
            history: useHistory
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
        await this.getPostsData();
    }

    async getPostsData(pageNumber = 1) {
        console.log(pageNumber)
        const url = `http://127.0.0.1:8000/api/posts?page=${pageNumber}`
        await axios.get(url)
            .then(response => {
                console.log(response.data['hydra:member'][0].author.firstName)
                this.setState({posts: response.data['hydra:member']})
                // pageNumberMax = Math.ceil(response.data['hydra:totalItems']/10)
                this.setState({pageNumberMax: Math.ceil(response.data['hydra:totalItems']/10)})
                // console.log(Math.ceil(response.data['hydra:totalItems']/10))
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { posts, pageNumberMax,  current_page, history} = this.state
        // const history = useHistory()
        return(
            <div className="component-wrapper">
                <div className="title-page mb-5">
                    <h1 className="text-center text-white">Listes des posts</h1>
                </div>
                    <div className="container">
                {
                    posts.length ?
                        posts.map(post =>
                            <div className="result" key={post.id}>
                                <div className="border-primary mb-2">
                                    <div className="result__title">
                                        {/*<Card onClick={history.replace("/post/" + post.id)}   href={"#/post/" + post.id}>*/}
                                        {/*    <CardActionArea>*/}
                                        {/*            <h1>*/}
                                        {/*                {post.name}*/}
                                        {/*            </h1>*/}
                                        {/*            <div className="card-body">*/}
                                        {/*                <p className="card-text">Par : {post.author.firstName} {post.author.lastName} le {Date(post.createdAt)} </p>*/}
                                        {/*            </div>*/}
                                        {/*        </CardActionArea>*/}
                                        {/*</Card>*/}



                                        <a href={"#/post/" + post.id}>
                                            {post.name}
                                        </a>



                                    </div>


                                    <div className="card-body">
                                        <p className="card-text">Par : {post.author.firstName} {post.author.lastName} le {Date(post.createdAt)} </p>
                                    </div>



                                </div>
                            </div>
                            // <div key={post.id}>{post.name}</div>
                        ) :
                        null
                }
                        <AddPostButton/>
                        <Pagination className="muiToolbar-middle mt-3" count={pageNumberMax} color="primary" hidePrevButton hideNextButton onChange={(pageNumber) => this.getPostsData(pageNumber.target.innerText)} />
                    </div>
            </div>
        )
    }
}

export default Posts
