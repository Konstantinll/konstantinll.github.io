import React, { Component } from "react";
import { Navbar, Nav, Container, FormControl, Form, Button, NavDropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Ruters from "./Ruters";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar className="Navok" collapseOnSelect expand='lg' bg='dark' variant='dark' fixed="top">
          <Container>
            <Navbar.Brand href='/'>
              <div className="colu">
                <img
                  src='https://github.com/Konstantinll/konstantinll.github.io/blob/master/src/Pictures/bg_icons/logo.png?raw=true'
                  height='50'
                  width='50'
                  className='d-inline-block align-top'
                  alt='Logo'
                />
                <div className="deskriplog">Школа бачаты</div>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='resposive-navbar-nav' />
            <Navbar.Collapse id='resposive-navbar-nav'>
              <Nav className="justify-content-center flex-grow-1">
                <Nav.Link className="nali" href="/#/">Пробное занятие</Nav.Link>
                <Nav.Link className="nali" href="/#/prepod">Преподаватели</Nav.Link>
                <Nav.Link className="nali" href="/#/raspis">Расписание</Nav.Link>
                <Nav.Link className="nali" href="/#/contacts">Контакты</Nav.Link>
                <Nav.Link className="nali" href="/#/blog">Блог</Nav.Link>
              </Nav>
              <Form className="d-flex inp">
                <FormControl
                  type='phone'
                  placeholder='+7(___)-__-__'
                  className="me-2"
                />
                <Button style={{ width: '300px' }} variant="outline-info">Перезвоните мне</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Ruters />
      </div>

    )
  }
}
