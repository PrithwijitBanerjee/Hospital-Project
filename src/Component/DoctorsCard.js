import React from 'react'
import Doctor1 from '../images/Doctor1.jpg';
import Doctor2 from '../images/Doctor2.jpg';
import Doctor3 from '../images/Doctor3.jpg';
import Doctor4 from '../images/Doctor4.jpg';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
export default function DoctorsCard() {
    return (
        <div className='container-fluid g-7' style={{padding:20, margin:30}}>
            <div className='row'>
                <div className='col-md-3 col-sm-12'>

                    <div class="card" style={{width: '18rem'}}>
                        <img src={Doctor1} class="card-img-top img-fluid rounded" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Dr. Rick Jones</h5>
                                <p class="card-text">Neurologist</p>
                                <p class="card-text"><WhatsAppIcon ></WhatsAppIcon><FacebookIcon></FacebookIcon><TwitterIcon></TwitterIcon></p>
                                <button className="btn btn-outline-primary">Contact Me</button>
                            </div>
                    </div>
                </div>
                <div className='col-md-3 col-sm-12'>

                    <div class="card" style={{width: '18rem'}}>
                        <img src={Doctor2} class="card-img-top img-fluid rounded" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Dr. Sarah Johnson</h5>
                                <p class="card-text">Dental Physician</p>
                                <p class="card-text"><WhatsAppIcon ></WhatsAppIcon><FacebookIcon></FacebookIcon><TwitterIcon></TwitterIcon></p>
                                <button className="btn btn-outline-primary">Contact Me</button>
                            </div>
                    </div>
                </div>
                <div className='col-md-3 col-sm-12'>

                    <div class="card" style={{width: '18rem'}}>
                        <img src={Doctor3} class="card-img-top img-fluid rounded" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Dr. Laura Adams</h5>
                                <p class="card-text">Cardiologist</p>
                                <p class="card-text"><WhatsAppIcon ></WhatsAppIcon><FacebookIcon></FacebookIcon><TwitterIcon></TwitterIcon></p>
                                <button className="btn btn-outline-primary">Contact Me</button>
                            </div>
                    </div>
                </div>
                <div className='col-md-3 col-sm-12'>

                    <div class="card" style={{width: '18rem'}}>
                        <img src={Doctor4} class="card-img-top img-fluid rounded" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Dr. Christhoper Nicholes</h5>
                                <p class="card-text">Child Specialist</p>
                                <p class="card-text"><WhatsAppIcon></WhatsAppIcon><FacebookIcon></FacebookIcon><TwitterIcon></TwitterIcon></p>
                                <button className="btn btn-outline-primary">Contact Me</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
