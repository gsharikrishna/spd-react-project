import React from 'react'
import '../Footer/Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export const Footer = () => {
  return (
    <div style={{float:'left'}}>
        <footer className='footer'>
        <div className='container'>
            <div className='rowfooter'>

                <div className='footer-col'>
                    <h4>company</h4>
                    <ul>
                        <li><button>about us</button></li>
                        <li><button>our services</button></li>
                        <li><button>privacy policy</button></li>
                        <li><button>affiliate program</button></li>
                         
                    </ul>
                </div>

                <div className='footer-col'>
                    <h4>get help</h4>
                    <ul>
                        <li><button>FAQ</button></li>
                        <li><button>shipping</button></li>
                        <li><button>returns</button></li>
                        <li><button>order status</button></li>
                        <li><button>payment options</button></li>

                    </ul>
                </div>

                <div className='footer-col'>
                    <h4>online-shop</h4>
                    <ul>
                        <li><button>vegetables</button></li>
                        <li><button>fruits</button></li>
                        <li><button>rices</button></li>
                    </ul>
                </div>

                <div className='footer-col'>
                    <h4>follow us</h4>
                    <ul>
                        <li><FacebookIcon /> </li>
                        <li><InstagramIcon /> </li>
                        <li><LinkedInIcon /> </li>
                        <li><TwitterIcon /> </li>
                    </ul>
                </div>

            </div>
        </div>
        </footer>
    </div>
  )
}
