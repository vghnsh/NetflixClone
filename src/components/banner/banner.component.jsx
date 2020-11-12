import axios from '../../axios';
import React from 'react';
import {useEffect, useState} from 'react';
import Requests from '../../Requests';
import './banner.style.css';
import Button from '@material-ui/core/Button';

function Banner() {
const[banner,setBanner]= useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request= await axios.get(Requests.fetchNetflixOriginals);
            setBanner(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]);  
            return request;
                 
        }
        fetchData();

    },[]);
    console.log(banner);
            
    return (
        <header className="banner_post"

        style={
            {
                backgroundSize:"cover",
                backgroundImage:`url("https://image.tmdb.org/t/p/original/${banner?.backdrop_path}")`,
                backgroundPosition:"center center",
            }
        }
        >

        <div className="banner_det">
            <h2 className="ban_title">
                {banner?.name || banner?.title || banner?.original_name}    
            </h2> 
            <div className="btn">
            <Button variant="contained" color="primary"> Play </Button>
            </div>
            
        </div>    
        <div className="fade_bot"/>       
        </header>
    )
}

export default Banner;
