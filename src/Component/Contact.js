import React from 'react'
import DoctorsCard from './DoctorsCard'

export default function Contact() {
  return <>
      <div className='container-fluid'>
          <div className='row'>
                  <div className='col-md-12 text-primary text-center' style={{marginTop:60, padding:30}}>
                    <h1>Contact With Our Doctors</h1>
                  </div>
          </div>
          <div className='row'>
                <div className='col-md-12' style={{margin:30, padding:30}}>
                      <DoctorsCard></DoctorsCard>
                </div>
          </div>
      </div>

  </>
}
