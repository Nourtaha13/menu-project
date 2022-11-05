import React from 'react'
import { Row, Col } from "react-bootstrap"
import Roll from 'react-reveal/Roll';

export default function Category({filterbyCategory, allCat}) {
    const onFilter = val => {
        filterbyCategory(val)
    }
    return (
        <Row className="my-2 mb-5">
            <Col sm="12" className='d-flex justify-content-center'>
                <div>
                    {allCat.length >=1? (
                        allCat.map((cat, i) => {return(
                            <Roll key={i}>
                                <button onClick={ _=> onFilter(cat)} className='btn-cat mx-2'>{cat}</button>
                            </Roll>
                        )})
                    ):<p>لا يوجد تصنيفات الان</p>}
                    
                </div>
            </Col>
        </Row>
    )
}
