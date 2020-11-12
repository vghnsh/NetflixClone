import React from 'react';
import {useEffect, useState} from 'react';
import axios from '../../axios';
import './row.style.css';
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer";

const baseURL="https://image.tmdb.org/t/p/original/";





function Row({title, fetchUrl, isLargeRow}) {
   

    const [movie,Setmovie]= useState([]); 
    const [trailer,setTrailer]= useState("");

    useEffect(()=>{
        async function fdata(){
            const request =await axios.get(fetchUrl);
            Setmovie(request.data.results)
            console.log(request); 
            return request;
        }
        fdata();
      },[fetchUrl]);


      const opts={
          height:"230",
          width:"410",
          playerVars:{
              autoplay:1,
          },
      };

      const handleClick = (movie) => {
        if(trailer){
            setTrailer("");
        }else{
            movieTrailer(movie?.name || "")
            .then((url) => {
            const urlParam = new URLSearchParams (new URL(url).search);
            setTrailer(urlParam.get("v"));
            })
            .catch((error)=>console.log(error));
        }
    };

    return (

        <div className="row">
            <h4>{title}</h4>
            <div className={`poster_row  ${!isLargeRow && "backdrop"} `}>
            {
                movie.map((movie)=>(

                    <img
                    
                    key={movie.id}
                    onClick={()=>handleClick(movie)}
                    src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name}></img>
                ))

            }
            
            </div>
            { trailer && <YouTube videoId={trailer}  opts={opts}  ></YouTube>}
            </div>
    );
};

export default Row;
