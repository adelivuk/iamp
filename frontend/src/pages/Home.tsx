import '../styles/Home.css';
import HomeLayout from '../layouts/Home';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';



function Home() {

    return (
        <HomeLayout>

          <Container className='py-5'>
            <Row>
              <Col className="flex-grow-0">
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Register</Card.Title>
                  <Card.Text>
                    Register
                  </Card.Text>
                  <Button variant="primary" href="/register">Register</Button>
                </Card.Body>
              </Card>
              </Col>

              <Col className="flex-grow-0">
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Password reset</Card.Title>
                  <Card.Text>
                    Password reset
                  </Card.Text>
                  <Button variant="primary" href="/reset-password">Password reset</Button>
                </Card.Body>
              </Card></Col>
            </Row>
          </Container>

        </HomeLayout>
    );
}

export default Home;
