import React from 'react';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import Navigation from './Navigation';
import { Container, Row, Col } from 'reactstrap';

function App() {
  let ProductInfo={title:"Product List"};
  let CategoryInfo={title:"Category List"};
  return (
    <div>
      <Container>
        <Row>
          <Navigation />

        </Row>  
        <Row>
          <Col xs="3">
            <CategoryList info={CategoryInfo} />

          </Col>
          <Col xs="9">
            <ProductList info={ProductInfo}/>

          </Col>

        </Row>
      </Container>


    </div>
  );
}

export default App;
