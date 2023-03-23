import React from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
import Doctor from '../images/doctor.png';
import Blood from '../images/blood.png';
import Vaccine from '../images/vaccination.png';
import Ambulance from '../images/ambulance.png';
import Button from 'react-bootstrap/Button';
import '../CSS/Style.css';
import { useNavigate } from "react-router-dom";
export default function CardBootstrap() {
  const outNavigate=useNavigate();
  const emergencyNavigate=useNavigate();
  const vaccinationNavigate=useNavigate();
  const bloodDonationNavigate=useNavigate();
  const outNavigation=()=>
  {
    outNavigate('/OutDoorRegistration.js');
  }
  const emergencyNavigation=()=>
  {
    emergencyNavigate('/EmergencyRegistration.js');
  }
  const vaccinationNavigation=()=>
  {
    vaccinationNavigate('/VaccinationRegistration.js');
  }
  const bloodDonationNavigation=()=>
  {
    bloodDonationNavigate('/BloodDonationRegistration.js');
  }
  return <>
    <Container fluid>
      <div style={{ padding:40, marginBottom:20, paddingBottom:100, paddingTop:60}}>
        <Row className="g-4">
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col xs={1} sm={2} md={3}>
              <Card>
                <Card.Img variant="top" src={Doctor} />
                <Card.Body>
                  <Card.Title className="text-center">Out Door Checkup</Card.Title>
                  <Card.Text className="text-center">
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Button  className="btnStyle" style={{margin:'auto', display:'block', width:100}} onClick={outNavigation}>Book Here</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col xs={1} sm={2} md={3}>
              <Card>
                <Card.Img variant="top" src={Ambulance} />
                <Card.Body>
                  <Card.Title className="text-center">Emergency Services</Card.Title>
                  <Card.Text className="text-center">
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Button className="btnStyle" style={{margin:'auto', display:'block', width:100}} onClick={emergencyNavigation}>Book Here</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col xs={1} sm={2} md={3}>
              <Card>
                <Card.Img variant="top" src={Vaccine} />
                <Card.Body>
                  <Card.Title className="text-center">Quick vaccination</Card.Title>
                  <Card.Text className="text-center">
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Button className="btnStyle" style={{margin:'auto', display:'block', width:100}} onClick={vaccinationNavigation}>Book Here</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col xs={1} sm={2} md={3}>
              <Card>
                <Card.Img variant="top" src={Blood} />
                <Card.Body>
                  <Card.Title className="text-center">Blood Donation Zone</Card.Title>
                  <Card.Text className="text-center">
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Button className="btnStyle" style={{margin:'auto', display:'block', width:100}} onClick={bloodDonationNavigation}>Book Here</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>

  </>
}
