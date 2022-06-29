import React from 'react';
import './recant.css'
import { useEffect ,useState } from 'react';
import Axios from 'axios'
const ReacentWork = () => {
    const[data,setdata]=useState([])
    useEffect(() => {
        Axios("http://myjson.dit.upm.es/api/bins/csvf")
        .then((ress)=>{
            console.log(ress.data);
            setdata(ress.data)
        })
        .catch((err)=>{
            console.log("error keldi =>",err);
        })
    }, []);
    return (
        <div className='orqa_fon'>
            <div className='container '>
                <div className='row mt-5 margin'>
                    <div className='col-3'>
                        <div className='card box_shodow'>
                            <h3 className='mt-4'>Qilingan prayektla4</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid aperiam earum quaerat consequatur cumque labore saepe dolore libero fugiat officiis eveniet, voluptate distinctio dicta explicabo! Ad quod pariatur laboriosam laborum.</p>
                        </div>
                    </div>
                    <div className='col-3 '>
                        <div className='card box_shodow'>
                            <h3 className='mt-4'>Qilingan prayektla4</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid aperiam earum quaerat consequatur cumque labore saepe dolore libero fugiat officiis eveniet, voluptate distinctio dicta explicabo! Ad quod pariatur laboriosam laborum.</p>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='card box_shodow'>
                            <h3 className='mt-4'>Qilingan prayektla4</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid aperiam earum quaerat consequatur cumque labore saepe dolore libero fugiat officiis eveniet, voluptate distinctio dicta explicabo! Ad quod pariatur laboriosam laborum.</p>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='card box_shodow'>
                            <h3 className='mt-4'>Qilingan prayektla4</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid aperiam earum quaerat consequatur cumque labore saepe dolore libero fugiat officiis eveniet, voluptate distinctio dicta explicabo! Ad quod pariatur laboriosam laborum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReacentWork;
