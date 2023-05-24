import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { sampleProducts } from './data'

function App() {

  return (
    <div className='d-flex flex-column vh-100'>
      <header>
        <Navbar bg="dark" variant='dark' expand="lg">
          <Container>
            <Navbar.Brand>tsamazona-tut</Navbar.Brand>
          </Container>
          <Nav>
            <a href="/cart" className='nav-link'>Cart</a>
            <a href="/signIn" className='nav-link'>Sign In</a>
          </Nav>
        </Navbar>
      </header>
      <main>
        <Container className='mt-3'>
          <Row>
            {
              sampleProducts.map((p) => (
                <Col key={p.name} sm={6} md={4} lg={3}>
                  <img className="product-image" src={p.image} alt={p.name} />
                  <h2>{p.name}</h2>
                  <p>{p.description}</p>
                  <p>${p.price}</p>
                </Col>
              ))
            }
          </Row>
        </Container>
      </main>

      <footer>
        <div className='text-center'>
          reserved here
        </div>
      </footer>

    </div>
  )
}

export default App
