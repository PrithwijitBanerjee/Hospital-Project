import React from 'react'
import CardBootstrap from './CardBootstrap'
import { useNavigate } from 'react-router-dom'
export default function Services() {
  const navigate=useNavigate();
  const navigation=()=>
  {
    navigate('/RegistrationForm.js');
  }
  return (
    <div>
      <div style={{ margin: 'auto', display: 'block', padding: 20 }}>
        <h1 className='text-primary text-center' style={{ margin: 20, padding: 20 }}><b>Our Services</b></h1>
        <h2 className='text-primary text-center'><b>We Provides the best Health Services</b></h2>
      </div>
      <div className='container-fluid'>
        <CardBootstrap></CardBootstrap>
      </div>
      <div className='container-fluid text-center text-white' style={{ backgroundColor: 'skyblue', padding: 20, marginBottom:60 }}>
        <h1><b>In an emergency? Need help now?</b></h1>
        <h5>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
        <button className="btnStyle1" type="submit" style={{ padding: 10, margin: 20, width: 400, fontSize: 25, marginBottom:60 }} onClick={navigation}>Appoint Now</button>
      </div>
    </div>
  )
}

