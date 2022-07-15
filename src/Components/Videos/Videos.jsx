import React from 'react';
import "./video.css"
import  Axios  from 'axios';
import { useEffect,useState } from 'react';
const Videos = () => {
    const[data,setdata]=useState([])
    useEffect(() => {
       Axios("http://myjson.dit.upm.es/api/bins/aw77")
       .then((ress)=>{
        console.log("Videolar keldi",ress.data);
        setdata(ress.data)
       })
       .catch((err)=>{
        console.log("Error keldi =>",err);
       })
    }, []);
    return (
        <div>
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/hP7K6HhTTXg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  /* Bu  youtubedan kelayotgan videoga misol */ }

            <div className='container text-center'>
                <b className='font_size'>Videolar</b>
                <div className='row'>
                    {
                        data.map(item=>{
                            return(
                                <div className='col-3 mt-5'>
                                   <div className='card video_card'>
                                      <iframe className='w-100 video_height'  src={item.Video_src} frameborder="0"></iframe>
                                      <b>{item.title}</b>
                                   </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            
        </div>
    );
}

export default Videos;
