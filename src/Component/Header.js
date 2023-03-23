import React, { Component } from 'react'
import '../CSS/Style.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
export default class Header extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
        <div className='col' style={{marginTop:10}}>
                    <h5 className='text-center text-primary' style={{float:'left'}}><AccessTimeIcon></AccessTimeIcon><b>Monday - Saturday, 8AM to 10PM</b></h5>
            </div>
            <div className='col'>
                    <h2 className='text-center text-primary'><b>Medicious Health Services</b></h2>
            </div>
            <div className='col text-primary'style={{marginTop:10}}>
                    <h5 style={{float:'right'}}><WhatsAppIcon ></WhatsAppIcon><FacebookIcon></FacebookIcon><TwitterIcon></TwitterIcon></h5>
            </div>
        </div>
      </div>
    )
  }
}
