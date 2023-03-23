import React from 'react'
import Banner from './Banner'
import Department from './Department'
import MapContainer from './MapContainer'
import Middle from './Middle'
export default function About() {
  return <>
    <div>
      <Banner></Banner>
    </div>
    <div className='container-fluid text-center' style={{ padding: 50, }}>
      <h1><b>About Us</b></h1>
      <hr className='text-primary' style={{ width: 100, height: 5, margin: 'auto', display: 'block', paddding: 20 }}></hr>
      <h5 style={{ marginTop: 20 }}>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</h5>
    </div>
    <div className='container-fluid text-center'>
        <Middle></Middle>
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

