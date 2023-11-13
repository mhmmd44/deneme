import React, { Component } from "react";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import Navigation from "./Navigation";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {
  state = { currentCategory: "", products: [], cart: [] };

  componentDidMount() {
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  addtoCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
  };

  render() {
    let ProductInfo = { title: "Product List" };
    let CategoryInfo = { title: "Category List" };
    return (
      <div>
        <Container>
          <Navigation cart={this.state.cart} />
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={CategoryInfo}
              />
            </Col>
            <Col xs="9">
              <ProductList
                products={this.state.products}
                addtoCart={this.addtoCart}
                currentCategory={this.state.currentCategory}
                info={ProductInfo}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
