import React from 'react';
import './navbar.css'

const Navbar = () => {
  return (
    <div className=''>
      <div className='container'>
        
        <div className='row between'>
          <div className='col-6'>
            <ul>
              <li>
                <a href="" className='nimadir'>Works</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Videos</a>
              </li>
              <li>
                <a href="">Contacts</a>
              </li>
            </ul>
          </div>
          <div className='col-2'>
           <img className='logo' src="./img/Zufarbek_profil.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
