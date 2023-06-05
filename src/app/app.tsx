import { Route, Routes } from 'react-router-dom';
import React from 'react';
import HomePage from './pages/home/home-page';
import DetailsPage from './pages/details/details-page';
import NoPage from './pages/4O4/no-page';
import { Container, Nav, Navbar, Image } from 'react-bootstrap';
import ConvertPanel from './components/converter/convert-panel';

export function App() {
  return (
    <>
      <Navbar
        sticky="top"
        className="shadow-sm"
        style={{ height: '80px' }}
        bg="light"
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home">
            <Image
              style={{ width: '60px' }}
              src="https://www.svgrepo.com/show/402056/letter-c.svg"
              thumbnail
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/details">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <ConvertPanel />

      <main className="container">
        <Routes>
          <Route
            index
            element={
              <React.Suspense fallback={<>Loading...</>}>
                <HomePage />
              </React.Suspense>
            }
          />

          <Route
            path="details"
            index
            element={
              <React.Suspense fallback={<>Loading...</>}>
                <DetailsPage />
              </React.Suspense>
            }
          />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
