import React from 'react';
import { Container, Table, Button, Navbar, Form, FormControl } from 'react-bootstrap';

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
    <>
      <h1>Product List</h1>

      <Navbar bg="light" expand="lg">
        <Container className='justify-content-end'>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>

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
    </>
  );
}

export default ProductList;
