import { ReactNode } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
// import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

interface HomeLayoutProps {
  children: ReactNode;
}

function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div>
    <header>
      <nav>
        <Container>
          <Row className="justify-content-sm-between py-4 align-items-center">
            <Col sm={true}>
              <Link to="/">Welcome to portal identitiy management</Link>
            </Col>

            <Col sm={true} className="text-end">
              <Link to="/login" className="btn btn-transparent">
                <i className="bi bi-person-circle h3"></i>
              </Link>
            </Col>
          </Row>
        </Container>
      </nav>

    </header>

    <main>
      <Container>
        {children}
      </Container>
    </main>
    </div>
  );
}

export default HomeLayout;
