import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ProductSize from '../component/ProductSize';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async (id) => {
    const url = `http://localhost:5000/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail(id);
  }, [id]);

  return (
    <Container className='detail-wrap'>
      <Row>
        <Col>
          <img src={product?.img} alt="" />
        </Col>
        <Col>
          <div className="item-tit">{product?.title}</div>
          <div className="item-price">₩{product?.price}</div>
          <div className="item-choice">
            {product?.choice === true ? 'Conscious choice' : ''}
          </div>
          <div>{product?.size && <ProductSize sizes={product.size} />}</div>
          <div className='item-btn'><button>장바구니</button></div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
