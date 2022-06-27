import React from 'react';
import './navbar.css'

const Navbar = () => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
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
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
