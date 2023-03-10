import React, { useContext } from "react";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cart from "../components/Cart";
import { CartContext } from "../context/cartContext";
import Loader from "../components/Loader";
import ErrorToast from "../components/ErrorToast";
import { useFetchData } from "../hooks/useFetchData";

function Home() {
  const { toggleCart, showCart } = useContext(CartContext)
  const { isLoading, data, error } = useFetchData()

  if(error)
    return <ErrorToast />


  return (
    <div>
      <NavBar toggleCart={toggleCart}/>
      <Cart show={showCart} handleClose={toggleCart} />
      <Container>
      <Row>
        {isLoading && [...Array(8)].map((item, idx) =>(
          <Col xs={6} sm={6} md={3} className="mb-4 mt-4" key={idx}>
              <Loader />
          </Col>
        ))}
        {data?.map((product) => (
            <Col xs={6} sm={6} md={3} className="mb-4 mt-4" key={product.id}>
              <ProductCard product={product} />
            </Col>
        ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
