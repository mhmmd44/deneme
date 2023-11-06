import React from 'react';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import Navigation from './Navigation';
import { Container, Row, Col } from 'reactstrap';

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Navigation />

        </Row>  
        <Row>
          <Col xs="3">
            <CategoryList />

          </Col>
          <Col xs="9">
            <ProductList />

          </Col>

        </Row>
      </Container>


    </div>
  );
}

export default App;
