import React from 'react';
import './footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
const Footer = () => {
    return (
        <div className='size'>
            <div className='container m-5'>
                <div className='row text-center'>
                    <div>
                        <a href=""> <FacebookIcon className='m-3 ' /></a>
                        <a href=""> <InstagramIcon className='m-3 ' /></a>
                        <a href="">  <TwitterIcon className='m-3 ' /></a>
                        <a href=""><TelegramIcon className='m-3' /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
