import React from 'react';
import './fiture.css'
import { useEffect, useState } from 'react';
import Axios from 'axios'

const Fiture = () => {

    const [data, setdata] = useState([])
    useEffect(() => {
        Axios("http://myjson.dit.upm.es/api/bins/csvf")
            .then((ress) => {
                console.log(ress.data);
                setdata(ress.data)
            })
            .catch((err) => {
                console.log("error keldi =>", err);
            })
    }, []);

    return (
        <div >
          
          <div className='container'>
                <h3 className='ms-5 mt-5 font_size text-center'>Qilingan Ishlari</h3>
                <div className='row mt-2'>
                    {
                        data.map((item, index) => {
                            return (
                                <>
                                <div className='card shadow mt-5'>
                                <div className='row'>
                                    
                                    {(index % 2 == 0) ?
                                            < >
                                                    <div className='col-3 mt-3'>
                                                        <a href={item.ip_adress}>
                                                        <img className='w-100 height' src={item.img_src} alt="" />
                                                        </a>
                                                    </div>
                                                    <div className='col-9'>
                                                        <h3 className='text-center'>{item.name}</h3>
                                                        <p className='mt-5 ms-5 '>{item.title}</p>
                                                        <a href={item.ip_adress}>
                                                           <button className='btn btn-primary button  mt-4 shadow'>Korish</button>
                                                        </a>
                                                    </div>
                                              
                                            </>
    
                                            :
                                            <>
                                                <div className='col-9'>
                                                    <h3 className='text-center'>{item.name}</h3>
                                                    <p className='mt-5 ms-5 '>{item.title}</p>
                                                    <a href={item.ip_adress}>
                                                           <button className='btn btn-primary button mt-4 shadow'>Korish</button>
                                                     </a>
                                                </div>
                                                <div className='col-3'>
                                                    <a href={item.ip_adress}>
                                                    <img className='w-100 height' src={item.img_src} alt="" />
                                                    </a>
                                                </div>
                                            </>
                                        }
                                    </div>
                                </div>
                                </>

                            )
                        })
                    }
                </div>
            </div>

        </div>
    );
}

export default Fiture;
