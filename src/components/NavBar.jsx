import React, {useState} from 'react'
import { Row } from "react-bootstrap"
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar({filterbySearch}) {
    const [searchVal, setSearchVal] = useState('')
    const onSearch = word =>{
        filterbySearch(word)
        setSearchVal("")
    }
    const typeHandler = e=>{
        setSearchVal(e.target.value)
    }
    return (
        <Row>
            <Navbar expand="lg" bg="dark" variant="dark">
            <Container>
                <p className='brand-color'>مطعم جديد</p>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='my-2'>
                <Nav className="me-auto"></Nav>
                <Nav></Nav>
                <Form className="d-flex" onSubmit={e => {e.preventDefault()}}>
                    <Form.Control
                    type="text"
                    placeholder="ابحث ..."
                    className="mx-2"
                    onChange={typeHandler}
                    value={searchVal}
                    />
                    <button onClick={_=> onSearch(searchVal)} className='btn-search' variant="outline-success">بحث</button>
                </Form>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </Row>
    )
}
