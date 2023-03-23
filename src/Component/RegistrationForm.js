import React from 'react';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBTextArea,
  MDBFile
}
  from 'mdb-react-ui-kit';

function RegistrationForm() {
  const handleButton=(e)=>
  {
    e.preventDefault();
    alert("Welcome to Medicio  You have successfully registered the form and we will get back to You soon!!!");
  }
  return <>
    <MDBContainer fluid>
        <h1 className='text-center text-primary' style={{marginTop:70}}>Patient's Registration Form</h1>
      <MDBRow className='d-flex justify-content-center align-items-center'>
        <MDBCol lg='9' className='my-5'>

          <h1 class="text-white mb-4">Apply for a job</h1>

          <MDBCard>
            <MDBCardBody className='px-4'>

              <MDBRow className='align-items-center pt-4 pb-3'>

                <MDBCol md='3' className='ps-5'>
                  <h6 className="mb-0">Full name</h6>
                </MDBCol>

                <MDBCol md='9' className='pe-5'>
                  <MDBInput label='Your Name' size='lg' id='form1' type='text' />
                </MDBCol>

              </MDBRow>

              <hr className="mx-n3" />

              <MDBRow className='align-items-center pt-4 pb-3'>

                <MDBCol md='3' className='ps-5'>
                  <h6 className="mb-0">Email address</h6>
                </MDBCol>

                <MDBCol md='9' className='pe-5'>
                  <MDBInput label='example@example.com' size='lg' id='form2' type='email' />
                </MDBCol>

              </MDBRow>

              <hr className="mx-n3" />

              <MDBRow className='align-items-center pt-4 pb-3'>

                <MDBCol md='3' className='ps-5'>
                  <h6 className="mb-0">Permanant Address</h6>
                </MDBCol>

                <MDBCol md='9' className='pe-5'>
                  <MDBTextArea label='Address' id='textAreaExample' rows={3} />
                </MDBCol>
                <MDBCol md='3' className='ps-5'>
                  <h6 className="mb-0">Enter Your Blood Group</h6>
                </MDBCol>

                <MDBCol md='9' className='pe-5'>
                  <MDBInput label='BloodGroup' size='lg' id='BloodGroup' type='text' />
                </MDBCol>

              </MDBRow>

              <hr className="mx-n3" />

              <MDBRow className='align-items-center pt-4 pb-3'>

                <MDBCol md='3' className='ps-5'>
                  <h6 className="mb-0">Upload Check Up Report </h6>
                </MDBCol>

                <MDBCol md='9' className='pe-5'>
                  <MDBFile size='lg' id='customFile' />
                  <div className="small text-muted mt-2">Upload your General Check Up Report. Max file size 50 MB</div>
                </MDBCol>

              </MDBRow>

              <hr className="mx-n3" />

              <button className='btn btn-outline-primary ' style={{margin:'auto', display:'block', width:200}} size='lg' onClick={handleButton}>Register</button>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  </>
}

export default RegistrationForm;