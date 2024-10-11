import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import { Link} from 'react-router-dom';

import { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

function AuthLayout({children}: AuthLayoutProps) {
  return (
    <div>
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">IAM</Navbar.Brand>

          <div className="justify-content-between">
            test
          </div>
        </Container>
      </Navbar>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Container>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
              <li className="nav-item active">
                <Link to="/register" className="nav-link">Register</Link>
              </li>
            </ul>
          </div>
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

export default AuthLayout;
