import React from 'react';
import { Container, Table, Button, Navbar, Form, FormControl } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { fetchProducts } from '../actions/productsActions';

function ProductList(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logged = useSelector(state => state.logged);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (!logged) {
      return navigate('/login')
    } else {
      const url = `http://localhost:8000/api/store/products/?name=${logged}&search=${searchQuery}`;
      axios.get(url).then(response => {
        dispatch(fetchProducts(response.data));
      }).catch(error => console.error(error));
    };
  }, [logged, searchQuery]);
  const products = useSelector(state => state.products);

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
              value={searchQuery}
              onChange={event => setSearchQuery(event.target.value)}
            />
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
