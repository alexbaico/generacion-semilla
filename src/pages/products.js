import React from 'react';
import {PRODUCTS} from '../model/product'
import ProductItem from "../components/product_item";
import {Col, Container, Row} from "react-bootstrap";
import {STYLES_COMMON} from "../assets/styles_common";
import Header from "../components/header";
import Footer from "../components/footer";

const Products = () => {

    const styles = {
        title:{
            fontFamily: 'sketchnote-square,sans-serif',
            fontWeight: '400',
            fontStyle: 'normal',
            color: STYLES_COMMON.colors.azulita
        },
        productsRow:{
            margin: '20px 0 200px',
            minHeight: '500px'
        }
    }

    return (
        <Container fluid>
            <Header></Header>
            <Row style={styles.productsRow}>
                <Col xs={12} className={'text-center'}>
                    <h3 style={styles.title}>NUESTROS PRODUCTOS</h3>
                </Col>
                <Col xs={12}>
                    <Row className={'text-center'}>
                        {PRODUCTS.map( (p,i) => {
                            return <ProductItem product={p}/>
                        })}
                    </Row>
                </Col>
            </Row>

            <Footer></Footer>
        </Container>

    );
};

export default Products;