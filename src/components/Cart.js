import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const removeProduct = (id) =>{
    dispatch(remove(id));
  }

  return (
    <div className="products text-center">
      <Container>
        <Row>
          <Col xs={12} className="my-3">
            <h2>Cart</h2>
          </Col>
          {cartProducts.map((data, id) => (
            <Col lg={12} key={id} style={{ marginBottom: "15px" }}>
              <Card className="h-100">
                <div className="text-center">
                  <Card.Img
                    variant="top"
                    src={data.image}
                    className="img-fluid pt-3"
                    style={{ width: "100px", height: "130px" }}
                  />
                </div>
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Text className="h5">INR: {data.price}</Card.Text>
                </Card.Body>
                <Card.Footer className="bg-white">
                  <Button variant="danger" onClick={() => removeProduct(data.id)}>
                    Remove Item
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Cart;
