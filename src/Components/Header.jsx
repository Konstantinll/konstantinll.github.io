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
                  src='https://3.downloader.disk.yandex.ru/preview/da37acfce789ddaa58cff48f33b56988d3aba7ec14f9f53013ddadae4279db67/inf/a1YPjMRgc3toY7RTs3d8g7UUyn70PS3UDv7dtc-6rbW4rp_4gxYDAPdh_yzWlNNz84R0x9DkvKsVuycGhpgSJw%3D%3D?uid=468161793&filename=3565.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=468161793&tknv=v2&size=1920x907'
                  height='50'
                  width='50'
                  className='d-inline-block align-top'
                  alt='Logo'
                />
                <div>Школа бачаты</div>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='resposive-navbar-nav' />
            <Navbar.Collapse id='resposive-navbar-nav'>
              <Nav className="justify-content-center flex-grow-1">
                <Nav.Link className="nali" href="/">Пробное занятие</Nav.Link>
                <Nav.Link className="nali" href="/prepod">Преподаватели</Nav.Link>
                <Nav.Link className="nali" href="/raspis">Расписание</Nav.Link>
                <Nav.Link className="nali" href="/contacts">Контакты</Nav.Link>
                <Nav.Link className="nali" href="/blog">Блог</Nav.Link>
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
