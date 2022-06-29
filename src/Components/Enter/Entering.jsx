import React from 'react'
import './entering.css'
import MenuIcon from '@mui/icons-material/Menu';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
export default function Entered() {
  return (
    <div className='bg-blog d-flex flex-row justify-content-between row'>
      <div className="opacity d-flex flex-row justify-content-between row">
  <div className='menu col-lg-1 col-md-1 col-sm-2 col-xs-2'>
          <div><MenuIcon/></div>
          <div className='icons'>
            <FacebookRoundedIcon/>
            <InstagramIcon/>
            <TelegramIcon/>
            <YouTubeIcon/>
          </div>
          <div className="name">
            <p>Zufarbek Abdurakhmonov</p>
          </div>
        </div>
        <div className="header col-lg-11 col-md-11 col-sm-10 col-xs-10 row">
          <div className="left  col-lg-6 col-md-12 col-sm-12">
            <div className="left_element">
               <img src="./img/Zufarbek_profil.jpg" alt="Zufarbek Abdurakhmonov" />
            <h2>Zufarbek Abdurakhmonov</h2>
            <p>Web , Mobile Senior developer</p>
            <div className="btns">
              <button className='btn btn-primary '>Blog</button>
              <button className='btn btn-primary'>Haqida</button>
            </div>
            </div>
           
          </div>
          <div className="right col-lg-6 col-md-12 col-sm-12 d-flex flex-column justify-content-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Hsm6WWncC0Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      
    </div>
  )
}
