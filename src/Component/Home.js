import React from 'react';
import CardBootstrap from './CardBootstrap';
import '../CSS/Style.css';
import DoctorsCard from './DoctorsCard';
import Middle from './Middle';
import AppointForm from './AppointForm';
import MapContainer from './MapContainer';
import Department from './Department';
import {useNavigate} from 'react-router-dom'
function Home() {
  const navigate=useNavigate();
  const readNavigate=useNavigate();
  const navigation=()=>
  {
    readNavigate('/RegistrationForm.js');
  }
  const readNavigation=()=>
  {
    navigate('/About.js');
  }
  return <>
    <div className='backgroundImg' style={{ height: 600 }}>
      <div className='container-fluid ' style={{ padding: 200, marginBottom: 30 }}>
        <div className='  border rounded border-primary containerStyle container-fluid' style={{ padding: 20 }}>
          <h1 className='text-center text-dark '><b>Welcome to Medicio</b></h1>
          <h4 className='text-center text-dark '><b>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel.</b></h4>
          <button className="btnStyle " style={{ display: 'block', margin: 'auto', width: 250, height: 50, fontSize: 20 }} onClick={readNavigation}>Read More</button>
        </div>
      </div>
    </div>
    <div style={{ margin: 'auto', display: 'block', padding: 20 }}>
      <h1 className='text-primary text-center' style={{ margin: 20, padding: 20 }}><b>Our Services</b></h1>
      <h2 className='text-primary text-center'><b>We Provides the best Health Services</b></h2>
    </div>
    <div className='container-fluid'>
      <CardBootstrap ></CardBootstrap>
    </div>
    <div className='container-fluid text-center text-white' style={{ backgroundColor: 'skyblue', padding: 20 }}>
      <h1><b>In an emergency? Need help now?</b></h1>
      <h5>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
      <button className="btnStyle1" type="submit" style={{ padding: 10, margin: 20, width: 400, fontSize: 25 }} onClick={navigation}>Appoint Now</button>
    </div>
    <div className='container-fluid text-center' style={{ padding: 50, }}>
      <h1><b>About Us</b></h1>
      <hr className='text-primary' style={{ width: 100, height: 5, margin: 'auto', display: 'block', paddding: 20 }}></hr>
      <h5 style={{ marginTop: 20 }}>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</h5>
    </div>
    <div className='container-fluid text-center'>
      <Middle></Middle>
    </div>
    <div className='container-fluid text-center'>
      <h1><b>Our Doctors</b></h1>
      <h5>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</h5>
      <DoctorsCard></DoctorsCard>
    </div>
    <div className='container-fluid text-center' style={{ padding: 40 }}>
      <h1><b>Make An Appointment</b></h1>
      <h5>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
      <AppointForm></AppointForm>
    </div>
    <div className='container-fluid text-center' style={{ padding: 40 }}>
      <div className='row'>
        <div className='col-md-12'>
          <h1><b>Our Location</b></h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12'>
          <h5>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12'>
          <MapContainer></MapContainer>
        </div>
        <div className='container-fluid text-center' style={{ margin: 20, padding: 40 }}>
          <div className='row' style={{ margin: 20 }}>
            <div className='col-md-12'>
              <h1><b>Our Departments</b></h1>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <div style={{ margin: 'auto', display: 'block' }}>
                <Department></Department>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}
export default Home;