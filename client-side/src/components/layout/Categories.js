import React from 'react';
import { ListGroup } from 'react-bootstrap';

function Categories({ categories }) {
  return (
    <div>
      <h2>Categories</h2>
      <ListGroup>
        {categories.map((category) => (
          <ListGroup.Item key={category.id}>{category.name}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Categories;
