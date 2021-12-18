import React from "react";
import cars from "../../public/api/cars.json";
import { Container, Row, Card, Placeholder, Form, Button, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


interface cars {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
}


export const CarInfo: React.FC = () => {
  return (
    <div>
      <Nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          >
            <Nav.Item>
              <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled>
                Disabled
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Form>
            <Form.Group className="md-8" controlId="formBasicEmail">
              <Form.Label>Choose Car </Form.Label>
              <Form.Control type="input" placeholder="Car Name" />
            
            </Form.Group>

          </Form>
    < Container fluid className="card-example d-flex  flex-nowrap ">
    {cars.map((item, i) =>
    <Row className="card-example d-flex  flex-nowrap " >  
    <Card className="card-w">
        <Card.Title className="header1" key={i}>{item.bodyType}</Card.Title>
        <Card.Body>
        <Card.Text className="header"> <h2 className="header-font">{item.modelName} </h2> {item.modelType}</Card.Text>
        
        <Card.Img className="card" style={{width:625,height:450}}  src={item.imageUrl}/>
        <Card.Text className="price"> Prise : {item.price}</Card.Text>
        <a href="/learn/" className="btn btnn-link" role="button">LEARN </a>
        <a href="/shop/" className="btn btnn-link" role="button">SHOP </a>
       
        
        </Card.Body>
        </Card>
    </Row>
    
    )}  
  </Container>
 
  </div>
  )
};


