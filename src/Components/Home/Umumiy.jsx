import React from 'react';
import Navbar from './Navbar/Navbar';
import AsosiyPage from './Asosiy_page/Asosiy_page';
import Recant from './Recant  sayt/Recant_work'
import Fiture from './Fiture_works/Fiture';
import Footer from './Footer/Footer';

const Umumiy = () => {
    return (
        <div className='umumiy'>
            <AsosiyPage/>
            <Recant/>
            <Fiture/>
        </div>
    );
}

export default Umumiy;
