import React from 'react'
import { Row, Col, Card } from "react-bootstrap"
import Zoom from 'react-reveal/Zoom';
const ItemList = ({itemsData}) =>{

    return (
        <Row>
            {
                itemsData.length >=1 ? (
                    itemsData.map((item, i) => {
                        return (
                            <Zoom key={i}>
                                <Col sm="12" className="mb-3">
                                    <Card className="d-flex flex-row" style={{background:"#f8f8f8"}}>
                                        <Card.Img className='img-item' variant="top" src={item.img} />
                                        <Card.Body>
                                            <Card.Title className='d-flex justify-content-between'>
                                                <p className='item-title'>{item.title}</p>
                                                <p className="item-price">{item.price}</p>
                                            </Card.Title>
                                            <Card.Text className="py-2">
                                                <p className='item-desc'>{item.description}</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Zoom>
                        )
                    })
                ):<h3 className='text-center'>لا يوجد اصناف</h3>
            }
            
        </Row>
    )
}

export default ItemList