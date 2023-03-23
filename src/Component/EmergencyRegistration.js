import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    MDBTextArea,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';

function EmergencyRegistration() {
        const navigateHome = useNavigate();
        const navigationHome = () => {
            alert('You have successfully registered for Ambulance Service');
            navigateHome('/');
        }
        return (
            <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}>
                <div className='mask gradient-custom-3'></div>
                <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
                    <MDBCardBody className='px-5'>
                        <h2 className="text-uppercase text-center mb-5">Ambulance Service Registration</h2>
                        <MDBInput wrapperClass='mb-4' label='Patients Name' size='lg' id='form1' type='text' />
                        <MDBInput wrapperClass='mb-4' label='Patients Email' size='lg' id='form2' type='email' />
                        <MDBInput wrapperClass='mb-4' label='Patients Contact Number' size='lg' id='form4' type='tel' />
                        <MDBInput wrapperClass='mb-4' label='Patients Age' size='lg' id='Your Age' type='number' />
                        <MDBInput wrapperClass='mb-4' label='Patients  Alternate Contact Number' size='lg' id='form4' type='tel' />
                        <MDBTextArea label=' Patients  Permanant Address' id='textAreaExample' rows={3} wrapperClass='mb-4' />
                        <div className='d-flex flex-row justify-content-center mb-4'>
                            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
                        </div>
                        <button className='btn btn-outline-primary ' style={{ margin: 'auto', display: 'block', width: 200 }} size='lg' onClick={navigationHome}>Register</button>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        );
    }

    export default EmergencyRegistration;