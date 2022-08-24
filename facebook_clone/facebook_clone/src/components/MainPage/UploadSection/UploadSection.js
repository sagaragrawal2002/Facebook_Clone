import { Avatar, Paper } from '@mui/material';
import React, { Component } from 'react';

import "./UploadSection.css";

import live from "../../../images/video.png";
import image from "../../../images/image.png";
import feeling from "../../../images/feelings.png";
import Dialog from '@mui/material/Dialog';
import axios from "axios"

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


class UploadSection extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    open: false,
    uploadImage: null
  }

  handleClose = () => {
    this.setState({ open: false })
  }
  openDialog = (event) => {
    this.setState({ open: true });
    this.setState({ uploadImage: URL.createObjectURL(event.target.files[0]) });

    this.setState({ image: event.target.files[0] });
  }

  uploadToFirebase = (event) => {
    const thiscontext = this;
    const storage = getStorage();
    const storageRef = ref(storage, 'images/' + this.state.image.name);
    const uploadTask = uploadBytesResumable(storageRef, this.state.image);
    uploadTask.on('state_changed',
      (snapshot) => {



      },
      (error) => {
        alert(error);
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          var today = new Date();

          // get the date and time
          var now = today.toLocaleString()
          const user = JSON.parse(localStorage.getItem('user'));
          const post = {
            // "userId":localStorage.getItem("userId"),
            // "username":localStorage.getItem("username"),
            // "description":thiscontext.state.description,
            // "postimageurl":downloadURL,
            //JSON.parse(localStorage.getItem('user'))


            "userId": user.userId,
            "username": user.userName,
            "imageurl": "dummy url",
            "description": thiscontext.state.description,
            "postimageurl": downloadURL,
            "timestamp": Date.now()

          }
          const requestoption = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(post),

          }
          //   fetch("http://localhost:9092/api/postService/save",requestoption)
          //   .then(responce=>responce.json())
          //   .then(data=>{
          //     console.log(data);
          //   })
          //   .catch(err=>{
          //     console.log(err);
          //   })
          axios.post(`http://localhost:9092/api/postService/save`, post)
            .then(res => {
              console.log(res);
              //   console.log(res.data);
              // localStorage.set();
              thiscontext.setState({ open: false })
              thiscontext.props.update();

              //alert(`name is :${User.userName} ${user.email}`)
            }).catch(error => {
              console.log(error);
            });

          // ...
        })




      });
  };
  render() {
    return (
      <div>

        <Dialog onClose={this.handleClose} className="upload_dialogbox" open={this.state.open}>
          <div className='upload_header' >Create Post</div>
          <input type="text" onChange={(event) => { this.state.description = event.currentTarget.value }} className='upload_textbox' placeholder='Whats on your mind' />
          <img src={this.state.uploadImage} className="upload_preview" />
          <input type="button" value="post" onClick={this.uploadToFirebase} className='upload_button' />
        </Dialog>
        <Paper className="upload_container">

          <div className='upload_top'>
            <div >
              <Avatar className="upload_image" src="https://scontent.fbho4-3.fna.fbcdn.net/v/t1.6435-1/120015140_319554869348445_1586273488652125233_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=XG4umKxzgn4AX_pRXup&_nc_ht=scontent.fbho4-3.fna&oh=00_AT_nlujeqKxdRSO9URPvmJtILz3Oa1hKoUhgw_wnlfSf-Q&oe=62FD4FC2" />
            </div>
            <div >
              <input type="text" className='upload_text' placeholder='whats on your mind?' />
            </div>
          </div>

          <div className="upload_bottom">
            <div className='upload_tabs'>
              <img src={live} width="20px" />
              <div className='upload_texts'>Live Video</div>
            </div>
            <div className='upload_tabs'>
              <label for="fire-upload" className='upload_tabs'>
                <img src={image} width="20px" />
                <div className='upload_texts'>Photo/Video</div>
              </label>
              <input type="file" id="file-upload" onChange={this.openDialog} />
            </div>

            <div className='upload_tabs'>
              <img src={feeling} width="20px" />
              <div className='upload_texts'> Feeling/Activities</div>
            </div>

          </div>

        </Paper>
      </div>
    );
  }
}

export default UploadSection;