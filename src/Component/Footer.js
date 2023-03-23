import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';
import { Copyright } from '@mui/icons-material';
import '../CSS/Style.css';
export default function Footer() {
    return <>
        <div className='container-fluid  text-center copyStyle' style={{ margin:'auto', padding:50, display:'block'}}>
            <div className='row'>
                <div className='col-sm-3'>
                    <h3><b>Medicio</b></h3>
                    <p>A108 Adam Street</p>
                    <p>NY 535022, USA</p>
                    <br></br>
                    <br></br>
                    <p><b>Phone No:</b>+91 9836716501</p>
                    <p><b>Email:</b> info@example.gmail.com</p>
                    <div className='text-center'><WhatsAppIcon></WhatsAppIcon><TwitterIcon></TwitterIcon><FacebookIcon></FacebookIcon></div>
                </div>
                <div className='col-sm-3'>
                    <h5><b>Useful Links</b></h5>
                    <ul>
                        <li><Link to='/' className='linkStyle'>Home</Link></li>
                        <li><Link to='/About.js' className='linkStyle'>About</Link></li>
                        <li><Link to='/Contact.js' className='linkStyle'>Contact Us</Link></li>
                        <li><Link to='/Services.js' className='linkStyle'>Services</Link></li>
                    </ul>
                </div>
                <div className='col-sm-3'>
                    <h5><b>Our Services</b></h5>
                    <ul>
                        <li><Link to='/OutDoorRegistration.js' className='linkStyle'>Out Door Checkup</Link></li>
                        <li><Link to='/EmergencyRegistration.js' className='linkStyle'>Emergency Services</Link></li>
                        <li><Link to='/VaccinationRegistration.js' className='linkStyle'>Quick Vaccination</Link></li>
                        <li><Link to='/BloodDonationRegistration.js' className='linkStyle'>Blood Donation Zone</Link></li>
                    </ul>
                </div>
                <div className='col-sm-3'>
                    <h5><b>Our Newsletter</b></h5>
                    <label htmlFor='intgrp'>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</label>
                    <div class="input-group" >
                        <input id="intgrp" type="text" class="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon"/>
                        <div class="input-group-text" id="btnGroupAddon">@Sign In</div>
                    </div>
                </div>
            </div>
        </div>
        <div className='container-fluid text-center ' style={{margin:30, display:'block'}}>
                <Copyright></Copyright><b>Copyright</b> Medicio. All Rights Reserved
                <br/><br/>
                Designed by Prithwijit Banerjee
        </div>

    </>
}
