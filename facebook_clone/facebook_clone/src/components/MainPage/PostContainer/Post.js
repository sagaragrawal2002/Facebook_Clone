import React, { Component } from 'react';
import "./PostContainer.css";
import { Avatar, Paper } from '@mui/material';
import post from "../../../images/post.jpeg"
import like from "../../../images/like.png"
import likebutton from "../../../images/likebutton.png"
import commentbutton from "../../../images/comment.png"
import sharebutton from "../../../images/share.png" 

class Post extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }

    isImageAvailable=(data)=>{

        return data==""?false:true;
    }
    render() { 
        return ( 
            <div>
              <Paper className='post_container'>    
                {/*  Header */}
                <div className='post_header'>
                    <div>
                        
                        <Avatar className='post_header_img' src="https://scontent.fbho4-3.fna.fbcdn.net/v/t1.6435-1/120015140_319554869348445_1586273488652125233_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=XG4umKxzgn4AX_pRXup&_nc_ht=scontent.fbho4-3.fna&oh=00_AT_nlujeqKxdRSO9URPvmJtILz3Oa1hKoUhgw_wnlfSf-Q&oe=62FD4FC2"/>
                    </div>
                    <div className='post_header_text'>
                        {this.props.object.username}
                    </div>

                </div >
                {/*  Description */}
                
                <div className="post_description">
                {this.props.object.description}
                </div>
                {/*  Image */}
                <div className='post_image'>
                    {
                       // <img src= "https://scontent.fbho4-3.fna.fbcdn.net/v/t1.6435-1/120015140_319554869348445_1586273488652125233_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=XG4umKxzgn4AX_pRXup&_nc_ht=scontent.fbho4-3.fna&oh=00_AT_nlujeqKxdRSO9URPvmJtILz3Oa1hKoUhgw_wnlfSf-Q&oe=62FD4FC2" />
                        this.isImageAvailable(this.props.object.postimageurl)?<img src= {this.props.object.postimageurl} width="600px"/>:<span></span>
                    }
                    

                </div>
            
                {/*  Like Count */}
                <div className='post_likecount_container'>
                <div className='post_like'>
                    <img src={like} className="post_img"/>
                </div>
                <div className='post_likecount'>
                {this.props.object.likes}
                </div>
                </div>

                {/*  Like share box */}
                <div className='post_likeshare'>
                <div className='post_tab'>
                    <div className='post_tabfirst'>
                        <img src={likebutton} className="post_tabimg"/>
                    </div>
                    <div className='post_tabtext'>
                        Like
                    </div>
                </div>

                <div className='post_tab'>
                    <div className='post_tabfirst'>
                        <img src={commentbutton} className="post_tabimg"/>
                    </div>
                    <div className='post_tabtext'>
                        Comment
                    </div>
                </div>

                <div className='post_tab'>
                    <div className='post_tabfirst'>
                        <img src={sharebutton} className="post_tabimg"/>
                    </div>
                    <div className='post_tabtext'>
                        share
                    </div>
                </div>
                </div>

                {/*  Comment box */}
                <div>
                <div className='upload_top'>
                <div >
                    <Avatar clasName="upload_image" src="https://scontent.fbho4-3.fna.fbcdn.net/v/t1.6435-1/120015140_319554869348445_1586273488652125233_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=XG4umKxzgn4AX_pRXup&_nc_ht=scontent.fbho4-3.fna&oh=00_AT_nlujeqKxdRSO9URPvmJtILz3Oa1hKoUhgw_wnlfSf-Q&oe=62FD4FC2"/>
                </div>
                <div >
                    <input type="text"  className='upload_text' placeholder='comment how you feel'/>
                </div>
               </div>
               
                </div>
              </Paper>
            </div>
        );
    }
}
 
export default Post;