import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import './Futer.css';

export default class Futer extends Component {
    render() {
        return (
            <div className="futer">
                <Container>
                    <div className="colu3">
                        <div className="colu2">
                            <img
                                src='https://3.downloader.disk.yandex.ru/preview/da37acfce789ddaa58cff48f33b56988d3aba7ec14f9f53013ddadae4279db67/inf/a1YPjMRgc3toY7RTs3d8g7UUyn70PS3UDv7dtc-6rbW4rp_4gxYDAPdh_yzWlNNz84R0x9DkvKsVuycGhpgSJw%3D%3D?uid=468161793&filename=3565.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=468161793&tknv=v2&size=1920x907'
                                height='100'
                                width='100'
                                className='d-inline-block align-top'
                                alt='Logo'
                            />
                            <p>Школа бачаты</p>
                            <p>в Санкт‑Петербурге</p>
                            <p>2022год©</p>
                        </div>
                        <div className="colu2">
                            <a className="ac" href="#1n">На занятии Вы узнаете</a>
                            <a className="ac" href="#2n">Также на наши занятия...</a>
                            <a className="ac" href="#3n">Польза от танцев с нами</a>
                            <a className="ac" href="#4n">Новые знакомства</a>
                            <a className="ac" href="#5n">Позитивная тусовка</a>
                            <a className="ac" href="#6n">Учим с 0 до Pro</a>
                            <a className="ac" href="#7n">Кардио-тренировка</a>
                            <a className="ac" href="#8n">Знакомтесь</a>
                            <a className="ac" href="#9n">Отзывы о нас</a>
                        </div>
                        <div>
                            <Nav className="colu2">
                                <Nav.Link className="ac" href="/">Пробное занятие</Nav.Link>
                                <Nav.Link className="ac" href="/prepod">Преподаватели</Nav.Link>
                                <Nav.Link className="ac" href="/raspis">Расписание</Nav.Link>
                                <Nav.Link className="ac" href="/contacts">Контакты</Nav.Link>
                                <Nav.Link className="ac" href="/blog">Блог</Nav.Link>
                            </Nav>
                        </div>
                        <div className="colu2">
                            <p>
                                Телефон для записи:
                            </p>
                            <p>
                                +7 (921)975-20-25
                            </p>
                            <div className="colu4">
                                <div className="icvk"></div>
                                <div className="icwu"></div>
                            </div>
                        </div>
                    </div>
                </Container>

            </div>

        )
    }
}