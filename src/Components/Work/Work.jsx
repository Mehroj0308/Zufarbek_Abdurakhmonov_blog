import React from 'react';
import './work.css'
import { useEffect ,useState } from 'react';
import Axios from 'axios'

const Work = () => {

    const[data,setdata]=useState([])
    useEffect(() => {
        Axios("http://myjson.dit.upm.es/api/bins/csvf")
        .then((ress)=>{
            console.log("Workdan keldi",ress.data);
            setdata(ress.data)
        })
        .catch((err)=>{
            console.log("error keldi =>",err);
        })
    }, []);

    return (
        <div>
            <div className='container'>
                <h3 className='ms-5 mt-5 font_size text-center'>Qilingan Ishlari</h3>
                <div className='row mt-2'>
                {
                    data.map(item => {
                        return (
                            <div className='card box_shodow mt-5'>
                                <div className='row  '>
                                    <div className='col-3'>
                                        <img className='w-100 height' src={item.img_src} alt="" />
                                    </div>
                                    <div className='col-9 '>
                                        <h3 className='text-center ms-5 mt-3 text-center'>{item.name}</h3>
                                        <p className='mt-5 ms-5 '>{item.title}</p>
                                        <div className='display text-center'>
                                         <a href={item.ip_adress} className="text-center">
                                           <button className='btn btn-primary ms-5 mt-3 button '> Korish</button>
                                         </a>
                                        </div>
                                    </div>
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

export default Work;
