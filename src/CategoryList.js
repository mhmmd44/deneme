import React, { Component } from 'react';
import { ListGroup, ListGroupItem, ListGroupItemText } from 'reactstrap';

export default class CategoryList extends Component {

  state = {
    Categories: [
    { categoryId: 1, categoryName: "Bavereges" },
    { categoryId: 2, categoryName: "Condiments" }
  ] 
};
  render() {
    return (
      <div>
        <h2>{this.props.info.title}</h2>
        <ListGroup>
          {
            this.state.Categories.map(category=>(
              <ListGroupItem key={category.categoryId}>{category.categoryName}</ListGroupItem>
            ))}
        </ListGroup>
      </div>
    )
  }
}
