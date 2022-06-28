import React from 'react';
import './fiture.css'
import { useEffect, useState } from 'react';
import Axios from 'axios'

const Fiture = () => {

    const [data, setdata] = useState([])
    useEffect(() => {
        Axios("http://myjson.dit.upm.es/api/bins/6aaz")
            .then((ress) => {
                console.log(ress.data);
                setdata(ress.data)
            })
            .catch((err) => {
                console.log("error keldi =>", err);
            })
    }, []);

    return (
        <div className='container'>
            <div className='row mt-5'>
                {
                    data.map(item => {
                        return (
                            <div className='card box_shodow mt-5'>
                                <div className='row  '>
                                    <div className='col-3'>
                                        <img className='w-100 height' src={item.img_src} alt="" />
                                    </div>
                                    <div className='col-9'>
                                        <h3 className='text-center'>{item.name}</h3>
                                        <p className='mt-5 ms-5 '>{item.title}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>



        </div>
    );
}

export default Fiture;
