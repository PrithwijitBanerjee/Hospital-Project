import React, { Component } from 'react'
import { Route,Routes}  from 'react-router-dom';
import About from './About'
import Contact from './Contact'
import Home from './Home'
import RegistrationForm from './RegistrationForm';
import OutDoorRegistration from './OutDoorRegistration';
import EmergencyRegistration from './EmergencyRegistration';
import VaccinationRegistration from './VaccinationRegistration';
import BloodDonationRegistration from './BloodDonationRegistration';
//import NoPage from './NoPage'
import Services from './Services'
import LoginForm from './LoginForm';
export default class MyRouter extends Component {
  render() {
    return (
      <div>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/About.js" element={<About/>}/>
            <Route path="/Contact.js" element={<Contact/>}/>
            <Route path="/Services.js" element={<Services/>}/>  
            <Route path="/LoginForm.js" element={<LoginForm/>}/>
            <Route path="/RegistrationForm.js" element={<RegistrationForm/>}/>
            <Route path="/OutDoorRegistration.js" element={<OutDoorRegistration/>}/>
            <Route path="/EmergencyRegistration.js" element={<EmergencyRegistration/>}/>
            <Route path="/VaccinationRegistration.js" element={<VaccinationRegistration/>}/>
            <Route path="/BloodDonationRegistration.js" element={<BloodDonationRegistration/>}/>
          </Routes>   
      </div>
    )
  }
}
