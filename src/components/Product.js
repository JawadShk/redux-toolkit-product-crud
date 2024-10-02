import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";
import StatusCode from "../utils/StatusCode";

const Product = () => {
  // const [products, getProducts] = useState([]);

  const dispatch = useDispatch();
  const {data: products, status} = useSelector(state => state.product)

  useEffect(() => {
    // fetch("https://fakestoreapi.com/products")
    //   .then((data) => data.json())
    //   .then((result) => getProducts(result));
    dispatch(getProducts());
  }, [dispatch]);

  const addProduct = (product) =>{
    dispatch(add(product))
  }

  if(status === StatusCode.LOADING){
    return <p>LOADING...</p>
  }
  if(status === StatusCode.ERROR){
    return <p>ERROR...</p>
  }

  return (
    <>
      <div className="products text-center">
        <Container>
          <Row>
            <Col xs={12} className="my-3">
              <h2>Product Store</h2>
            </Col>
            {products.map((data, id) => (
              <Col lg={3} key={id} style={{marginBottom: '15px'}}>
                <Card  className="h-100">
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
                      
                    <Button variant="primary" onClick={()=> addProduct(data)}>Add Item</Button>
                    </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* {JSON.stringify(products)} */}
      {/* {console.log(products)} */}
    </>
  );
};

export default Product;
