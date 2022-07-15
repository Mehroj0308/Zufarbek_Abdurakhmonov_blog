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
            <div className='container  mt-5'>
                <div className='row  margin'>
                       <div className='card hover  shadow text-center   col-lg-3  col-md-4 col-sm-6'>
                           <div>
                             <h3 className='mt-4'>Nima ishlar qilgani</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid aperiam earum quaerat consequatur cumque labore saepe dolore libero fugiat officiis eveniet, voluptate distinctio dicta explicabo! Ad quod pariatur laboriosam laborum.</p>
                           </div>
                        </div>
                    <div className='col-lg-3 col-md-4 col-sm-6'>
                        <div className='card hover shadow text-center'>
                            <h3 className='mt-4'>Nima ishlar qilgani</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid aperiam earum quaerat consequatur cumque labore saepe dolore libero fugiat officiis eveniet, voluptate distinctio dicta explicabo! Ad quod pariatur laboriosam laborum.</p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6'>
                        <div className='card hover  shadow text-center'>
                            <h3 className='mt-4'>Nima ishlar qilgani</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid aperiam earum quaerat consequatur cumque labore saepe dolore libero fugiat officiis eveniet, voluptate distinctio dicta explicabo! Ad quod pariatur laboriosam laborum.</p>
                        </div>
                    </div>
                    <div className='col-lg-3 bow col-md-4 col-sm-6'>
                        <div className='card hover shadow text-center'>
                            <h3 className='mt-4'>Nima ishlar qilgani</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid aperiam earum quaerat consequatur cumque labore saepe dolore libero fugiat officiis eveniet, voluptate distinctio dicta explicabo! Ad quod pariatur laboriosam laborum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReacentWork;
