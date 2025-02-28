import React, { Component } from 'react';
import "./Navbar.css";
import fblogo from "../../images/logo.png";
import home from "../../images/home.svg"
import page from "../../images/pages.svg"
import watch from "../../images/watch.svg"
import market from "../../images/market.svg"
import group from "../../images/groups.svg"
import upload from "../../images/upload.png"
import messenger from "../../images/messengerkids.png"
import notification from "../../images/notification.svg"

import Grid from '@mui/material/Grid';
import { Avatar } from '@mui/material';
// or
class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
               <Grid  container className='navbar_main'>
                <Grid item xs={3}>
                    <div className='navbar_left'>
                        <img className='navbar_image' src={fblogo} width="35px"/>
                        <input className='navbar_search' type="text" placeholder='Search Facebook'/>
                    </div>
                </Grid>
                <Grid item xs={6} className="navbar_2">
                    <div  className="navbar_tabs active">
                        <img src={home} height="35px" width="35px"/>
                    </div>
                    <div className="navbar_tabs">
                        <img src={page} height="35px" width="35px"/>
                    </div>
                    <div className="navbar_tabs">
                        <img src={watch} height="35px" width="35px"/>
                    </div>
                    <div className="navbar_tabs">
                        <img src={market} height="35px" width="35px"/>
                    </div>
                    <div className="navbar_tabs">
                        <img src={group} height="35px" width="35px"/>
                    </div>
                </Grid>
                <Grid item xs={3}>

                 <div className='navbar_right'>
                    <div className="navbar_righttab ">

                    
                    <Avatar className="navbar_rightimg" src="https://scontent.fbho4-3.fna.fbcdn.net/v/t1.6435-1/120015140_319554869348445_1586273488652125233_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=XG4umKxzgn4AX_pRXup&_nc_ht=scontent.fbho4-3.fna&oh=00_AT_nlujeqKxdRSO9URPvmJtILz3Oa1hKoUhgw_wnlfSf-Q&oe=62FD4FC2"/>
                    <div className='navbar_profilename'>Sagar</div>
                    <div className="navbar_rtabs">
                        <img src={upload} height="35px" width="35px"/>
                    </div>
                    <div className="navbar_rtabs">
                        <img src={messenger} height="35px" width="35px"/>
                    </div>
                    </div>
                </div>

                </Grid>

               </Grid>
            </div>
        );
    }
}
 
export default Navbar;
