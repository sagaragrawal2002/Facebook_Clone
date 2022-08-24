import React, { Component } from 'react';
import ImageLayout from '../ImageLayout';
import "./LeftSide.css";
import covid from "../../../images/covid.png";
import groups from "../../../images/groups.png";
import memories from "../../../images/memories.png";
import messengerkids from "../../../images/messengerkids.png";
import business from "../../../images/business.png";
import admanager from "../../../images/admanager.png";
import blood from "../../../images/blood.png";


class LeftSide extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:[]
        }
    }
    getData=()=>{
        let jsondata=[
            {
                "image":covid,
                "text":"Covid 19 information centre"
            },
            {
                "image":groups,
                "text":"Friends" 
            },
            {
                "image":memories,
                "text":"memories" 
            },
            ,
            {
                "image":messengerkids,
                "text":"messengerkids" 
            }
            ,
            {
                "image":business,
                "text":"Business" 
            }
            ,
            {
                "image":admanager,
                "text":"admanager" 
            }
            ,
            {
                "image":blood,
                "text":"blood" 
            }
            ,
            {
                "image":business,
                "text":"business" 
            }
            
        ];
        this.setState({data:jsondata});

    }
    componentDidMount(){
        this.getData();
    }

    render() { 
        return (
            <div>
                {
                    this.state.data.map((item)=>(
                        <ImageLayout text={item.text}  image={item.image}/>
                    ))
                }
                
                
            </div>
          );
    }
}
 
export default LeftSide;