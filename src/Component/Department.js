import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap';
import '../CSS/Style.css';
export default function Department() {
  const CardInfo = [
    { DepartmentNo: 'Department-1', DepartmentName: 'Cardiology', Desc: 'Heart Surgery' },
    { DepartmentNo: 'Department-2', DepartmentName: 'Neurology', Desc: 'Nerve Surgery' },
    { DepartmentNo: 'Department-3', DepartmentName: 'ENT', Desc: 'Ear Nose Throat Health Services' }
  ];
  function newCard(card, index) {
    return (
      <Col sm={6} lg={4}>
        <Card   style={{ width: '18rem', margin: 20, borderColor:'blue', color:'blue', height:200, padding:20 }} >
          <Card.Body key={index}>
            <Card.Title>{card.DepartmentName}</Card.Title>
            <Card.Text>
              {card.DepartmentNo}
              {card.Desc}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
  return (
    <Container fluid>
      <Row>
        {CardInfo.map(newCard)}
      </Row>
    </Container>
  )
}
