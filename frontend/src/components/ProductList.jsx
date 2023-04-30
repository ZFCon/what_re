import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';

function ProductList(props) {
  const products = [
    { id: 1, name: 'Product 1', description: 'Description 1', price: 10, stock: 5 },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 20, stock: 10 },
    { id: 3, name: 'Product 3', description: 'Description 3', price: 30, stock: 15 },
  ];

  function handleSelect(product) {
    console.log(`Selected product: ${product.name}`);
  }

  return (
    <Container className="my-5">
      <h1>Product List</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>
                <Button variant="primary" onClick={() => handleSelect(product)}>
                  Select
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default ProductList;
