import { Paper } from '@mui/material';
import React, { Component } from 'react';
import Post from './Post';
import "./PostContainer.css";

class PostContainer extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        data:[]
     }
     getdata=()=>{//calling rest from here
    //     let json=[
    //         {
    //         "postId":1,
    //         "userId":123445,
    //         "imageurl":"url..",
    //         "username":"Aakash Kumar",
    //         "description":"loved this walpaper",
    //         "postimageurl":"",
    //         "likes":"25",
    //         "dateTime":"10:30pm"
    //     },
    //     {
    //         "postId":2,
    //         "userId":23456,
    //         "imageurl":"url..",
    //         "username":"Rishi Verma",
    //         "description":"Mtech Student",
    //         "postimageurl":"",
    //         "likes":"50",
    //         "dateTime":"10:30pm"
    //     }
    // ]
    // this.setState({data:json})


    const thiscontext=this;
    fetch("http://localhost:9092/api/postService/getPost")
    .then(responce=> responce.json())
    .then(json=>{
        this.setState({data:json});
    })
    
       
     }
     
     componentDidMount(){
        this.getdata();
     }
    render() { 
        return ( 
            <div>
                 
                {
                    this.state.data.map((item)=>(
                        <Post object={item}/>
                    ))
                    
                }
              
            </div>
        );
    }
}
 
export default PostContainer;